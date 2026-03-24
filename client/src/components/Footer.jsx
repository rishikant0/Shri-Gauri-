import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#1F3A52] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-[#D8B384]">ABHISHEK</span> JAISWAL
          </h2>

          <p className="text-lg mb-1">
            Hospitality Business & Revenue Consultant
          </p>

          <p className="text-sm mb-6 text-gray-300">
            New Delhi, India
          </p>

          {/* Contact Info */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 8808265053</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={18} />
              <span>www.shrigaurihospitality.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>jabhishek287@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>
                H-90, Shakarpur, Laxmi Nagar, Delhi-110092
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (LOGO + BRAND) */}
        <div className="text-center md:text-right">
          <div className="mb-4 flex justify-center md:justify-end">
            <div className="border-2 border-[#D8B384] p-4 rounded-lg">
              🏨
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-[#D8B384]">
            Shri Gauri Hospitality
          </h3>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-[#D8B384] mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Shri Gauri Hospitality. All rights reserved.
      </div>
    </div>
  );
}