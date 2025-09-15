export default function ContactLight() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-gray-800 text-3xl md:text-4xl font-bold">
          Hubungi Kami
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Punya pertanyaan atau ingin bekerja sama? Silakan isi formulir di
          bawah ini, kami akan segera menghubungi Anda.
        </p>

        {/* Contact Form */}
        <form className="mt-10 grid grid-cols-1 gap-6 text-left">
          <div>
            <label className="block text-gray-700 font-medium">Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              className="mt-2 w-full p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="mt-2 w-full p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Pesan</label>
            <textarea
              rows="5"
              placeholder="Tulis pesan Anda"
              className="mt-2 w-full p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium py-3 rounded-lg"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
