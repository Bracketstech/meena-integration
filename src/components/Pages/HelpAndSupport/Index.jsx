'use client'
import SubPageHero from '@/components/SubPageHero'
import FaqMain from './FaqMain'
import GetInTouch from './GetInTouch'
import useAnimations from '@/hooks/useAnimations'

const Index = ({arabic}) => {
  useAnimations()
  return (
   <main>
    <SubPageHero
    boldtext={arabic?"مساعدة الدعم":"Help & support"}
    text={arabic?"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"} />
              <div
  className="lg:pt-[6.25vw] pt-[16.4102564103vw] sm:pb-[7.31707317073vw]
  lg:pb-[unset]"
>
  <h2
    data-aos="fade-up"
    className="Container1440 heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
  >
   {arabic? <>
   
    <span className="PingAR-Bold">الأسئلة </span>الشائعة 
   </>:( <>Frequently Asked <br />
    <span className="PingAR-Bold"> Questionss </span></>)}
  </h2>
  <FaqMain arabic={arabic} /> 
  <GetInTouch  arabic={arabic}/> 
</div>

   </main>
  )
}

export default Index
