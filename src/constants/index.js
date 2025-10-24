const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
    { text: "Models", imgPath: "/images/models.svg" },
    { text: "Data", imgPath: "/images/data.svg" },
    { text: "Risk", imgPath: "/images/risk.svg" },
    { text: "Insights", imgPath: "/images/insights.svg" },
    { text: "Models", imgPath: "/images/models.svg" },
    { text: "Data", imgPath: "/images/data.svg" },
    { text: "Risk", imgPath: "/images/risk.svg" },
    { text: "Insights", imgPath: "/images/insights.svg" },
];

const counterItems = [

  { value: 100, suffix: "+", label: "Students Supported as Tutor" },
    { value: 40, suffix: "+", label: "Events Led as President" },
  { value: 6, suffix: "", label: "A's in Advanced Finance" },
  { value: 1, suffix: "st", label: "in MSc Class" },
];

const techStackIcons = [
    {
        name: "Python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "R Software",
        modelPath: "/models/Rsoftware.glb",
        scale: 6,
        rotation: [0, 4.5, 0],
    },
    {
        name: "Time Series",
        modelPath: "/models/candlesticks.glb",
        scale: 0.37,
        rotation: [0, 0, 0],
    },
    {
        name: "Derivative Modeling",
        modelPath: "/models/bargraph.glb",
        scale: 10,
        rotation: [0, 0, 0],
    },
    {
        name: "Quantitative Finance",
        modelPath: "/models/bank.glb",
        scale: 0.5,
        rotation: [0, 1.29, 0],
    },
];

const expCards = [
  {
    review: "I was lucky to work with Daniel, [...] from the very beginning, he showed genuine leadership, the kind that inspires trust and gives others room to grow. [...]",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.webp",
    title: "President - Economics Students' Union of the Academic Association of Coimbra (NEE/AAC)",
    date: "June 2024 - June 2025",
    responsibilities: [
      "Secured partnerships with firms such as EY, KPMG and Red Bull, expanding visibility.",
      "Redesigned communication, driving 80% growth & national media coverage (RTP, Antena 1).",
      "Led 40+ academic, cultural, and career events, incl. a fully funded trip to Brussels.",
    ],
  },
  {
    review: "Daniel’s tutoring was one of the most impressive initiatives I’ve ever seen as a student. His coordination with the professors in charge and the thorough preparation for each session allowed him to meet the demands of each course with remarkable efficiency. [Translated]",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.webp",
    title: "Informal Tutor - Faculty of Economics, University of Coimbra (FEUC)",
    date: "December 2022 - December 2024",
    responsibilities: [
      "Pioneered supervised informal tutoring sessions for mathematics, finance, and statistics.",
      "Adapted teaching methods to diverse student needs, assisting 100+ students at total.",
    ],
  },
  {
    review: "[...] He (Daniel) consistently approached every project with professionalism, attention to detail, and a genuine desire to make a positive impact.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.webp",
    title: "Sub-Coordinator of International Relations - Academic Association of Coimbra (AAC)",
    date: "November 2022 - November 2023",
    responsibilities: [
      "Integrated worldwide students via Portuguese lessons and managed the International Council.",
      "Collaborated closely with university staff, enhancing understanding of institutional operations.",
    ],
  },
];


const testimonials = [
    {
        name: "Alex Figueiredo",
        mentions: null,
        review:
            "Daniel's coordination with professors and thorough preparation showed great professionalism. His deep understanding and calm energy created an engaging, efficient learning environment — both friendly and highly educational.",
        imgPath: null,
    },
    {
        name: "Rafael Pereira",
        mentions: null,
        review:
            "Daniel's calmness and patience were key to achieving grades I didn't think possible. He summarizes essential points and explains all course content clearly, making even Econometrics easier. Highly recommended.",
        imgPath: null,
    },
    {
        name: "Oliver Bean",
        mentions: null,
        review:
            "Daniel's Calculus sessions clarified difficult topics and highlighted key points for solving exercises. The improvement between my first and second exams was huge. Perfect for anyone struggling with self-study.",
        imgPath: null,
    },
    {
        name: "Sofia Leite",
        mentions: null,
        review:
            "Daniel's patience and clarity made complex International Economics topics easy to grasp. His explanations were concise, and he remained available to help even after sessions. Thanks to his guidance, I felt more confident and improved my grades.",
        imgPath: null,
    },
    {
        name: "Daniel Afonso",
        mentions: null,
        review:
            "Daniel combines theory with practical exercises tailored to each student's level. His clear explanations make studying less tiring and much more effective. I always left his sessions understanding the material better.",
        imgPath: null,
    },
    {
        name: "Gonçalo Braga",
        mentions: null,
        review:
            "Daniel simplifies complex material and focuses on key exam topics. Always available for questions, his sessions were essential for passing challenging courses. An indispensable 10/10 academic support.",
        imgPath: null,
    },
    {
        name: "Filipe Nunes",
        mentions: null,
        review:
            "Daniel's sessions cover the most relevant material, addressing every question thoroughly. His adaptability, even with Erasmus students in other languages, makes his teaching impactful for anyone aiming to improve their grades.",
        imgPath: null,
    },
    {
        name: "Odilson",
        mentions: null,
        review:
            "International Economics was one of the hardest subjects, but Daniel's sessions made it much clearer. His explanations helped me understand both the theory and how to answer exercises correctly.",
        imgPath: null,
    },
    {
        name: "Luis Loureiro",
        mentions: null,
        review:
            "Daniel's concise, direct approach made complex exercises easy to understand. His language is clearer and more accessible than in class, focusing on what's essential for solving problems effectively.",
        imgPath: null,
    },
    {
        name: "Tanque",
        mentions: null,
        review:
            "Daniel's explanations were invaluable. The material aligned perfectly with lectures, and his collaboration with professors ensured accurate and high-quality sessions.",
        imgPath: null,
    },
    {
        name: "Ana Paixão",
        mentions: null,
        review:
            "Daniel's online lessons were clear, detailed, and focused on what truly mattered. They improved my organization, filled learning gaps, and had a huge impact on my academic performance and efficiency.",
        imgPath: null,
    },
    {
        name: "Beatriz Neves",
        mentions: null,
        review:
            "Daniel's support for International Economics was crucial for my oral exam. His objective and focused explanations matched professor expectations perfectly and helped me secure a top grade.",
        imgPath: null,
    },
    {
        name: "Dani Bernardes",
        mentions: null,
        review:
            "Daniel's explanatory videos were clear and detailed, helping me understand complex concepts on my own. His patience and availability made a big difference — truly grateful for his help.",
        imgPath: null,
    },
    {
        name: "Francisca Marques",
        mentions: null,
        review:
            "In just a few hours, Daniel summarized key material efficiently and stayed available for questions. His sessions were crucial for improving my grade — definitely recommend.",
        imgPath: null,
    },
    {
        name: "Rita Veiga",
        mentions: null,
        review:
            "Daniel was a dedicated and supportive peer. His clear explanations and attentiveness helped me understand difficult subjects and improved my academic performance significantly.",
        imgPath: null,
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        url: "https://www.instagram.com/sopas_247/",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
        url: "https://www.facebook.com/daniel.souza247",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url: "https://www.linkedin.com/in/souza247",
    },
];

const eduCards = [
    {
        imgPath: "/images/coimbra1.webp", // Optional - remove if you don't want a logo
        degree: "MSc in Quantitative Methods in Finance",
        institution: "University of Coimbra (2024 - Present)",
        average: "Average: 85% (eq. to 17/20), 1st in class",
        distinction: "Expected graduation: Feb 2026", // No distinction for this one
        grades: "Derivative Modelling and Risk Management, Interest Rate Models & 4 others",
        link: "https://apps.uc.pt/courses/EN/programme/465/2025-2026?id_branch=20845#branch-20845"
    },
    {
        imgPath: "/images/coimbra2.webp", // Optional
        degree: "BSc in Economics",
        institution: "University of Coimbra (2021 – 2024)",
        average: "Average: 80% (eq. to 16/20)",
        distinction: "Distinction recognized on the Merit Board (2023/2024)",
        grades: "Maths, Statistics, Econometrics, Financial Products and Markets & 6 others",
        link: "https://apps.uc.pt/courses/EN/programme/10601/2025-2026?id_branch=22961#branch-22961"
    }
];

export {
  words,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
  eduCards,
};
