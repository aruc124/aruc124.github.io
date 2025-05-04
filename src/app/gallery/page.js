"use client";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpeg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
  ];

  const [current, setCurrent] = React.useState(0);

  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

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
        padding: "6rem 2rem 4rem",
        minHeight: "100vh",
        background: "linear-gradient(to right, #0a0a0a, #111111)",
        color: "#a5a552",
      }}
    >
      <h1
  style={{
    fontSize: "2.5rem",
    marginTop: "6rem", // 👈 Add this line
    marginBottom: "4rem",
    color: "#fff",
  }}
>
  Gallery
</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          style={{
            position: "absolute",
            left: "-3rem",
            background: "none",
            border: "none",
            color: "#a5a552",
            fontSize: "2.5rem",
            cursor: "pointer",
            zIndex: 1,
          }}
          aria-label="Previous image"
        >
          &#8592;
        </button>

        {/* Image */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            width: "100%",
            maxHeight: "80vh",
          }}
        >
          <Image
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            width={700}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              maxHeight: "70vh",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          style={{
            position: "absolute",
            right: "-3rem",
            background: "none",
            border: "none",
            color: "#a5a552",
            fontSize: "2.5rem",
            cursor: "pointer",
            zIndex: 1,
          }}
          aria-label="Next image"
        >
          &#8594;
        </button>
      </div>

      {/* Thumbnail Bar - centered */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            maxWidth: "600px",
            justifyContent: "center",
          }}
        >
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Thumbnail ${i + 1}`}
              width={50}
              height={50}
              onClick={() => setCurrent(i)}
              style={{
                cursor: "pointer",
                border: i === current ? "2px solid #a5a552" : "2px solid transparent",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
