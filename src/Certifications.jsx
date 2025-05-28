import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import cert1 from "./assets/img/certificates/diplo_fullstack_UTN.webp";
import cert2 from "./assets/img/certificates/cs50.webp";
import cert3 from "./assets/img/certificates/utn_frontedn_developer.webp";
import cert4 from "./assets/img/certificates/Oracle_java_Spring_backend.webp";
import cert5 from "./assets/img/certificates/fullstack_python_cac.webp";
import cert6 from "./assets/img/certificates/Cambridge_FCE.jpg.webp";
import cert7 from "./assets/img/certificates/EF SET Certificate.webp";

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
      className="p-2 lg:p-20 flex flex-col items-center justify-center"
    >
      <h2
        data-aos="fade-right"
        className="text-[52px] font-orbitron text-center font-semibold mb-20 leading-normal uppercase text-secondary"
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
              <BackgroundGradient
                className="rounded-3xl h-full"
                containerClassName="h-full"
              >
                <div
                  className="flex flex-col items-center justify-between bg-gray-900 rounded-3xl p-4 cursor-pointer h-full"
                  onClick={() => handleImageClick(cert.img)}
                >
                  <div className="w-full">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-48 object-contain mb-4 transition-transform duration-300"
                    />
                    <h3 className="font-tilt text-xl font-bold text-primary mb-2 text-center">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="w-full text-center mt-auto">
                    <p translate="no" className="text-tertiary font-serrat">
                      {cert.issuer}
                    </p>
                    <p className="text-quaternary font-serrat">{cert.year}</p>
                  </div>
                </div>
              </BackgroundGradient>
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
