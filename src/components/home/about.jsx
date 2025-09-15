export default function About() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6">
        <h1 className="text-gray-800 text-3xl md:text-4xl font-bold text-center">
          Tentang MERN Stack
        </h1>
        <p className="mt-4 text-gray-700 text-center max-w-2xl">
          MERN Stack adalah kombinasi teknologi modern (MongoDB, Express, React,
          Node.js) yang digunakan untuk membangun aplikasi web fullstack yang
          cepat, skalabel, dan efisien.
        </p>

        {/* Grid visi & misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-gray-800 text-xl font-bold mb-2">Visi Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              Menjadi pemimpin dalam industri teknologi dengan inovasi dan
              kualitas, serta memberikan dampak positif bagi masyarakat.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-gray-800 text-xl font-bold mb-2">Misi Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              Memberikan layanan terbaik, membangun solusi digital yang efisien,
              dan membantu pelanggan berkembang dengan teknologi modern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
