import businessInfo from '../data/businessInfo'

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa'

import { Mail, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-2xl" />

              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white"
              >
                {businessInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-400 text-xl" />

              <p className="text-slate-300">
                {businessInfo.phone}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-orange-400" />

              <p className="text-slate-300">
                {businessInfo.email}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-red-400" />

              <p className="text-slate-300">
                {businessInfo.address}
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Connect With Us
            </h3>

            <div className="flex gap-6 text-3xl">

              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>

              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

            <p className="text-slate-400 mt-8 text-sm">
              Fast response guaranteed for all student-related inquiries.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact