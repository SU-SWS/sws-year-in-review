'use client';
import React, { useRef } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
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

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button className="absolute top-1/3 right-1" onClick={onClick}>
      <ArrowRightCircleIcon className="w-60 text-teal" />
    </button>
  );
};

const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button className="absolute top-1/3 left-1" onClick={onClick}>
      <ArrowLeftCircleIcon className="w-60 text-teal" />
    </button>
  );
};

const Slideshow = ({ children }: SlideshowProps) => {
  const arrowRef = useRef<SliderRef | null>(null);
  const settings = {
    className: 'center',
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="relative w-full">
      <Slider ref={arrowRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Slideshow;
