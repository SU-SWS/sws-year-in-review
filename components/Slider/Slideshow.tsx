'use client';
import React, { useRef, useState } from 'react';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';

export type SlideshowProps = {
  children: React.ReactNode;
};

type SliderRef = Slider | null;

export default function Slideshow({ children }: SlideshowProps) {
  const arrowRef = useRef<SliderRef | null>(null);
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
  };
  return (
    <div className="relative w-full">
      <Slider ref={arrowRef} {...settings}>
        {children}
      </Slider>
      <div>
`      <button className="absolute top-1/3 right-1" 
        onClick={() => arrowRef && arrowRef.current?.slickPrev()}>
        <ArrowRightCircleIcon className="w-60 text-teal" />
      </button>
      <button className="absolute top-1/3 left-1" 
        onClick={() => arrowRef && arrowRef.current?.slickNext()}>
        <ArrowLeftCircleIcon className="w-60 text-teal" />
      </button>`
      </div>
    </div>
  );
}
