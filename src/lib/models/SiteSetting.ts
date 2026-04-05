import mongoose, { Schema, model, models } from 'mongoose'

const SiteSettingSchema = new Schema({
  siteName:            { type: String, default: 'DevilOfTech' },
  metaTitle:           { type: String, default: 'DevilOfTech — Tech, AI & Coding' },
  metaTitleTemplate:   { type: String, default: '%s | DevilOfTech' },
  metaDescription:     { type: String, default: 'Your go-to source for tech news, AI insights, and coding knowledge. Videos, articles, and curated resources from DevilOfTech.' },
  metaKeywords:        [{ type: String }],
  ogImageUrl:          { type: String, default: '/og-default.png' },
  copyrightName:       { type: String, default: 'DevilOfTech · Abhishek' },
})

export const SiteSetting = models.SiteSetting || model('SiteSetting', SiteSettingSchema)
