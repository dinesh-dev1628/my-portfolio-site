import {
  Code,
  Language,
  DataObject,
  GitHub,
  Storage,
  BugReport,
  ApiOutlined,
} from "@mui/icons-material";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: Language },  // just reference
      { name: "CSS", icon: Code },
      { name: "JavaScript", icon: DataObject },
      { name: "React", icon: Code },
    ],
  },
  {
    category: "Backend / APIs",
    items: [
      { name: "REST APIs", icon: ApiOutlined },
      { name: "Python", icon: BugReport },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: GitHub },
      { name: "Storage", icon: Storage },
    ],
  },
];
