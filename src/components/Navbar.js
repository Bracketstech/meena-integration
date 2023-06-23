import getNavData from '@/lib/data-hooks/getNavData';
import Link from 'next/link';
import LangSwitcher from './LangSwitcher';





export default async function Nav({arabic}) {
  const data = await getNavData(arabic)
 
   
  return (
    <nav className='flex  justify-between   flex-wrap  p-2 px-4' > 
      <div className='flex flex-row-reverse gap-x-3'>
        {data.nav.tree.map(({page})=> <Link key={page.url} href={page.url}><strong>{page.title}</strong></Link>  )}
      </div> 
      <div className='flex flex-row-reverse gap-x-3'>
      <LangSwitcher arabic={arabic}/>
</div>
    </nav>
    )
  }
