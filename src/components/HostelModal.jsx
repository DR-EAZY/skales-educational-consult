import { X } from 'lucide-react'

import businessInfo from '../data/businessInfo'

function HostelModal({ hostel, closeModal }) {
  if (!hostel) return null

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/70
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
        px-4
      "
    >

      <div
        className="
          bg-slate-950
          border
          border-slate-800
          rounded-3xl
          overflow-hidden
          max-w-2xl
          w-full
          relative
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={closeModal}
          className="
            absolute
            top-4
            right-4
            bg-slate-900
            p-2
            rounded-full
            hover:bg-slate-800
          "
        >
          <X size={20} />
        </button>

        {/* IMAGE */}
        <img
          src={hostel.image}
          alt={hostel.name}
          className="
            w-full
            h-72
            object-cover
          "
        />

        {/* CONTENT */}
        <div className="p-8">

          <div className="
            flex
            items-center
            justify-between
            mb-4
          ">

            <h2 className="
              text-3xl
              font-bold
            ">
              {hostel.name}
            </h2>

            <div className="
              bg-green-500
              text-white
              text-sm
              px-4
              py-1
              rounded-full
              font-semibold
            ">
              {hostel.status}
            </div>

          </div>

          <p className="
            text-blue-400
            mb-3
          ">
            {hostel.location}
          </p>

          <p className="
            text-slate-400
            mb-3
          ">
            {hostel.type}
          </p>

          <p className="
            text-slate-300
            leading-relaxed
            mb-8
          ">
            {hostel.description}
          </p>

          <a
            href={`https://wa.me/${businessInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              bg-blue-600
              hover:bg-blue-700
              px-6
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Make Inquiry
          </a>

        </div>

      </div>

    </div>
  )
}

export default HostelModal