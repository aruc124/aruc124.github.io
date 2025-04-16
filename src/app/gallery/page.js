"use client";
import React, { useEffect, useState } from "react";

export default function Gallery() {
  const images = [
    "/aruc124.github.io/gallery1.jpeg",
    "/aruc124.github.io/gallery2.jpg",
    "/aruc124.github.io/gallery3.jpg",
    "/aruc124.github.io/gallery4.jpg",
    "/aruc124.github.io/gallery5.jpg",
    "/aruc124.github.io/gallery6.jpg",
    "/aruc124.github.io/gallery7.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.4s ease",
            opacity: fade ? 1 : 0,
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#000",
          }}
        >
          <img
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "12px",
              transition: "opacity 0.3s ease",
            }}
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
