import React from 'react'
import Marquee from 'react-fast-marquee'

interface MarqueeElementProps {
  direction?: 'left' | 'right'
  children: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export default function MarqueeElement({ 
  children, 
  direction = 'left',
  speed = 25,
  pauseOnHover = false,
  className = ''
}: MarqueeElementProps) {
  return (
    <div 
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)'
      }}
      className="w-full overflow-hidden"
    >
      <Marquee 
        direction={direction} 
        speed={speed} 
        pauseOnHover={pauseOnHover}
        gradient={false}
        className={className}
      >
        {children}
      </Marquee>
    </div>
  )
}
