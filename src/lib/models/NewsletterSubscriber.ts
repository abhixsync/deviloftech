import { Schema, model, models } from 'mongoose'

const NewsletterSubscriberSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  subscribedAt: { type: Date, default: () => new Date() },
  active: { type: Boolean, default: true },
})

export const NewsletterSubscriber =
  models.NewsletterSubscriber || model('NewsletterSubscriber', NewsletterSubscriberSchema)
