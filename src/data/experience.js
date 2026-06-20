export const experience = [
  {
    role: "AI Intern",
    company: "Behooked",
    type: "Internship · AI Systems",
    location: "Remote",
    period: "April 2026 – Present",
    current: true,
    link: null,
    tags: ["Smart Resize", "Dynamic Captions"],
    points: [
      "Built Smart Resize, an AI image-outpainting tool (FastAPI + React/Vite) extending images to 6 aspect-ratio presets or custom sizes up to 4096px via an interactive drag-to-extend canvas.",
      "Engineered Dynamic Captions, generating word-level timed captions from OpenAI Whisper ASR with LLM-driven emphasis and a behind-subject effect compositing text behind the speaker via AI mattes.",
      "Replaced the hosted matting API with a local Robust Video Matting ONNX engine (onnxruntime), cutting per-render cost to zero and removing edge flicker via a recurrent decoder.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Adalabs & Co.",
    type: "Internship",
    location: null,
    period: "June 2025 – July 2025",
    current: false,
    link: "https://www.teamworksadvisors.com/",
    tags: ["Next.js", "RBAC", "Figma"],
    points: [
      "Built the frontend of the TeamWorks Web App in Next.js, translating Figma designs into a responsive, pixel-perfect interface with a Largest Contentful Paint (LCP) of 2.5s.",
      "Developed and integrated backend API routes in Next.js, enabling seamless database operations for 50–60 active users during rollout.",
      "Implemented a secure Content Management System with role-based access control for Super Admin, Admin, and Employee roles.",
    ],
  },
];
