import mongoose, { Schema, model, models } from 'mongoose'

const BlogPostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: {
      type: String,
      enum: ['ai', 'coding', 'news', 'tutorial', 'opinion'],
      default: 'coding',
    },
    tags: [String],
    thumbnail: String,
    published: { type: Boolean, default: false },
    publishedAt: Date,
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const BlogPost = models.BlogPost || model('BlogPost', BlogPostSchema)
