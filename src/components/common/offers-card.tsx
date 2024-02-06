import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
const OffersCard = () => {
    return (
        <Card className='pt-2 rounded-none border-none'>
            <CardHeader className='w-full flex flex-row items-center justify-between'>
                <div className="border-2">
                    <div className="bg-black w-3 h-3 rounded-full"></div>
                </div>
                Payment
            </CardHeader>
            <CardContent className='w-full'>
                {/* <Image src={demoImg} alt='demo' className='hover:animate-in' /> */}
                <CardTitle className='py-2 font-semibold text-base'>
                    Pay by Mobikwik and Get upto150Rs Cashback
                </CardTitle>
                <CardDescription className='font-normal text-base'>
                    {/* <details className='py-2 font-semibold text-base'>
                        <summary>Show more</summary>
                    </details> */}
                    <div className='hidden'>
                        Minimum order value to avail the offer is Rs 299
                        Min assured cashback is Rs 21
                        Use Code: KWIK150 to avail the offer in Mobikwik site
                        Offer valid from 1st - 31st Marc'23
                        Cashback shall be credited within 24 Hours of transaction
                        If the order is canceled or left undelivered at FreshMenu's end, FreshMenu (not MobiKwik) will initiate a refund
                        After the refund is initiated, the amount will be credited back to the wallet within 7-10 days
                        In case of partial refunds/cancellations, the refund amount will be adjusted with the Cashback received on the initial payment
                        Full Cashback will be rolled back in case of a full refund
                        Mobikwik solely reserves the right to change offer terms at any time without prior notice to the customer
                    </div>
                </CardDescription>
            </CardContent>
            <CardFooter className='flex place-items-end justify-between'>
                <Button variant={"outline"} className='border border-gray-300' size="sm">Apply</Button>
            </CardFooter>
        </Card>
    )
}

export default OffersCard;