const clientLinks = {
  glpiPortalUrl: '#',
  knowledgeBaseUrl: '#',
  supportContactUrl: 'mailto:contato@trksolucoes.com.br'
};

document.querySelectorAll('[data-config-link]').forEach((link) => {
  const key = link.dataset.configLink;
  if (clientLinks[key]) {
    link.href = clientLinks[key];
  }
});

if (window.AOS) {
  AOS.init({ duration: 650, once: true, offset: 80 });
}
