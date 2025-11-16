// --- LÓGICA DE LA PÁGINA DE PERFIL (CON MODAL Y ANTECEDENTES) ---

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SELECCIONAR ELEMENTOS DEL MODAL ---
    const openModalBtn = document.getElementById('open-plan-modal-btn');
    const modalContainer = document.getElementById('pdf-modal-container');
    const modalOverlay = document.getElementById('pdf-modal-overlay');
    const closeModalBtn = document.getElementById('pdf-modal-close-btn');
    const pdfEmbed = document.getElementById('pdf-embed');
    const modalDownloadBtn = document.getElementById('modal-download-btn');
    
    // --- 2. LÓGICA PARA ABRIR Y CERRAR EL MODAL ---
    
    // Función para abrir el modal
    function openModal() {
        if (modalContainer) modalContainer.classList.remove('hidden');
    }
    
    // Función para cerrar el modal
    function closeModal() {
        if (modalContainer) modalContainer.classList.add('hidden');
        if (pdfEmbed) pdfEmbed.src = ""; // Importante: detiene la carga del PDF
    }
    
    // Asignar los "click listeners" para cerrar
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // --- 3. LÓGICA PARA CARGAR DATOS DEL CANDIDATO ---
    
    const params = new URLSearchParams(window.location.search);
    const candidateId = params.get('id');
    
    // 'candidateData' se carga desde el archivo data.js
    // Asegúrate de que data.js se carga ANTES que este script en tu HTML
    if (typeof candidateData === 'undefined') {
        console.error("Error: candidateData (de data.js) no está cargado.");
        return;
    }
    
    const data = candidateData[candidateId]; 

    if (data) {
        // Rellenar Info Principal
        document.getElementById('candidate-name').innerText = data.name;
        document.getElementById('candidate-party').innerText = data.party;
        document.getElementById('candidate-bio').innerText = data.bio || "No hay biografía disponible.";
        
        // Configurar el botón de JNE
        document.getElementById('candidate-jne').href = data.jneUrl || "#";

        // === ¡AQUÍ ESTÁ LA NUEVA LÓGICA! ===
        // Configurar el botón "Ver Plan de Gobierno" para que abra el modal
        if (openModalBtn) {
            openModalBtn.addEventListener('click', () => {
                const planUrl = data.planUrl || "#";
                
                if (planUrl === "#") {
                    alert("No hay un plan de gobierno disponible para este candidato.");
                    return;
                }
                
                // 1. Poner la URL del PDF en el visualizador
                if (pdfEmbed) pdfEmbed.src = planUrl;
                
                // 2. Poner la URL del PDF en el botón de descarga del modal
                if (modalDownloadBtn) modalDownloadBtn.href = planUrl;
                
                // 3. Abrir el modal
                openModal();
            });
        }

        // Rellenar Pestañas (esta lógica sigue igual)
        const propContent = document.getElementById('propuestas-content');
        const formContent = document.getElementById('formacion-content');
        const expContent = document.getElementById('experiencia-content');
        const noDataMsg = `<p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">No hay datos registrados.</p>`;
        
        // Función para crear las tarjetas con clases de Tailwind
        function createCard(item) {
            let sourceHtml = '';
            if (item.source) {
                sourceHtml = `<p class="text-xs italic text-gray-500 dark:text-gray-400 mt-2">${item.source}</p>`;
            }
            
            return `
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 class="text-base font-semibold text-light-text dark:text-dark-text mb-1">${item.title}</h4>
                    <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">${item.text}</p>
                    ${sourceHtml}
                </div>
            `;
        }

        // Cargar Propuestas
        if (propContent) {
            propContent.innerHTML = '';
            if (data.propuestas && data.propuestas.length > 0) {
                data.propuestas.forEach(prop => propContent.innerHTML += createCard(prop));
            } else {
                propContent.innerHTML = noDataMsg;
            }
        }

        // Cargar Formación
        if (formContent) {
            formContent.innerHTML = '';
            if (data.formacion && data.formacion.length > 0) {
                data.formacion.forEach(item => formContent.innerHTML += createCard(item));
            } else {
                formContent.innerHTML = noDataMsg;
            }
        }
        
        // Cargar Experiencia
        if (expContent) {
            expContent.innerHTML = '';
            if (data.experiencia && data.experiencia.length > 0) {
                data.experiencia.forEach(item => expContent.innerHTML += createCard(item));
            } else {
                expContent.innerHTML = noDataMsg;
            }
        }

        

    } else {
        // Si el ID no existe
        document.getElementById('candidate-name').innerText = "Candidato no encontrado";
        document.getElementById('candidate-bio').innerText = "El ID del candidato solicitado no es válido.";
    }

    // --- 4. LÓGICA PARA PESTAÑAS (TABS) ---
    const allTabLinks = document.querySelectorAll('[data-tab-link]');
    const allTabPanels = document.querySelectorAll('[data-tab-panel]');
    
    // Clases de Tailwind para los botones
    const activeClasses = ['border-primary', 'text-primary', 'dark:border-primary', 'dark:text-primary'];
    const inactiveClasses = ['border-transparent', 'text-light-text-secondary', 'dark:text-dark-text-secondary', 'hover:text-light-text', 'dark:hover:text-dark-text', 'hover:border-gray-400'];

    function switchTab(targetId) {
        allTabPanels.forEach(panel => panel.classList.add('hidden'));
        allTabLinks.forEach(link => {
            link.classList.remove(...activeClasses);
            link.classList.add(...inactiveClasses);
        });
        const targetPanel = document.querySelector(targetId);
        if (targetPanel) {
            targetPanel.classList.remove('hidden');
        }
        const targetLink = document.querySelector(`[data-target="${targetId}"]`);
        if (targetLink) {
            targetLink.classList.remove(...inactiveClasses);
            targetLink.classList.add(...activeClasses);
        }
    }

    allTabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(link.dataset.target);
        });
    });

    // Mostrar la primera pestaña por defecto
    if(allTabLinks.length > 0) {
        switchTab('#tab-propuestas');
    }
});