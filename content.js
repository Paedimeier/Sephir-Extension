let enabled = true;

chrome.storage.sync.get(['sephirEnabled'], (result) => {
  enabled = result.sephirEnabled !== false;
  if (!window.location.hostname.includes('sephir.ch')) {
    return;
  }
  if (enabled) {
    injectButtonIfNeeded();
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.sephirEnabled) {
    enabled = changes.sephirEnabled.newValue;
    if (!window.location.hostname.includes('sephir.ch')) {
      return;
    }
    if (enabled) {
      injectButtonIfNeeded();
    } else {
      removeButton();
    }
  }
});

function injectButtonIfNeeded() {
  if (!enabled) return;
  if (!window.location.hostname.includes('sephir.ch')) {
    return;
  }
  const kursDiv = Array.from(document.querySelectorAll('div.titel[align="center"]'))
    .find(div => div.querySelector('b') && div.querySelector('b').textContent.trim() === 'Kursbewertung');
  if (kursDiv) {
    if (!document.getElementById('sephir-bew-link')) {
      const link = document.createElement('a');
      link.id = 'sephir-bew-link';
      link.href = 'javascript:pf_bew();';
      link.style.display = 'inline-block';
      link.style.verticalAlign = 'middle';
      // SVG-Icon direkt als Inhalt
      link.innerHTML = `<svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><g id="Shopicon"><circle cx="24" cy="24" r="4"/><path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z"/></g></svg>`;
      link.title = 'Kursbewertung öffnen';
      kursDiv.appendChild(link);
    }
    if (window._sephirKursbewertungInterval) {
      clearInterval(window._sephirKursbewertungInterval);
      window._sephirKursbewertungInterval = null;
    }
  } else {
    if (!window._sephirKursbewertungInterval) {
      window._sephirKursbewertungInterval = setInterval(() => {
        if (enabled) {
          injectButtonIfNeeded();
        }
      }, 1000);
    }
  }
}

function removeButton() {
  const btn = document.getElementById('sephir-bew-link');
  if (btn) btn.remove();
}

// Entferne das Style-Tag für sephir-bew-active, falls vorhanden
const style = document.getElementById('sephir-bew-style');
if (style) style.remove();

const observer = new MutationObserver(() => {
  if (enabled) injectButtonIfNeeded();
  else removeButton();
});
observer.observe(document.body, { childList: true, subtree: true });
