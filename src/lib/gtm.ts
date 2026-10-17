'use client'

import { sendGTMEvent } from '@next/third-parties/google'

export const sendDataLayer = (data: Record<string, unknown>) => {
  sendGTMEvent(data)
}
