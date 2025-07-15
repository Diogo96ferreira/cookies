self.addEventListener('install', (event) => {
  console.log('Service worker instalado');
});

self.addEventListener('activate', (event) => {
  console.log('Service worker ativado');
});

self.addEventListener('fetch', (event) => {
  return; // não cacheia nada, apenas ativa o SW
});
