#!/usr/bin/env bash
set -euo pipefail

# Scan $HOME for local git repos. Fast enough for Termux and gives us facts.
SCAN_ROOT="${HOME}"

OUT_JSON="artifacts/repo_inventory.json"
OUT_MD="artifacts/repo_inventory.md"

has_cmd() { command -v "$1" >/dev/null 2>&1; }

json_escape() {
  python3 - <<'PY' "$1"
import json,sys
print(json.dumps(sys.argv[1]))
PY
}

git_info_for_dir() {
  local dir="$1"
  pushd "$dir" >/dev/null

  local top
  top="$(git rev-parse --show-toplevel 2>/dev/null || true)"
  if [[ -z "$top" ]]; then
    popd >/dev/null
    return 1
  fi

  local name branch upstream origin dirty ahead behind last_hash last_date last_msg
  name="$(basename "$top")"
  branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "DETACHED")"
  upstream="$(git rev-parse --abbrev-ref --symbolic-full-name "@{upstream}" 2>/dev/null || echo "")"
  origin="$(git remote get-url origin 2>/dev/null || echo "")"

  dirty="clean"
  if ! git diff --quiet 2>/dev/null || ! git diff --cached --quiet 2>/dev/null; then
    dirty="dirty"
  fi

  ahead="0"; behind="0"
  if [[ -n "$upstream" ]]; then
    read -r behind ahead < <(git rev-list --left-right --count "$upstream"...HEAD 2>/dev/null || echo "0 0")
  fi

  last_hash="$(git rev-parse --short HEAD 2>/dev/null || echo "")"
  last_date="$(git log -1 --format=%cs 2>/dev/null || echo "")"
  last_msg="$(git log -1 --format=%s 2>/dev/null || echo "")"

  popd >/dev/null

  cat <<EOF
{
  "name": $(json_escape "$name"),
  "path": $(json_escape "$top"),
  "branch": $(json_escape "$branch"),
  "upstream": $(json_escape "$upstream"),
  "origin": $(json_escape "$origin"),
  "status": $(json_escape "$dirty"),
  "ahead": $ahead,
  "behind": $behind,
  "lastCommit": {
    "hash": $(json_escape "$last_hash"),
    "date": $(json_escape "$last_date"),
    "message": $(json_escape "$last_msg")
  }
}
EOF
}

tmp_list="$(mktemp)"
trap 'rm -f "$tmp_list"' EXIT

# Find repos by locating .git directories
find "$SCAN_ROOT" -type d -name ".git" -prune 2>/dev/null \
  | sed 's#/.git$##' \
  | sort -u > "$tmp_list"

mapfile -t repos < "$tmp_list"

local_items=()
for d in "${repos[@]}"; do
  if info="$(git_info_for_dir "$d" 2>/dev/null)"; then
    local_items+=("$info")
  fi
done

python3 - <<'PY' "$OUT_JSON" "${local_items[@]}"
import json,sys
out_path=sys.argv[1]
items=[]
for s in sys.argv[2:]:
  try: items.append(json.loads(s))
  except Exception: pass

payload={"localRepos": items}
with open(out_path,"w",encoding="utf-8") as f:
  json.dump(payload,f,indent=2,sort_keys=True)
print(out_path)
PY

python3 - <<'PY' "$OUT_JSON" "$OUT_MD"
import json,sys
src=sys.argv[1]; out=sys.argv[2]
d=json.load(open(src,"r",encoding="utf-8"))

lines=[]
lines.append("# Repo Inventory")
lines.append("")
lines.append("| Name | Path | Branch | Status | Ahead/Behind | Last Commit | Origin |")
lines.append("|---|---|---|---|---|---|---|")

for r in d.get("localRepos",[]):
  lc=r.get("lastCommit",{})
  last=f'{lc.get("date","")} {lc.get("hash","")} {lc.get("message","")}'
  lines.append(
    f'| {r.get("name","")} | `{r.get("path","")}` | `{r.get("branch","")}` | **{r.get("status","")}** | {r.get("ahead",0)}/{r.get("behind",0)} | {last} | `{r.get("origin","")}` |'
  )

open(out,"w",encoding="utf-8").write("\n".join(lines))
print(out)
PY

echo "Wrote:"
echo " - $OUT_JSON"
echo " - $OUT_MD"

npm run build
