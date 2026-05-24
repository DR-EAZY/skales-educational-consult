import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import businessInfo from '../data/businessInfo'

const rotatingTexts = [
  'Admission Processing',
  'Hostel Assistance',
  'Student Consultation',
  'School Registration',
]

function Hero() {
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) =>
        prev === rotatingTexts.length - 1
          ? 0
          : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="
      min-h-screen
      flex
      items-center
      px-6
      pt-28
      bg-gradient-to-b
      from-slate-950
      to-slate-900
    ">

      <div className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        items-center
      ">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* <img
            src={businessInfo.logo}
            alt={businessInfo.businessName}
            className="w-24 mb-6 rounded-full"
          /> */}

          <p className="
            text-blue-400
            font-semibold
            mb-4
          ">
            Welcome To
          </p>

          <h1 className="
            text-5xl
            lg:text-7xl
            font-extrabold
            leading-tight
            mb-6
          ">
            {businessInfo.businessName}
          </h1>

          <div className="h-16">

            <motion.h2
              key={rotatingTexts[currentText]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                text-2xl
                lg:text-4xl
                font-bold
                text-blue-400
              "
            >
              {rotatingTexts[currentText]}
            </motion.h2>

          </div>

          <p className="
            text-slate-400
            text-lg
            mt-6
            mb-10
            max-w-xl
          ">
            {businessInfo.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <a
              href={`https://wa.me/${businessInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="
                bg-blue-600
                hover:bg-blue-700
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
              "
            >
              Contact Us
            </a>

            <a
              href="#services"
              className="
                border
                border-slate-700
                hover:border-blue-500
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
              "
            >
              Our Services
            </a>

          </div>

          {/* STATS */}
          <div className="
            flex
            gap-10
            mt-14
            flex-wrap
          ">

            <div>
              <h3 className="text-3xl font-bold text-white">
                500+
              </h3>

              <p className="text-slate-400 text-sm">
                Students Helped
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                100+
              </h3>

              <p className="text-slate-400 text-sm">
                Hostel Assistance
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                24/7
              </h3>

              <p className="text-slate-400 text-sm">
                Support
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src={businessInfo.heroImage}
            alt="students"
            className="
              rounded-3xl
              shadow-2xl
              border
              border-slate-800
            "
          />

        </motion.div>

      </div>
    </section>
  )
}

export default Hero