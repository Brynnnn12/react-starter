// Hero.jsx - Bagian atas hero
export default function Hero() {
  return (
    <section className="py-20 flex flex-col items-center justify-center shadow-lg bg-white">
      <div className="max-w-4xl text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Selamat Datang di MERN Stack
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600">
          Kami senang Anda di sini. Jelajahi layanan dan penawaran kami.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-6 rounded-lg shadow-md transition duration-300">
          Pelajari Lebih Lanjut
        </button>
      </div>

      {/* Grid Layanan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6 w-full max-w-6xl">
        <div className="bg-gray-50 p-6 shadow rounded-xl hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Layanan 1</h2>
          <p className="mt-3 text-gray-600">
            Deskripsi singkat tentang layanan 1.
          </p>
        </div>
        <div className="bg-gray-50 p-6 shadow rounded-xl hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Layanan 2</h2>
          <p className="mt-3 text-gray-600">
            Deskripsi singkat tentang layanan 2.
          </p>
        </div>
        <div className="bg-gray-50 p-6 shadow rounded-xl hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Layanan 3</h2>
          <p className="mt-3 text-gray-600">
            Deskripsi singkat tentang layanan 3.
          </p>
        </div>
      </div>
    </section>
  );
}
