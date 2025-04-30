import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { useMediaQuery } from "react-responsive";

import TitleHeader from "../components/TitleHeader";

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
    // Optional: handle form submission
  };

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

                <button type="submit">
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
                <div className="absolute inset-0 flex items-center justify-center bg-black z-10 rounded-lg">
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-300 h-12 w-12"></div>
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
