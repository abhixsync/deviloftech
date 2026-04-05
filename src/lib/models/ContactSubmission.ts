import { Schema, model, models } from 'mongoose'

const ContactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export const ContactSubmission =
  models.ContactSubmission || model('ContactSubmission', ContactSubmissionSchema)
