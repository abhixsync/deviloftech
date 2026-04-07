import { Schema, model, models } from 'mongoose'

const ResourceSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String },
    fileUrl: { type: String },
    category: {
      type: String,
      enum: ['tool', 'course', 'book', 'channel', 'library', 'guide', 'cheatsheet', 'template', 'roadmap', 'podcast', 'community', 'docs', 'other'],
      default: 'tool',
    },
    icon: String,
    isFree: { type: Boolean, default: true },
    published: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const Resource = models.Resource || model('Resource', ResourceSchema)
