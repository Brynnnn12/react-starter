import React from "react";

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Kartu Statistik */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <i className="fas fa-users text-xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-gray-500">Total Pengguna</p>
            <h3 className="text-2xl font-bold">1,248</h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-green-500 text-sm">
            <i className="fas fa-arrow-up"></i> 12% sejak bulan lalu
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <i className="fas fa-shopping-cart text-xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-gray-500">Total Pesanan</p>
            <h3 className="text-2xl font-bold">356</h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-green-500 text-sm">
            <i className="fas fa-arrow-up"></i> 8% sejak bulan lalu
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <i className="fas fa-dollar-sign text-xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-gray-500">Pendapatan</p>
            <h3 className="text-2xl font-bold">$12,845</h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-red-500 text-sm">
            <i className="fas fa-arrow-down"></i> 3% sejak bulan lalu
          </p>
        </div>
      </div>

      {/* Grafik */}
      <div className="md:col-span-2 lg:col-span-2 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Statistik Pengunjung</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Grafik akan ditampilkan di sini</p>
        </div>
      </div>

      {/* Aktivitas Terbaru */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h3>
        <ul className="space-y-4">
          <li>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <i className="fas fa-user-plus text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium">Pengguna baru terdaftar</p>
                <p className="text-xs text-gray-500">2 menit yang lalu</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <i className="fas fa-shopping-cart text-green-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium">Pesanan baru diterima</p>
                <p className="text-xs text-gray-500">15 menit yang lalu</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <i className="fas fa-chart-line text-purple-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium">Laporan bulanan dibuat</p>
                <p className="text-xs text-gray-500">1 jam yang lalu</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;
