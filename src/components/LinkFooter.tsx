import React from 'react'

export const LinkFooter = () => {
  return (
    <div className="flex xs:flex-col xs:items-center xs:text-center lg:gap-12 xs:gap-6 lg:flex-row xs:py-6">
    <div className="space-y-6">
      <h3 className="font-semibold text-lg">Legal Information</h3>
      <p className='text-[#AFAFAF]'>Terms & Conditions</p>
      <p className='text-[#AFAFAF]'>Promotion</p>
      <p className='text-[#AFAFAF]'>Privacy Policy</p>
    </div>
    <div className="space-y-6">
      <h3 className="font-semibold text-lg">About Us</h3>
      <p className='text-[#AFAFAF]'>About Us</p>
      <p className='text-[#AFAFAF]'>News</p>
      <p className='text-[#AFAFAF]'>Career</p>
    </div>
    <div className="space-y-6">
      <h3 className="font-semibold text-lg">Store</h3>
      <p className='text-[#AFAFAF]'>Shop by Brands</p>
      <p className='text-[#AFAFAF]'>Shop by Sports</p>
      <p className='text-[#AFAFAF]'>Contact Us</p>
    </div>
  </div>
  )
}
