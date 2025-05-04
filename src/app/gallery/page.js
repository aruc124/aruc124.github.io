"use client";
import React, { useEffect, useCallback } from "react";
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

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    },
    [goNext, goPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      
    <h1
  style={{
    fontSize: "2.5rem",
    marginTop: "6rem", // Push down
    marginBottom: "4rem",
    fontFamily: "var(--font-sora), sans-serif",
    color: "#ffffff",  // Keep white
    textAlign: "left", // Align to the left
    width: "100%",     // Make sure it spans the row to apply left-align
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
          maxWidth: "800px",
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
            fontSize: "3rem",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          &#8592;
        </button>

        {/* Main Image */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            maxHeight: "80vh",
          }}
        >
          <Image
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            width={700}
            height={700}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
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
            fontSize: "3rem",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          &#8594;
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              border: current === index ? "2px solid #a5a552" : "1px solid #444",
              borderRadius: "6px",
              overflow: "hidden",
              cursor: "pointer",
              width: "70px",
              height: "70px",
              backgroundColor: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={img}
              alt={`Thumb ${index + 1}`}
              width={70}
              height={70}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
