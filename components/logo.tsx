import React from 'react'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ 
  width = 28, 
  height = 28, 
  className = '' 
}) => {
  return (
    <div className={className} style={{ width, height }}>
      <img 
        src="/light.svg" 
        alt="Tilekit Logo" 
        width={width} 
        height={height}
        className="logo-light"
      />
      <img 
        src="/dark.svg" 
        alt="Tilekit Logo" 
        width={width} 
        height={height}
        className="logo-dark"
      />
    </div>
  )
}
