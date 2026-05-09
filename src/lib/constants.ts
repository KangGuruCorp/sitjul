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
        text: "Perhatikan jalur udara saat kita menarik napas. Sebutkan organ-organ pernapasan yang dilewati udara secara berurutan mulai dari hidung hingga mencapai paru-paru! Mengapa urutan ini tidak boleh tertukar dalam menjalankan fungsinya?\n\nPerintah:\nSebutkan informasi utama dari hasil pengamatan tersebut!",
        indicator: "Interpretasi",
        subject: "IPA",
        cognitiveLevel: "C2",
        rubric: [
            "Hidung -> Faring -> Laring -> Trakea -> Bronkus -> Bronkiolus -> Alveolus.",
            "Urutan tidak boleh tertukar karena setiap organ memiliki fungsi pengkondisian udara progresif (menyaring, melembabkan, menghangatkan).",
            "Jika tertukar, udara kotor atau bersuhu ekstrem dapat merusak jaringan paru-paru."
        ]
    },
    {
        id: 2,
        text: "Seringkali orang menganggap bahwa 'bernapas' sama dengan 'respirasi seluler'. Jelaskan perbedaan mendasar antara keduanya dan bagaimana kedua proses tersebut saling mendukung dalam menghasilkan energi bagi tubuh!\n\nPerintah:\nJelaskan makna dari kedua hasil pengukuran tersebut!",
        indicator: "Eksplanasi",
        subject: "IPA",
        cognitiveLevel: "C2",
        rubric: [
            "Bernapas (Ventilasi): Proses mekanis menghirup O2 dan menghembuskan CO2.",
            "Respirasi Seluler: Proses kimiawi di dalam mitokondria sel untuk memecah glukosa menggunakan oksigen guna menghasilkan energi (ATP).",
            "Hubungan: Bernapas menyediakan bahan baku (O2) yang dibutuhkan sel, sementara respirasi seluler adalah tujuan akhir mengapa kita bernapas."
        ]
    },
    {
        id: 3,
        text: "Saat seseorang mengalami tersedak, jalur pernapasan terganggu. Analisislah peran epiglotis dalam sistem pernapasan dan pencernaan! Apa yang terjadi pada tekanan udara di paru-paru jika epiglotis gagal menutup saat kita menelan makanan?\n\nPerintah:\nAnalisislah perubahan yang terjadi dan jelaskan penyebabnya!",
        indicator: "Analisis",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Epiglotis berfungsi sebagai katup yang menutup trakea saat menelan agar makanan masuk ke esofagus.",
            "Jika gagal, makanan masuk ke saluran napas (tersedak), mengganggu aliran udara.",
            "Menyebabkan tekanan udara paru tidak stabil karena sumbatan benda asing."
        ]
    },
    {
        id: 4,
        text: "Bandingkan mekanisme pernapasan dada dan pernapasan perut. Jika otot diafragma seseorang mengalami kelumpuhan, analisislah dampaknya terhadap proses ekspirasi dan volume udara yang dapat dikeluarkan!\n\nPerintah:\nAnalisislah perubahan yang terjadi dan jelaskan penyebabnya!",
        indicator: "Analisis",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Dampak kelumpuhan diafragma: Pernapasan perut terganggu.",
            "Ekspirasi menjadi sulit dan tidak maksimal karena diafragma tidak bisa relaksasi/melengkung ke atas untuk mendorong udara keluar.",
            "Volume udara sisa meningkat dan kapasitas vital menurun."
        ]
    },
    {
        id: 5,
        text: "Di daerah kutub yang bersuhu dingin, penduduknya tetap bisa bernapas dengan aman tanpa paru-parunya membeku. Simpulkan fungsi spesifik rambut hidung, lendir, dan pembuluh darah kapiler dalam mengondisikan udara tersebut!\n\nPerintah:\nNilailah pernyataan tersebut dan berikan alasan ilmiah yang mendukung jawabanmu!",
        indicator: "Inferensi",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Rambut hidung: menyaring debu/partikel.",
            "Lendir: melembabkan udara.",
            "Kapiler: menghangatkan udara agar sesuai suhu tubuh.",
            "Ketiganya memastikan udara yang masuk ke paru-paru sudah hangat, lembab, dan bersih."
        ]
    },
    {
        id: 6,
        text: "Perhatikan gambar berikut ini!\n\nAlveolus memiliki struktur dinding yang sangat tipis dan luas permukaan yang besar. Analisislah mengapa struktur seperti ini sangat krusial bagi proses difusi oksigen dibandingkan jika paru-paru hanya berbentuk kantong rata!\n\n(Ilustrasi: Alveolus memiliki luas permukaan besar karena bentuk bola-bola kecil yang melipatgandakan area pertukaran gas)",
        indicator: "Analisis",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Struktur tipis dan luas mempercepat laju difusi gas sesuai hukum Fick.",
            "Bentuk bola-bola alveolus melipatgandakan area pertukaran gas hingga puluhan meter persegi.",
            "Luas ini krusial untuk mencukupi kebutuhan oksigen triliunan sel tubuh."
        ],
        image: "https://i.ibb.co.com/whpYFXbJ/6.jpg"
    },
    {
        id: 7,
        text: "Seorang pasien menderita Emfisema di mana dinding alveolusnya hancur dan bergabung menjadi satu ruang besar. Evaluasilah bagaimana kondisi ini mempengaruhi efisiensi pertukaran gas! Apakah pemberian oksigen dosis tinggi solusi tepat?\n\nPerintah:\nBerikan argumenmu!",
        indicator: "Evaluasi",
        subject: "IPA",
        cognitiveLevel: "C5",
        rubric: [
            "Menurunkan efisiensi karena luas permukaan difusi berkurang drastis.",
            "Oksigen dosis tinggi tidak selalu tepat karena pada pasien kronis dapat menekan rangsangan pusat pernapasan (retensi CO2).",
            "Solusi lebih tepat adalah terapi oksigen terkontrol dengan dosis yang dipantau ketat secara medis."
        ]
    },
    {
        id: 8,
        text: "Mengapa frekuensi pernapasan seseorang yang baru saja berlari cepat berbeda dengan orang yang sedang tidur? Jelaskan secara ilmiah hubungan aktivitas fisik, kebutuhan oksigen di otot, dan pembuangan CO2!",
        indicator: "Eksplanasi",
        subject: "IPA",
        cognitiveLevel: "C4",
        rubric: [
            "Berlari meningkatkan laju respirasi seluler untuk energi.",
            "Kebutuhan O2 naik untuk bakar glukosa, kadar CO2 naik sebagai sisa pembakaran.",
            "Otak mendeteksi kenaikan keasaman darah (CO2 naik) dan memerintahkan paru bernapas lebih cepat."
        ]
    },
    {
        id: 9,
        text: "Vape dianggap lebih aman dari rokok tembakau. Evaluasilah pernyataan tersebut jika dikaitkan dengan risiko peradangan bronkiolus. Berikan penilaian kritis mengenai dampak jangka panjangnya terhadap kapasitas vital paru-paru!",
        indicator: "Evaluasi",
        subject: "IPA",
        cognitiveLevel: "C5",
        rubric: [
            "Anggapan keliru. Cairan vape (perasa, propilen glikol) menyebabkan peradangan pada bronkiolus (Popcorn Lung).",
            "Dampak jangka panjang: terbentuknya jaringan parut yang menurunkan kapasitas vital secara permanen.",
            "Menyebabkan paru menjadi kaku dan sulit mengembang."
        ]
    },
    {
        id: 10,
        text: "Jika tinggal di kota berpolusi tinggi, langkah praktis apa yang dapat kamu lakukan untuk menjaga kesehatan pernapasan? Evaluasilah kelebihan dan kekurangan penggunaan masker kain dibandingkan masker medis N95!",
        indicator: "Self-Regulation",
        subject: "IPA",
        cognitiveLevel: "C6",
        rubric: [
            "Langkah praktis: Masker, air purifier, tanaman pembersih udara.",
            "Masker kain: murah/cuci ulang tapi pori besar (tak tahan PM2.5).",
            "N95: efisiensi tinggi (95%) tapi mahal dan sulit napas jika lama."
        ]
    }
];

// Legacy support for parts of the app still using the string
export const TES_SOAL = ESSAY_QUESTIONS[0].text;
