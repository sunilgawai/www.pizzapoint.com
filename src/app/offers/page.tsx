import OffersCard from "@/components/common/offers-card";

const OffersPage = () => {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <h1 className="text-2xl font-serif mb-2">Offers for you.</h1>
            <div className="grid grid-cols-5 gap-5 gap-y-8 col-span-5">
                <OffersCard />
                <OffersCard />
                <OffersCard />
            </div>
        </section>
    )
}

export default OffersPage;