'use client'
import Image from 'next/image'
import Header from '@/app/components/header/header'
import { Fade } from "react-slideshow-image";
import {useEffect, useState} from "react";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Function to update window size
    function handleResize() {
      setWindowSize({
        width: 0,
        height: 0,
      });
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial window size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const affiliates =[
    {
      name: 'Union of North American Vietnamese Student Associations (UNAVSA)',
      description: 'UNAVSA is a 501(c)(3) non-profit, volunteer-led, community-based organization, was founded in 2004 on the principal of empowering the next generation of Vietnamese youth with self-awareness, passion for change and propensity for leadership. UNAVSA is a family of Vietnamese youth organizations working together to advance the interests of Vietnamese youth in order to build a stronger Vietnamese community at home and abroad.',

    },
    {
      name: 'Northeast Union of Vietnamese Student Association',
      description: '',

    }
  ]

  return (


    <main className="bg-white flex w-full">
      <div className='flex flex-col exec-contain'>

        <div className={'flex justify-center items-center text-purple p-16 text-center'}>
          <h1 className={'text-4xl text-center'}>Affiliates</h1>
        </div>
        { affiliates.map((affiliate, index) => {
          return(
            <div key={index} className={'flex p-12 pl-32  '}>
              <div className={'flex'}>

              </div>
              <div className={"item"}>
                <div className="polaroid"><img width={250} height={250}
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                  <div className="caption"></div>
                </div>

              </div>
              <div className={'flex flex-col justify-center items-center pl-8 pr-8 w-3/4'}>
                <h1 className='text-purple text-2xl'>{affiliate.name}</h1><br/>
                <p className={'text-purple'}>
                  Name: {affiliate.description}<br/>
                </p>
              </div>
            </div>
          )
        }) }



      </div>



    </main>
  )
}
