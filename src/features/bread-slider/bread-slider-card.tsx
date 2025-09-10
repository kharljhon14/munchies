interface Props {
  image: string;
  price: string;
  name: string;
  tag: string;
}

export default function BreadSliderCard({ image, price, name, tag }: Props) {
  return (
    <div
      className="shrink-0
                basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 px-1"
    >
      <div className="rounded-lg overflow-hidden relative h-[34rem]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image}
          />
        </div>
        <p className="text-orange-500 text-xl text-right absolute top-4 right-4">{tag}</p>
      </div>
      <div className="text-orange-500 flex items-center flex-col mt-4">
        <h3 className="text-lg">{name}</h3>
        <p className="text-sm">from &#8369;{price}</p>
      </div>
    </div>
  );
}
