import { sanityClient, isSanityConfigured } from './sanity'

export { isSanityConfigured }

// ── Types ────────────────────────────────────────────────────────────

export interface SanityPost {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt: string
  body?: any[]
  author: string
}

export interface SanityTeamMember {
  _id: string
  name: string
  title: string
  bio?: any[]
  photo?: string | null
  linkedIn?: string
}

export interface SanityStat {
  _id: string
  label: string
  value: string
  pageReference?: string
}

// ── Queries ──────────────────────────────────────────────────────────

export async function getHomepageStats(): Promise<SanityStat[]> {
  if (!isSanityConfigured) return []
  return sanityClient.fetch(
    `*[_type == "stat"] { _id, label, value, pageReference }`
  )
}

export async function getBlogPosts(): Promise<SanityPost[]> {
  if (!isSanityConfigured) return []
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      author
    }`
  )
}

export async function getBlogPost(slug: string): Promise<SanityPost | null> {
  if (!isSanityConfigured) return null
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      body,
      author
    }`,
    { slug }
  )
}

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  if (!isSanityConfigured) return []
  return sanityClient.fetch(
    `*[_type == "teamMember"] | order(name asc) {
      _id,
      name,
      title,
      bio,
      "photo": photo.asset->url,
      linkedIn
    }`
  )
}
