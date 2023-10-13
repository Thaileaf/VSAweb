'use client'
import Image from 'next/image'
import Header from '@/app/components/header/header'
import { Fade } from "react-slideshow-image";
import {useEffect, useState} from "react";
import type { Dayjs } from 'dayjs';
import './executive.css'

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  function causeReflow(name: string) {
    setInterval(() => {
      // Reading offsetHeight will cause a reflow because it requires the browser
      // to ensure it has the up-to-date value.
      // By assigning it to itself, we're not changing any property but it causes a reflow.

      // element.offsetHeight = element.offsetHeight;

      // You could also use other properties or methods to trigger a reflow.
      // For example:
      // void element.offsetWidth;
    }, 6000);
  }



  useEffect(() => {
    // Function to update window size
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
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

  const people = ['Leaan', 'Michael', 'Cindy']

  return (


    <main className="bg-lightpurple flex w-full">
      <div className='flex flex-col exec-contain'>
        { people.map((person) => {
          return(
              <div className={'flex text-black'}>
                <div className={"item"}>
                  <div className="polaroid"><img
                      src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/Vietnam-53572649-EPA.jpg?itok=UOMKp9Hh"/>
                    <div className=" caption">{person}</div>
                  </div>

                </div>
                <div className={'flex justify-center items-center pl-8 pr-8 w-3/4'}>

                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </div>
              </div>
          )
        }) }



      </div>



    </main>
  )
}
