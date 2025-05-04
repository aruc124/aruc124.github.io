import Image from "next/image";

export default function AboutMe() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem 2rem",
        minHeight: "100vh",
        background: "linear-gradient(to right, #0a0a0a, #111111)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Text Section */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
            maxWidth: "600px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "1.5rem",
              marginTop: "4rem",
              color: "#808000",
              fontFamily: "var(--font-sora), sans-serif",
              textAlign: "left",
            }}
          >
            Arushi Choudhury
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2rem",
              marginBottom: "1.5rem",
              color: "#ffffff",
              textAlign: "justify",
            }}
          >
            Arushi is a passionate <em>Bharatanatyam</em> dancer from Basel, Switzerland.
            Trained in the classical Indian dance form <em>Bharatanatyam</em> at{" "}
            <em>Kalasri – School for Indian Dance</em> in Basel under{" "}
            <em>Smt. Sumitra Keshava</em>, she has been performing since childhood at
            festivals and events across Switzerland.
            <br />
            <br />
            Her own artistic work explores the intersection of classical tradition and
            contemporary expression. Arushi creates innovative contemporary pieces that
            weave together intercultural themes while blending mediums such as movement,
            speech, and visual storytelling. She is especially passionate about using dance
            as a powerful way to bridge cultures, connect communities, and share stories
            across boundaries.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#ffffff",
              fontStyle: "italic",
              marginBottom: "0.4rem",
            }}
          >
            <strong>Contact:</strong>{" "}
            <a
              href="mailto:arushichoudhury85@gmail.com"
              style={{
                color: "#a5a552",
                textDecoration: "underline",
                fontStyle: "italic",
              }}
            >
              arushichoudhury85@gmail.com
            </a>
          </p>
        </div>

        {/* Image Section */}
<div
  style={{
    flex: 1,
    minWidth: "320px",
    maxWidth: "400px",
    textAlign: "center",
    alignSelf: "flex-start", // Align the image with the top of the text
    marginTop: "5rem",    // Optional: fine-tune to align exactly with heading
  }}
>
  <Image
    src="/flute-new.jpg"
    alt="Arushi dancing"
    width={400}
    height={560}
    style={{
      borderRadius: "12px",
      objectFit: "cover",
      width: "100%",
      height: "auto",
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      marginTop: "0", // prevent any unwanted offset
    }}
  />
</div>

      </div>
    </main>
  );
}
