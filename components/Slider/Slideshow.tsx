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
    <button
      className="absolute top-1/2 right--1"
    >
      <ArrowRightCircleIcon className="w-60 text-teal" />
    </button>
  );
}

function PrevArrow() {
  return (
    <button
      className="absolute top-1/2 left--1"
    >
      <ArrowLeftCircleIcon className="w-60 text-teal" />
    </button>
  );
}

export default function Slideshow({ children }: SlideshowProps) {
  const arrowRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  var settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
  };

  const modalSliderSettings = {
    nextArrow: (
      <button type="button">
        <span className="sr-only">Next Slide</span>
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
    ),
    prevArrow: (
      <button type="button">
        <span className="sr-only">Previous Slide</span>
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
    ),
    afterChange: (i) => {
      setActiveSlide(i);
    },
    initialSlide: activeSlide,
  };

  return (
    <div className="relative bg-white">
      <Slider ref={arrowRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
}
