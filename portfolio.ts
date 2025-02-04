export const socialLinks = {
  email: "tom.wang3@uwaterloo.ca",
  linkedin: "https://linkedin.com/in/zxTomw",
  github: "https://github.com/zxTomw",
};

export const projectList = [
  {
    id: "path-robot",
    image: "/projects/path-robot.png",
    title: "Pathfinding Robot",
    group: "group",
    github: "https://github.com/kenoi1/wato-asd",
    description:
      "A simulated robot equipped with lidar that evaluates the objects around it and finds the shortest path to the destination.",
    techStack: ["C++", "ROS", "CMake", "Docker", "Foxglove Studio"],
  },
  {
    id: "navigoose",
    image: "/projects/navgoose.jpg",
    title: "NaviGoose",
    description:
      "A hardware project that uses a Raspberry Pi connected to a camera to\
    detect objects on the ground for visual impared individuals. Used\
     custom-trained YOLOV11 model for object detection.",
    github: "https://github.com/kenoi1/geesehack",
    group: "group",
    techStack: [
      "Python",
      "YOLOV11",
      "Raspberry Pi",
      "OpenCV",
      "PyTorch",
      "WebSocket",
      "Flask",
    ],
  },
  {
    id: "personal-notes",
    title: "PersonalNotes",
    description:
      "An LLM-powered note-taking app that aggregates your notes and\
    documents. Utilized OpenAI platform and LangChain to generate summaries, \
    flash cards and test questions.",
    group: "group",
    image: "/projects/personal-notes.png",
    github: "https://github.com/zxTomw/HTN2024",
    techStack: [
      "React",
      "Next.js",
      "Flask",
      "PostgreSQL",
      "OpenAI",
      "LangChain",
      "Vercel",
      "Tailwind CSS",
      "Bun",
    ],
  },
  {
    id: "cli-chess",
    title: "CLI Chess",
    description:
      "A command line chess game with hard-level AI's and multiplayer modes.\
     Built with C++, and utilized Minimax algorithm with alpha-beta pruning.",
    group: "group",
    image: "/projects/chess.png",
    github: "https://github.com/RC074/CS246-Chess",
    techStack: ["C++", "CMake", "GNU", "Clang"],
  },
];
