// make.fun entry: "The Meeting That Should Have Been an Email"
// Writes one line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Paths resolve relative to this script file, never process.cwd().
// Never writes into the script's own directory; only the output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Anchor for any file access: this script's own directory, not the cwd.
const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const LINE =
  "Forty-five minutes, nine people, one decision: the email should have been a meeting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Deterministic: same constant line, no trailing newline, every run.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
