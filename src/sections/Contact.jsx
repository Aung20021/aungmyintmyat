import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { loadingMessages } from "../constants";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [splineLoading, setSplineLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    if (!isLargeScreen) return;

    fetch("https://prod.spline.design/kriu7lir0JRtdbDv/scene.splinecode", {
      method: "GET",
      mode: "no-cors",
    });
  }, [isLargeScreen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  const [displayedText, setDisplayedText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messageIndexRef = useRef(0); // Tracks the current message index

  useEffect(() => {
    if (!splineLoading) return;

    let charIndex = 0;
    let currentText = loadingMessages[messageIndexRef.current];
    let typingInterval;

    const typeCharacter = () => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          messageIndexRef.current =
            (messageIndexRef.current + 1) % loadingMessages.length;
          setCurrentMessageIndex(messageIndexRef.current); // trigger re-render for next effect
        }, 2000);
      }
    };

    typingInterval = setInterval(typeCharacter, 50);

    return () => clearInterval(typingInterval);
  }, [splineLoading, currentMessageIndex]); // currentMessageIndex ensures cycle continues

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper ">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {isLargeScreen && (
            <div className="xl:col-span-7 w-full h-[500px] relative">
              {/* Loader Placeholder */}
              {splineLoading && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black z-10 rounded-lg gap-4 px-4">
                  {/* Typing Text ABOVE the image */}
                  <p className="text-white text-center text-sm font-mono">
                    {displayedText}
                    <span className="animate-ping inline-block w-1 ml-1">
                      |
                    </span>
                  </p>

                  {/* Image */}
                  <img
                    src={"/images/mail.png"}
                    alt="Fallback preview"
                    className="w-4/5 max-h-[80%] object-contain"
                  />
                </div>
              )}

              {/* 3D Model */}
              <div
                className={`xl:col-span-7 w-full h-[550px] mt-5  transition-opacity duration-500 ${
                  splineLoading ? "opacity-0" : "opacity-100"
                }`}
              >
                <Spline
                  scene="https://prod.spline.design/kriu7lir0JRtdbDv/scene.splinecode"
                  onLoad={() => setSplineLoading(false)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
