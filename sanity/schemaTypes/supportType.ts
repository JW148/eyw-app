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
            name: 'subheading',
            type: 'string',
            description: 'An optional subheading to be displayed'
        }),
        defineField({
            name: 'headerImage',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'introduction',
            type: 'text',
            description: 'An introduction to the support card',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'supportText1',
            type: 'array',
            of: [{type: 'block'}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'bodyImage1',
            type: 'image',
            validation: (rule) => rule.required(),
            hidden: ({document}) => !document?.supportText1,
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
            name: 'supportText2',
            type: 'array',
            of: [{type: 'block'}],
            hidden: ({document}) => !document?.bodyImage1,
        }),
        defineField({
            name: 'bodyImage2',
            type: 'image',
            hidden: ({document}) => !document?.supportText2,
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
            name: 'supportText3',
            type: 'array',
            of: [{type: 'block'}],
            hidden: ({document}) => !document?.bodyImage2,
        }),
        defineField({
            name: 'bodyImage3',
            type: 'image',
            hidden: ({document}) => !document?.supportText3,
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
            name: 'supportText4',
            type: 'array',
            of: [{type: 'block'}],
            hidden: ({document}) => !document?.bodyImage3,
        }),
        defineField({
            name: 'bodyImage4',
            type: 'image',
            hidden: ({document}) => !document?.supportText4,
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
    ]
})