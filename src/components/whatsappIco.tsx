import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon({ phone }: { phone: string }) {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phone}`}
      className="fixed bg-[#006a3d] rounded-full p-2 bottom-8 right-8 z-[99]"
    >
      <FaWhatsapp className=" text-white" size={40} />
    </a>
  );
}
