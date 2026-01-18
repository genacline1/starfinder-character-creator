import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docsDir = path.join(root, "docs");

if (!fs.existsSync(docsDir)) {
  console.error("postbuild: docs/ folder not found. Did the build run?");
  process.exit(1);
}

// 1) Disable Jekyll
fs.writeFileSync(path.join(docsDir, ".nojekyll"), "");

// 2) SPA fallback (GitHub Pages refresh support)
const indexPath = path.join(docsDir, "index.html");
const notFoundPath = path.join(docsDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("postbuild: docs/index.html not found. Build may have failed.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);

console.log("postbuild: wrote docs/.nojekyll and docs/404.html");
