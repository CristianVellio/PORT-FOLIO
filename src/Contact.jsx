import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:cristianvellio86@gmail.com?subject=Contact from ${name}&body=${message} (from: ${email})`;
    window.location.href = mailtoLink;
  };
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h2
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white"
      >
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input
            className="w-full lg:my-3 my-6 rounded-lg bg-slate-800 border-lime-800 p-4 border-2 b_glow text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full lg:my-3 my-6 rounded-lg bg-slate-800 border-lime-800 p-4 border-2 b_glow text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 border-lime-800 p-4 border-2 b_glow text-xl text-slate-500"
          placeholder="Write me a Message..."
          name=""
          id=""
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
    </div>
  );
}

export default Contact;
