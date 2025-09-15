import { FaBars, FaBell, FaUser } from "react-icons/fa";

export default function Header({ toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button className="lg:hidden mr-4" onClick={toggleSidebar}>
            <FaBars className="text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold">Selamat Datang di Dashboard</h2>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <FaBell className="text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <FaUser className="text-blue-600" />
            </div>
            <span className="ml-2 text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
