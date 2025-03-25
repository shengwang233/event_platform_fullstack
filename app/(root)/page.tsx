import Collection from "@/components/shared/Collection";
import SignUpForm from "@/components/shared/SignUpForm";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/database/models/event.model";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {


  const events = await getAllEvents({ query: "", limit: 6, page: 1 })
  console.log(events)

  return (
    <main>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Empowering every child to shine!</h1>
            <p className="p-regular-20 md:p-regular-24">
              Create, book, and attend events designed with love and care for
              special needs children! Join a community that understands,
              supports, and uplifts!
            </p>
            <Button size={"lg"} asChild className="button w-full sm:w-fit">
              <Link href="#event">Explore Now!</Link>
            </Button>
          </div>
          <Image
            src={"/assets/images/Home2.jpg"}
            alt={"home"}
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          ></Image>
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Events Nearby!</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search CategoryFilter
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </main>
  );
}
