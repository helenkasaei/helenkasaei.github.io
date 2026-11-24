const moonIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';
const sunIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
function updateThemeControls(){
  const dark=document.documentElement.dataset.theme==='dark';
  document.querySelectorAll('[data-theme-toggle]').forEach(button=>{
    button.innerHTML=dark?sunIcon:moonIcon;
    button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
    button.setAttribute('title',dark?'Switch to light mode':'Switch to dark mode');
  });
  document.querySelectorAll('[data-theme-label]').forEach(label=>{
    label.textContent=dark?'Light Mode':'Dark Mode';
  });
}
function setTheme(theme){
  document.documentElement.dataset.theme=theme;
  try{localStorage.setItem('helen-theme',theme);}catch(error){}
  updateThemeControls();
}
function toggleTheme(){
  setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
}
function toggleMobileMenu(){
  const menu=document.getElementById('mobile-menu');
  const button=document.querySelector('.mobile-menu-btn');
  const open=menu.classList.toggle('open');
  button.setAttribute('aria-expanded',String(open));
}
function closeMobileMenu(){
  const menu=document.getElementById('mobile-menu');
  const button=document.querySelector('.mobile-menu-btn');
  if(menu)menu.classList.remove('open');
  if(button)button.setAttribute('aria-expanded','false');
}
try{
  const saved=localStorage.getItem('helen-theme');
  if(saved==='light'||saved==='dark')document.documentElement.dataset.theme=saved;
}catch(error){}
document.addEventListener('DOMContentLoaded',()=>{
  updateThemeControls();
  document.querySelectorAll('.mobile-menu a').forEach(link=>link.addEventListener('click',closeMobileMenu));
});
updateThemeControls();