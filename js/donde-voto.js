// Mock data for voters
const electoresData = {
  '12345678': {
    institucion: 'I.E. Mariscal Castilla',
    direccion: 'Av. Paseo de la República 5680, Lima',
    distrito: 'Lima - Cercado',
    mesa: 'A-001',
    hora: '7:00 AM - 4:00 PM',
    lat: -12.0485,
    lng: -77.0387
  },
  '87654321': {
    institucion: 'Colegio Immaculada Concepción',
    direccion: 'Jr. Camaná 150, Lima',
    distrito: 'Lima - Centro',
    mesa: 'B-045',
    hora: '7:00 AM - 4:00 PM',
    lat: -12.0521,
    lng: -77.0298
  },
  '11223344': {
    institucion: 'Centro Cultural Peruano Norteamericano',
    direccion: 'Av. Angamos Oeste 1800, Miraflores',
    distrito: 'Miraflores',
    mesa: 'C-012',
    hora: '7:00 AM - 4:00 PM',
    lat: -12.1399,
    lng: -77.0228
  },
  '55667788': {
    institucion: 'I.E. San Ignacio de Loyola',
    direccion: 'Av. La Floresta 497, San Isidro',
    distrito: 'San Isidro',
    mesa: 'D-089',
    hora: '7:00 AM - 4:00 PM',
    lat: -12.1066,
    lng: -77.0347
  },
  '99887766': {
    institucion: 'Estadio Municipal de Chorrillos',
    direccion: 'Av. Mariano Cornejo s/n, Chorrillos',
    distrito: 'Chorrillos',
    mesa: 'E-023',
    hora: '7:00 AM - 4:00 PM',
    lat: -12.1835,
    lng: -77.1287
  },
  '44332211': {
    institucion: 'I.E. María Parado de Bellido',
    direccion: 'Calle Los Manzanos 123, San Borja',
    distrito: 'San Borja',
    mesa: 'F-056',
    hora: '7:00 AM - 4:00 PM',
    lat: -12.0855,
    lng: -77.0472
  }
};

// Mock data for mesa members
const miembrosMesaData = {
  '12345678': {
    institucion: 'I.E. Mariscal Castilla',
    direccion: 'Av. Paseo de la República 5680, Lima',
    mesa: 'A-001',
    cargo: 'Presidente de Mesa',
    horario: '5:30 AM',
    lat: -12.0485,
    lng: -77.0387
  },
  '87654321': null, // No es miembro de mesa
  '11223344': {
    institucion: 'Centro Cultural Peruano Norteamericano',
    direccion: 'Av. Angamos Oeste 1800, Miraflores',
    mesa: 'C-012',
    cargo: 'Miembro de Mesa',
    horario: '6:00 AM',
    lat: -12.1399,
    lng: -77.0228
  },
  '55667788': null, // No es miembro de mesa
  '99887766': {
    institucion: 'Estadio Municipal de Chorrillos',
    direccion: 'Av. Mariano Cornejo s/n, Chorrillos',
    mesa: 'E-023',
    cargo: 'Secretario de Mesa',
    horario: '5:45 AM',
    lat: -12.1835,
    lng: -77.1287
  },
  '44332211': null // No es miembro de mesa
};

// Duty descriptions based on role
const rolesDuties = {
  'Presidente de Mesa': [
    'Garantizar que se cumpla con el proceso electoral',
    'Organizar el trabajo de los miembros de mesa',
    'Resolver dudas sobre el registro de votantes',
    'Firmar los actas junto con los otros miembros',
    'Reportar cualquier irregularidad a las autoridades'
  ],
  'Secretario de Mesa': [
    'Registrar datos de votantes en el padrón',
    'Vigilar la confidencialidad del voto',
    'Controlar el flujo de personas en la mesa',
    'Asistir al Presidente en decisiones',
    'Documentar observaciones importantes'
  ],
  'Miembro de Mesa': [
    'Vigilar el correcto desarrollo de la votación',
    'Verificar la identidad de los electores',
    'Garantizar seguridad de la urna',
    'Participar en actividades de instalación y cierre',
    'Apoyar al Presidente y Secretario en sus funciones'
  ]
};

// Maps
let electorMap = null;
let miembroMap = null;

// Initialize Leaflet maps
function initMaps() {
  // Create map containers when needed
  setTimeout(() => {
    // Maps will be initialized on first search
  }, 100);
}

// Validate DNI format
function validateDNI(dni) {
  return /^\d{8}$/.test(dni);
}

// Show loading state
function showLoading(tabType) {
  const resultsDiv = document.getElementById(`${tabType}-results`);
  const loadingDiv = document.getElementById(`${tabType}-loading`);
  const dataDiv = document.getElementById(`${tabType}-data`);
  const errorDiv = document.getElementById(`${tabType}-error`);
  
  resultsDiv.classList.remove('hidden');
  loadingDiv.classList.remove('hidden');
  dataDiv.classList.add('hidden');
  errorDiv.classList.add('hidden');
}

// Show results
function showResults(tabType) {
  const dataDiv = document.getElementById(`${tabType}-data`);
  const loadingDiv = document.getElementById(`${tabType}-loading`);
  const errorDiv = document.getElementById(`${tabType}-error`);

  loadingDiv.classList.add('hidden');
  dataDiv.classList.remove('hidden');
  errorDiv.classList.add('hidden');

  // Mostrar botón de descarga solo tras búsqueda exitosa
  if (tabType === 'elector') {
    document.getElementById('elector-download-btn').classList.remove('hidden');
  } else if (tabType === 'miembro') {
    document.getElementById('miembro-download-btn').classList.remove('hidden');
  }

  // Force map resize after showing results
  setTimeout(() => {
    if (window.electorMap && tabType === 'elector') {
      window.electorMap.invalidateSize();
    }
    if (window.miembroMap && tabType === 'miembro') {
      window.miembroMap.invalidateSize();
    }
  }, 50);
}

// Download information as JSON
function downloadInfo(tabType, dni) {
  let dataToExport = {};
  
  if (tabType === 'elector') {
    dataToExport = {
      tipo: 'Elector',
      dni: dni,
      institucion: document.getElementById('ed-institucion').textContent,
      direccion: document.getElementById('ed-direccion').textContent,
      distrito: document.getElementById('ed-distrito').textContent,
      numeroDeMesa: document.getElementById('ed-mesa').textContent,
      horaVotacion: document.getElementById('ed-hora').textContent,
      fechaDescarga: new Date().toLocaleString('es-PE')
    };
  } else {
    dataToExport = {
      tipo: 'Miembro de Mesa',
      dni: dni,
      institucion: document.getElementById('mm-institucion').textContent,
      direccion: document.getElementById('mm-direccion').textContent,
      numeroDeMesa: document.getElementById('mm-mesa').textContent,
      cargo: document.getElementById('mm-cargo').textContent,
      horaLlegada: document.getElementById('mm-horario').textContent,
      fechaDescarga: new Date().toLocaleString('es-PE')
    };
  }
  
  // Create JSON file and download
  const dataStr = JSON.stringify(dataToExport, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `informacion-electoral-${dni}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Show error
function showError(tabType) {
  const errorDiv = document.getElementById(`${tabType}-error`);
  const loadingDiv = document.getElementById(`${tabType}-loading`);
  const dataDiv = document.getElementById(`${tabType}-data`);

  loadingDiv.classList.add('hidden');
  dataDiv.classList.add('hidden');
  errorDiv.classList.remove('hidden');

  // Ocultar botón de descarga si hay error
  if (tabType === 'elector') {
    document.getElementById('elector-download-btn').classList.add('hidden');
  } else if (tabType === 'miembro') {
    document.getElementById('miembro-download-btn').classList.add('hidden');
  }
}

// Initialize Leaflet map
function initializeMap(mapElementId, lat, lng, title) {
  // Remove existing map instance if exists
  const mapElement = document.getElementById(mapElementId);
  if (mapElement._leaflet_map) {
    mapElement._leaflet_map.remove();
  }
  mapElement.innerHTML = ''; // Clear previous content
  
  // Initialize new map with better settings
  const map = L.map(mapElementId, {
    center: [lat, lng],
    zoom: 16,
    scrollWheelZoom: true,
    dragging: true,
    touchZoom: true,
    doubleClickZoom: true,
    zoomControl: true
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors',
    opacity: 0.9
  }).addTo(map);
  
  // Add custom red marker
  const markerIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-ff0000.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  L.marker([lat, lng], { icon: markerIcon })
    .addTo(map)
    .bindPopup(`<strong>${title}</strong><br><small>Coordenadas: ${lat.toFixed(4)}, ${lng.toFixed(4)}</small>`, {
      maxWidth: 300
    })
    .openPopup();
  
  // Force map to resize properly
  setTimeout(() => {
    map.invalidateSize();
  }, 100);
  
  return map;
}

// Handle Elector search
function handleElectorSearch() {
  const dniInput = document.getElementById('dni-elector');
  const dni = dniInput.value.trim();
  
  if (!validateDNI(dni)) {
    alert('Por favor ingresa un DNI válido de 8 dígitos');
    return;
  }
  
  showLoading('elector');
  
  // Simulate network delay
  setTimeout(() => {
    const data = electoresData[dni];
    
    if (data) {
      // Update data elements
      document.getElementById('ed-institucion').textContent = data.institucion;
      document.getElementById('ed-direccion').textContent = data.direccion;
      document.getElementById('ed-distrito').textContent = data.distrito;
      document.getElementById('ed-mesa').textContent = data.mesa;
      document.getElementById('ed-hora').textContent = data.hora;
      
      // Initialize map
      window.electorMap = initializeMap('elector-map', data.lat, data.lng, data.institucion);
      
      showResults('elector');
    } else {
      showError('elector');
    }
  }, 800);
}

// Handle Miembro de Mesa search
function handleMiembroSearch() {
  const dniInput = document.getElementById('dni-miembro');
  const dni = dniInput.value.trim();
  
  if (!validateDNI(dni)) {
    alert('Por favor ingresa un DNI válido de 8 dígitos');
    return;
  }
  
  showLoading('miembro');
  
  // Simulate network delay
  setTimeout(() => {
    // Check if DNI exists in the database
    if (!(dni in miembrosMesaData)) {
      showError('miembro');
      return;
    }
    
    const data = miembrosMesaData[dni];
    
    if (data) {
      // Update data elements
      document.getElementById('mm-institucion').textContent = data.institucion;
      document.getElementById('mm-direccion').textContent = data.direccion;
      document.getElementById('mm-mesa').textContent = data.mesa;
      document.getElementById('mm-cargo').textContent = data.cargo;
      document.getElementById('mm-horario').textContent = data.horario;
      
      // Initialize map
      window.miembroMap = initializeMap('miembro-map', data.lat, data.lng, data.institucion);
      
      // Populate duties
      const dutiesDiv = document.getElementById('mm-duties');
      const duties = rolesDuties[data.cargo] || [];
      dutiesDiv.innerHTML = duties.map(duty => `
        <div class="flex gap-2">
          <span class="text-primary">✓</span>
          <p>${duty}</p>
        </div>
      `).join('');
      
      showResults('miembro');
    } else {
      // Show specific error message for non-members
      showError('miembro');
      document.getElementById('miembro-error').innerHTML = `
        <div class="flex gap-2 items-start">
          <span class="text-2xl">⚠️</span>
          <div>
            <p class="font-semibold text-red-800 dark:text-red-200">No eres miembro de mesa</p>
            <p class="text-sm text-red-700 dark:text-red-300 mt-1">Tu DNI no está registrado como miembro de mesa para las elecciones 2026.</p>
          </div>
        </div>
      `;
    }
  }, 800);
}

// Tab switching
function setupTabs() {
  const tabElector = document.getElementById('tab-elector');
  const tabMiembro = document.getElementById('tab-miembro');
  const contentElector = document.getElementById('content-elector');
  const contentMiembro = document.getElementById('content-miembro');
  
  tabElector.addEventListener('click', () => {
    tabElector.classList.add('text-primary', 'border-primary');
    tabElector.classList.remove('text-light-text-secondary', 'dark:text-dark-text-secondary', 'border-transparent', 'hover:text-primary');
    tabMiembro.classList.remove('text-primary', 'border-primary');
    tabMiembro.classList.add('text-light-text-secondary', 'dark:text-dark-text-secondary', 'border-transparent', 'hover:text-primary');
    
    contentElector.classList.remove('hidden');
    contentMiembro.classList.add('hidden');
  });
  
  tabMiembro.addEventListener('click', () => {
    tabMiembro.classList.add('text-primary', 'border-primary');
    tabMiembro.classList.remove('text-light-text-secondary', 'dark:text-dark-text-secondary', 'border-transparent', 'hover:text-primary');
    tabElector.classList.remove('text-primary', 'border-primary');
    tabElector.classList.add('text-light-text-secondary', 'dark:text-dark-text-secondary', 'border-transparent', 'hover:text-primary');
    
    contentMiembro.classList.remove('hidden');
    contentElector.classList.add('hidden');
  });
}

// Allow Enter key to submit search
function setupEnterKey() {
  document.getElementById('dni-elector').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleElectorSearch();
    }
  });
  
  document.getElementById('dni-miembro').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleMiembroSearch();
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  setupEnterKey();
  
  // Attach click handlers
  document.getElementById('btn-search-elector').addEventListener('click', handleElectorSearch);
  document.getElementById('btn-search-miembro').addEventListener('click', handleMiembroSearch);
  
  initMaps();
});
