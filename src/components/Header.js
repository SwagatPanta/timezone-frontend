import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          Kathmandu Blog
        </h1>
        <nav className="space-x-4 text-sm sm:text-base">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
          <span>|</span>
          <Link
            to="/add"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Add Post
          </Link>
        </nav>
      </div>
    </header>
  );
}
