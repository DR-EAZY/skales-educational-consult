import services from '../data/services'

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl font-bold">
            What We Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services