import hostels from '../data/hostels'

function Hostels() {
  return (
    <section
      id="hostels"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold">
            Student Apartments
          </p>

          <h2 className="text-4xl font-bold">
            Available Hostels
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {hostels.map((hostel) => (
            <div
              key={hostel.name}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
            >

              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {hostel.name}
                </h3>

                <p className="text-slate-400 text-sm mb-2">
                  {hostel.location}
                </p>

                <p className="text-blue-400 text-sm">
                  {hostel.type}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Hostels