import { motion } from 'framer-motion'
import testimonials from '../data/testimonials'

function Testimonials() {
  return (
    <section
      className="
        py-24
        px-6
        bg-slate-900
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-blue-400 font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold">
            What Students Say
          </h2>

        </div>

        {/* CARDS */}
        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {testimonials.map((testimonial, index) => (

            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                bg-slate-950
                border
                border-slate-800
                rounded-2xl
                p-8
                hover:border-blue-500
                transition
              "
            >

              <p className="
                text-slate-400
                mb-6
                leading-relaxed
              ">
                "
                {testimonial.message}
                "
              </p>

              <h3 className="
                text-white
                font-semibold
              ">
                {testimonial.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials