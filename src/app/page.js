"use client";  // Bu React hooklari faqat mijozda ishlashini bildiradi

import { useState, useEffect } from 'react';
import React from "react";
import Image from "next/image";

function Page() {
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
     
      if (scrollPosition < screenHeight * 0.5) {
        setActiveStep(1);
      } else if (scrollPosition >= screenHeight * 0.5 && scrollPosition < screenHeight * 1.5) {
        setActiveStep(2);
      } else if (scrollPosition >= screenHeight * 1.5 && scrollPosition < screenHeight * 2.5) {
        setActiveStep(3);
      } else {
        setActiveStep(4);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <div className="maindiv mx-auto px-20 pb-[120px] pt-16">
        <div className="flex justify-between">
          <Image
            src="/Logo (2).svg"
            alt="Description of image"
            width={108}
            height={24}
            className="cursor-pointer"
          />

          <div className="flex gap-10">
            <span className="text-lg font-Gilroy cursor-pointer hover:text-orange-700">Equipment</span>
            <span className="text-lg font-Gilroy cursor-pointer hover:text-orange-700">About us</span>
            <span className="text-lg font-Gilroy cursor-pointer hover:text-orange-700">Blog</span>
          </div>

          <div>
            <span className="font-Gilroy cursor-pointer hover:text-orange-700">Account</span>
          </div>
        </div>
        <div className="relative">
      <div className="fixed top-[30%] right-10 transform -translate-y-1/2 p-6 text-white shadow-lg z-10">
        
        <div className="text-center  ">
          <div className="flex flex-col gap-6 ">
          
            <span className={`text-lg ${activeStep === 1 ? 'text-blue-500' : 'text-white'}`}>start</span>
            <span className={`text-lg ${activeStep === 2 ? 'text-blue-500' : 'text-white'}`}>01</span>
            <span className={`text-lg ${activeStep === 3 ? 'text-blue-500' : 'text-white'}`}>02</span>
            <span className={`text-lg ${activeStep === 4 ? 'text-blue-500' : 'text-white'}`}>03</span>
          </div>
        </div>
      </div>
    </div>

        <div className="mx-auto flex flex-row justify-between mt-[198px] mb-[800px] items-center">
          <div className="flex flex-col gap-6 items-center">
            <span className="rotate-90 mb-6 text-lg font-bold cursor-pointer hover:text-orange-700">Follow us</span>
            <Image src="/instagram.png" alt="Description of image" width={24} height={24} />
            <Image src="/twitter.png" alt="Description of image" width={24} height={24} />
          </div>

          <div className="max-w-[950px]">
            <div className="flex flex-row gap-8 items-center">
              <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
              <span className="text-lg font-Gilroy text-[#FBD784] tracking-[6px]"> A Hiking guide </span>
            </div>

            <h1 className="text-[88px] font-thin"> Be prepared for the Mountains and beyond! </h1>

            <div>
              <span className="text-2xl cursor-pointer hover:text-orange-700">scroll down</span>
            </div>
          </div>
          <div className="w-20"></div>
        </div>

        <div className="flex flex-col gap-[200px]">
          <div className="page_1 flex items-center gap-24">
            <div className="max-w-[632px] mx-auto">
              <div className="flex flex-row gap-8 items-center">
                <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
                <span className="text-lg font-Gilroy text-[#FBD784] tracking-[6px]"> GEt Started </span>
              </div>

              <h1 className="text-[64px] font-semibold mt-6 mb-[27px]"> What level of hiker are you? </h1>
              <p className="text-lg font-bold mb-[27px]">
                Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide
                will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker.
                What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?{" "}
              </p>

              <div>
                <span className="text-lg text-[#FBD784] cursor-pointer hover:text-orange-700">read more</span>
              </div>
            </div>

            <Image src="/01.png" alt="Description of image" width={566} height={720} />
          </div>

          <div className="page_2 flex items-center gap-24">
            <Image src="/01 (1).png" alt="Description of image" width={566} height={720} />

            <div className="max-w-[632px] mx-auto">
              <div className="flex flex-row gap-8 items-center">
                <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
                <span className="text-lg font-Gilroy text-[#FBD784] tracking-[6px]"> Hiking Essentials </span>
              </div>

              <h1 className="text-[64px] font-semibold mt-6 mb-[27px]"> Picking the right Hiking Gear! </h1>
              <p className="text-lg font-bold mb-[27px]">
                The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with
                things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular
                clothes, which will get heavy and chafe wif they get sweaty or wet.
              </p>

              <div>
                <span className="text-lg text-[#FBD784] cursor-pointer hover:text-orange-700">read more</span>
              </div>
            </div>
          </div>

          <div className="page_3 flex items-center gap-24">
            <div className="max-w-[632px] mx-auto">
              <div className="flex flex-row gap-8 items-center">
                <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
                <span className="text-lg font-Gilroy text-[#FBD784] tracking-[6px]">where you go is the key</span>
              </div>
              <h1 className="text-[64px] font-semibold mt-6 mb-[27px]"> Understand Your Map & Timing </h1>
              <p className="text-lg font-bold mb-[27px]">
                To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide,
                study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example,
                I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
              </p>

              <div>
                <span className="text-lg text-[#FBD784] cursor-pointer hover:text-orange-700">read more</span>
              </div>
            </div>
            <Image src="/01 (2).png" width={566} height={720} />
          </div>

          <footer className="flex justify-between">
            <div className="flex flex-col max-w-[355px] gap-6">
              <Image src="/Logo (2).svg" alt="Description of image" width={108} height={24} />
              <p className="text-lg font-bold mb-[98px]">
                Get out there & discover your next slope, mountain & destination!
              </p>
              <span className="text-lg font-medium opacity-50">Copyright 2023 MNTN, Inc. Terms & Privacy</span>
            </div>

            <div className="flex flex-col gap-[16px]">
              <h2 className="text-2xl font-Gilroy text-[#FBD784] mb-2">More on The Blog</h2>
              <span>About MNTN</span>
              <span>Contributors & Writers</span>
              <span>Write For Us</span>
              <span>Contact Us</span>
              <span>Privacy Policy</span>
            </div>

            <div className="flex flex-col gap-[16px]">
              <h2 className="text-2xl font-Gilroy text-[#FBD784] mb-2">More on MNTN</h2>
              <span>The Team</span>
              <span>Jobs</span>
              <span>Press</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Page;
