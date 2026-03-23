export const projects = [
  {
    title: "Clearixam",
    period: "2026",
    // bullets[0-1] shown on card, all 3 shown in Details dialog
    bullets: [
      "Exam preparation platform that delivers structured content and tracks student performance over time — helping learners identify weak areas and improve systematically.",
      "Gives students an organized, progress-aware study experience rather than scattered resources.",
      "Spring Boot REST APIs handle content delivery and performance tracking; React + TypeScript frontend with PostgreSQL as the data store.",
    ],
    links: {
      code: "https://github.com/Ysetia10/clearixam",
      demo: "https://clearixam.vercel.app",
    },
    tags: ["Spring Boot", "React", "TypeScript", "PostgreSQL"],
    badge: "Full Stack",
  },
  {
    title: "Legal-Lens",
    period: "2025",
    bullets: [
      "Analyzes legal documents to extract key clauses, simplify complex language, and answer user questions — making contracts easier to understand without legal expertise.",
      "Reduces time spent decoding legal text by surfacing what actually matters in a document.",
      "Built with a Spring Boot backend, Flask-based ML service for NLP processing, React frontend, and PostgreSQL for document storage.",
    ],
    links: {
      code: "https://github.com/Ysetia10/legal-lens",
      demo: "https://legal-lens-clarify.lovable.app/",
    },
    tags: ["Spring Boot", "Flask", "React", "PostgreSQL"],
    badge: "AI",
  },
  {
    title: "SpeechSage",
    period: "2024",
    bullets: [
      "Detects speech disfluencies (stammering, hesitations) by analyzing short audio segments through deep learning models — useful for early identification of speech issues.",
      "Processes ~3-second audio clips and returns predictions that can feed into speech improvement tools.",
      "Spring Boot backend integrates with a CNN + Transformer ML pipeline for real-time audio inference via REST endpoints.",
    ],
    links: {
      code: null,
      demo: null,
    },
    tags: ["Spring Boot", "Python", "CNN", "Transformer Models"],
    badge: "ML",
  },
];
