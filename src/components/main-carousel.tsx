import * as React from "react"
import carouselImag1 from "@/assets/corousel-img-1.jpg";
import carouselImag2 from "@/assets/corousel-img-2.jpg";
import carouselImag3 from "@/assets/corousel-img-3.jpg";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const MainCarousel = () => {
    return (
        <div className="grid place-items-center gap-2">
            <Carousel className="w-full">
                <CarouselContent className="md:basis-1/2 lg:basis-1/2">
                    {/* {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-2xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))} */}
                    <CarouselItem className="pl-1">
                        <div className="p-1 flex flex-row items-center justify-around">
                            <Image className="w-[400px]" src={carouselImag1} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag2} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag3} alt="img1" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1">
                        <div className="p-1 flex flex-row items-center justify-around">
                            <Image className="w-[400px]" src={carouselImag1} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag2} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag3} alt="img1" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1">
                        <div className="p-1 flex flex-row items-center justify-around">
                            <Image className="w-[400px]" src={carouselImag1} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag2} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag3} alt="img1" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1">
                        <div className="p-1 flex flex-row items-center justify-around">
                            <Image className="w-[400px]" src={carouselImag1} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag2} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag3} alt="img1" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1">
                        <div className="p-1 flex flex-row items-center justify-around">
                            <Image className="w-[400px]" src={carouselImag1} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag2} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag3} alt="img1" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1">
                        <div className="p-1 flex flex-row items-center justify-around">
                            <Image className="w-[400px]" src={carouselImag1} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag2} alt="img1" />
                            <Image className="w-[400px]" src={carouselImag3} alt="img1" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default MainCarousel;