import { mutation } from './_generated/server'
import { v } from 'convex/values'

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.name.trim() || !args.email.trim() || !args.message.trim()) {
      throw new Error('All fields are required')
    }
    if (!args.email.includes('@')) {
      throw new Error('Invalid email address')
    }
    return await ctx.db.insert('contact', {
      ...args,
      createdAt: Date.now(),
      read: false,
    })
  },
})
