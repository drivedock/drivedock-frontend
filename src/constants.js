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

export const DEPARTMENTS_NAME_TO_ID_MAPPING = {
  Mechanical: "1",
  "Computer Science & IT": "2",
  Electrical: "3",
  "Electronics and Communication": "4",
  Civil: "5",
  "Data Science": "6",
  Architecture: "7",
  "Fashion Design": "8",
  "Groups 1 & 2": "9",
  Police: "10",
  "Air Force": "11",
  Racing: "12",
  Cinema: "13",
  "Start up": "14",
  "Human Resource": "15",
  Agriculture: "16",
};

export const DEPARTMENTS_ID_TO_NAME_MAPPING = {
  1: "Mechanical",
  2: "Computer Science & IT",
  3: "Electrical",
  4: "Electronics and Communication",
  5: "Civil",
  6: "Data Science",
  7: "Architecture",
  8: "Fashion Design",
  9: "Groups 1 & 2",
  10: "Police",
  11: "Air Force",
  12: "Racing",
  13: "Cinema",
  14: "Start up",
  15: "Human Resource",
  16: "Agriculture",
};

export const PROJECT_APPLICANT_TYPES = [
  "Full time intern",
  "Part time intern",
  "Student in practice",
];

export const IDEA_STATUS = ["Idea Phase", "Prototype Level", "Documented"];

export const IDEA_TYPE = ["Service based", "Product based"];
