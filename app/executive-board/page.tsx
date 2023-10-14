'use client'
import Image from 'next/image'
import Header from '@/app/components/header/header'
import { Fade } from "react-slideshow-image";
import {useEffect, useState} from "react";
import type { Dayjs } from 'dayjs';
import './executive.css'

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });



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

  const people = [{
    name: "LeAnn Mai",
    title: 'President',
    majorminor: "English with a concentration in Creative Writing",
    year: '2024',
    food: '',
    memory: ''
  },{
    name: "Jayine Nguyen",
    title: 'Marketing Director',
    majorminor: "Integrated Design & Media with a minor in Korean",
    year: '2025',
    food: '',
    memory: ''
  },{
    name: "LeAnn Mai",
    majorminor: "English with a concentration in Creative Writing",
    year: '2024',
    food: '',
    memory: ''
  }
  ]


  return (


    <main className="bg-lightpurple flex w-full">
      <div className='flex flex-col exec-contain'>
        { people.map((person, index) => {
          return(
              <div key={index} className={'flex text-black'}>
                <div className={"item"}>
                  <div className="polaroid"><img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                    <div className="caption"></div>
                  </div>

                </div>
                <div className={'flex flex-col justify-center items-center pl-8 pr-8 w-3/4'}>
                  <h1 className='text-purple text-2xl'>{person.title}</h1><br/>
                  <p className={'text-purple'}>
                    Name: {person.name}<br/>
                    Major/Minor: {person.majorminor}<br/>
                    Year: {person.year}<br/>
                    Favorite Vietnamese Food: {person.food}<br/>
                    Favorite VSA memory: {person.memory}<br/>
                  </p>
                </div>
              </div>
          )
        }) }



      </div>



    </main>
  )
}
