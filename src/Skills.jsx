import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";

function Skills() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const skills = [
    {
      name: "HTML5",
      icon: "vscode-icons:file-type-html",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: "vscode-icons:file-type-css",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      link: "https://tailwindcss.com/",
    },
    {
      name: "JavaScript",
      icon: "logos:javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "JWT",
      icon: "logos:jwt-icon",
      link: "https://jwt.io/",
    },
    {
      name: "Jest",
      icon: "logos:jest",
      link: "https://jestjs.io",
    },
    {
      name: "Angular",
      icon: "logos:angular-icon",
      link: "https://angular.io/",
    },
    { name: "NgRx", icon: "devicon:ngrx", link: "https://ngrx.io/" },
    {
      name: "RxJS",
      icon: "devicon:rxjs",
      link: "https://rxjs.dev/",
    },
    { name: "React", icon: "logos:react", link: "https://reactjs.org/" },
    { name: "Redux", icon: "logos:redux", link: "https://redux.js.org/" },
    { name: "vite", icon: "logos:vitejs", link: "https://vitejs.dev/" },
    { name: "Node.js", icon: "logos:nodejs-icon", link: "https://nodejs.org/" },
    {
      name: "Express",
      icon: "devicon:express",
      link: "https://expressjs.com/",
    },
    {
      name: "Axios",
      icon: "devicon-plain:axios",
      link: "https://axios-http.com/",
    },
    { name: "Java", icon: "logos:java", link: "https://www.java.com/en/" },
    { name: "JUnit", icon: "devicon:junit", link: "https://junit.org/junit5/" },
    { name: "Spring", icon: "logos:spring-icon", link: "https://spring.io/" },
    { name: "Python", icon: "logos:python", link: "https://www.python.org/" },
    {
      name: "fastapi",
      icon: "devicon:fastapi",
      link: "https://fastapi.tiangolo.com/",
    },
    {
      name: "pytest",
      icon: "devicon:pytest",
      link: "https://docs.pytest.org/",
    },
    {
      name: "Django",
      icon: "logos:django-icon",
      link: "https://www.djangoproject.com/",
    },
    {
      name: "Flask",
      icon: "logos:flask",
      link: "https://flask.palletsprojects.com/",
    },
    {
      name: "MongoDB",
      icon: "logos:mongodb-icon",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Mongoose",
      icon: "devicon:mongoose",
      link: "https://mongoosejs.com/",
    },
    { name: "MySQL", icon: "logos:mysql-icon", link: "https://www.mysql.com/" },
    {
      name: "PostgreSQL",
      icon: "logos:postgresql",
      link: "https://www.postgresql.org/",
    },
    {
      name: "postman",
      icon: "logos:postman-icon",
      link: "https://www.postman.com/",
    },
  ];

  return (
    <div id="Skills" className="p-20 flex flex-col items-center justify-center">
      <h2
        data-aos="fade-right"
        className="text-[52px] font-orbitron text-center font-semibold mb-20 leading-normal uppercase text-secondary"
      >
        Favorite Stacks
      </h2>
      <div className="w-full max-w-6xl">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex flex-col items-center p-1 cursor-pointer"
              >
                <Icon
                  data-aos="fade-up"
                  icon={skill.icon}
                  className="skill-icon text-[80px] text-tertiary hover:text-secondary"
                />
                <p className="text-lg font-medium text-secondary mt-2 font-tilt">
                  {skill.name}
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
