import { env } from "@/lib/env";
import { GraduationCap, School } from "lucide-react";

export const USER_ROLES = {
  STUDENT: "siswa",
  TEACHER: "guru",
  ADMIN: "admin",
};

export const ROLE_OPTIONS = [
  {
    value: USER_ROLES.STUDENT,
    label: "Siswa",
    icon: GraduationCap,
  },
  {
    value: USER_ROLES.TEACHER,
    label: "Guru",
    icon: School,
  },
];

export const DEPARTMENTS = [
  "Ilmu Komputer",
  "Matematika",
  "Fisika",
  "Kimia",
  "Biologi",
  "Bahasa Inggris",
  "Sejarah",
  "Geografi",
  "Ekonomi",
  "Administrasi Bisnis",
  "Teknik",
  "Psikologi",
  "Sosiologi",
  "Ilmu Politik",
  "Filsafat",
  "Pendidikan",
  "Seni Rupa",
  "Musik",
  "Pendidikan Jasmani",
  "Hukum",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB dalam byte
export const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

export const CLOUDINARY_UPLOAD_URL = env.VITE_CLOUDINARY_UPLOAD_URL;
export const CLOUDINARY_CLOUD_NAME = env.VITE_CLOUDINARY_CLOUD_NAME;
export const BACKEND_BASE_URL = env.VITE_BACKEND_BASE_URL;

export const BASE_URL = env.VITE_API_URL;
export const ACCESS_TOKEN_KEY = env.VITE_ACCESS_TOKEN_KEY;
export const REFRESH_TOKEN_KEY = env.VITE_REFRESH_TOKEN_KEY;

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

export const CLOUDINARY_UPLOAD_PRESET = env.VITE_CLOUDINARY_UPLOAD_PRESET;
