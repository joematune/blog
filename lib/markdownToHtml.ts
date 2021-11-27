import withShiki from "@stefanprobst/remark-shiki";
import fromMarkdown from "remark-parse";
import * as shiki from "shiki";
import unified from "unified";
import toHast from "remark-rehype";
import withHtmlInMarkdown from "rehype-raw";
import toHtml from "rehype-stringify";
import path from "path";
import fs from "fs";

export default async function markdownToHtml(markdown: string) {
  const theme = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "./public/theme/react-theme.json"),
      "utf-8"
    )
  );
  const highlighter = await shiki.getHighlighter({ theme });

  const processor = unified()
    .use(fromMarkdown)
    // @ts-ignore
    .use(withShiki, { highlighter })
    // @ts-ignore
    .use(toHast, { allowDangerousHtml: true })
    // @ts-ignore
    .use(withHtmlInMarkdown)
    // @ts-ignore
    .use(toHtml);

  return processor.process(markdown).then((vfile) => {
    const stringified = String(vfile);
    console.log(stringified);
    return stringified;
  });
}
