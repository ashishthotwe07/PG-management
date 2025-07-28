import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-700">🏠 Smart Hostel</h1>
        <nav className="space-x-4">
          <button className="text-blue-700 hover:underline font-medium">Login</button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Get Started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6">
            Simplify Hostel & PG Management
          </h2>
          <p className="text-lg mb-6">
            Manage rooms, rent, complaints, attendance, and mess menus with ease. One platform for students, PG owners, and admins.
          </p>
          <button className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
            Start Managing Now
          </button>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
            alt="hostel illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">What You Can Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ['🛏️ Room Management', 'Track occupancy, availability, and bookings.'],
            ['💸 Rent Tracking', 'Pay, track, and download rent receipts easily.'],
            ['📣 Complaints & Support', 'Submit and resolve issues quickly.'],
            ['🍽️ Mess Menu', 'Check and manage daily menus.'],
            ['📂 KYC Uploads', 'Upload and verify documents securely.'],
            ['📊 Dashboards', 'Admin insights with graphs and stats.'],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-blue-50 rounded-lg p-6 shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">{title}</h4>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-blue-700 text-white">
        © {new Date().getFullYear()} Smart Hostel System | Made with ❤️
      </footer>
    </div>
  );
};

export default HomePage;
