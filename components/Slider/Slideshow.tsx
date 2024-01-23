'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';

export type SlideshowProps = {
  children: React.ReactNode;
};

function NextArrow() {
  return (
    <button className="absolute top-1/2 right--1">
      <ArrowRightCircleIcon className="w-60 text-teal" />
    </button>
  );
}

function PrevArrow() {
  return (
    <button className="absolute top-1/2 left--1">
      <ArrowLeftCircleIcon className="w-60 text-teal" />
    </button>
  );
}

export default function Slideshow({ children }: SlideshowProps) {
  const arrowRef = useRef(null);
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
`      <button className="absolute top-1/2 right-1" 
        onClick={() => arrowRef.current.slickPrev()}>
        <ArrowRightCircleIcon className="w-60 text-teal" />
      </button>
      <button className="absolute top-1/2 left-1" 
        onClick={() => arrowRef.current.slickNext()}>
        <ArrowLeftCircleIcon className="w-60 text-teal" />
      </button>`
      </div>
    </div>
  );
}
