import { Schema, model, models } from 'mongoose'

const ExperienceSchema = new Schema({
  period: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, default: '' },
  description: { type: String, required: true },
  pills: [String],
  sortOrder: { type: Number, default: 0 },
})

export const Experience = models.Experience || model('Experience', ExperienceSchema)
