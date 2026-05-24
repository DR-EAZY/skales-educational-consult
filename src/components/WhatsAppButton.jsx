import { FaWhatsapp } from 'react-icons/fa'
import businessInfo from '../data/businessInfo'

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${businessInfo.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-2xl
        transition
        duration-300
      "
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsAppButton