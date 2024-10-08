import { defineField, defineType } from "sanity";

export const activityType = defineType({
  name: "activity",
  title: "Activity",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "A short title for the activity",
      validation: (rule) => rule.max(15).required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: "headerImage",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introduction",
      type: "array",
      of: [{ type: "block" }],
      description: "An introduction to the activity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "method",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tip",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      description: "Upload images of the activity",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
      ],
    }),
  ],
});
