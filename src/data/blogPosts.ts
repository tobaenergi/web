export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  summary: string;
  content: {
    heading: string;
    body: string[];
    listItems?: string[];
  }[];
  relatedSlugs?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'panduan-lengkap-pasang-panel-surya-rumah-tangga',
    title: 'Panduan Lengkap Pasang Panel Surya Rumah Tangga: Biaya, Manfaat, dan Cara Kerja',
    metaDescription:
      'Pelajari panduan lengkap instalasi PLTS atap untuk rumah tangga di Indonesia. Temukan estimasi biaya, manfaat finansial jangka panjang, dan alur pemasangan end-to-end.',
    keywords:
      'pasang panel surya rumah, biaya plts atap rumah, hemat listrik panel surya, cara kerja solar panel rumah, instalasi plts jabodetabek',
    category: 'Panduan & Edukasi',
    readTime: '6 menit baca',
    publishedDate: '2026-02-15',
    author: {
      name: 'Tim Engineering Toba Energi',
      role: 'Spesialis PLTS Residensial',
    },
    image: 'https://i.ibb.co/35TkFT6W/3.png',
    summary:
      'Kebutuhan listrik rumah tangga terus meningkat seiring penyesuaian tarif listrik. Pasang panel surya atap (PLTS Atap) kini menjadi investasi cerdas untuk menekan pengeluaran bulanan hingga 60-80%.',
    content: [
      {
        heading: 'Mengapa Rumah Tangga Mulai Beralih ke Listrik Tenaga Surya?',
        body: [
          'Di tengah kenaikan tarif dasar listrik dan tren keberlanjutan lingkungan, panel surya bukan lagi sekadar tren teknologi melainkan solusi nyata efisiensi pengeluaran rumah tangga.',
          'Dengan radiasi sinar matahari tropis yang melimpah di Indonesia (rata-rata 4,5 hingga 4,8 kWh/m²/hari), potensi produksi energi bersih di atap hunian sangatlah optimal.',
        ],
        listItems: [
          'Penghematan tagihan listrik bulanan hingga 80%.',
          'Masa pakai sistem mencapai 25 hingga 30 tahun dengan garansi performa.',
          'Peningkatan nilai jual dan nilai estetika properti rumah.',
          'Ikut berkontribusi langsung pada pengurangan jejak emisi karbon (net-zero emission).',
        ],
      },
      {
        heading: 'Bagaimana Cara Kerja PLTS Atap di Rumah Anda?',
        body: [
          'Sistem panel surya bekerja secara terintegrasi dan otomatis tanpa mengganggu kenyamanan aktivitas keluarga Anda.',
          'Modul fotovoltaik (PV) yang dipasang di atap menyerap radiasi sinar matahari dan mengubahnya menjadi arus searah (DC). Kemudian, Inverter mengubah listrik DC menjadi arus bolak-balik (AC) bertegangan 220V yang sesuai dengan standar peralatan elektronik rumah.',
          'Pada sistem On-Grid atau Hybrid, kebutuhan listrik rumah akan diprioritaskan dari energi matahari terlebih dahulu. Bila cuaca mendung atau kebutuhan melonjak melebihi produksi panel surya, sistem secara instan dan tanpa jeda akan mengambil sisa kekurangan daya dari PLN.',
        ],
      },
      {
        heading: 'Estimasi Biaya dan Kapasitas yang Tepat untuk Hunian Anda',
        body: [
          'Kapasitas sistem PLTS disesuaikan dengan daya terpasang PLN dan luasan atap yang tersedia. Sebagai panduan umum bagi hunian di kawasan Jabodetabek:',
        ],
        listItems: [
          'Daya PLN 2.200 VA: Disarankan sistem kapasitas 1,5 kWp – 2,2 kWp (membutuhkan area atap sekitar 8–12 m²).',
          'Daya PLN 3.500 VA – 5.500 VA: Disarankan kapasitas 3 kWp – 5 kWp (membutuhkan area atap sekitar 15–25 m²).',
          'Daya PLN 6.600 VA ke atas: Disarankan kapasitas 5 kWp – 10 kWp atau lebih dengan sistem Hybrid.',
        ],
      },
      {
        heading: 'Mengapa Memilih Jasa Instalasi End-to-End?',
        body: [
          'Pemasangan PLTS atap membutuhkan perhitungan struktural atap, manajemen kabel yang aman dari risiko korsleting, pemilihan komponen inverter berkualitas, serta kepengurusan administrasi uji laik operasi (SLO) dan perizinan PLN.',
          'PT Toba Energi Nusajaya hadir mendampingi Anda dari tahap survei lokasi, rancang bangun teknik, perizinan, hingga purna jual dan pembersihan rutin.',
        ],
      },
    ],
    relatedSlugs: [
      'perbedaan-plts-on-grid-off-grid-hybrid',
      'aturan-perizinan-plts-atap-pln',
      'cara-menghitung-penghematan-listrik-plts',
    ],
  },
  {
    id: '2',
    slug: 'perbedaan-plts-on-grid-off-grid-hybrid',
    title: 'Perbedaan Sistem PLTS On-Grid, Off-Grid, dan Hybrid: Mana yang Tepat untuk Anda?',
    metaDescription:
      'Kenali perbedaan mendasar antara sistem panel surya On-Grid, Off-Grid, dan Hybrid. Pahami kelebihan, kekurangan, dan sistem mana yang paling efisien untuk kebutuhan Anda.',
    keywords:
      'perbedaan plts on grid off grid hybrid, cara kerja plts hybrid, sistem solar panel on grid, baterai lithium solar panel, plts rumahan terbaik',
    category: 'Teknologi & Solusi',
    readTime: '7 menit baca',
    publishedDate: '2026-02-20',
    author: {
      name: 'Tim Engineering Toba Energi',
      role: 'Konsultan Sistem PLTS',
    },
    image: 'https://i.ibb.co/5XZQBMqK/2.png',
    summary:
      'Memilih skema sistem pembangkit listrik tenaga surya yang salah dapat membebani anggaran Anda. Simak perbandingan mendalam antara On-Grid, Off-Grid, dan Hybrid sebelum memutuskan instalasi.',
    content: [
      {
        heading: '1. Sistem PLTS On-Grid (Grid-Tied)',
        body: [
          'Sistem On-Grid adalah konfigurasi yang paling banyak diadopsi untuk area perkotaan dengan jaringan PLN yang stabil.',
          'Karakteristik utama dari On-Grid adalah tidak menggunakan baterai kimiawi, melainkan langsung menyinkronkan output daya listrik dengan jaringan kabel PLN.',
        ],
        listItems: [
          'Kelebihan: Biaya investasi awal paling terjangkau karena tanpa pengeluaran untuk bank baterai.',
          'Kelebihan: Perawatan paling minim dan efisiensi konversi daya sangat tinggi.',
          'Kekurangan: Ketika jaringan PLN padam, inverter On-Grid secara otomatis mati (anti-islanding) demi alasan keselamatan teknisi PLN yang sedang memperbaiki jaringan.',
        ],
      },
      {
        heading: '2. Sistem PLTS Off-Grid (Stand-Alone)',
        body: [
          'Sistem Off-Grid dirancang untuk berdiri sendiri secara mandiri tanpa terhubung sama sekali ke jaringan utilitas listrik negara.',
          'Sistem ini mengandalkan bank baterai (seperti Lithium LiFePO4 atau Gel Deep Cycle) untuk menampung seluruh kelebihan energi matahari di siang hari guna dipakai pada malam hari.',
        ],
        listItems: [
          'Kelebihan: Kemandirian energi 100%, sangat ideal untuk villa terpencil, pulau terluar, perkebunan, atau tambang.',
          'Kekurangan: Biaya awal relatif lebih tinggi karena porsi alokasi kapasitas baterai yang besar serta keharusan memiliki genset cadangan untuk periode cuaca buruk berkepanjangan.',
        ],
      },
      {
        heading: '3. Sistem PLTS Hybrid (Paling Populer untuk Hunian Mewah & Bisnis)',
        body: [
          'Sistem Hybrid menggabungkan keunggulan On-Grid dan Off-Grid dalam satu paket cerdas.',
          'Sistem tetap terhubung ke PLN untuk memangkas tagihan listrik harian, namun juga dilengkapi baterai cadangan yang secara otomatis mengambil alih suplai listrik ketika terjadi pemadaman PLN.',
        ],
        listItems: [
          'Kelebihan: Ketenangan pikiran mutlak — rumah atau kantor Anda tetap menyala terang saat lingkungan sekitar padam listrik.',
          'Kelebihan: Manajemen daya pintar (Smart Energy Management) memungkinkan Anda mengatur jadwal pengisian baterai.',
          'Rekomendasi: Sangat disarankan untuk rumah tinggal, klinik kesehatan, data server kantor, dan bisnis di wilayah Jabodetabek.',
        ],
      },
    ],
    relatedSlugs: [
      'panduan-lengkap-pasang-panel-surya-rumah-tangga',
      'aturan-perizinan-plts-atap-pln',
      'cara-menghitung-penghematan-listrik-plts',
    ],
  },
  {
    id: '3',
    slug: 'aturan-perizinan-plts-atap-pln',
    title: 'Aturan dan Prosedur Perizinan PLTS Atap PLN (Net Metering & SLO) Terbaru',
    metaDescription:
      'Simak penjelasan regulasi Permen ESDM tentang PLTS atap, kuota sistem PLN, alur perizinan, sertifikat laik operasi (SLO), dan meteran kWh ekspor-impor.',
    keywords:
      'izin plts atap pln, regulasi plts atap permen esdm, slo panel surya, syarat net metering pln, pengurusan izin plts bogor',
    category: 'Regulasi & Legalitas',
    readTime: '5 menit baca',
    publishedDate: '2026-02-28',
    author: {
      name: 'Tim Legal & Compliance Toba Energi',
      role: 'Spesialis Regulasi Energi Terbarukan',
    },
    image: 'https://i.ibb.co/8nMzMq51/4.png',
    summary:
      'Banyak calon pemilik PLTS bingung mengenai legalitas pemasangan panel surya di rumah atau industri. Ketahui fakta regulasi perizinan PLN dan sertifikasi keselamatan resmi di Indonesia.',
    content: [
      {
        heading: 'Apakah Pasang Panel Surya di Rumah Wajib Izin ke PLN?',
        body: [
          'Jawabannya bergantung pada jenis sistem yang dipasang. Jika Anda menggunakan sistem Off-Grid murni yang tidak bersambung ke instalasi PLN, Anda tidak memerlukan izin sambungan PLN.',
          'Namun, untuk sistem On-Grid maupun Hybrid yang terhubung paralel dengan meteran PLN, Anda diwajibkan mengajukan permohonan resmi kepada unit PLN setempat.',
        ],
      },
      {
        heading: 'Komponen Legalitas Penting dalam PLTS Atap',
        body: [
          'Dalam regulasi Kementerian ESDM, terdapat standar mutu dan keselamatan yang harus dipenuhi oleh setiap instalasi panel surya:',
        ],
        listItems: [
          'Kesesuaian Kuota Sistem: PLN menetapkan kuota pengembangan PLTS atap secara berkala pada tiap sistem distribusi wilayah.',
          'Sertifikat Laik Operasi (SLO): Dokumen sertifikasi resmi dari Lembaga Inspeksi Teknik (LIT) yang menyatakan instalasi listrik aman dari risiko bahaya kebakaran dan induksi tegangan balik.',
          'Penggantian kWh Meter Khusus: PLN akan mengganti kWh meter standar dengan meteran dua arah (kWh Exim / Net Metering) bila diperlukan koordinasi suplai.',
        ],
      },
      {
        heading: 'Bagaimana Toba Energi Mengurus Seluruh Proses Perizinan Anda?',
        body: [
          'Sebagai penyedia jasa end-to-end, klien Toba Energi tidak perlu repot bolak-balik ke kantor PLN atau mengurus dokumen teknis yang rumit.',
          'Tim kami menangani survei teknis bersertifikasi, penyusunan diagram garis tunggal (Single Line Diagram / SLD), permohonan kuota ke PLN, inspeksi SLO, hingga serah terima sistem yang legal, aman, dan beroperasi penuh.',
        ],
      },
    ],
    relatedSlugs: [
      'panduan-lengkap-pasang-panel-surya-rumah-tangga',
      'perbedaan-plts-on-grid-off-grid-hybrid',
      'cara-menghitung-penghematan-listrik-plts',
    ],
  },
  {
    id: '4',
    slug: 'cara-menghitung-penghematan-listrik-plts',
    title: 'Simulasi & Cara Menghitung Penghematan Tagihan Listrik dengan Panel Surya',
    metaDescription:
      'Kalkulasi return on investment (ROI) pasang panel surya di Indonesia. Hitung penghematan bulanan, waktu balik modal (break-even point), dan potensi keuntungan jangka panjang.',
    keywords:
      'hitung hemat listrik plts, simulasi roi panel surya, perhitungan penghematan kwh surya, biaya listrik pln hemat, investasi solar panel menguntungkan',
    category: 'Finansial & Investasi',
    readTime: '6 menit baca',
    publishedDate: '2026-03-01',
    author: {
      name: 'Tim Finansial Energi Toba Energi',
      role: 'Analis Investasi Energi Terbarukan',
    },
    image: 'https://i.ibb.co/WNTx85HL/1.png',
    summary:
      'Berapa lama waktu yang dibutuhkan hingga investasi PLTS Anda balik modal (BEP)? Simak rumus sederhana dan simulasi riil penghematan biaya listrik untuk rumah dan bangunan komersial.',
    content: [
      {
        heading: 'Faktor-Faktor Penentu Penghematan Energi Surya',
        body: [
          'Penghematan nyata yang Anda rasakan setiap bulan ditentukan oleh beberapa variabel teknis:',
        ],
        listItems: [
          'Kapasitas Terpasang (kWp): Semakin besar daya modul surya, semakin banyak kWh listrik yang dihasilkan per hari.',
          'Jam Matahari Efektif (Peak Sun Hours): Rata-rata wilayah Jabodetabek dan Jawa Barat menerima 3,8 hingga 4,5 jam matahari puncak setiap harinya.',
          'Tarif Dasar Listrik PLN: Untuk golongan rumah tangga mampu (R-2 dan R-3) dan bisnis/industri (B-2/I-2), tarif berkisar antara Rp1.444 hingga Rp1.700 per kWh.',
          'Profil Konsumsi Siang Hari: Listrik yang langsung digunakan saat siang hari (seperti AC, kulkas, pompa, komputer kantor) memberikan nilai efisiensi paling optimal.',
        ],
      },
      {
        heading: 'Simulasi Perhitungan Nyata untuk Rumah Tangga (Sistem 3,3 kWp)',
        body: [
          'Mari kita ambil contoh instalasi PLTS pada rumah dengan daya langganan PLN 3.500 VA di kawasan Bogor atau Bekasi:',
          'Produksi Harian: 3,3 kWp x 4 jam matahari efektif = ~13,2 kWh per hari.',
          'Produksi Bulanan: 13,2 kWh x 30 hari = ~396 kWh per bulan.',
          'Nilai Penghematan Bulanan: 396 kWh x Rp1.699,53 (Tarif R-2 PLN) = Sekitar Rp673.000,- setiap bulannya.',
          'Dalam 1 tahun, penghematan langsung yang dinikmati mencapai lebih dari Rp8.000.000,-. Dalam kurun waktu 5 hingga 7 tahun, seluruh biaya investasi awal sudah sepenuhnya tertutup (Break-Even Point), sedangkan sisa masa garansi panel (18 hingga 20 tahun berikutnya) adalah keuntungan murni listrik gratis bagi Anda!',
        ],
      },
      {
        heading: 'Dapatkan Audit Energi Gratis dari Tim Ahli Kami',
        body: [
          'Setiap bangunan memiliki sudut atap, orientasi arah hadap matahari, dan bayangan pohon/bangunan (shading) yang unik.',
          'Hubungi PT Toba Energi Nusajaya untuk mendapatkan kalkulasi estimasi penghematan dan simulasi 3D tata letak modul surya atap secara cuma-cuma tanpa dipungut biaya.',
        ],
      },
    ],
    relatedSlugs: [
      'panduan-lengkap-pasang-panel-surya-rumah-tangga',
      'perbedaan-plts-on-grid-off-grid-hybrid',
      'aturan-perizinan-plts-atap-pln',
    ],
  },
];
