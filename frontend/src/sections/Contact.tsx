import { useState } from "react";
import { sendMessage } from "../services/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await sendMessage(formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-white/5 to-transparent"
    >
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-3">Get in Touch</h3>
        <p className="text-white/70 mb-10">
          Let’s work together or discuss an opportunity.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10
                       focus:outline-none focus:border-accent"
            placeholder="Your name"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10
                       focus:outline-none focus:border-accent"
            placeholder="Your email"
          />

          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10
                       focus:outline-none focus:border-accent"
            placeholder="Your message"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-black py-3 rounded-lg font-medium
                       hover:opacity-90 hover:scale-105 transition-transform duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm pt-2">{success}</p>
          )}
          {error && (
            <p className="text-red-400 text-sm pt-2">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
