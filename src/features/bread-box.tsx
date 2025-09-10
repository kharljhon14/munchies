import Button from '../components/button';
import BreadSliderCard from './bread-slider/bread-slider-card';

export default function BreadBox() {
  return (
    <div className="space-y-6">
      <h2 className=" pt-10 text-orange-500 text-5xl">Build Your Basket</h2>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-[url(/bread/box-bread.jpg)] bg-orange-500/40 bg-blend-multiply bg-no-repeat bg-cover bg-center col-span-2 rounded-lg"></div>
        <div className="col-span-1 flex flex-col gap-y-6 justify-center">
          <BreadSliderCard
            name="Golden Crus"
            price="99"
            tag="GoldenLoaf"
            image="/bread/bread-product-5.webp"
          />
          <Button className="text-3xl px-8 uppercase">Shop Now</Button>
        </div>
      </div>
      <div className="border border-orange-500 rounded-lg p-10">
        <p className="text-orange-500 text-center text-4xl line w-1/2 mx-auto leading-14">
          Munchies is a premium flour company dedicated to producing high-quality bread flour for
          both passionate home bakers and seasoned professionals.
        </p>
      </div>
    </div>
  );
}
