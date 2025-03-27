import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import titleimge from "../../assets/home/title_bg.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  FaFacebook,
  FaFileUpload,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImMail } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import Login from "../components/Login";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const Contact = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const position = [45.815, 15.9819];
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
                {t("contacts.cpage")}
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
                <div className="bg-white/80 flex absolute top-20 mr-5 custom:mr-0 right-0 z-10 shadow-2xl rounded-md p-2 gap-x-2 duration-500">
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
      <div className="max-w-screen-xl mx-auto py-6">
        <div className="max-w-screen-custom space-y-3 px-2 md:px-0">
          <p className="text-gray-700 text-xl font-semibold">
            {t("contacts.cinfo")}
          </p>
        </div>
        {/* from */}
        <form className="max-w-screen-custom grid grid-cols-1 sm:grid-cols-12 gap-4 px-2 md:px-0">
          <div className="col-span-4">
            <p className="text-gray-700">{t("contacts.info")}</p>
            <p className="text-gray-700 text-xl font-semibold">
              Tel:{" "}
              <span className="text-red-400 text-sm underline">
                +385 1 4668 604
              </span>
            </p>
            <p className="text-gray-950 text-xl font-semibold">
              Fax{" "}
              <span className="text-red-400 text-sm underline">
                +385 1 617 1548
              </span>
            </p>
            <p className="text-gray-950 text-xl font-semibold">
              Email{" "}
              <span className="text-red-400 text-sm underline">
                info@concessum.com
              </span>
            </p>
            <p className="text-gray-950 text-xl font-semibold">
              Email{" "}
              <span className="text-red-400 text-sm underline">
                povratporeza@concessum.com
              </span>
            </p>
          </div>
          <div className="col-span-8 grid grid-cols-1 gap-2 ">
            <p className="text-gray-700 text-xl font-semibold">
              {t("contacts.form")}
            </p>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.uname")}:
              </label>
              <input
                required
                type="text"
                placeholder={t("clients.uname")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.email")}:
              </label>
              <input
                type="email"
                required
                placeholder={t("clients.email")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.phone")}:
              </label>
              <input
                type="number"
                required
                placeholder={t("clients.phone")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.message")}:
              </label>
              <textarea
                type="text"
                required
                placeholder={t("clients.message")}
                className="h-20 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("contacts.ordinary")}:
              </label>
              <input
                type="text"
                required
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="w-6 h-6" />
                <p className="flex gap-x-1">
                  {t("footer.condition")}
                  <a href="" className="text-red-400 underline">
                    {t("footer.conditiontram")}
                  </a>
                </p>
              </div>
              <button className="bg-red-500 px-5 h-10 text-white flex items-center gap-x-6 font-semibold rounded-sm text-xl  hover:bg-[#225EC3] cursor-pointer border">
                {t("footer.sendBtn")}{" "}
                <span>
                  <IoIosArrowForward className="text-sm" />
                </span>
              </button>
            </div>
            <h3>{t("contacts.map")}</h3>
            {/* map */}
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg border-2 border-gray-500">
              <MapContainer
                center={position}
                zoom={13}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>Our Office Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </form>
      </div>
      <Login />
    </div>
  );
};

export default Contact;
