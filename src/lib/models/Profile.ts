import mongoose, { Schema, model, models } from 'mongoose'

const ProfileSchema = new Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  roles: [String],
  bio: { type: String, required: true },
  photo: String,
  heroStats: [
    {
      number: String,
      label: String,
      sub: String,
    },
  ],
  detailCards: [
    {
      icon: String,
      label: String,
      value: String,
      sub: String,
    },
  ],
  socialLinks: {
    email: String,
    linkedin: String,
    github: String,
    website: String,
    youtube: String,
    instagram: String,
  },
})

export const Profile = models.Profile || model('Profile', ProfileSchema)
