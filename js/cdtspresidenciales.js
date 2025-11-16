
document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input');
    const partySelect = document.getElementById('party-select');
    const clearButton = document.getElementById('clear-button');
    const candidateCards = document.querySelectorAll('.candidate-card'); 
    const noResultsMessage = document.getElementById('no-results');

    // La función principal que filtra
    function filterCandidates() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedParty = partySelect.value;
        
        let resultsFound = false; 

        candidateCards.forEach(card => {
            const name = card.dataset.name.toLowerCase();
            const party = card.dataset.party;
            const matchesSearch = name.includes(searchTerm);
            const matchesParty = (selectedParty === 'all') || (party === selectedParty);

            if (matchesSearch && matchesParty) {
                card.classList.remove('hidden'); 
                resultsFound = true;
            } else {
                card.classList.add('hidden');
            }
        });
    
        if (resultsFound) {
            noResultsMessage.classList.add('hidden');
        } else {
            noResultsMessage.classList.remove('hidden');
        }
    }

    // Cuando el usuario escribe en la barra de búsqueda
    searchInput.addEventListener('input', filterCandidates);

    partySelect.addEventListener('change', filterCandidates);

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        partySelect.value = 'all';
        
        filterCandidates();
    });

    // --- este es para COMPARAR a cada candidato ---

    const compareButton = document.getElementById('compare-button');
    const compareText = document.getElementById('compare-text');
    const allCheckboxes = document.querySelectorAll('.candidate-checkbox');

    // Función para actualizar el estado del botón de comparar
    function updateCompareButtonState() {
        // Contamos cuántos checkboxes están marcados
        const checkedCheckboxes = document.querySelectorAll('.candidate-checkbox:checked');
        const checkedCount = checkedCheckboxes.length;

        // Validamos la regla (entre 2 y 4)
        const isValid = checkedCount >= 2 && checkedCount <= 4;

        if (isValid) {
            // Habilitar el botón
            compareButton.disabled = false;
            compareButton.classList.remove('opacity-50', 'cursor-not-allowed');
            compareText.classList.remove('text-red-500'); 
            compareText.innerText = `Has seleccionado ${checkedCount} candidatos. Listo para comparar.`;
        } else {
            // Deshabilitar el botón
            compareButton.disabled = true;
            compareButton.classList.add('opacity-50', 'cursor-not-allowed');

            // Lógica para el texto de ayuda
            if (checkedCount < 2) {
                compareText.innerText = 'Selecciona min 2 y max 4 candidatos para comparar sus propuestas lado a lado en las principales areas claves';
                compareText.classList.remove('text-red-500');
            } else if (checkedCount > 4) {
                compareText.innerText = '¡Demasiados! Solo puedes comparar hasta 4 candidatos.';
                compareText.classList.add('text-red-500'); 
            }
        }
    }

    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCompareButtonState);
    });

    compareButton.addEventListener('click', () => {
        if (compareButton.disabled) return;

        const checkedCheckboxes = document.querySelectorAll('.candidate-checkbox:checked');
        
        const selectedIds = [];
        checkedCheckboxes.forEach(checkbox => {
            selectedIds.push(checkbox.value);
        });
        
        const idQueryString = selectedIds.join(',');

        window.location.href = `compare.html?candidates=${idQueryString}`;
    });


    clearButton.addEventListener('click', () => {
        
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    
        updateCompareButtonState();
    });
    updateCompareButtonState();

});