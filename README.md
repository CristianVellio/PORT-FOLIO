<h1>Portfolio</h1> 


## **Portfolio Web 💼 - Presentación**


## **1. Introducción**

Este portafolio web personal está diseñado para mostrar habilidades, proyectos y ofrecer un medio de contacto a empleadores o colaboradores potenciales. El sitio web está construido con Vite, React, y Tailwind CSS, destacando por su diseño moderno y responsivo, con animaciones que mejoran la experiencia del usuario.



## **2. Funcionalidades Principales**

### **2.1 Página de Inicio (Home)**

La página de inicio da la bienvenida a los visitantes con una breve introducción y una imagen destacada que captura la esencia del perfil profesional. Es un punto de entrada intuitivo que prepara al usuario para explorar el contenido del portafolio.

### **2.2 Sección "Sobre Mí" (About)**

Esta sección proporciona una descripción detallada del perfil profesional, incluyendo educación, trayectoria y habilidades. Además, ofrece la posibilidad de descargar el currículum, facilitando a los empleadores acceder a la información necesaria.

### **2.3 Sección de Proyectos (Projects)**

En esta sección se destacan los proyectos más relevantes, cada uno con una imagen de vista previa y un enlace que dirige a los detalles o a las demostraciones en vivo de los mismos. Los proyectos están ordenados de manera atractiva, utilizando una cuadrícula que se adapta a diferentes tamaños de pantalla.

### **2.4 Sección de Habilidades (Skills)**

Aquí se enumeran las tecnologías y herramientas dominadas, presentando una visión clara de las competencias técnicas. Esta sección utiliza iconos y etiquetas para hacer la información más visual y fácil de interpretar.

### **2.5 Formulario de Contacto (Contact)**

El formulario de contacto permite a los usuarios enviar mensajes directamente desde el sitio, mejorando la accesibilidad y facilitando la comunicación directa. Este formulario está diseñado para ser simple y directo, pidiendo solo la información necesaria.

### **2.6 Navegación y Menú Desplegable**

La barra de navegación superior facilita el acceso rápido a las diferentes secciones del sitio mediante desplazamiento suave. En dispositivos móviles, el menú se convierte en un menú desplegable accesible, mejorando la usabilidad en pantallas pequeñas.

### **2.7 Efectos de Animación**

Se han implementado efectos de animación utilizando AOS (Animate On Scroll), que añaden dinamismo al sitio. Estos efectos no solo hacen que el sitio sea visualmente más atractivo, sino que también guían al usuario a través del contenido de manera más efectiva.

### **2.8 Botón "Back to Top"**

Este botón permite a los usuarios volver rápidamente al inicio de la página. Está diseñado para aparecer solo después de que el usuario haya desplazado una cierta distancia, mejorando la experiencia de navegación en páginas largas.



## **3. Requerimientos del Sistema**

El proyecto utiliza las siguientes tecnologías y herramientas:

- **React:** Para la construcción de interfaces de usuario, ofreciendo un enfoque declarativo y basado en componentes.
- **Tailwind CSS:** Un framework CSS utilitario que facilita la creación de diseños personalizados sin necesidad de escribir CSS desde cero.
- **React Scroll:** Permite el desplazamiento suave entre las secciones del sitio, mejorando la navegación y la experiencia del usuario.
- **React Icons:** Proporciona una amplia variedad de iconos que se integran fácilmente con React, mejorando la interfaz visual.
- **AOS (Animate On Scroll):** Se utiliza para implementar animaciones que se activan al desplazarse, manteniendo el interés del usuario.



## **4. Uso de Hooks y Funcionalidades de React**

### **4.1 useState**

El hook `useState` es fundamental en este proyecto para gestionar el estado interno de varios componentes:

- **Menú Desplegable:** Se utiliza para controlar la visibilidad del menú en dispositivos móviles, alternando entre abierto y cerrado según la interacción del usuario.

  ```jsx
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  ```

- **Botón "Back to Top":** Controla la visibilidad del botón basado en la posición del scroll, apareciendo solo cuando el usuario ha desplazado una cierta distancia.

  ```jsx
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  ```

### **4.2 Condicionales de Renderizado**

Las condicionales de renderizado se utilizan para mostrar u ocultar elementos del DOM basados en el estado, mejorando la eficiencia y experiencia del usuario.

  ```jsx
  {click && content}
  {isAccordionOpen && <div>...</div>}
  {showButton && <button className="back-to-top">...</button>}
  ```



## **5. Uso de Librerías**

### **5.1 Tailwind CSS**

Tailwind CSS se usa para una estilización rápida y flexible, permitiendo un diseño altamente personalizable y responsivo. Las utilidades de Tailwind facilitan la aplicación de estilos directamente en el HTML/JSX, lo que acelera el proceso de desarrollo y reduce la necesidad de archivos CSS separados.

### **5.2 React Icons**

React Icons se emplea para integrar iconos de manera sencilla en la interfaz, mejorando la estética y la accesibilidad del sitio. Se utilizan en la barra de navegación, enlaces a redes sociales, y otras partes del diseño.

```javascript
import { FaTimesCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaArrowUp } from "react-icons/fa";
```

### **5.3 AOS (Animate On Scroll)**

AOS proporciona una manera fácil de añadir animaciones que se activan al desplazarse. Esto no solo mejora la apariencia del sitio, sino que también puede dirigir la atención del usuario a elementos clave.

```html
<div data-aos="fade-up">
  <!-- Contenido animado -->
</div>
```



## **6. Stack Tecnológico**

- **Frontend**:
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"  width="20" height="20"/> Vite
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="20" height="20"/> React
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="20" height="20"/> Tailwind CSS
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="20" height="20"/> HTML5
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="20" height="20"/>CSS3 
- **Animaciones**: AOS
- **Navegación y UI**: React Scroll, React Icons



## **7. Paleta de Colores**

<div align="center">
<img src="https://github.com/user-attachments/assets/85a40342-0fa2-45de-a140-37b7f692711c" alt="AdobeColor-Portfolio" width="500" height="200">
</div>

- **Fondo Principal:** #0F172A (gris oscuro) - Proporciona un fondo sobrio y profesional que resalta el contenido visual.
- **Color Principal:** #C2410C (naranja) - Utilizado para elementos clave y de llamada a la acción, aporta energía y vitalidad.
- **Color Secundario:** #84CC16 (lima) - Se emplea para acentos y detalles, creando contraste con el fondo oscuro.
- **Color de Texto:** #ffffff (blanco) - Garantiza la legibilidad en el fondo oscuro, utilizado para la mayoría de los textos.

  

## **8. Conclusión**

Este proyecto de portafolio web no solo muestra habilidades técnicas y experiencia, sino que también destaca por su diseño intuitivo y estéticamente atractivo. Utiliza tecnologías modernas y prácticas de desarrollo eficientes, lo que lo convierte en una herramienta valiosa para presentar el perfil profesional de manera efectiva. La integración de animaciones, navegación fluida, y un diseño responsivo asegura una experiencia de usuario positiva en cualquier dispositivo.



 ## Link al Proyecto


<div align="center">
  <a href="https://cristian-vellio-cv.vercel.app/">Portafolio</a>
  <div>
    <img src="https://github.com/user-attachments/assets/39c625ab-5da9-451c-9a05-67dfe84dc7c5" alt="Cristian-Vellio-Portfolio" width="700" height="300">
    <div>
    </div>
    
