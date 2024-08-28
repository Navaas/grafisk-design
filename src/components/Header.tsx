import "../styles.css";

function Header() {
  return (
    <nav className="p-4 bg-[#798E6F] flex flex-col justify-between md:flex-row">
      <div className="flex items-center justify-between">
        <span>Logga</span>
        <span className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </div>
      <div className="hidden md:flex md:list-none md:gap-14 md:items-center">
        <li className="import-font cursor-pointer text-white">Erbjudande</li>
        <li className="import-font cursor-pointer text-white">Paket</li>
        <li className="import-font cursor-pointer text-white">Spa</li>
        <li className="import-font cursor-pointer text-white">Mat & Dryck</li>
        <li className="import-font cursor-pointer text-white">Konferens</li>
      </div>
      <div>
        <button className="bg-[#FAA916] text-white p-2 rounded-md w-20 hidden md:block">
          Boka
        </button>
      </div>
    </nav>
  );
}

export default Header;
