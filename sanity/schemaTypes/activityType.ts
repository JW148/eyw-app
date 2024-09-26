import { defineField, defineType } from "sanity";

export const supportType = defineType({
    name: 'support',
    title: 'Support',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (rule) => rule.required(),
            hidden: ({document}) => !document?.title,
        }),
        defineField({
            name: 'headerImage',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'introduction',
            type: 'text',
            description: 'An introduction to the activity',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'method',
            type: 'array',
            of: [{type: 'block'}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'bodyImage',
            type: 'image',
            validation: (rule) => rule.required(),
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                },
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ],
        }),
        defineField({
            name: 'tip',
            type: 'array',
            of: [{type: 'block'}],
        }),
    ]
})