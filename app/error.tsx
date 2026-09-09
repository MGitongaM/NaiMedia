"use client";

import CloudinaryImage from "@/components/mediaAssets/CloudinaryImage";

export default function errorPage() {
  return (
    <>
      <section className="">
        <div className="h-[80dvh] grid place-content-center my-20 px-4">
          <CloudinaryImage
            imgSrc={"error"}
            height={400}
            width={400}
            alt={`error image`}
            classNames={"object-cover h-full w-40 mx-auto "}
          />
          <p className="text-sm text-center bg-red-50 px-2 py-1 rounded font-semibold mt-8">
            Ooops Looks Like we have an error, please fresh the page or try
            again later
          </p>
        </div>
      </section>
    </>
  );
}
