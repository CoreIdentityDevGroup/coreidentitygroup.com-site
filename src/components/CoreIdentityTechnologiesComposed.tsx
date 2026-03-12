/* CHC_TECHNOLOGIES_COMPOSED_LOCK */
/* CHC_GOVERNANCE_VERTICALS_STRIPPED_v2 */
import * as React from "react";

const Page = React.lazy(() =>
  import("../pages/CoreIdentityTechnologiesPage").then((m: any) => {
    const candidate =
      m?.default ??
      m?.CoreIdentityTechnologiesPage ??
      m?.Route ??
      (m ? Object.values(m)[0] : null);
    return { default: candidate ?? (() => null) };
  })
);

export function CoreIdentityTechnologiesComposed() {
  return (
    <React.Suspense fallback={null}>
      <Page />
    </React.Suspense>
  );
}
