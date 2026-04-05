import { Schema, model, models } from 'mongoose'

const EducationSchema = new Schema({
  badge: { type: String, required: true },
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  year: { type: String, required: true },
  sortOrder: { type: Number, default: 0 },
})

export const Education = models.Education || model('Education', EducationSchema)
