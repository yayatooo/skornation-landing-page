import React from 'react'
import { ChildrenProps } from '@/types/data'



export const Button: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <button className="bg-primary font-semibold text-white w-[218px] h-[46px] hover:bg-red-700">{children}</button>
  )
}
