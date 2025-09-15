// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('show'));

// Fade-in on scroll
const onScrollReveal = () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.85) el.classList.add('appear');
  });
};
window.addEventListener('scroll', onScrollReveal);
window.addEventListener('load', onScrollReveal);

// Catalog: search + filter + WA preset
const catalog = document.getElementById('catalog');
const q = document.getElementById('search');
const f = document.getElementById('filter');

const applyFilter = () => {
  if (!catalog) return;
  const term = (q?.value || '').toLowerCase();
  const cat = f?.value || 'all';
  catalog.querySelectorAll('.item').forEach(it => {
    const name = it.dataset.name.toLowerCase();
    const c = it.dataset.cat;
    const matchName = name.includes(term);
    const matchCat = (cat === 'all' || c === cat);
    it.style.display = (matchName && matchCat) ? '' : 'none';
  });
};
q?.addEventListener('input', applyFilter);
f?.addEventListener('change', applyFilter);

// WA order buttons
document.querySelectorAll('.order').forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.dataset.title || 'Order';
    const msg = btn.dataset.msg || 'Halo AYAMKTOFFICIAL, saya mau order.';
    const url = `https://wa.me/6281397384983?text=${encodeURIComponent(msg)}%0A%0A—%20(${title})`;
    window.open(url, '_blank');
  });
});
