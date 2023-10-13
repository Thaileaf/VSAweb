import HeaderButton from "@/app/components/header/headerbutton/button";


export default function Header() {
  return (
    <header className={'z-10 w-screen'}>
      <div className='bg-black cursor-pointer h-8 flex items-center justify-center'>
        <h2 className='text-center'>Sign up for our newsletter!</h2>
      </div>
      <div className='bg-lightpurple flex h-16'>
        <div className='title w-1/4 flex justify-center items-center'>

          <a className='text-purple text-xl' href={'/'}>NYU VSA</a>
        </div>
        <div className='links w-3/4 flex justify-evenly items-center'>

          <HeaderButton href={"/about-us"} title={'About Us'} />
          <HeaderButton href={"/executive-board"} title={'Executive Board'}/>
          <HeaderButton href={"/our-events"} title={'Our Events'}/>
          <HeaderButton href={"/affiliates"} title={'Affiliates'}/>
        </div>
      </div>
    </header>

  )
}