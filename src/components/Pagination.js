import getPaginationData from '@/lib/data-hooks/getPaginationData'
import React from 'react'
import PaginationCard from './PaginationCard'

const  Pagination = async () => {
    const pageNo=3
    const limit =3
    let data  = await  getPaginationData(pageNo,limit)

    // const getData =async () =>{
    //     data = await getPaginationData(4,limit)
    // }

  return (
    <div className='flex items-center flex-col'>
        <h1> Pagination </h1>
        <div className='flex gap-x-4'>
        {data.specialities.data.map((card,index)=>
        <PaginationCard data={card} key={card.title +index}/>   )}
        </div> 
        {/* <button onClick={()=> getData()}>
            NextPage
        </button> */}
    </div>
  )
}

export default Pagination
