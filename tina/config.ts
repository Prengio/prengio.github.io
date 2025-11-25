import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
media: {
  tina: {
    mediaRoot: "assets/img", // disk path
    publicFolder: "./",       // ignored for preview
    previewSrc: (file) => `/assets/img/${file.id}`, // served by Jekyll
  },
},
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
  name: "alevel",
  label: "A-Level Pages",
  path: "_alevel",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "img",
      label: "Image",
    },
    {
      type: "number",
      name: "importance",
      label: "Importance",
    },
    {
      type: "boolean",
      name: "usemathjax",
      label: "Use MathJax",
    },
    {
      type: "boolean",
      name: "giscus_comments",
      label: "Enable Giscus Comments",
    },
    {
      type: "object",
      name: "toc",
      label: "Table of Contents",
      fields: [
        {
          type: "string",
          name: "sidebar",
          label: "Sidebar Position",
        },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
},

{
  name: "post",
  label: "Posts",
  path: "_posts",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
    },
    // optional: uncomment if you want categories
    // {
    //   type: "string",
    //   name: "categories",
    //   label: "Categories",
    // },
    {
      type: "boolean",
      name: "related_posts",
      label: "Show Related Posts",
    },
    {
      type: "boolean",
      name: "usemathjax",
      label: "Use MathJax",
    },
    {
      type: "boolean",
      name: "giscus_comments",
      label: "Enable Giscus Comments",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
},


{
  name: "project",
  label: "Projects",
  path: "_projects",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "image",
      name: "img",
      label: "Image",
    },
    {
      type: "number",
      name: "importance",
      label: "Importance",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
    },
    {
      type: "boolean",
      name: "related_publications",
      label: "Show Related Publications",
    },
    {
      type: "boolean",
      name: "usemathjax",
      label: "Use MathJax",
    },
    {
      type: "boolean",
      name: "giscus_comments",
      label: "Enable Giscus Comments",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
},

{
  name: "page",
  label: "Pages",
  path: "_pages",
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "boolean",
      name: "social",
      label: "Show Social Icons",
    },
    {
      type: "object",
      name: "profile",
      label: "Profile",
      fields: [
        {
          type: "string",
          name: "align",
          label: "Alignment",
        },
        {
          type: "image",
          name: "image",
          label: "Profile Image",
        },
        {
          type: "boolean",
          name: "image_circular",
          label: "Circular Image",
        },
        {
          type: "string",
          name: "more_info",
          label: "More Info (HTML allowed)",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "announcements",
      label: "Announcements",
      fields: [
        {
          type: "boolean",
          name: "enabled",
          label: "Enabled",
        },
        {
          type: "boolean",
          name: "scrollable",
          label: "Scrollable",
        },
        {
          type: "number",
          name: "limit",
          label: "Limit",
        },
      ],
    },
    {
      type: "object",
      name: "latest_posts",
      label: "Latest Posts",
      fields: [
        {
          type: "boolean",
          name: "enabled",
          label: "Enabled",
        },
        {
          type: "boolean",
          name: "scrollable",
          label: "Scrollable",
        },
        {
          type: "number",
          name: "limit",
          label: "Limit",
        },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
},




    ],
  },
});
