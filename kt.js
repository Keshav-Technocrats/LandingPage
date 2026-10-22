export function initKT() {
  const r = document.documentElement, $ = (id) => document.getElementById(id), off = [];
  const on = (el, ev, fn) => { if (!el) return; el.addEventListener(ev, fn); off.push(() => el.removeEventListener(ev, fn)); };
  on($('themeBtn'), 'click', () => {
    const light = r.dataset.theme ? r.dataset.theme === 'light' : matchMedia('(prefers-color-scheme: light)').matches;
    const next = light ? 'dark' : 'light'; r.dataset.theme = next;
    try { localStorage.setItem('kt-theme', next); } catch (e) {}
  });
  on($('menuBtn'), 'click', (e) => { const o = $('links').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(o)); });
  on($('links'), 'click', () => $('links').classList.remove('open'));
  on($('lead'), 'submit', async (e) => {
    e.preventDefault();
    const f = e.currentTarget, btn = $('send'), msg = $('ok'), d = Object.fromEntries(new FormData(f));
    btn.disabled = true; msg.className = ''; msg.textContent = 'Sending…';
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      const j = await res.json().catch(() => ({}));
      if (res.ok) { msg.textContent = 'Thanks! We have received your enquiry.'; f.reset(); }
      else if (res.status === 400 || res.status === 429) { msg.className = 'err'; msg.textContent = j.error || 'Please check the form and try again.'; }
      else throw new Error('unavailable');
    } catch (err) {
      msg.textContent = 'Opening your email app instead…';
      location.href = 'mailto:hello@keshavtechnocrats.com?subject=' + encodeURIComponent('Project enquiry from ' + d.name) + '&body=' + encodeURIComponent('Name: ' + d.name + '\nEmail: ' + d.email + '\nService: ' + d.service + '\n\n' + d.message);
    } finally { btn.disabled = false; }
  });
  return () => off.forEach((fn) => fn());
}
