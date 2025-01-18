import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { CiMail } from "react-icons/ci";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your email has been sent!",
        showConfirmButton: false,
        timer: 1500,
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
      console.error("Error sending email:", error);
    }
  };

  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h2
        data-aos="fade-right"
        className="text-[52px] text-center w-full font-semibold mb-20 leading-normal uppercase text-white"
      >
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 lg:w-1/2"
      >
        <div className="lg:flex gap-6">
          <input
            className="w-full lg:my-3 my-6 rounded-lg bg-slate-800 border-lime-800 p-4 border-2 b_glow text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full lg:my-3 my-6 rounded-lg bg-slate-800 border-lime-800 p-4 border-2 b_glow text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 border-lime-800 p-4 border-2 b_glow text-xl text-slate-500"
          placeholder="Write me a Message..."
          name="message"
          cols="20"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="neno-button shadow-xl hover:shadow-lime-800/50 text-white border-2 border-lime-800 bg-lime-800 hover:bg-lime-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold"
          type="submit"
        >
          Send
        </button>
      </form>
      <p className="text-center w-full text-[24px] font-semibold mb-10 mt-10 leading-normal text-slate-500 flex justify-center items-center">
        <CiMail className="mr-2" />
        cristianvellio86@gmail.com
      </p>
    </div>
  );
}

export default Contact;
