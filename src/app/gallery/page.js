"use client";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/gallery1.jpeg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
  ];

  const [current, setCurrent] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  const goNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 150);
  };

  const goPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 150);
  };

  // ✅ Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 2rem",
        minHeight: "100vh",
        background: "linear-gradient(to right, #0a0a0a, #111111)",
        color: "#a5a552",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          fontFamily: "var(--font-sora)",
        }}
      >
        Gallery
      </h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* Image container */}
        <div
          style={{
            width: "100%",
            height: "80vh",
            maxHeight: "80vh",
            position: "relative",
            transition: "opacity 0.4s ease",
            opacity: fade ? 1 : 0,
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Image
            key={images[current]}
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            fill
            style={{
              objectFit: "contain",
              borderRadius: "12px",
            }}
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={goPrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "#a5a552",
            fontSize: "2.5rem",
            cursor: "pointer",
          }}
          aria-label="Previous image"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "#a5a552",
            fontSize: "2.5rem",
            cursor: "pointer",
          }}
          aria-label="Next image"
        >
          &#8594;
        </button>
      </div>
    </main>
  );
}
