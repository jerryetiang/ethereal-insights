import Header from '@/ui/sections/home/header'
import HorizontalScrollSection from '@/ui/sections/journal/features'
import Journal from '@/ui/sections/journal/journal'
import React from 'react'

export default function Page() {
  return (
    <div>
      <section id='Header'>
        <Header /> 
      </section>
      <section id='journal'>
        <Journal />
      </section>     
    </div>
  )
}
