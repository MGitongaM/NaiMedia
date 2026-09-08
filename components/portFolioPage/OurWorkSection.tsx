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
                {/* <Image
                  src={work.imgSrc}
                  alt={work.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover absolute rounded-sm top-0 z-10"
                /> */}
                 <CloudinaryImage
                                          imgSrc={work.imgSrc}
                                          height={400}
                                          width={400}
                                          alt={`${work.name} image`}
                                          classNames={"object-cover absolute rounded-sm top-0 h-full w-full z-10"}
                                        />
                <div className="absolute bottom-0 bg-amber-100 rounded-tr-sm  z-20">
                  <div className="relative px-2 py-1 text-slate-900">
                    <h3 className="text-sm font-semibold drop-shadow-md">
                      {work.name}
                    </h3>
                    <Drawer swipeDirection="right" showSwipeHandle>
                      <DrawerTrigger
                        render={
                          <Button className="rounded-sm hover:cursor-pointer" variant={"secondary"}>Learn More</Button>
                        }
                      />
                      <DrawerContent className="min-h-[75dvh] min-w-7xl mx-auto">
                        <DrawerHeader>
                          <DrawerTitle></DrawerTitle>
                          <DrawerDescription></DrawerDescription>
                        </DrawerHeader>
                        <div className="relative min-h-[50dvh] max-w-sm md:max-w-6xl mx-auto">
                          {/* <Image
                            src={work.imgSrc}
                            alt={work.name}
                            fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover size-auto rounded-sm"
                          /> */}
                            <CloudinaryImage
                                          imgSrc={work.imgSrc}
                                          height={400}
                                          width={400}
                                          alt={`${work.name} image`}
                                          classNames={"object-cover h-[50dvh] w-[70dvw] rounded-sm"}
                                        />
                        </div>
                        <div className="max-w-4xl ml-10 px-4 py-12 ">
                            <h4 className="text-4xl font-semibold pb-4">{work.name}</h4>
                          <p className="leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque, corporis fugit optio est repellendus
                            sunt repudiandae modi ea nostrum mollitia maxime
                            non, beatae similique ullam qui eveniet sed numquam
                            labore quo omnis? Voluptas fuga magnam doloremque
                            quam soluta eius tenetur, vero perferendis
                            architecto veniam nostrum porro laudantium, dolorem
                            eos harum deleniti est quis inventore neque
                            provident? Dolores quaerat repellat tenetur
                            consequatur labore autem impedit voluptatum at
                            itaque officiis perferendis ex sint voluptate quos
                            neque minima reprehenderit, ducimus doloribus sed
                            exercitationem porro facilis quasi blanditiis?
                            Alias, voluptatum. Recusandae fugit delectus rerum
                            vero, quia, atque explicabo officiis nobis
                            architecto vel, asperiores magnam.
                          </p>
                        </div>
                        <DrawerFooter className="grid place-content-center">
                          <DrawerClose render={<Button className="w-30 mx-ato">Close</Button>} />
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
