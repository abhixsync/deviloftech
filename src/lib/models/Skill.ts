import { Schema, model, models } from 'mongoose'

const SkillSchema = new Schema({
  clusterTitle: { type: String, required: true },
  tags: [
    {
      name: String,
      isHot: { type: Boolean, default: false },
    },
  ],
  sortOrder: { type: Number, default: 0 },
})

export const Skill = models.Skill || model('Skill', SkillSchema)
