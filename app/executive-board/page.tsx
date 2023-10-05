'use client'
import Image from 'next/image'
import Header from '@/app/components/header/header'
import { Fade } from "react-slideshow-image";
import {useEffect, useState} from "react";

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

  return (


    <main className="bg-lightpurple flex h-full w-full relative flex-col items-center justify-center overflow-hidden">
      <div className='grid grid-cols-2 gap-4'>
        <div className="item rotate-6">
          <div className="polaroid"><img
            src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/Vietnam-53572649-EPA.jpg?itok=UOMKp9Hh"/>
            <div className=" caption">Miss Vietnam</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid -rotate-2"><img
            src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/Vietnam-53572649-EPA.jpg?itok=UOMKp9Hh"/>
            <div className=" caption">Miss Vietnam</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid -rotate-12"><img
            src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/Vietnam-53572649-EPA.jpg?itok=UOMKp9Hh"/>
            <div className=" caption">Miss Vietnam</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid rotate-12"><img
            src="https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/Vietnam-53572649-EPA.jpg?itok=UOMKp9Hh"/>
            <div className=" caption">Miss Vietnam</div>
          </div>
        </div>


      </div>



    </main>
  )
}
