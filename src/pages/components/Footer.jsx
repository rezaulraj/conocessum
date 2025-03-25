import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaPlus, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const { t } = useTranslation();
  const navigation = [
    { title: t("menu.home"), path: "/" },
    { title: t("menu.services"), path: "/services" },
    { title: t("menu.candidates"), path: "/candidates" },
    { title: t("menu.clients"), path: "/clients" },
    { title: t("menu.career"), path: "/career" },
    { title: t("menu.about"), path: "/about" },
    { title: t("menu.faq"), path: "/faq" },
    { title: t("menu.contact"), path: "/contact" },
  ];
  return (
    <div className="bg-black/90 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1  custom:grid-cols-2 md:grid-cols-3 items-center justify-center py-8">
          <div>
            <ul className="flex flex-col items-start gap-y-2">
              {navigation.map((item, indx) => (
                <li key={indx} className="flex flex-col ">
                  <div className="flex items-center gap-x-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-white/80"></span>
                    <Link className="text-white hover:underline">
                      {item.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 ">
              <div className="flex items-center gap-x-4">
                <button className="bg-[#225EC3] px-5 h-10 text-white flex items-center gap-x-6 font-semibold rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                  {t("footer.share")}{" "}
                  <span>
                    <FaPlus className="text-sm" />
                  </span>
                </button>
                <button className="bg-[#225EC3] px-3 h-10 text-white flex items-center gap-x-6 font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer">
                  <FaFacebookF />
                </button>
                <button className="bg-[#225EC3] px-3 h-10 text-white flex items-center gap-x-6 font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer">
                  <FaLinkedinIn />
                </button>
                <button className="bg-[#225EC3] px-3 h-10 text-white flex items-center gap-x-6 font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer">
                  <FaGoogle />
                </button>
                <button className="bg-[#225EC3] px-3 h-10 text-white flex items-center gap-x-6 font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer">
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
