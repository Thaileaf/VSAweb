'use client'
import Image from 'next/image'
import Header from '@/app/components/header/header'
import { Fade } from "react-slideshow-image";
import {useEffect, useState} from "react";
import './about.css'

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


    <main className="flex h-full w-full relative flex-col overflow-hidden">
      <div className={'h-96 overflow-hidden'}>

        <img className={'object-fit object-bottom'} style={{objectPosition: 'bottom'}} width={2000} src={'https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNDUxNDU3fHxlbnwwfHx8fHw%3D&w=1000&q=80'}/>
      </div>
      <div className={'bg-white text-black p-12'}>
        <h1 className={'text-3xl text-center'}>About us</h1>
        <p>
          Words we've stood by since the inception of the Vietnamese Student Association at Baruch College. However, we're more than that!

          As the Most Outstanding Club in Baruch College (Bernie's Award 2015), we do our best to incorporate Vietnamese culture into our ambitious programs. We hope our enthusiasm motivates others to care about who & where they come from, regardless of being Vietnamese or not.

          We're also one big happy family! We share & create stories together, brighten each other up, laugh at silly things, have birthday dinners, and support one another through challenges life brings us. Not to mention the many leadership conferences, road trips, and movie outings together!

          Finally, service is a huge part of who we are as a community. We're all part of something bigger. We assist the immediate NYC area by volunteering at local events with the Chinatown Partnership Local Development Corporation. This also refers to the wide network of VSAs across North America.
        </p>
      </div>

    </main>
  )
}
