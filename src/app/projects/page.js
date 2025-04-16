import Image from "next/image";

export default function Projects() {
  const sampleProjects = [
    {
      title: "Bharatanatyam Arangetram",
      description: "Debut solo performance of the entire Bharatanatyam repertoire, featuring eight classical pieces that blend rhythm, expression and tradition",
      image: "/arangetram.jpeg",
      link: "https://kulturkick.ch/projekte/bharatanatyam-arangetram",
    },
    {
      title: "Pujarini - An Adaption",
      description: "An innovative solo choreography set to the Bengali poem Pujarini (“The Devotee”) by Nobel laureate Rabindranath Tagore (1861–1941). Presented in 2022 in Wettingen, Switzerland, in the presence of the Indian Ambassador, the performance blended Bharatanatyam, spoken word, and poetry. This unique fusion of movement, Speech and literature brought a fresh, contemporary interpretation of Tagore’s work to the stage.",
      image: "/project1.jpg",
      youtube: "https://youtu.be/NfFsM-i7S58", // changed for link use
    },
    {
      title: "The Inheritance",
      description: "Work in Progress",
      image: "/workip.png",
    },
  ];

  return (
    <main style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "4rem" }}>Projects</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "7rem" }}>
        {sampleProjects.map((proj, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: "3rem",
              alignItems: "flex-start",
              flexWrap: "wrap",
              paddingBottom: "2rem",
            }}
          >
            {/* Image */}
            <div
              style={{
                flex: 1,
                minWidth: "280px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  layout="responsive"
                  width={600}
                  height={400}
                  style={{
                    borderRadius: "10px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Text + Links */}
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h2
                style={{
                  fontSize: "1.75rem",
                  marginBottom: "1rem",
                  color: "#808000",
                  //fontStyle: "italic",
                  fontFamily: "var(--font-sora), sans-serif",
                  fontWeight: 600,
                }}
              >
                {proj.title}
              </h2>

              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.2rem", textAlign: "justify" }}>
                {proj.description}
              </p>

              {/* Optional Project Link */}
              {proj.link && (
                <p style={{ marginBottom: "1rem" }}>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#a5a552",
                      textDecoration: "underline",
                      fontSize: "1rem",
                    }}
                  >
                    More from GGG Kulturkick Basel
                  </a>
                </p>
              )}

              {/* YouTube Video Link */}
              {proj.youtube && (
                <p>
                  <a
                    href={proj.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#a5a552",
                      textDecoration: "underline",
                      fontSize: "1rem",
                    }}
                  >
                    Watch performance video
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Final Olive Green "More to come..." */}
        <div style={{ textAlign: "center", marginTop: "3rem" }} className="fade-in">
          <p
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "3.2rem",
              color: "#808000",
              letterSpacing: "0.4px",
            }}
          >
            MORE TO COME...
          </p>
        </div>
      </div>
    </main>
  );
}
