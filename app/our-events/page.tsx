'use client'
import Image from 'next/image'
import Header from '@/app/components/header/header'
import { Fade } from "react-slideshow-image";
import {useEffect, useState} from "react";
import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';

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


  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };


  const events = []

  return (


    <main className="bg-white flex w-full relative flex-col items-center justify-center overflow-hidden">
      { !events.length && <p className={'text-black'}>No new events</p>}
      <div className={'w-3/4 h-128'}>
        <Calendar onPanelChange={onPanelChange} />
      </div>


    </main>
  )
}
