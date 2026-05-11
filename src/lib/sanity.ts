import { createClient } from '@sanity/client'

export const isSanityConfigured = Boolean(
  import.meta.env.VITE_wqmjbrvw &&
  import.meta.env.VITE_wqmjbrvw !== 'wqmjbrvw'
)

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_wqmjbrvw ?? 'placeholder',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
