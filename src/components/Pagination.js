import getPaginationData from '@/lib/data-hooks/getPaginationData'
import React from 'react'
import PaginationCard from './PaginationCard'
import PagintationAction from './PagintationAction' 

const  Pagination = async ({searchParams}) => { 
    const limit =3
    let data  = await  getPaginationData(searchParams.page ? +searchParams.page:1,limit) 
    let numberOfPages =  Math.ceil(data?.specialities.total /limit)
  

  return (
    <div className='flex items-center flex-col'>
        <h1> Pagination </h1>
        <p>{JSON.stringify(searchParams)}</p>
        <div className='flex gap-x-4'>
        {data.specialities.data.map((card,index)=>
        <PaginationCard data={card} key={card.title +index}/>   )}
        </div> 
        <PagintationAction numberOfPages={numberOfPages} pageNo={searchParams.page ? searchParams.page:1} limit={limit}/>
    
    </div>
  )
}

export default Pagination
