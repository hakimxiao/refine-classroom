import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "IF101",
        name: "Dasar-Dasar Pemrograman",
        department: "Informatika",
        description: "Mata kuliah ini memperkenalkan konsep dasar pemrograman komputer menggunakan bahasa populer. Siswa akan belajar tentang logika pemrograman, algoritma sederhana, dan struktur data dasar.",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: "MA102",
        name: "Kalkulus I",
        department: "Matematika",
        description: "Mata kuliah ini mencakup limit, turunan, dan integral fungsi satu variabel. Sangat penting bagi mahasiswa teknik dan sains untuk membangun landasan matematika yang kuat.",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        code: "BI201",
        name: "Bahasa Inggris Akademik",
        department: "Bahasa Inggris",
        description: "Mata kuliah ini dirancang untuk meningkatkan keterampilan membaca, menulis, dan berbicara dalam bahasa Inggris dalam konteks akademik universitas.",
        createdAt: new Date().toISOString()
    }
];
