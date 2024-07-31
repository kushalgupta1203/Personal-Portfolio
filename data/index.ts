export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skillset", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Qualifications", link: "#education" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TrafficTrak AI",
    des: "Vehicle counting system using OpenCV for real-time detection.",
    img: "/p1.jpg",
    iconLists: ["/python.png","/opencv.png", "mediapipe.png", "/camera.png"],
    link: "https://github.com/kushalgupta1203/TrafficTrak-AI",
  },
  {
    id: 2,
    title: "Finger Tip Canvas",
    des: "Interactive app that uses hand gestures for drawing on a virtual canvas.",
    img: "/hand.jpg",
    iconLists: ["/python.png","/opencv.png", "/mediapipe.png", "paint.png"],
    link: "https://github.com/kushalgupta1203/FingerTip-Canvas",
  },
  {
    id: 3,
    title: "Cricket Score Prophet",
    des: "Web application that predicts cricket match scores using a pre-trained model.",
    img: "/stadium.jpg",
    iconLists: ["/python.png","/streamlit.png", "/kaggle.png", "/jupyter.png"],
    link: "https://github.com/kushalgupta1203/Cricket-Score-Prophet",
  },
  {
    id: 4,
    title: "Wellness Whiz",
    des: "Healthcare chatbot using Hugging Face delivers medical assistance.",
    img: "/p4.jpg",
    iconLists: ["/python.png","/chatgpt.png", "/nlp.png", "/js.png"],
    link: "https://github.com/kushalgupta1203/Healthcare-Chatbot-System",
  },
  {
    id: 5,
    title: "JobMatch AI",
    des: "Flask web application that evaluates resume quality using an NLP model.",
    img: "/job.webp",
    iconLists: ["/python.png","/flask.png", "/nlp.png", "/js.png"],
    link: "https://github.com/kushalgupta1203/JobMatch-AI",
  },
  {
    id: 6,
    title: "Medal Map",
    des: " Data analysis report of the Summer Olympics from 1896 to 2016.",
    img: "/olympics.JPG",
    iconLists: ["/python.png","/streamlit.png", "/kaggle.png", "/jupyter.png"],
    link: "https://github.com/kushalgupta1203/Medal-Map",
  },
];


// data/index.ts
// Example data
export const education = [
  {
    name: "Lovely Public Senior Secondary School",
    location: "Delhi, India",
    level: "Secondary Education",
    grade: "96%",
    year: "2017 - 2019",
    activities: "Debate Club, Music Club, Public Speaking",
    type: "school" as const,
  },
  {
    name: "Lovely Public Senior Secondary School",
    location: "Delhi, India",
    level: "Senior Secondary Education",
    grade: "94.6%",
    year: "2019 - 2021",
    activities: "Music Club, Public Speaking, Research Club",
    type: "school" as const,
  },
  {
    name: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    grade: "9.46 CGPA",
    course: "Bachelors in Technology",
    branch: "Artificial Intelligence & Data Science",
    year: "2021 - 2025",
    activities: "General Secratary - NSS (2023 - 24), Won Hackathons, Public Speaking, Event Organisation",
    type: "college" as const,
  }
];


    
export const Skillset = [
  {
    id: 1,
    title: "Programming Skills",
    desc: "Python, R, SQL, Object-Oriented Programming (OOPs), Data Structures and Algorithms, Supervised & Unsupervised Learning, Deep Learning, NLP, Text Analysis, Probability, Statistics, Linear Algebra, AI, Mathematics",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Science Skills",
    desc: "NumPy, Pandas, Scikit-Learn, Seaborn, Matplotlib, TensorFlow, Keras, Snscrape, Machine Learning, Data Visualization, NLP, Statistics,  Tableau, Power BI, MongoDB, PostgreSQL, MySQL",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Soft Skills",
    desc: "Public Speaking, Communication, Problem-Solving, Teamwork, Time Management",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Tools & Platforms",
    desc: "Git, Google Colab, Excel, MS PowerPoint, POSTMAN, Windows, Linux, HTML, CSS, JavaScript, React,Tailwind, Django, Flask, Node.js, Figma, Photoshop, Canva, Arduino, Bash, Streamlit",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/kushalgupta1203",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/kushalgupta1203",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/kushalgupta1203",
  },
  {
    id: 4,
    img: "/linktree.png",
    url: "https://linktr.ee/kushalgupta1203",
  },
  {
    id: 5,
    img: "/gmail.png",
    url: "mailto:kushalgupta1203@gmail.com",
  },
];
