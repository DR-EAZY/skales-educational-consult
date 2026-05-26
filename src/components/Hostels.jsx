import { useState } from 'react'

import { motion } from 'framer-motion'

import hostels from '../data/hostels'
import HostelModal from './HostelModal'

function Hostels() {
  const [selectedHostel, setSelectedHostel] =
    useState(null)

  return (
    <section
      id="hostels"
      className="
        py-24
        px-6
        bg-slate-950
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-blue-400 font-semibold">
            Student Apartments
          </p>

          <h2 className="text-4xl font-bold">
            Available Hostels
          </h2>

        </div>

        {/* GRID */}
        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {hostels.map((hostel, index) => (

            <motion.div
              key={hostel.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                overflow-hidden
                hover:border-blue-500
                transition
                cursor-pointer
              "
              onClick={() =>
                setSelectedHostel(hostel)
              }
            >

              {/* IMAGE */}
              <div className="relative">

                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="
                    w-full
                    h-64
                    object-cover
                  "
                />

                <div className="
                  absolute
                  top-4
                  left-4
                  bg-green-500
                  text-white
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  font-semibold
                ">
                  {hostel.status}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="
                  text-2xl
                  font-bold
                  mb-2
                ">
                  {hostel.name}
                </h3>

                <p className="
                  text-blue-400
                  text-sm
                  mb-2
                ">
                  {hostel.location}
                </p>

                <p className="
                  text-slate-400
                  text-sm
                ">
                  {hostel.type}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* MODAL */}
      <HostelModal
        hostel={selectedHostel}
        closeModal={() =>
          setSelectedHostel(null)
        }
      />

    </section>
  )
}

export default Hostels