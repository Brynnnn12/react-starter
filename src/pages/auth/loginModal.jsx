export default function LoginModal({ isOpen, onClose }) {
  // jika modal tidak terbuka, kembalikan null
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/20 backdrop-blur-xs">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
              Login
            </button>
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800 transition"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
