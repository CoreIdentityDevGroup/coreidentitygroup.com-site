import { createClient } from '@sanity/client'

export const isSanityConfigured = Boolean(
  import.meta.env.VITE_SANITY_PROJECT_ID &&
  import.meta.env.VITE_SANITY_PROJECT_ID !== 'SANITY_PROJECT_ID'
)

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID ?? 'placeholder',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
