import { useState } from "react";

export default function PopupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919760434722"; // your number (without + or 00)
    const text = `✨ New Form Submission ✨%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#0d0d0d",
        padding: "30px",
        borderRadius: "12px",
        maxWidth: "450px",
        margin: "30px auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        boxShadow: "0 0 20px rgba(255, 215, 0, 0.15)",
        border: "1px solid rgba(255, 215, 0, 0.2)",
      }}
    >
      <h2
        style={{
          color: "#FFD700",
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: "600",
          fontSize: "20px",
          letterSpacing: "1px",
        }}
      >
        Contact Us
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #333",
          padding: "12px",
          borderRadius: "6px",
          outline: "none",
        }}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #333",
          padding: "12px",
          borderRadius: "6px",
          outline: "none",
        }}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #333",
          padding: "12px",
          borderRadius: "6px",
          outline: "none",
        }}
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        style={{
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #333",
          padding: "12px",
          borderRadius: "6px",
          minHeight: "100px",
          outline: "none",
        }}
      />

      <button
        type="submit"
        style={{
          background: "linear-gradient(90deg, #FFD700, #FFC107, #FFA000)",
          color: "#0d0d0d",
          border: "none",
          padding: "14px",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "16px",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.target.style.boxShadow = "0 0 15px rgba(255, 215, 0, 0.6)")
        }
        onMouseOut={(e) => (e.target.style.boxShadow = "none")}
      >
        ✨ Send Message
      </button>
    </form>
  );
}
