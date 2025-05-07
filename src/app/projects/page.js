import Image from "next/image";

export default function Projects() {
  const sampleProjects = [
    {
      title: "Bharatanatyam Arangetram",
      description:
        "Debut solo performance of the complete Bharatanatyam repertoire, featuring eight classical pieces that blend rhythm, expression and tradition.",
      image: "/arangetram.jpeg",
      link: "https://kulturkick.ch/projekte/bharatanatyam-arangetram",
    },
    {
      title: "Pujarini – An Adaption",
      description:
        "An innovative solo choreography set to the Bengali poem Pujarini (“The Devotee”) by Rabindranath Tagore. This piece blends Bharatanatyam and poetry. At the center is the story of a young woman from a marginalized strata of society who seeks a deep, spiritual connection while challenging existing social boundaries and institutional norms.",
      image: "/project1.jpg",
      youtube: "https://youtu.be/NfFsM-i7S58",
    },
    {
      title: "The Inheritance",
      description: "Work in Progress",
      image: "/workip.png",
    },
  ];

  return (
    <main style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1
  style={{
    fontSize: "2.5rem",
    marginTop: "4rem", // 👈 Add this line
    marginBottom: "4rem",
    color: "#fff",
  }}
>
  Projects
</h1>


      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {sampleProjects.map((proj, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
              paddingBottom: "2rem",
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: "280px",
              }}
            >
              <Image
                src={proj.image}
                alt={proj.title}
                width={600}
                height={400}
                style={{
                  borderRadius: "10px",
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div style={{ flex: 1, minWidth: "280px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  color: "#808000",
                  fontFamily: "var(--font-sora), sans-serif",
                }}
              >
                {proj.title}
              </h2>

              <p style={{ fontSize: "1.3rem", lineHeight: 1.8, marginBottom: "1rem", color: "#fff", textAlign: "justify" }}>
                {proj.description}
              </p>

              {proj.link && (
                <p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#a5a552", textDecoration: "underline", fontSize: "1.2rem", fontWeight: 500, }}
                  >
                    View more about this from GGG Kulturkick Basel
                  </a>
                </p>
              )}

              {proj.youtube && (
                <p>
                  <a
                    href={proj.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#a5a552", textDecoration: "underline",fontSize: "1.2rem", // 👈 Increase this too
                      fontWeight: 500, }}
                  >
                    Watch performance video
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}

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
