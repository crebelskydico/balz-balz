import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkBreaks from 'remark-breaks';
import { ParsedNextUrl } from 'next/dist/shared/lib/router/utils/parse-next-url';
import { ParsedUrlQuery } from 'querystring';

export async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).use(remarkBreaks).process(markdown);
    return result.toString();
}

export const renderMarkdown = async (
    markdownContent: string
): Promise<string> => {
    return await markdownToHtml(markdownContent || '');
};

export const getContentPaths = () => {
    const files = fs.readdirSync(path.join('content'));
    const paths = files.map((filename) => ({
      params: {
        path: filename.split('.')[0],
      },
    }));

    return paths;
}

export const getContentByPath = async (path: ParsedUrlQuery['path']) => {
    const markDownContent = fs.readFileSync(`content/${path}.md`).toString();
  
    const parsedContent = matter(markDownContent);
  
    const content = {
      meta: {
        ...parsedContent.data,
        path,
      },
      content: await renderMarkdown(parsedContent.content),
    };

    return content;
}


export const getAllContent = async () => {
    const files = fs.readdirSync("content");
    const allContent = await Promise.all(files.map(async (file) => {
        const markDownContent = fs
            .readFileSync(`content/${file}`)
            .toString();
        
        const parsedContent = matter(markDownContent);
       
        const content = {
            meta: {
              ...parsedContent.data,
              path: file.split('.')[0],
            },
            content: await renderMarkdown(parsedContent.content),
          };

        return content
    } ));
    return allContent;
}
