import React from 'react'

interface MainContentProps {
    children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}
