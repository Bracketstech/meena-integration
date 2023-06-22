import getAboutData from '@/lib/data-hooks/getAboutData'
import React from 'react'

const About = async ({arabic}) => {
    const data = await getAboutData(arabic)
  return (
    <div>
            <h1>{data.entry.title}</h1>
    </div>
  )
}

export default About
