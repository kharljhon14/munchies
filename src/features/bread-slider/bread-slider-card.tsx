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
      <div
        className={`bg-orange-500/20 bg-blend-multiply bg-[url(/bread/${image})] rounded-lg p-2 bg-cover bg-center bg-no-repeat h-[34rem] w-full `}
      >
        <p className="text-orange-500 text-xl text-right">{tag}</p>
      </div>
      <div className="text-orange-500 flex items-center flex-col mt-4">
        <h3 className="text-lg">{name}</h3>
        <p className="text-sm">from &#8369;{price}</p>
      </div>
    </div>
  );
}
