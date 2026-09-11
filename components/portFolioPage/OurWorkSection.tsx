"use client";
import { OurWorkData } from "@/constantData/ourWorkData";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import CloudinaryImage from "../mediaAssets/CloudinaryImage";

export default function OurWorkSection() {
  return (
    <>
      <section className="bg-gray-200">
        <div className="container mx-auto px-3 py-20">
          <div className="text-center"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {OurWorkData.map((work) => (
              <div
                key={work.id}
                className=" relative border min-h-72  rounded-sm"
              >
                <CloudinaryImage
                  imgSrc={work.imgSrc}
                  height={400}
                  width={400}
                  alt={`${work.name} image`}
                  classNames={
                    "object-cover absolute rounded-sm top-0 h-full w-full z-10"
                  }
                />
                <div className="absolute bottom-0 bg-fuchsia-100/50 backdrop-blur-md rounded-tr-sm  z-20">
                  <div className="relative px-2 py-1 text-slate-900">
                    <h3 className="text-sm font-semibold drop-shadow-md">
                      {work.name}
                    </h3>
                    <Drawer swipeDirection="right" showSwipeHandle>
                      <DrawerTrigger
                        render={
                          <Button
                            className="rounded-sm hover:cursor-pointer"
                            variant={"secondary"}
                          >
                            Learn More
                          </Button>
                        }
                      />
                      <DrawerContent className="min-h-[75dvh]  md:min-w-2xl lg:min-w-7xl mx-auto backdrop-blur-md rounded-tr-none rounded-br-none">
                        <DrawerHeader>
                          <DrawerTitle></DrawerTitle>
                          <DrawerDescription></DrawerDescription>
                        </DrawerHeader>
                        <div className="overflow-y-auto">
                          <div className="relative min-h-[50dvh]  max-w-sm md:max-w-6xl mx-auto">
                            <CloudinaryImage
                              imgSrc={work.imgSrc}
                              height={400}
                              width={400}
                              alt={`${work.name} image`}
                              classNames={
                                "object-cover h-[50dvh] w-[85dvw] lg:max-w-[70dvw] rounded-sm"
                              }
                            />
                          </div>
                          <div className="max-w-7xl lg:ml-10 px-4 py-12 ">
                            <h4 className="text-2xl md:text-4xl font-semibold pb-4">
                              {work.name}
                            </h4>
                            <ul className="leading-8 list-disc">
                              <li className="ml-2">{work.textOne}</li>
                              <li className="ml-2">{work.textTwo}</li>
                              <li className="ml-2">{work.textThree}</li>
                              <li className="ml-2">{work.textFour}</li>
                              <li className="ml-2">{work.textFive}</li>
                            </ul>
                          </div>
                        </div>
                        <DrawerFooter className="grid place-content-center">
                          <DrawerClose
                            render={
                              <Button className="w-30 mx-ato cursor-pointer rounded-sm">
                                Close
                              </Button>
                            }
                          />
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
