// ...existing code...
// smooth scroll + link focus
document.documentElement.style.scrollBehavior = 'smooth';

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); target.focus({preventScroll:true}); }
  });
});

// loader logic with fast hide and fallback
(function(){
  const LOADER_ID = 'site-loader';
  const FALLBACK_MS = 3000; // adjust as needed

  function getLoader(){ return document.getElementById(LOADER_ID); }

  function hideLoader(){
    const l = getLoader();
    if(!l) return;
    if(!l.classList.contains('loaded')){
      l.classList.add('loaded');
      document.documentElement.classList.remove('is-loading');
      setTimeout(()=> { if(l.parentNode) l.remove(); }, 500);
    }
  }

  // Hide shortly after DOM is ready (faster than waiting for window.load)
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(hideLoader, 150);
  } else {
    document.addEventListener('DOMContentLoaded', ()=> setTimeout(hideLoader, 150));
  }

  // Also hide on full load and after a fallback timeout
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, FALLBACK_MS);
})();
