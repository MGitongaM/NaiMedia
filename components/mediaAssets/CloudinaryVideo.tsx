"use client";
"use client"

import { CldVideoPlayer as CldVideoPlayerDefault, CldVideoPlayerProps } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
 


export default function CloudinaryVideo(props:CldVideoPlayerProps) {
  return (
    <>
    <CldVideoPlayerDefault {...props}/>
    </>
  )
}

// import { CldVideoPlayer as CldVideoPlayerDefault } from "next-cloudinary";
// import 'next-cloudinary/dist/cld-video-player.css';


// interface CloudinaryVideoProps {
//   imgSrc: string;
//   width: number;
//   height: number;
//   autoPlay: string;
//   loop: boolean;
//   muted: boolean;
//   controls: boolean;
//   classNames: string;
// }

// export default function CloudinaryVideo({
//   imgSrc,
//   width,
//   height,
//   autoPlay,
//   loop,
//   muted,
//   controls,
//   classNames,
// }: CloudinaryVideoProps) {
//   return (
//     <>
//       <CldVideoPlayerDefault
//         src={imgSrc}
//         width={width}
//         height={height}
//         autoPlay={autoPlay}
//         loop={loop}
//         muted={muted}
//         controls={controls}
//         transformation={{
//           crop: "fill",
//           aspect: "16:10",
//           width: 1920,
//           height: 1280,
//         }}
//         className={classNames}
//       />
//     </>
//   );
// }
