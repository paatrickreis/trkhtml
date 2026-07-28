const GLPI_PORTAL_URL = '#';
const KNOWLEDGE_BASE_URL = '#';
const CONTACT_URL = 'mailto:contato@trksolucoes.com.br';
const WHATSAPP_URL = 'https://wa.me/5500000000000';

const services = [
  ['🛠️','Serviços Gerenciados','Operação contínua da infraestrutura de TI através de gestão proativa e suporte especializado.',['Redução de incidentes recorrentes','Rotinas preventivas e documentação','Suporte técnico especializado']],
  ['📊','Monitoramento','Monitoramento de ativos, disponibilidade, desempenho e geração de alertas em tempo real.',['Visibilidade 24x7 do ambiente','Alertas e indicadores objetivos','Ação rápida antes do impacto']],
  ['🖥️','Gestão de Infraestrutura','Administração de servidores, ambientes cloud, conectividade e recursos críticos.',['Ambientes mais estáveis','Gestão de capacidade','Continuidade operacional']],
  ['🛡️','Gestão de Firewall','Gerenciamento de ambientes Fortinet, VPNs, políticas de segurança, atualizações e suporte especializado.',['Políticas revisadas e documentadas','VPNs seguras','Apoio em troubleshooting']],
  ['🌐','Gestão de Redes','Administração de switches, Wi‑Fi corporativo, LAN, WAN e SD‑WAN.',['Melhor desempenho e cobertura','Padronização de configurações','Maior disponibilidade']],
  ['🎫','ITSM','Centralização de solicitações, chamados, SLAs e base de conhecimento em uma plataforma de serviços.',['Atendimento estruturado','Métricas de suporte','Experiência melhor para usuários']]
];

const homeCases = [
  ['🏢','Modernização de infraestrutura corporativa','Revisão de servidores, conectividade, backups e documentação para elevar disponibilidade.'],
  ['⚙️','Implantação de ambiente de alta disponibilidade','Arquitetura resiliente para reduzir pontos únicos de falha e melhorar continuidade.'],
  ['🛡️','Gestão de Firewall Fortinet','Organização de políticas, VPNs, atualizações e operação segura do perímetro.'],
  ['📡','Monitoramento centralizado de ambientes críticos','Dashboards e alertas para ativos, links, firewalls, servidores e redes.']
];

const detailedCases = [
  ['Infraestrutura','Modernização de infraestrutura','Ambiente sem padronização, baixa visibilidade e riscos de indisponibilidade.','Reorganização de servidores, documentação, rotinas preventivas e monitoramento.','Maior estabilidade, suporte mais ágil e base preparada para expansão.'],
  ['Redes','Reestruturação de rede corporativa','Conectividade instável e dificuldades de gerenciamento de switches e Wi‑Fi.','Segmentação, revisão de topologia, padronização de configurações e melhoria de cobertura.','Melhor desempenho, menor tempo de diagnóstico e maior previsibilidade operacional.'],
  ['Segurança','Gestão de Firewall Fortinet','Políticas acumuladas, VPNs sem revisão e necessidade de operação especializada.','Revisão de regras, atualização de firmware, documentação e suporte para conectividade segura.','Perímetro mais organizado, redução de riscos e governança de mudanças.'],
  ['Monitoramento','Monitoramento de ambientes críticos','Incidentes percebidos apenas após impacto aos usuários.','Implantação de dashboards, thresholds e alertas para ativos críticos.','Resposta proativa, indicadores de disponibilidade e gestão orientada por dados.']
];

function serviceCards({detailed=false}={}){return services.map(([icon,title,desc,benefits])=>`<article class="card"><div class="icon">${icon}</div><h3>${title}</h3><p>${desc}</p>${detailed?`<ul class="checklist">${benefits.map(b=>`<li>${b}</li>`).join('')}</ul><p><a class="btn btn-secondary" href="${CONTACT_URL}">Falar sobre ${title}</a></p>`:''}</article>`).join('')}
function homeCaseCards(){return homeCases.map(([icon,title,desc])=>`<article class="card"><div class="icon">${icon}</div><h3>${title}</h3><p>${desc}</p></article>`).join('')}
function detailedCaseCards(){return detailedCases.map(([cat,title,problem,solution,benefit])=>`<article class="card"><span class="case-meta">${cat}</span><h3>${title}</h3><p><strong>Problema:</strong> ${problem}</p><p><strong>Solução:</strong> ${solution}</p><p><strong>Benefícios:</strong> ${benefit}</p></article>`).join('')}

document.querySelectorAll('[data-services]').forEach(el=>el.innerHTML=serviceCards({detailed:el.dataset.services==='detailed'}));
document.querySelectorAll('[data-home-cases]').forEach(el=>el.innerHTML=homeCaseCards());
document.querySelectorAll('[data-detailed-cases]').forEach(el=>el.innerHTML=detailedCaseCards());
document.querySelectorAll('[data-portal-url]').forEach(el=>el.href=GLPI_PORTAL_URL);
document.querySelectorAll('[data-kb-url]').forEach(el=>el.href=KNOWLEDGE_BASE_URL);
document.querySelectorAll('[data-contact-url]').forEach(el=>el.href=CONTACT_URL);
document.querySelectorAll('[data-whatsapp-url]').forEach(el=>el.href=WHATSAPP_URL);
