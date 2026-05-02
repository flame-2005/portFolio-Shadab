'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { ReactNode, useMemo } from 'react'

// Use the real URL from env, or a placeholder so ConvexProvider is always in
// the tree (contact form simply shows an error if the user submits without setup).
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || 'https://placeholder.convex.cloud'

export default function ConvexClientProvider({ children }: Readonly<{ children: ReactNode }>) {
  const convex = useMemo(() => new ConvexReactClient(CONVEX_URL), [])
  return <ConvexProvider client={convex}>{children}</ConvexProvider>
}
