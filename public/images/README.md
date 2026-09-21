# Direktori Gambar (Images)

Folder ini berfungsi sebagai tempat penyimpanan aset gambar Anda (seperti `logo.png`, foto proyek, dll).

Karena project ini menggunakan Vite dan akan di-deploy ke Netlify, semua file di dalam folder `public/` akan otomatis disalin ke hasil build akhir tanpa perubahan, dan dapat diakses langsung dari root URL.

## Cara Penggunaan

1. Masukkan file logo Anda ke sini (misalnya ubah nama menjadi `logo.png`).
2. Di dalam kode React Anda (misalnya di `App.tsx`), Anda bisa memanggilnya langsung seperti ini:

```jsx
<img src="/images/logo.png" alt="Logo" />
```

Tidak perlu melakukan `import` di bagian atas file jika gambar diletakkan di dalam folder `public/`.
