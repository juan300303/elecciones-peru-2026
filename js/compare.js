document.addEventListener('DOMContentLoaded', () => {

   
    const proposalTopics = [
        'Educación', 'Salud', 'Seguridad Ciudadana', 'Economía y Empleo',
        'Lucha contra la Corrupción', 'Infraestructura y Transporte', 'Desarrollo Social y Pobreza'
    ];
   
    const iconMap = {
        'Educación': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.363 3.59a2 2 0 00-2.726 0l-5.5 6A2 2 0 003.5 13H4v2.25A2.75 2.75 0 006.75 18h6.5A2.75 2.75 0 0016 15.25V13h.5a2 2 0 001.363-3.41l-5.5-6zM14.25 13v2.25a.75.75 0 01-.75.75h-6.5a.75.75 0 01-.75-.75V13h8z"/></svg>`,
        'Salud': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clip-rule="evenodd" /></svg>`,
        'Seguridad Ciudadana': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a.75.75 0 01.75.75v3.313c3.855.244 6.75 3.42 6.75 7.188v.016c0 3.33-2.42 6.13-5.5 6.699v.484a.75.75 0 01-1.5 0v-.484c-3.08-.57-5.5-3.37-5.5-6.699v-.016c0-3.768 2.895-6.944 6.75-7.188V1.75A.75.75 0 0110 1zm.002 4.5c-3.08.24-5.498 2.86-5.498 5.813v.016c0 2.91 2.062 5.378 4.748 5.799V18.5a.75.75 0 001.5 0v-1.372c2.686-.42 4.748-2.89 4.748-5.799v-.016c0-2.953-2.418-5.572-5.498-5.813z" clip-rule="evenodd" /></svg>`,
        'Economía y Empleo': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.832 2.15l.383 1.252A1 1 0 0012.22 4h.003c.51 0 .972.34.998.857L13.25 6H16a1 1 0 011 1v1H3V7a1 1 0 011-1h2.75l.024-.893A1 1 0 017.771 4h.003a1 1 0 001.006-.598l.383-1.252A1 1 0 0110 1.96V1a1 1 0 011 1v.19c0 .11-.021.218-.06.317a.992.992 0 01.058-.052zM4 9v6a1 1 0 001 1h10a1 1 0 001-1V9H4z" /></svg>`,
        'Lucha contra la Corrupción': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" /></svg>`,
        'Infraestructura y Transporte': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11.983 1.907a.75.75 0 00-1.966 0l-5.25 3.031A.75.75 0 004 5.69v8.62a.75.75 0 00.767.749l5.25-1.05a.75.75 0 01.466 0l5.25 1.05A.75.75 0 0016 14.31V5.69a.75.75 0 00-.767-.749l-5.25-3.031zM5.5 6.31v7.38l4-1.011v-7.38l-4 1.011zM14.5 6.31l-4 1.011v7.38l4-1.011v-7.38z"/></svg>`,
        'Desarrollo Social y Pobreza': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.25 1.25 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.126-2.095a1.25 1.25 0 00.41-1.412A9.99 9.99 0 0010 12.75a9.99 9.99 0 00-6.534 1.743z" /></svg>`,
        'default': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 10-2 0v2a1 1 0 102 0v-2zm2-1a1 1 0 011-1 3 3 0 110 6 1 1 0 11-1-1V9z" clip-rule="evenodd" /></svg>`
    };

    
    const params = new URLSearchParams(window.location.search);
    const idsString = params.get('candidates');
    const containerPropuestas = document.getElementById('container-propuestas');
    const containerFormacion = document.getElementById('container-formacion');
    const containerExperiencia = document.getElementById('container-experiencia');

    if (!idsString) {
        containerPropuestas.innerHTML = `<p class="p-8 text-center text-red-500">No se seleccionaron candidatos. <a href="candidatos.html" class="underline">Volver a la lista</a>.</p>`;
        return;
    }

    const selectedIds = idsString.split(',');
    const selectedCandidates = selectedIds.map(id => candidateData[id]).filter(Boolean); 

    if (selectedCandidates.length < 2) {
         containerPropuestas.innerHTML = `<p class="p-8 text-center text-red-500">Necesitas al menos 2 candidatos para comparar. <a href="candidatos.html" class="underline">Volver a la lista</a>.</p>`;
        return;
    }

    // tabla de comparación de propuestas 

   
    function buildProposalGrid(candidates, topics) {
        const gridColsStyle = `grid-template-columns: auto repeat(${candidates.length}, 1fr);`;
        let html = `<div class="comparison-grid" style="${gridColsStyle}">`;

        // Fila de Encabezado (Nombres y Fotos)
        html += `<div class="header-cell topic-cell">Propuesta Clave</div>`;
        candidates.forEach(candidate => {
            html += `
                <div class="header-cell">
                    <img src="${candidate.imgUrl}" alt="Foto de ${candidate.name}"> 
                    <span class="block text-base">${candidate.name}</span>
                    <span class="block text-sm font-medium text-primary">${candidate.party}</span>
                </div>
            `;
        });

        // Filas de Propuestas 
        topics.forEach(topicTitle => {
            const icon = iconMap[topicTitle] || iconMap['default'];
            html += `<div class="topic-cell">${icon || ''} <span>${topicTitle}</span></div>`;
            
            candidates.forEach(candidate => {
                const proposal = candidate.propuestas.find(p => p.title.includes(topicTitle));
                html += `
                    <div class="proposal-cell">
                        ${proposal ? `<strong>${proposal.title}</strong><p>${proposal.text}</p>` : '<span class="italic">No hay datos registrados.</span>'}
                    </div>
                `;
            });
        });
        html += `</div>`;
        return html;
    }

    //columna de formación y experiencia
    function buildInfoPanel(candidates, dataType) { 
        const gridColsClass = `grid-cols-${candidates.length}`;
        let html = `<div class="grid ${gridColsClass} gap-6">`; 

        candidates.forEach(candidate => {
            html += `<div class="columna">`;
            
            html += `
                <div class="header-cell text-center mb-4">
                    <img src="${candidate.imgUrl}" alt="Foto de ${candidate.name}"> 
                    <span class="block text-base">${candidate.name}</span>
                    <span class="block text-sm font-medium text-primary">${candidate.party}</span>
                </div>
            `;
            
            // Lista de tarjetas de información
            const dataList = candidate[dataType];
            if (dataList && dataList.length > 0) {
                dataList.forEach(item => {
                    html += `
                        <div class="proposal-card">
                            <h4>${item.title}</h4>
                            <p>${item.text}</p>
                        </div>
                    `;
                });
            } else {
                html += '<p class="text-sm italic text-light-text-secondary dark:text-dark-text-secondary">No hay datos registrados.</p>';
            }
            
            html += `</div>`; 
        });

        html += `</div>`; 
        return html;
    }

    //Lógica para hacer funcionar las Pestañas (Tabs)
     
    function setupTabs() {
        const allTabLinks = document.querySelectorAll('[data-tab-link]');
        const allTabPanels = document.querySelectorAll('[data-tab-panel]');

        allTabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.dataset.target;

                
                allTabPanels.forEach(panel => panel.classList.add('hidden'));
            
                allTabLinks.forEach(l => l.classList.remove('is-active'));

                
                const targetPanel = document.querySelector(targetId);
                if (targetPanel) {
                    targetPanel.classList.remove('hidden');
                }
             
                link.classList.add('is-active');
            });
        });
    }

    containerPropuestas.innerHTML = buildProposalGrid(selectedCandidates, proposalTopics);
    containerFormacion.innerHTML = buildInfoPanel(selectedCandidates, 'formacion');
    containerExperiencia.innerHTML = buildInfoPanel(selectedCandidates, 'experiencia');
    
   
    setupTabs();
});