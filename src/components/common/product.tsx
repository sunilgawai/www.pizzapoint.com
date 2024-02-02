import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import Image from 'next/image'
import demoImg from '@/assets/corousel-img-1.jpg'
import { Button } from '../ui/button'
import Link from "next/link";

const Product = () => {
    return (
        <Link href={"/products"}>
            <Card className='py-2 rounded-none border-none'>
                <CardContent className='w-full'>
                    <Image src={demoImg} alt='demo' className='hover:animate-in' />
                    <CardTitle className='py-3 font-semibold text-base'>
                        This is a pizza.
                    </CardTitle>
                    <CardDescription className='font-normal text-base'>
                        This is description of this pizza.
                    </CardDescription>
                </CardContent>
                <CardFooter className='flex items-center justify-between'>
                    <Button variant={"outline"} className='border border-gray-300' size="sm">Add to cart</Button>
                    <Button variant={"outline"} className='border border-gray-300' size="sm">Buy Now</Button>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default Product