import { Schema } from 'mongoose'
const navigateShema  = Schema(
    {
        label: { type: String, unique: true },
        root: { type: String, unique: true },
        order: { type: Number, unique: true },
      },
      { timestamps: true }
)
