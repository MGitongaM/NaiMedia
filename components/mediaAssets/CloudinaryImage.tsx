"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryProps {
  imgSrc: string;
  width: number;
  height: number;
  alt: string;
  classNames:string
}

export default function CloudinaryImage({
  imgSrc,
  width,
  height,
  alt,
  classNames
}: CloudinaryProps) {
  return (
    <>
      <CldImage src={imgSrc} width={width} height={height} alt={alt}  className={classNames}/>
    </>
  );
}
