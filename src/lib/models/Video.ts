import mongoose, { Schema, model, models } from 'mongoose'

const VideoSchema = new Schema(
  {
    youtubeId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    thumbnail: { type: String, required: true },
    category: {
      type: String,
      enum: ['ai', 'coding', 'tutorial', 'shorts', 'news'],
      default: 'coding',
    },
    duration: String,
    published: { type: Boolean, default: true },
    publishedAt: { type: Date, default: Date.now },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const Video = models.Video || model('Video', VideoSchema)
