<h1> Portfolio </h1>

## Proyecto de Portafolio Web - Presentación

### 1. **Introducción**

Este proyecto consiste en un portafolio web personal, desarrollado para presentar habilidades, proyectos y proporcionar una forma de contacto a posibles empleadores o colaboradores. La aplicación está construida con Vite, React y utiliza Tailwind CSS para el diseño y la estilización.

### 2. **Funcionalidades Principales**

- **Página de Inicio (Home)**: Introducción breve y bienvenida.
- **Sección "Sobre Mí" (About)**: Descripción detallada del perfil profesional, educación, y trayectoria; asi como tambien permite la descargar del Curriculum.
- **Sección de Proyectos (Projects)**: Muestra de proyectos destacados con imágenes y enlaces a los sitios web.
- **Sección de Habilidades (Skills)**: Listado de tecnologías y herramientas dominadas.
- **Formulario de Contacto (Contact)**: Permite a los usuarios enviar emails directamente desde el sitio.
- **Navegación**: Barra de navegación con enlaces de desplazamiento suave a las diferentes secciones de la página.
- **Menú Desplegable**: Menú de navegación para dispositivos móviles.
- **Efectos de Animación**: Efectos de entrada animados en secciones e imágenes, utilizando AOS (Animate On Scroll).

### 3. **Requerimientos del Sistema**

- **React**: Biblioteca principal para la construcción de interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para estilos y diseño responsivo.
- **React Scroll**: Para facilitar la navegación con desplazamiento suave entre secciones.
- **React Icons**: Para incluir iconos de manera sencilla en el proyecto.
- **AOS**: Biblioteca para animaciones al hacer scroll.

### 4. **Uso de Hooks y Funcionalidades de React**

#### 4.1 **useState**

- **Estado del Menú Desplegable**: Se utiliza el hook `useState` para controlar la visibilidad del menú en dispositivos móviles, manejando el estado de abierto/cerrado (`click`).

  ```javascript
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  ```

#### 4.2 **Condicionales de Renderizado**

- **Condicionales**: Utilizados para mostrar u ocultar contenido en función del estado, como en el caso del menú desplegable.

  ```javascript
  {click && content}
  {isAccordionOpen && (
    <div>...</div>
  )}
  ```

### 5. **Uso de Librerías**

#### 5.1 **Tailwind CSS**

- Utilizado para una estilización rápida y responsiva. Tailwind proporciona una sintaxis basada en clases que facilita la personalización y el diseño sin salir del código HTML/JSX.

#### 5.2 **React Icons**

- Implementado para proporcionar iconos en la navegación y otros elementos, mejorando la interfaz visual del usuario.

  ```javascript
  import { FaTimesCircle } from "react-icons/fa";
  import { TiThMenu } from "react-icons/ti";
  ```

#### 5.3 **AOS (Animate On Scroll)**

- Añade animaciones a los elementos al hacer scroll, mejorando la experiencia visual y manteniendo el interés del usuario.

  ```javascript
  <div data-aos="fade-up">
    {/* Contenido animado */}
  </div>
  ```

### 6. **Stack Tecnológico**

- **Frontend**:
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"  width="20" height="20"/> Vite
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="20" height="20"/> React
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="20" height="20"/> Tailwind CSS
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="20" height="20"/> HTML5
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="20" height="20"/>CSS3 
- **Animaciones**: AOS
- **Navegación y UI**: React Scroll, React Icons



### 7. **Conclusión**

Este proyecto de portafolio web es una herramienta poderosa para mostrar habilidades, experiencia y proyectos. Utiliza tecnologías modernas para crear una interfaz atractiva y fácil de navegar, optimizada para diferentes dispositivos. Además, el uso de hooks y componentes de React garantiza un código mantenible y escalable.

 ## Link al proyecto

[DEMO](https://cristian-vellio-cv.vercel.app/)
