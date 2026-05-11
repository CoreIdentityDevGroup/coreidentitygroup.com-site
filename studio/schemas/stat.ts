import { defineField, defineType } from 'sanity'

export const statSchema = defineType({
  name: 'stat',
  title: 'Stat',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Short descriptor shown below the stat value (e.g. "Enterprises with unknown AI agents")',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'The displayed value (e.g. "82%", "693/693", "706-Point")',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pageReference',
      title: 'Page Reference',
      type: 'string',
      description: 'Which page this stat appears on (e.g. "homepage", "quantum-hardening")',
    }),
  ],
  preview: {
    select: { title: 'value', subtitle: 'label' },
  },
})
