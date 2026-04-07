import { Schema, model, models } from 'mongoose'

const RoadmapItemSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ['planned', 'in-progress', 'shipped'],
      default: 'planned',
    },
    category: {
      type: String,
      enum: ['feature', 'improvement', 'fix', 'content', 'design'],
      default: 'feature',
    },
    shippedAt: { type: Date },
    sortOrder: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export const RoadmapItem = models.RoadmapItem || model('RoadmapItem', RoadmapItemSchema)
