'use client'

import Image from "next/image"

const PaginationCard = ({data}) => {
    console.log(data)
  return (
    <div>
      {data.title}
      <Image src={data.image[0].url} width={50} height={50}/>
    </div>
  )
}

export default PaginationCard
