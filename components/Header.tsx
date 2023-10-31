import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
function Header() {
  return (
    <header>
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg"
        alt="trello logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
      <div>
        {/* Search Box */}
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <form action="">
          <input type="text" />
          <button hidden>Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
