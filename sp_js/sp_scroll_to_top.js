if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

function resetScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0; // Safari/older
  document.body.scrollTop = 0;            // Safari/older
}

// Cover all cases (normal load + bfcache/back-forward)
window.addEventListener('DOMContentLoaded', resetScroll);
window.addEventListener('load', resetScroll);
window.addEventListener('pageshow', e => { if (e.persisted) resetScroll(); });
