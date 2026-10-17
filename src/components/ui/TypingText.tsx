'use client'

import React from 'react'
import { TypeAnimation as TypeAnimationComponent } from 'react-type-animation'

interface TypingTextProps {
  sequence: string[]
  delay?: number
}
export default function TypingText({ sequence, delay = 1000 }: TypingTextProps) {
  const modifiedSequence: (string | number)[] = []

  sequence.forEach((item, index) => {
    modifiedSequence.push(item)

    if (index < sequence.length - 1) {
      modifiedSequence.push(delay)
    }
  })

  return (
    <TypeAnimationComponent
      sequence={modifiedSequence}
      speed={10}
      deletionSpeed={70}
      repeat={Infinity}
      aria-label={sequence[0]}
    />
  )
}
