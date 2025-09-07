export default function Hero() {
  return (
    <div className="bg-[url(/bread/hero-bread.jpg)] bg-orange-500/40 bg-blend-multiply bg-no-repeat bg-cover bg-center h-[48rem] text-white rounded-md">
      <div className="flex items-end justify-center h-full">
        <div className="p-12">
          <h1 className="text-7xl line-clamp-2 text-center">
            Cozy up with our new <span className="block">bread collection</span>
          </h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
