import getNavData from '@/lib/data-hooks/getNavData';
import Link from 'next/link';
import LangButton from './LangButton';





export default async function Nav() {
  const data = await getNavData()
 
   
  return (
    <nav className='flex  justify-between    p-2 px-4' >
      <div className='flex flex-row-reverse gap-x-3'>
        {data.nav.tree.map(({page})=> <Link href={page.url}><strong>{page.title}</strong></Link>  )}
      </div> 
      <div className='flex flex-row-reverse gap-x-3'>

      {data.nav.tree.map(({page})=> <Link href={"/ar"+page.url}><strong>{page.title}  AR</strong></Link>  )}
</div>
    </nav>
    )
  }
