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
        <li className="import-font cursor-pointer text-white uppercase transform hover:scale-110 hover:font-bold">
          Erbjudande
        </li>
        <li className="import-font cursor-pointer text-white uppercase transform hover:scale-110 hover:font-bold">
          Paket
        </li>
        <li className="import-font cursor-pointer text-white uppercase transform hover:scale-110 hover:font-bold">
          Spa
        </li>
        <li className="import-font cursor-pointer text-white uppercase transform hover:scale-110 hover:font-bold">
          Mat & Dryck
        </li>
        <li className="import-font cursor-pointer text-white uppercase transform hover:scale-110 hover:font-bold">
          Konferens
        </li>
      </div>
      <div>
        <button className="bg-[#FAA916] text-white py-4 px-4 m-2 uppercase drop-shadow-xl hover:opacity-80 transform hover:scale-110 w-20 hidden md:block">
          Boka
        </button>
      </div>
    </nav>
  );
}

export default Header;
