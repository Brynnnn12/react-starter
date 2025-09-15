import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+62 812-3456-7890",
    bio: "Frontend Developer dengan passion untuk membuat UI yang menarik dan fungsional.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    joinDate: "15 Januari 2023",
  });

  const [tempData, setTempData] = useState({ ...userData });

  const handleEdit = () => {
    setTempData({ ...userData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData({
      ...tempData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="container mx-auto bg-white p-6 rounded-2xl shadow-lg max-w-4xl">
        {/* Header dengan Tombol Edit */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Profil Pengguna</h1>
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl flex items-center shadow-md transition-all duration-200"
            >
              <i className="fas fa-edit mr-2"></i>
              Edit Profil
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-xl shadow-md transition-all duration-200"
              >
                Simpan Perubahan
              </button>
              <button
                onClick={handleCancel}
                className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white px-4 py-2 rounded-xl shadow-md transition-all duration-200"
              >
                Batal
              </button>
            </div>
          )}
        </div>

        {/* Konten Profil dengan Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Foto Profil & Info Dasar */}
          <div className="md:col-span-1 flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
            <div className="relative mb-5">
              <img
                src={userData.avatar}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
              {isEditing && (
                <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2.5 rounded-full shadow-md hover:bg-blue-700 transition-colors">
                  <i className="fas fa-camera"></i>
                </button>
              )}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              {userData.name}
            </h2>
            <p className="text-gray-600 mb-6">@{userData.username}</p>

            {!isEditing && (
              <div className="w-full">
                <h3 className="font-medium text-gray-700 mb-3 text-center">
                  Bio
                </h3>
                <p className="text-gray-600 bg-white p-4 rounded-xl shadow-sm text-center">
                  {userData.bio}
                </p>
              </div>
            )}
          </div>

          {/* Kolom 2 & 3: Informasi Detail */}
          <div className="md:col-span-2">
            {isEditing ? (
              // Form Edit Mode
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Informasi Pribadi
                  </h2>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={tempData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={tempData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={tempData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={tempData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2 font-medium">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={tempData.bio}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>
              </div>
            ) : (
              // View Mode (Hanya Baca)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Informasi Pribadi
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Nama Lengkap
                  </h3>
                  <p className="text-gray-900 text-lg font-medium">
                    {userData.name}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Username
                  </h3>
                  <p className="text-gray-900 text-lg font-medium">
                    @{userData.username}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Email
                  </h3>
                  <p className="text-gray-900 text-lg font-medium">
                    {userData.email}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Nomor Telepon
                  </h3>
                  <p className="text-gray-900 text-lg font-medium">
                    {userData.phone}
                  </p>
                </div>

                <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Bergabung Pada
                  </h3>
                  <p className="text-gray-900 text-lg font-medium">
                    {userData.joinDate}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
