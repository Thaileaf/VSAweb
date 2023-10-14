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
    width: 0,
    height: 0,
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
  const minhGala = [{
    year: '2022 - 2023',
    theme: '',
    organizations: '',
    raised: ''
  },{
    year: '2021 - 2022',
    theme: '',
    organizations: '',
    raised: ''
  }]

  const events = [{
    name: 'Xuan Flea Market',
    description: 'Some description'
  },{
    name: 'Tien Len Tournament 2022',
    description: 'Some description'
  },{
    name: 'Summer Roll Making 2022',
    description: 'Some description'
  }]

  return (


    <main className="bg-white flex w-full relative flex-col items-center justify-center overflow-hidden">
      <div className={'text-purple w-1/2 p-16 text-center'}>
        <h1 className={'text-4xl'}>Minh Gala</h1>
        <p className={'p-4'}>
          Min Gala, our biggest annual charity gala, is a night filled with appreciation for ou Vietnamese culture, gratitude and support for our community, but most importantly, treasuring the memories made iwth each other throughout this past year
        </p>

      </div>
      { minhGala.map((event, index) => {
        return(
          <div key={index} className={'flex p-12 pl-64 w-full justify-start items-start'} style={{left: '25%'}}>
            <div className={'flex'}>
              <div className={"item"}>
                <div className="polaroid"><img width={250} height={250}
                                               src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                  <div className="caption"></div>
                </div>

              </div>
              <div className={'flex flex-col justify-center items-center pl-8 pr-8 w-3/4'}>
                <h1 className='text-purple text-2xl'>{event.year}</h1><br/>
                <p className={'text-purple'}>
                  Theme: {event.theme}<br/>
                  Organization we supported: {event.organizations}<br/>
                  How much we raised: {event.raised}<br/>

                </p>
              </div>
            </div>
          </div>
        )
      }) }

      <div className={'text-purple w-1/2 p-16 text-center'}>
        <h1 className={'text-2xl'}>Past Events</h1>

      </div>
      { events.map((event, index) => {
        return(
          <div key={index} className={'flex p-12 pl-64  w-full justify-start items-start'} style={{left: '25%'}}>
            <div className={'flex'}>
              <div className={"item"}>
                <div className="polaroid"><img width={250} height={250}
                                               src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                  <div className="caption"></div>
                </div>

              </div>
              <div className={'flex flex-col justify-center items-center pl-8 pr-8 w-3/4'}>
                <h1 className='text-purple text-2xl'>{event.name}</h1><br/>
                <p className={'text-purple'}>
                  {event.description}<br/>


                </p>
              </div>
            </div>
          </div>
        )
      }) }


      { !events.length && <p className={'text-black'}>No new events</p>}
      <div className={'w-3/4 h-128'}>
        <Calendar onPanelChange={onPanelChange} />
      </div>


    </main>
  )
}
