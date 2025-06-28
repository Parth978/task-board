"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "@/data/companies";
import Image from "next/image";

interface Company {
  logo: string;
  id: number;
}

const CompanyCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full py-10 mx-10"
    >
      <CarouselContent className="flex gap-5 sm:gap-24 items-center">
        {companies.map((company: Company) => (
          <CarouselItem key={company.id} className="basis-1/3 lg:basis-1/6">
            <Image
              src={company.logo}
              alt={`Logo of ${company.id}`}
              width={400}
              height={400}
              className="h-9 sm:h-14 w-auto object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyCarousel;
