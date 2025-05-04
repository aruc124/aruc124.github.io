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
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
          flexWrap: "wrap",
          maxWidth: "1400px", // ⬅️ Increased from 1200
          width: "100%",
        }}
      >
        {/* Text Section */}
        <div
          style={{
            flex: 1.2, // ⬅️ Slightly wider text section
            minWidth: "320px",
            maxWidth: "700px",
          }}
        >
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "#808000", // olive green
              fontFamily: "var(--font-sora), sans-serif",
              textAlign: "left",
            }}
          >
            Arushi Choudhury
          </h2>

          <p
            style={{
              fontSize: "1.5rem", // ⬅️ Slightly larger
              lineHeight: "2rem",
              marginBottom: "1.5rem",
              color: "#ffffff",
              textAlign: "justify",
            }}
          >
            Arushi is a passionate <em>Bharatanatyam</em> dancer from Basel, Switzerland.
            Trained in the classical Indian dance form <em>Bharatanatyam</em> at <em>Kalasri – School for Indian Dance</em> in Basel
            under <em>Smt. Sumitra Keshava</em>, she has been performing since childhood at festivals and events across Switzerland.
            <br /><br />
            Her own artistic work explores the intersection of classical tradition and contemporary expression.
            Arushi creates innovative contemporary pieces that weave together intercultural themes while blending mediums such as movement, speech, and visual storytelling.
            She is especially passionate about using dance as a powerful way to bridge cultures, connect communities, and share stories across boundaries.
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#ffffff",
              fontWeight: 500,
              fontStyle: "italic",
              marginBottom: "0.4rem",
            }}
          >
            Contact:{" "}
            <a
              href="mailto:arushichoudhury85@gmail.com"
              style={{
                fontSize: "1.2rem",
                color: "#a5a552",
                textDecoration: "underline",
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
            maxWidth: "500px", // ⬅️ Slightly larger
            textAlign: "center",
          }}
        >
          <img
            src="/flute.jpg"
            alt="Arushi dancing"
            width={500}
            height={650}
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
