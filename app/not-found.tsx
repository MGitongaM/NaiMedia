"use client";

import CloudinaryImage from "@/components/mediaAssets/CloudinaryImage";

export default function NotFoundPage() {
  return (
    <>
      <section className="">
        <div className="h-[80dvh] grid place-content-center my-20 px-4">
          <CloudinaryImage
            imgSrc={"404-error"}
            height={400}
            width={400}
            alt={`404 image`}
            classNames={"object-cover h-80 w-full "}
          />
          <h2 className="text-lg text-center bg-red-50 px-2 py-1 rounded font-semibold mt-8">Ooops Page Not Found</h2>
        </div>
      </section>
    </>
  );
}
