import {
  FaHome,
  FaTimes,
  FaChartBar,
  FaUserFriends,
  FaCog,
  FaUser,
} from "react-icons/fa";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Overlay untuk mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
                fixed lg:static inset-y-0 left-0 z-30
                w-64 bg-blue-800 text-white
                transform transition-transform duration-300 ease-in-out
                ${
                  isOpen
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
                }
            `}
      >
        <div className="flex items-center justify-between p-5 border-b border-blue-700">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>

        <nav className="mt-6">
          <div className="px-4 mb-10">
            <p className="text-sm text-blue-300 uppercase">Menu Utama</p>
          </div>

          <a
            href="#"
            className="flex items-center px-6 py-3 text-white bg-blue-900 border-l-4 border-blue-300"
          >
            <FaHome className="mr-3" />
            <span>Beranda</span>
          </a>

          <a
            href="#"
            className="flex items-center px-6 py-3 mt-2 text-blue-200 hover:bg-blue-700"
          >
            <FaChartBar className="mr-3" />
            <span>Analitik</span>
          </a>

          <a
            href="#"
            className="flex items-center px-6 py-3 mt-2 text-blue-200 hover:bg-blue-700"
          >
            <FaUserFriends className="mr-3" />
            <span>Pengguna</span>
          </a>

          <a
            href="#"
            className="flex items-center px-6 py-3 mt-2 text-blue-200 hover:bg-blue-700"
          >
            <FaCog className="mr-3" />
            <span>Pengaturan</span>
          </a>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-blue-700">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <FaUser />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-blue-300">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
