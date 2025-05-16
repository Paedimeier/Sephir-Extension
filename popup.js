document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggleBtn');
  chrome.storage.sync.get(['sephirEnabled'], (result) => {
    if (toggle) toggle.checked = result.sephirEnabled !== false;
  });
  if (toggle) {
    toggle.addEventListener('change', () => {
      chrome.storage.sync.set({ sephirEnabled: toggle.checked });
    });
  }
});
