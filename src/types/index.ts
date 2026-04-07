export interface IProfile {
  _id?: string
  name: string
  tagline: string
  roles: string[]
  bio: string
  photo?: string
  heroStats: { number: string; label: string; sub: string }[]
  detailCards: { icon: string; label: string; value: string; sub?: string }[]
  socialLinks: {
    email: string
    linkedin: string
    github: string
    website: string
    youtube: string
    instagram: string
  }
}

export interface IExperience {
  _id?: string
  period: string
  role: string
  company: string
  location: string
  description: string
  pills: string[]
  sortOrder: number
}

export interface IProject {
  _id?: string
  slug: string
  num: string
  tag: string
  name: string
  description: string
  impact: string
  stack: string[]
  status: 'past' | 'current' | 'upcoming'
  isFeatured: boolean
  sideStats?: { label: string; value: string; sub?: string }[]
  links?: { github?: string; live?: string }
  images?: string[]
  sortOrder: number
}

export interface ISkill {
  _id?: string
  clusterTitle: string
  tags: { name: string; isHot: boolean }[]
  sortOrder: number
}

export interface IAchievement {
  _id?: string
  icon: string
  title: string
  description: string
  year: string
  sortOrder: number
}

export interface IEducation {
  _id?: string
  badge: string
  degree: string
  institution: string
  year: string
  sortOrder: number
}

export interface IContactSubmission {
  _id?: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt?: Date
}

export interface IBlogPost {
  _id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: 'ai' | 'coding' | 'news' | 'tutorial' | 'opinion'
  tags: string[]
  thumbnail?: string
  published: boolean
  publishedAt?: Date
  sortOrder: number
  views?: number
  createdAt?: Date
  updatedAt?: Date
}

export interface IVideo {
  _id?: string
  youtubeId: string
  title: string
  description: string
  thumbnail: string
  category: 'ai' | 'coding' | 'tutorial' | 'shorts' | 'news'
  duration?: string
  published: boolean
  publishedAt?: Date
  sortOrder: number
}

export interface INewsItem {
  _id?: string
  headline: string
  sourceUrl: string
  sourceName: string
  summary: string
  myTake?: string
  category: 'ai' | 'coding' | 'tech' | 'industry'
  published: boolean
  publishedAt?: Date
  createdAt?: Date
}

export interface ISiteSetting {
  _id?: string
  siteName: string
  metaTitle: string
  metaTitleTemplate: string
  metaDescription: string
  metaKeywords: string[]
  ogImageUrl: string
  copyrightName: string
}

export interface IResource {
  _id?: string
  name: string
  description: string
  url?: string
  fileUrl?: string
  category: 'tool' | 'course' | 'book' | 'channel' | 'library' | 'guide' | 'cheatsheet' | 'template' | 'roadmap' | 'podcast' | 'community' | 'docs' | 'other'
  icon?: string
  isFree: boolean
  published: boolean
  sortOrder: number
}
