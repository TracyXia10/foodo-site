export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Foodo Logo"
              width={36}
              height={36}
            />
            <span className="font-semibold text-lg">Foodo</span>
          </div>

          {/* Tabs */}
          <nav className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-gray-500 transition">Store</a>
            <a href="#" className="hover:text-gray-500 transition">Design</a>
            <a href="#" className="hover:text-gray-500 transition">Policy</a>
            <a href="#" className="hover:text-gray-500 transition">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 gap-4">

        <h1 className="text-5xl font-bold">
          Foodo
        </h1>

        <p className="text-xl text-gray-600">
          RJ loves you FC.
        </p>

        <img
          src="/pet1.jpg"
          alt="Pet"
          width={260}
          className="rounded-2xl shadow-lg"
        />

        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition mt-2">
          Coming Soon
        </button>

      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-20 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">Design</h3>
          <p className="text-gray-500">Designed by FC.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Quality</h3>
          <p className="text-gray-500">Best quality clothing.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Love</h3>
          <p className="text-gray-500">Make your pet hugged by love.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-10">
        © 2026 Foodo. All rights reserved.
      </footer>

    </main>
  );
}