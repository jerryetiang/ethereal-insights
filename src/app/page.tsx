import Header from '@/ui/sections/home/header'
import Journal from '@/ui/sections/journal/journal'
import React from 'react'

export default function Page() {
  return (
    <div>
      <section>
        <Header /> 
      </section>
      <section>
        <Journal />
      </section>       
    </div>
  )
}
