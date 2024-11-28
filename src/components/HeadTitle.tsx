import React from 'react'
import { ChildrenProps } from '@/types/data'

export const HeadTitle:React.FC<ChildrenProps> = ({ children }) => {
  return (
    <h1 className='font-bold text-6xl text-primary'>{children}</h1>
  )
}
