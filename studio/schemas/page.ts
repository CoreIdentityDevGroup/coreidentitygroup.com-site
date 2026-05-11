import { defineField, defineType } from 'sanity'

export const pageSchema = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'heroHeadline', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'array',
              of: [{ type: 'block' }],
            }),
          ],
          preview: { select: { title: 'heading' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'heroHeadline', subtitle: 'slug.current' },
  },
})
