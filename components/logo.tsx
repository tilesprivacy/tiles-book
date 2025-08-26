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
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 28 28" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0" y="0" width="12" height="12" fill="#000000" rx="4" ry="4" />
      <rect x="16" y="0" width="12" height="12" fill="#000000" rx="4" ry="4" />
      <rect x="0" y="16" width="12" height="12" fill="#000000" rx="4" ry="4" />
    </svg>
  )
}
