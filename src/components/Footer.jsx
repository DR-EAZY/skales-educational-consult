import businessInfo from '../data/businessInfo'

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BUSINESS */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {businessInfo.businessName}
          </h2>

          <p className="text-slate-400 text-sm">
            {businessInfo.description}
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-slate-400 text-sm">
            <a href="#services" className="hover:text-white">
              Services
            </a>

            <a href="#hostels" className="hover:text-white">
              Hostels
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-slate-400 text-sm">
            <p>{businessInfo.phone}</p>

            <p>{businessInfo.email}</p>

            <p>{businessInfo.address}</p>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer