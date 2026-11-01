// Runs after "vite build".
// GitHub Pages only serves real files, so a visitor opening ls-street-mma.com/coach directly
// would get GitHub's 404 page. This copies the built page to dist/coach/index.html (with the
// coach page's own title/description so Google sees it) and to dist/404.html as a fallback.
// GitHub Pages serves it at /coach/ (it redirects /coach there), so the canonical URL has the slash.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");

const coach = html
  .replace(/<title>.*?<\/title>/, "<title>Head Coach Lee | LS Street MMA Self-Defence, Bromley</title>")
  .replace(
    /(<meta name="description" content=")[^"]*/,
    "$1Meet Lee, head coach at LS Street MMA in Bromley. A friendly, supportive place to learn practical MMA-based self-defence at your own pace. First session free.",
  )
  .replace('<link rel="canonical" href="https://ls-street-mma.com/"', '<link rel="canonical" href="https://ls-street-mma.com/coach/"')
  .replace('<meta property="og:url" content="https://ls-street-mma.com/"', '<meta property="og:url" content="https://ls-street-mma.com/coach/"');

mkdirSync("dist/coach", { recursive: true });
writeFileSync("dist/coach/index.html", coach);
writeFileSync("dist/404.html", html.replace("<head>", '<head>\n    <meta name="robots" content="noindex" />'));
console.log("postbuild: wrote dist/coach/index.html and dist/404.html");
