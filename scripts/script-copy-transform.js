#!/usr/bin/env node
/**
 * CoreIdentity Development Group Inc.
 * Script: script-copy-transform.js
 * Purpose: Apply Results Language Style Guide v1.0 copy updates to website source
 * Version: 2.0.0 — built from verified source strings (March 2026)
 * Author: CoreIdentity Engineering
 *
 * RULES:
 *   - Idempotent: safe to run multiple times, no duplicate transforms
 *   - Zero hand edits: all changes via this script only
 *   - Ends with npm run build
 *   - Each transform logged with PASS/SKIP/FAIL status
 *
 * USAGE:
 *   cd ~/coreidentity/integrations/coreholdingcorp-site-v2
 *   node scripts/script-copy-transform.js
 *
 * DRY RUN:
 *   DRY_RUN=true node scripts/script-copy-transform.js
 */

'use strict';

const fs            = require('fs');
const path          = require('path');
const { execSync }  = require('child_process');

const ROOT     = path.resolve(__dirname, '..');
const SRC      = path.join(ROOT, 'src');
const DRY_RUN  = process.env.DRY_RUN === 'true';
const LOG_FILE = path.join(ROOT, 'scripts', 'copy-transform.log');

const RESET  = '\x1b[0m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RED    = '\x1b[31m';
const CYAN   = '\x1b[36m';
const BOLD   = '\x1b[1m';

const logLines = [];

function log(symbol, label, msg) {
  const colors = { 'OK': GREEN, 'SKIP': YELLOW, 'FAIL': RED, 'INFO': CYAN };
  const color  = colors[symbol] || RESET;
  console.log(`${color}[${symbol}]${RESET} [${label}] ${msg}`);
  logLines.push(`${new Date().toISOString()} [${symbol}] [${label}] ${msg}`);
}

function banner(text) {
  const line = '-'.repeat(70);
  console.log(`\n${BOLD}${CYAN}${line}${RESET}`);
  console.log(`${BOLD}  ${text}${RESET}`);
  console.log(`${BOLD}${CYAN}${line}${RESET}\n`);
}

let passCount = 0;
let skipCount = 0;
let failCount = 0;

function applyTransform(filePath, find, replace, label) {
  const relPath = path.relative(ROOT, filePath);

  if (!fs.existsSync(filePath)) {
    log('FAIL', label, `File not found: ${relPath}`);
    failCount++;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes(find) && content.includes(replace)) {
    log('SKIP', label, `Already applied: ${relPath}`);
    skipCount++;
    return;
  }

  if (!content.includes(find)) {
    log('SKIP', label, `Source string not found: ${relPath}`);
    log('INFO', label, `  Sought: "${find.slice(0, 100).replace(/\n/g, '\\n')}"`);
    skipCount++;
    return;
  }

  const updated = content.split(find).join(replace);

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, updated, 'utf8');
    log('OK', label, `Applied -> ${relPath}`);
  } else {
    log('OK', label, `[DRY RUN] Would apply -> ${relPath}`);
  }
  passCount++;
}

const TRANSFORMS = [

  {
    file:    'pages/HomePage.tsx',
    find:    'Our infrastructure establishes the governance layer beneath agentic\n          systems—defining authority, enforcing constraints, and maintaining\n          visibility from policy definition through execution and outcome.',
    replace: 'Your AI agents are making consequential decisions across your business right now. CoreIdentity is the enforcement infrastructure that ensures every agent action stays within the boundaries your organization authorized — and generates the audit trail your regulators and board require. Before something goes wrong.',
    label:   'HomePage/HeroSubCopy',
  },
  {
    file:    'pages/HomePage.tsx',
    find:    'Global governance signals, enforceable constraints, and auditable execution.',
    replace: 'Every agent action. Every policy boundary. Every audit trail. Governed at machine speed.',
    label:   'HomePage/ImageCaption',
  },
  {
    file:    'pages/SentinelOSPage.tsx',
    find:    'Governance layer enforcing policy, approvals, identity boundaries, and audit-ready evidence for autonomous systems.',
    replace: 'The reason your AI fleet cannot make a decision your legal team did not authorize. Sentinel OS enforces policy, controls identity boundaries, gates approvals, and captures the evidence your auditors will require — before a regulator asks for it.',
    label:   'SentinelOS/PageDescription',
  },
  {
    file:    'pages/SentinelOSPage.tsx',
    find:    '<li>Policy enforcement</li><li>Identity + permissions</li><li>Approval gates</li><li>Evidence + audit trails</li><li>Fail-closed controls</li>',
    replace: '<li>Policy enforcement — agents execute only what was explicitly authorized</li><li>Identity + permissions — every agent action is attributed and bounded</li><li>Approval gates — human authority preserved at every critical decision point</li><li>Evidence + audit trails — the documentation your legal team needs before regulators ask</li><li>Fail-closed controls — ambiguity stops the agent, not the business</li>',
    label:   'SentinelOS/FeatureList',
  },
  {
    file:    'pages/SALPage.tsx',
    find:    'The CoreIdentity Semantic Arbitration Layer (SAL) is the deterministic enforcement kernel of the CoreIdentity ecosystem. It is the authoritative gateway between autonomous reasoning and enterprise execution — the architectural guarantee that transforms probabilistic AI into institutional-grade digital labor.',
    replace: 'Your AI agents can reason about anything. SAL determines what they are actually permitted to do. The CoreIdentity Semantic Arbitration Layer is the deterministic enforcement kernel that sits in the execution path \u2014 not the policy document \u2014 mathematically preventing any machine action that violates your codified business logic, safety thresholds, or regulatory boundaries. The architectural guarantee that transforms probabilistic AI into institutional-grade digital labor.',
    label:   'SAL