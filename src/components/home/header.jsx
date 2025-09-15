import { useState } from "react";
import LoginModal from "../../pages/auth/loginModal";
import RegisterModal from "../../pages/auth/registerModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <header className="container mx-auto bg-blue-500 p-4 rounded-lg shadow px-4 my-6">
      <nav className="flex justify-between items-center">
        <div>
          <p className="text-white font-bold text-xl">Logo</p>
        </div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
          >
            Login
          </button>
          <button
            onClick={() => setIsRegisterModalOpen(true)}
            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-blue-600 p-4 rounded-lg shadow animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white hover:text-gray-200">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Contact
            </a>
            <button
              onClick={() => {
                setIsLoginModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsRegisterModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Register
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </header>
  );
}
