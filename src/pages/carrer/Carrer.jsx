import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import c1 from "../../assets/career/c1.jpg";
import c2 from "../../assets/career/c2.jpg";
import c3 from "../../assets/career/c3.jpg";
import c4 from "../../assets/career/c4.jpg";
import titleimge from "../../assets/home/title_bg.jpg";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import Login from "../components/Login";
const Carrer = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const careerdata = [
    {
      img: c1,
      cardh1: t("careers.ch1"),
      chardp1: t("careers.cp1"),
      btn: t("careers.cbtn"),
    },
    {
      img: c2,
      cardh1: t("careers.ch2"),
      chardp1: t("careers.cp2"),
      btn: t("careers.cbtn"),
    },
    {
      img: c3,
      cardh1: t("careers.ch3"),
      chardp1: t("careers.cp3"),
      btn: t("careers.cbtn"),
    },
    {
      img: c4,
      cardh1: t("careers.ch4"),
      chardp1: t("careers.cp4"),
      btn: t("careers.cbtn"),
    },
  ];

  const careerlinks = [
    t("careers.ch1"),
    t("careers.ch2"),
    t("careers.ch3"),
    t("careers.ch4"),
  ];

  return (
    <div className="bg-white/90">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${titleimge})` }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-2xl gap-x-3 text-white/90">
              <MdArrowForwardIos />
              <h2 className="text-white/80 font-bold uppercase">
                {t("careers.career")}
              </h2>
            </div>
            <div className="flex items-end justify-end py-14 relative pr-6 md:pr-0">
              <button
                className="flex items-end justify-end"
                onClick={() => setShowIcons(!showIcons)}
              >
                <FaShareAlt className="text-white text-xl cursor-pointer" />
              </button>
              {showIcons && (
                <div className="bg-white/80 flex absolute top-20 mr-5 custom:mr-0 right-0 z-10 shadow-2xl rounded-md p-2 gap-x-2">
                  <a href="https://facebook.com" target="_blank">
                    <FaFacebook className="text-blue-700 text-2xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank">
                    <FaTwitterSquare className="text-blue-500 text-2xl" />
                  </a>
                  <a href="https://google.com" target="_blank">
                    <FaGooglePlus className="text-amber-800 text-2xl" />
                  </a>
                  <a href="https://mail.google.com/" target="_blank">
                    <ImMail className="text-amber-950 text-2xl" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* card section */}
      <section className="max-w-screen-xl mx-auto py-6 px-4">
        <div className="flex flex-col custom:flex-row gap-8">
          {/* Main Content (left side) */}
          <div className="flex-1 space-y-3 text-gray-800">
            {careerdata.map((service, ind) => (
              <div
                key={ind}
                className="grid grid-cols-1 custom:grid-cols-2 gap-6 mt-16"
              >
                <img
                  src={service.img}
                  alt={service.chardp1}
                  className="bg-gray-300 border border-gray-200 rounded-sm object-cover h-full"
                />
                <div className="flex flex-col items-start space-y-6">
                  <Link className="text-2xl text-red-500 font-bold tracking-wide">
                    {service.cardh1}
                  </Link>
                  <p className="text-gray-800">{service.chardp1}</p>
                  <button className="px-4 py-2 border border-gray-300 hover:bg-red-500 uppercase hover:text-white text-lg font-semibold flex items-center gap-x-3">
                    {service.btn} <MdArrowForwardIos />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Links (right side) */}
          <div className="hidden custom:block w-64 flex-shrink-0">
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
                {t("careers.career")}
              </h3>
              <ul className="space-y-3">
                {careerlinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to="#"
                      className="flex items-center gap-x-2 text-gray-700 hover:text-red-500 transition-colors p-2 hover:bg-gray-100 rounded"
                    >
                      <MdArrowForwardIos className="text-xs" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Login />
    </div>
  );
};

export default Carrer;
