import React from 'react'
import FastMarquee from 'react-fast-marquee'

interface MarqueeProps {
  direction?: 'left' | 'right'
  children: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export default function Marquee({ 
  children, 
  direction = 'left',
  speed = 25,
  pauseOnHover = false,
  className = ''
}: MarqueeProps) {
  return (
    <div 
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)'
      }}
      className="w-full overflow-hidden"
    >
      <FastMarquee 
        direction={direction} 
        speed={speed} 
        pauseOnHover={pauseOnHover}
        gradient={false}
        className={className}
      >
        {children}
      </FastMarquee>
    </div>
  )
}
