import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: `projects/**/*.mdx`,
    contentType: "mdx",

    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        date: {
            type: "date",
        },
        published: {
            type: "boolean",
            default: true,
        },
        repository: {
            type: "string",
        },
        url: {
            type: "string",
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.replace(/^projects\//, ""),
        },
    },
}));

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
});
