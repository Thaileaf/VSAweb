import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={'z-10 w-full'}>
      <div className='bg-lightpurple flex h-8 p-6'>
        <div className='flex justify-center items-center pl-4 space-x-4'>
            <a href={'https://www.instagram.com/nyuvsa/?hl=en'}>
                <AiOutlineInstagram style={{color: 'purple', fontSize: '2em'}}/>
            </a>
            <a href={'https://www.facebook.com/nyuvsa/'}>
                <AiOutlineFacebook style={{color: 'purple', fontSize: '2em' }}/>
            </a>
            <a href={'/'}>
                <AiOutlineMail style={{color: 'purple', fontSize: '2em' }}/>
            </a>


        </div>

      </div>
    </footer>

  )
}