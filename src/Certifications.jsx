import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import cert1 from "./assets/diplo_fullstack_UTN.jpg";
import cert2 from "./assets/cs50.jpg";
import cert3 from "./assets/utn_frontedn_developer.jpg";
import cert4 from "./assets/Oracle_java_Spring_backend.jpg";
import cert5 from "./assets/fullstack_python_cac.jpg";
import cert6 from "./assets/Cambridge_FCE.jpg.png";
import cert7 from "./assets/EF SET Certificate.jpg";

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
  const certifications = [
    {
      img: cert1,
      title: "Diplomatura en Fullstack Web Development",
      issuer: "Universidad Tecnológica Nacional (UTN)",
      year: "2024",
    },
    {
      img: cert4,
      title: "Oracle One Back-End Java Spring",
      issuer: "Oracle",
      year: "2024",
    },
    {
      img: cert2,
      title: "CS50's Introduction to Computer Science",
      issuer: "Harvard University",
      year: "2024",
    },
    {
      img: cert3,
      title: "Frontend Developer",
      issuer: "Universidad Tecnológica Nacional (UTN)",
      year: "2024",
    },
    {
      img: cert5,
      title: "Fullstack Python Developer",
      issuer: "Codo a Codo",
      year: "2024",
    },
    {
      img: cert6,
      title: "First Certificate in English (FCE) Level B2",
      issuer: "Cambridge University",
      year: "2005",
    },
    {
      img: cert7,
      title: "EF SET English Certificate Level C2 Proficient",
      issuer: "EF Education First",
      year: "2024",
    },
  ];

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      id="Certifications"
      className="p-2 flex flex-col items-center justify-center bg-slate-900"
    >
      <h2
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-secondary"
      >
        Certifications
      </h2>

      <div className="w-full max-w-6xl">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={15}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-up"
                className="h-full flex flex-col items-center p-1 border-2 rounded-3xl c_glow cursor-pointer"
                onClick={() => handleImageClick(cert.img)}
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-48 object-contain mb-6 transition-transform duration-300"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-tertiary">{cert.issuer}</p>
                  <p className="text-quaternary">{cert.year}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-8 right-0 text-primary text-4xl hover:text-secondary transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged certification"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certifications;
