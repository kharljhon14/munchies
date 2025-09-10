import BreadSliderCard from './bread-slider-card';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import Button from '../../components/button';

const breadSliders = [
  {
    id: 1,
    name: 'Golden Crust',
    image: '/bread/bread-product-1.webp',
    price: '90',
    tag: 'GoldenLoaf'
  },
  {
    id: 2,
    name: "Panadero's Pride",
    image: '/bread/bread-product-2.webp',
    price: '120',
    tag: 'MorningLoaf'
  },
  {
    id: 3,
    name: 'Harvest Loaf',
    image: '/bread/bread-product-3.webp',
    price: '100',
    tag: 'SoftBite'
  },
  {
    id: 4,
    name: 'Sunrise Bakes',
    image: '/bread/bread-product-4.webp',
    price: '110',
    tag: 'DailyBreadJoy'
  },
  {
    id: 5,
    name: 'Bite Of Comfort',
    image: '/bread/bread-product-5.webp',
    price: '100',
    tag: 'FreshFromTheOven'
  }
];

export default function BreadSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    skipSnaps: false,
    loop: true
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-5xl text-orange-500">Freshly Baked</h2>
        <div className="">
          <Button
            className="h-8 w-8 mr-2"
            onClick={scrollPrev}
          >
            <ChevronLeft className="text-lg" />
          </Button>
          <Button
            className="h-8 w-8"
            onClick={scrollNext}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {breadSliders.map((bread) => (
            <BreadSliderCard
              key={bread.id}
              image={bread.image}
              name={bread.name}
              tag={bread.tag}
              price={bread.price}
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Button className="py-4 w-full text-4xl uppercase">Where to buy</Button>
      </div>
    </div>
  );
}
