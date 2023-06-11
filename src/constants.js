export const EMAIL_REGEX =
  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

export const API_URL = import.meta.env.VITE_API_URL;

export const DEPARTMENTS = [
  "Mechanical",
  "Computer Science & IT",
  "Electrical",
  "Electronics and Communication",
  "Civil",
  "Data Science",
  "Architecture",
  "Fashion Design",
  "Groups 1 & 2",
  "Police",
  "Air Force",
  "Racing",
  "Cinema",
  "Start up",
  "Human Resource",
  "Agriculture",
];

export const PROJECT_APPLICANT_TYPES = [
  "Full time intern",
  "Part time intern",
  "Student in practice",
];

export const IDEA_STATUS = ["Idea Phase", "Prototype Level", "Documented"];

export const IDEA_TYPE = ["Service based", "Product based"];
