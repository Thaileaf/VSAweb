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


    <main className="flex h-full w-full relative flex-col items-center justify-center overflow-hidden">
      <div className={'slide slide1'}>
          <div className={'w-1/2 z-10 text-center text-container'}>
            <h1 className={'text-4xl m-8'}>Vietnamese Student Association at NYU</h1>
            <h2 className={'z-10'}>We are the Vietnamese Student Association at New York University. Our group consists of NYU students who are passionate about promoting cultural awareness, increasing ethnic diversity within NYU, and to providing a group platform for all NYU students interested in fostering a better understanding of the Vietnamese experience</h2>
          </div>
          <img src={'/image.png'} className={'absolute z-0 object-cover'}/>
      </div>


      <div className={'slide slide2'}>
        <div className={'w-1/2 z-10 text-center text-container'}>
          <h1 className={'text-4xl m-8'}>Our Mission</h1>
          <h2 className={'z-10'}>At the heart of our mission lies the commitment to enriching multi-cultural atmosphere and fostering a deeper appreciation of the vibrant Vietnamese culture at NYU by providing cultural, social, and philanthropic events to the student populations and those who are interested in the Vietnamese heritage.</h2>
        </div>
        <img src={'/image2.png'} className={'absolute z-0 object-cover'}/>
      </div>
      <div className={'slide slide3'}>
        <div className={'w-1/2 z-10 text-center text-container'}>
          <h1 className={'text-4xl m-8'}>Get Involved</h1>
          <h2 className={'z-10'}>We are the Vietnamese Student Association at New York University. Our group consists of NYU students who are passionate about promoting cultural awareness, increasing ethnic diversity within NYU, and to providing a group platform for all NYU students interested in fostering a better understanding of the Vietnamese experience</h2>
        </div>
        <img src={'/image3.png'} width={2000} height={2000} className={'absolute z-0 object-cover'}/>
      </div>


    </main>
  )
}
