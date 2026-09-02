import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 sm:px-12 flex flex-col items-start max-w-7xl mx-auto w-full">
        <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-4">
          Premier Event Management &middot; Hyderabad
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight font-serif">
          Make moments that <em className="italic text-blue-600">move</em> people.
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-10">
          Step into experiences where imagination meets meticulous craft — stage by stage, light by light, story by story. 5M Events blends strategy, design, and flawless production to transform your vision into an unforgettable show.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md">
            Plan Your Event &rarr;
          </Link>
          <Link href="/portfolio" className="px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition font-medium">
            View Our Work
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-serif text-2xl font-bold text-gray-900 mb-4">Personable Team</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              A friendly, detail-obsessed crew that listens first and plans with clarity — so your event feels uniquely yours.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-serif text-2xl font-bold text-gray-900 mb-4">Unforgettable Experience</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              From immersive décor and precision lighting to live entertainment — every element is designed to spark emotion.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-serif text-2xl font-bold text-gray-900 mb-4">Flawless Execution</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We handle the logistics seamlessly, allowing you to be a guest at your own event while we manage the behind-the-scenes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
