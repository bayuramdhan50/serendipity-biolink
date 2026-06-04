/* assets/js/main.js */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const linkItems = document.querySelectorAll('.link-item');

  // 1. Memicu animasi masuk setelah DOM selesai dimuat
  setTimeout(() => {
    if (container) {
      container.classList.add('active');
    }
  }, 100);

  // 2. Optimasi Umpan Balik Sentuhan (Touch Feedback) untuk Perangkat Seluler
  linkItems.forEach(item => {
    item.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
      this.style.backgroundColor = 'var(--btn-hover)';
    }, { passive: true });

    item.addEventListener('touchend', function() {
      this.style.transform = 'scale(1.025)';
      this.style.backgroundColor = '';
      
      // Hapus efek hover/scale secara perlahan setelah jari diangkat
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    }, { passive: true });

    item.addEventListener('touchcancel', function() {
      this.style.transform = '';
      this.style.backgroundColor = '';
    }, { passive: true });
    
    // Klik Tracking (Opsional, untuk integrasi analisis mandiri jika diperlukan)
    item.addEventListener('click', (e) => {
      const platform = item.getAttribute('data-platform');
      console.log(`Pengguna mengklik tautan platform: ${platform}`);
    });
  });

  // 3. Efek Paralaks Halus pada Latar Belakang (Desktop Only)
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const amount = 15;
      const x = (e.clientX / window.innerWidth - 0.5) * amount;
      const y = (e.clientY / window.innerHeight - 0.5) * amount;
      
      if (container) {
        container.style.transform = `translate(${x}px, ${y}px)`;
        container.style.transition = 'transform 0.1s ease-out';
      }
    });
    
    // Kembalikan ke posisi awal saat mouse keluar layar
    document.addEventListener('mouseleave', () => {
      if (container) {
        container.style.transform = 'none';
        container.style.transition = 'transform 0.5s ease';
      }
    });
  }
});
