import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";

function Skills() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    { name: "JWT", icon: "logos:jwt-icon", link: "https://jwt.io/" },
    { name: "Jest", icon: "logos:jest", link: "https://jestjs.io" },
    {
      name: "Angular",
      icon: "logos:angular-icon",
      link: "https://angular.io/",
    },
    { name: "NgRx", icon: "devicon:ngrx", link: "https://ngrx.io/" },
    { name: "RxJS", icon: "devicon:rxjs", link: "https://rxjs.dev/" },
    { name: "React", icon: "logos:react", link: "https://reactjs.org/" },
    { name: "Redux", icon: "logos:redux", link: "https://redux.js.org/" },
    { name: "Vite", icon: "logos:vitejs", link: "https://vitejs.dev/" },
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
      name: "Fastapi",
      icon: "devicon:fastapi",
      link: "https://fastapi.tiangolo.com/",
    },
    {
      name: "Pytest",
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
      name: "Postman",
      icon: "logos:postman-icon",
      link: "https://www.postman.com/",
    },
  ];

  const cylinderWidth = isMobile ? 800 : 1500;
  const faceCount = skills.length;
  const faceWidth = (cylinderWidth / faceCount) * 0.5;
  const radius = (cylinderWidth / (2 * Math.PI)) * (isMobile ? 2.1 : 1.7);

  const dragFactor = 0.03;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 60, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    startInfiniteSpin(rotation.get());
  }, []);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") rotation.set(latest.rotateY);
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    startInfiniteSpin(finalAngle);
  };

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => startInfiniteSpin(rotation.get());

  return (
    <div id="Skills" className="p-20 flex flex-col items-center justify-center">
      <h2
        data-aos="fade-right"
        className="text-[52px] font-orbitron text-center font-semibold mb-20 leading-normal uppercase text-secondary"
      >
        Favorite Stacks
      </h2>
      <div className="relative h-[250px] w-full overflow-hidden">
        <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
          <motion.div
            drag="x"
            dragElastic={0}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={controls}
            onUpdate={handleUpdate}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: transform,
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
          >
            {skills.map((skill, i) => (
              <a
                key={i}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group gap-3 absolute flex h-fit flex-col items-center justify-center p-[8%] md:p-[6%] [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${
                    (360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
                }}
              >
                <Icon
                  icon={skill.icon}
                  className="skill-icon text-[30px] md:text-[35px] lg:text-[40px] text-tertiary hover:text-secondary"
                />
                <p
                  translate="no"
                  className="text-xs md:text-sm lg:text-sm font-bold text-white mt-2 font-tilt whitespace-nowrap"
                >
                  {skill.name}
                </p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
