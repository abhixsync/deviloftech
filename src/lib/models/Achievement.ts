import { Schema, model, models } from 'mongoose'

const AchievementSchema = new Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: String, required: true },
  sortOrder: { type: Number, default: 0 },
})

export const Achievement = models.Achievement || model('Achievement', AchievementSchema)
