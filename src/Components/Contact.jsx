import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-2xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-gray-400 text-center mb-12">
          Got a project, collaboration, or just want to say hi? Drop me a
          message below.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded transition duration-200"
          >
            Send Message
          </button>

          {/* Feedback */}
          {sent && (
            <p className="text-green-400 text-sm mt-4 text-center">
              ✅ Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-400 text-sm mt-4 text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
