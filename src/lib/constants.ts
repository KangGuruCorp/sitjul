export type DimensionGroup = { dimensi: string; qs: string[] };

// Negative item indices (0-indexed) for scoring
// Negative item indices (0-indexed) for scoring
export const ENV_NEGATIVE = [3, 4, 5, 9, 10, 11, 15, 16, 20, 21, 25, 26, 27, 29, 31, 34, 35, 38, 39];

export const PERSEPSI_MODEL_Q: DimensionGroup[] = [
    {
        dimensi: "Ketertarikan Belajar",
        qs: [
            "Saya merasa tertarik mengikuti pelajaran yang disampaikan oleh guru",
            "Pembelajaran di kelas mendorong saya untuk mengetahui lebih banyak tentang materi pelajaran.",
            "Cara guru mengajar mampu menarik perhatian saya selama pembelajaran",
            "Kegiatan belajar di kelas terasa membosankan",
            "Saya kurang tertarik dengan Pelajaran yang disampaikan guru.",
            "Saya mudah kehilangan minat saat pembelajaran berlangsung"
        ]
    },
    {
        dimensi: "Motivasi Belajar",
        qs: [
            "Model pembelajaran yang digunakan guru membuat saya lebih semangat belajar",
            "Saya merasa termotivasi untuk belajar lebih giat di kelas",
            "Saya memiliki dorongan untuk aktif belajar selama pembelajaran berlangsung",
            "Saya merasa kurang semangat saat mengikuti pembelajaran di kelas",
            "Model pembelajaran yang digunakan guru membuat saya kurang termotivasi untuk belajar",
            "Saya kurang memiliki dorongan untuk berpartisipasi aktif dalam pembelajaran"
        ]
    },
    {
        dimensi: "Pemahaman Materi",
        qs: [
            "Model pembelajaran membantu saya memahami materi pelajaran",
            "Saya dapat memahami materi pelajaran dengan baik saat pembelajaran berlangsung",
            "Penjelasan guru membantu saya memahami konsep pelajaran dengan jelas",
            "Saya masih mengalami kesulitan memahami pelajaran meskipun sudah dijelaskan",
            "Contoh yang diberikan guru kurang membantu saya memahami materi"
        ]
    },
    {
        dimensi: "Keaktifan Belajar",
        qs: [
            "Saya berani bertanya ketika ada materi yang belum saya pahami",
            "Saya aktif bertanya saat pembelajaran berlangsung.",
            "Saya terlibat dalam diskusi kelompok saat pembelajaran berlangsung.",
            "Saya cenderung pasif ketika bekerja dalam kelompok",
            "Saya jarang berpartisipasi dalam kegiatan belajar di kelas"
        ]
    },
    {
        dimensi: "Media Pembelajaran",
        qs: [
            "Guru menggunakan berbagai media pembelajaran seperti gambar atau video",
            "Penggunaan media pembelajaran membantu saya memahami materi",
            "Saya lebih mudah memahami pelajaran ketika guru menggunakan media pembelajaran",
            "Guru jarang menggunakan media pembelajaran",
            "Penggunaan media pembelajaran terkadang membuat saya kurang memahami materi.",
            "Saya kurang memahami materi meskipun menggunakan media pembelajaran."
        ]
    },
    {
        dimensi: "Metode Pembelajaran",
        qs: [
            "Guru menggunakan berbagai metode pembelajaran yang membuat siswa lebih aktif dan antusias belajar.",
            "Guru jarang menggunakan metode pembelajaran yang bervariasi sehingga siswa cepat merasa bosan.",
            "Variasi strategi pembelajaran yang diterapkan guru membantu siswa memahami materi dengan lebih mudah.",
            "Strategi pembelajaran yang digunakan guru kurang menarik dan tidak sesuai dengan kebutuhan siswa."
        ]
    },
    {
        dimensi: "Hasil Belajar",
        qs: [
            "Pembelajaran di kelas membantu meningkatkan pengetahuan saya",
            "Saya merasa kemampuan saya berkembang setelah mengikuti pembelajaran",
            "Nilai hasil belajar saya belum mengalami peningkatan",
            "Pembelajaran kurang membantu meningkatkan kemampuan saya"
        ]
    },
    {
        dimensi: "Kepuasan Belajar",
        qs: [
            "Saya merasa puas dengan proses pembelajaran di kelas",
            "Saya menikmati proses pembelajaran yang berlangsung di kelas.",
            "Saya merasa pembelajaran di kelas kurang bermanfaat bagi kehidupan saya.",
            "Cara guru mengajar membuat saya kurang nyaman dalam belajar."
        ]
    },
    {
        dimensi: "Kejujuran Respon",
        qs: [
            "Sebagai pengecekan konsentrasi membaca, mohon pilih opsi 'Tidak Setuju' (TS) untuk pernyataan ini."
        ]
    }
];

export const SIKAP_ILMIAH_Q: DimensionGroup[] = [
    {
        dimensi: "Rasa Ingin Tahu",
        qs: [
            "Saya ingin mengetahui penyebab suatu peristiwa yang dipelajari",
            "Saya kurang terdorong untuk mencari informasi tambahan",
            "Saya merasa tertarik untuk bertanya tentang materi yang belum dipahami",
            "Saya jarang mengajukan pertanyaan saat pembelajaran"
        ]
    },
    {
        dimensi: "Ketertarikan Eksperimen",
        qs: [
            "Saya tertarik mengikuti kegiatan eksperimen atau percobaan",
            "Saya enggan terlibat dalam kegiatan eksperimen"
        ]
    },
    {
        dimensi: "Sikap Objektif",
        qs: [
            "Saya menilai sesuatu berdasarkan fakta yang ada",
            "Saya jarang menggunakan data dalam menyimpulkan",
            "Saya berusaha tidak langsung menyimpulkan tanpa bukti",
            "Saya kurang mempertimbangkan informasi sebelum menyimpulkan",
            "Saya menyampaikan pendapat dengan didukung bukti",
            "Saya jarang memberikan alasan saat berpendapat"
        ]
    },
    {
        dimensi: "Berpikir Kritis",
        qs: [
            "Saya memikirkan hubungan sebab-akibat suatu peristiwa",
            "Saya kesulitan menganalisis informasi secara logis",
            "Saya ingin mengetahui alasan di balik suatu konsep",
            "Saya hanya menerima informasi tanpa ingin tahu lebih jauh",
            "Saya memeriksa kebenaran informasi sebelum mempercayainya",
            "Saya jarang membandingkan informasi dari sumber lain"
        ]
    },
    {
        dimensi: "Sikap Terbuka",
        qs: [
            "Saya menghargai pendapat yang berbeda",
            "Saya sering mengabaikan pendapat teman",
            "Saya bersedia mengubah pendapat jika ada bukti baru",
            "Saya kurang terbuka terhadap informasi baru",
            "Saya menghargai perbedaan pandangan dalam diskusi",
            "Saya merasa terganggu dengan pendapat yang berbeda"
        ]
    },
    {
        dimensi: "Ketekunan",
        qs: [
            "Saya tidak mudah menyerah dalam menyelesaikan tugas",
            "Saya berhenti mencoba ketika mengalami kegagalan",
            "Saya mengerjakan tugas secara teratur",
            "Saya kurang konsisten dalam belajar"
        ]
    },
    {
        dimensi: "Ketelitian",
        qs: [
            "Saya memeriksa kembali hasil pekerjaan saya",
            "Saya sering melakukan kesalahan karena kurang teliti"
        ]
    },
    {
        dimensi: "Kerja Sama",
        qs: [
            "Saya aktif dalam kegiatan kerja kelompok",
            "Saya kurang berpartisipasi dalam diskusi kelompok",
            "Saya menghargai hasil kerja teman",
            "Saya sering mengabaikan pendapat anggota kelompok",
            "Saya bertanggung jawab terhadap tugas kelompok",
            "Saya mengabaikan tugas yang diberikan"
        ]
    },
    {
        dimensi: "Disiplin",
        qs: [
            "Saya mengikuti instruksi guru dengan baik",
            "Saya mengabaikan tata tertib pembelajaran",
            "Saya mengatur waktu belajar dengan baik",
            "Saya sering terlambat mengumpulkan tugas"
        ]
    },
    {
        dimensi: "Kejujuran Respon",
        qs: [
            "Sekadar untuk memastikan Anda tetap fokus, pilihlah 'Sangat Setuju' (SS) pada baris ini."
        ]
    }
];

export const EFI_NEGATIVE = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39];

export interface EssayQuestion {
    id: number;
    text: string;
    indicator: string;
    subject: string;
    cognitiveLevel: string;
    rubric: string[];
    image?: string;
}

export const ESSAY_QUESTIONS: EssayQuestion[] = [
    {
        id: 1,
        text: "Jelaskan pengertian sistem pernapasan manusia dan fungsinya bagi tubuh!",
        indicator: "Interpretasi",
        subject: "IPA",
        cognitiveLevel: "C2",
        rubric: [
            "Sistem pernapasan adalah sekumpulan organ yang terlibat dalam proses pertukaran gas.",
            "Fungsi utamanya adalah mengambil oksigen (O2) dari udara untuk metabolisme tubuh.",
            "Fungsi lainnya adalah mengeluarkan karbon dioksida (CO2) sebagai sisa pembakaran sel."
        ]
    },
    {
        id: 2,
        text: "Sebutkan organ-organ pernapasan manusia secara berurutan mulai dari hidung sampai paru-paru!",
        indicator: "Interpretasi",
        subject: "IPA",
        cognitiveLevel: "C2",
        rubric: [
            "Hidung -> Faring -> Laring -> Trakea -> Bronkus -> Bronkiolus -> Alveolus.",
            "Urutan harus benar untuk menunjukkan pemahaman alur udara.",
            "Setiap organ memiliki peran spesifik dalam menyaring atau menyalurkan udara."
        ]
    },
    {
        id: 3,
        text: "Jelaskan bagaimana proses inspirasi terjadi pada manusia!",
        indicator: "Eksplanasi",
        subject: "IPA",
        cognitiveLevel: "C2",
        rubric: [
            "Otot diafragma berkontraksi (mendatar) dan otot antar tulang rusuk berkontraksi (tulang rusuk terangkat).",
            "Volume rongga dada membesar, sehingga tekanan udara di dalam paru-paru mengecil.",
            "Udara dari luar masuk ke dalam paru-paru karena perbedaan tekanan."
        ]
    },
    {
        id: 4,
        text: "Jelaskan bagaimana proses ekspirasi terjadi pada manusia!",
        indicator: "Eksplanasi",
        subject: "IPA",
        cognitiveLevel: "C2",
        rubric: [
            "Otot diafragma relaksasi (melengkung) dan otot antar tulang rusuk relaksasi (tulang rusuk turun).",
            "Volume rongga dada mengecil, sehingga tekanan udara di dalam paru-paru membesar.",
            "Udara dari dalam paru-paru terdorong keluar karena perbedaan tekanan."
        ]
    },
    {
        id: 5,
        text: "Mengapa hidung memiliki peran penting dalam sistem pernapasan? Jelaskan fungsinya!",
        indicator: "Analisis",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Hidung menyaring udara dari debu dan kotoran menggunakan rambut hidung.",
            "Hidung melembapkan udara yang masuk menggunakan selaput lendir.",
            "Hidung mengatur suhu udara agar sesuai dengan suhu tubuh menggunakan pembuluh kapiler."
        ]
    },
    {
        id: 6,
        text: "Jelaskan fungsi alveolus dalam proses pernapasan manusia!",
        indicator: "Analisis",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Alveolus adalah tempat terjadinya pertukaran gas (O2 dan CO2) secara difusi.",
            "Dindingnya yang tipis memudahkan oksigen masuk ke pembuluh darah.",
            "Luas permukaannya yang besar memaksimalkan kapasitas penyerapan oksigen."
        ]
    },
    {
        id: 7,
        text: "Sebutkan dua penyakit pada sistem pernapasan manusia dan jelaskan penyebabnya!",
        indicator: "Inferensi",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Penyakit 1 (misal Influenza): disebabkan oleh infeksi virus.",
            "Penyakit 2 (misal Asma): disebabkan oleh penyempitan saluran napas (alergi/polusi).",
            "Menyebutkan penyebab yang tepat untuk masing-masing penyakit."
        ]
    },
    {
        id: 8,
        text: "Jelaskan perbedaan antara pernapasan dada dan pernapasan perut!",
        indicator: "Analisis",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Pernapasan dada menggunakan otot antar tulang rusuk.",
            "Pernapasan perut menggunakan otot diafragma.",
            "Keduanya menghasilkan perubahan volume rongga dada untuk menggerakkan udara."
        ]
    },
    {
        id: 9,
        text: "Bagaimana proses pertukaran gas oksigen (O2) dan karbon dioksida (CO2) terjadi di paru-paru? Jelaskan!",
        indicator: "Eksplanasi",
        subject: "IPA",
        cognitiveLevel: "C2",
        rubric: [
            "Terjadi melalui proses difusi di dalam alveolus.",
            "Oksigen di alveolus berpindah ke pembuluh darah karena konsentrasi O2 di alveolus lebih tinggi.",
            "Karbon dioksida di pembuluh darah berpindah ke alveolus untuk dibuang ke luar tubuh."
        ]
    },
    {
        id: 10,
        text: "Sebutkan dan jelaskan cara-cara menjaga kesehatan sistem pernapasan manusia!",
        indicator: "Self-Regulation",
        subject: "IPA",
        cognitiveLevel: "C6",
        rubric: [
            "Berolahraga secara teratur untuk melatih kapasitas paru-paru.",
            "Menghindari paparan asap rokok dan polusi udara (menggunakan masker).",
            "Mengonsumsi makanan bergizi dan istirahat yang cukup untuk menjaga daya tahan tubuh."
        ]
    }
];

// Legacy support for parts of the app still using the string
export const TES_SOAL = ESSAY_QUESTIONS[0].text;
