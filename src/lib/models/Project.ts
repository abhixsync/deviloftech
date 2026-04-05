import { Schema, model, models } from 'mongoose'

const ProjectSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    num: { type: String, required: true },
    tag: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    impact: { type: String, default: '' },
    stack: [String],
    status: {
      type: String,
      enum: ['past', 'current', 'upcoming'],
      default: 'past',
    },
    isFeatured: { type: Boolean, default: false },
    sideStats: [
      {
        label: String,
        value: String,
        sub: String,
      },
    ],
    links: {
      github: String,
      live: String,
    },
    images: [String],
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const Project = models.Project || model('Project', ProjectSchema)
