export default function Header() {
  return (
    <header className="flex items-center justify-between gap-x-6 text-orange-600">
      <div>
        <a
          className="uppercase text-5xl font-bold font-header tracking-wider"
          href="/"
        >
          Munchies
        </a>
      </div>
      <nav className="mr-auto">
        <ul className="flex gap-x-6 font-semibold">
          <li>
            <a href="/">Shop All</a>
          </li>
          <li>
            <a href="/">Munchies Bundle</a>
          </li>
          <li>
            <a href="/">Nutty</a>
          </li>
          <li>
            <a href="/">Cookies Club</a>
          </li>
        </ul>
      </nav>
      <div className="font-semibold gap-x-4">
        <button>
          <span>US[$]</span>
        </button>
        <button>Cart</button>
      </div>
    </header>
  );
}
