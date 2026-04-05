import mongoose, { Schema, model, models } from 'mongoose'

const NewsItemSchema = new Schema(
  {
    headline: { type: String, required: true },
    sourceUrl: { type: String, required: true },
    sourceName: { type: String, required: true },
    summary: { type: String, required: true },
    myTake: String,
    category: {
      type: String,
      enum: ['ai', 'coding', 'tech', 'industry'],
      default: 'tech',
    },
    published: { type: Boolean, default: true },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const NewsItem = models.NewsItem || model('NewsItem', NewsItemSchema)
