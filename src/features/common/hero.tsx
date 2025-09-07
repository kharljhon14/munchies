import Button from '../../components/button';

export default function Hero() {
  return (
    <div className="bg-[url(/bread/hero-bread.jpg)] bg-orange-500/40 bg-blend-multiply bg-no-repeat bg-cover bg-center h-[48rem] text-white rounded-lg">
      <div className="flex items-end justify-center h-full">
        <div className="p-20 flex items-center flex-col gap-y-6">
          <h1 className="text-8xl line-clamp-2 text-center">
            Cozy up with our new <span className="block">bread collection</span>
          </h1>
          <Button
            variant="secondary"
            className="text-4xl px-8"
          >
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
}
