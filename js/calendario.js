document.addEventListener('DOMContentLoaded', function(){
  try {
    // Sample data (replace with official dates as needed)
    const calendarios = {
      elector: [
        { fecha: '2026-09-01', evento: 'Verificación de padrón', importante: true },
        { fecha: '2026-10-01', evento: 'Plazo para solicitar accesibilidad', importante: false },
        { fecha: '2026-10-05', evento: 'Votación anticipada (si aplica)', importante: false },
        { fecha: '2026-10-26', evento: 'Día de elecciones (7AM-4PM)', critico: true }
      ],
      miembro: [
        { fecha: '2026-09-20', evento: 'Capacitación obligatoria', importante: true },
        { fecha: '2026-10-23', evento: 'Confirmación de asistencia (72h antes)', importante: true },
        { fecha: '2026-10-26', evento: 'Día de elecciones (5AM-8PM)', critico: true },
        { fecha: '2026-10-27', evento: 'Entrega y devolución de material', importante: false }
      ],
      proceso: [
        { fecha: '2025-12-01', evento: 'Inscripción de candidatos (inicio)', importante: true },
        { fecha: '2026-07-01', evento: 'Campaña electoral (inicio)', importante: true },
        { fecha: '2026-10-15', evento: 'Veda electoral (inicio)', critico: true },
        { fecha: '2026-10-26', evento: 'Jornada de votación', critico: true },
        { fecha: '2026-10-27', evento: 'Escrutinio y publicación de resultados', importante: true }
      ]
    };

    const btns = document.querySelectorAll('.btn-calendario');
    const vistas = {
      elector: document.getElementById('elector-content'),
      miembro: document.getElementById('miembro-content'),
      proceso: document.getElementById('proceso-content')
    };

    // Validate DOM elements exist
    if(!btns.length){
      throw new Error('Calendar buttons not found in DOM');
    }
    Object.values(vistas).forEach((v, i) => {
      if(!v) console.warn('Vista container ' + i + ' not found');
    });

    // Mini calendar elements
    const miniPrev = document.getElementById('mini-prev');
    const miniNext = document.getElementById('mini-next');
    const miniMonth = document.getElementById('mini-month');
    const miniCalendar = document.getElementById('mini-calendar');
    const selectedInfo = document.getElementById('selected-info');

    if(!miniCalendar || !miniMonth || !selectedInfo){
      throw new Error('Mini calendar elements not found in DOM');
    }

    let currentTipo = 'elector';
    const today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth(); // 0-indexed
    let selectedDate = null;

    // Render lists as cards with pagination
    const EVENTS_PER_PAGE = 4;
    const paginacion = { elector: 1, miembro: 1, proceso: 1 };

    function renderList(tipo){
      const container = document.getElementById(`${tipo}-list`);
      const pagContainer = document.getElementById(`${tipo}-pagination`);
      if(!container || !pagContainer){
        console.warn('List or pagination container not found for tipo:', tipo);
        return;
      }
      container.innerHTML = '';
      pagContainer.innerHTML = '';
      const items = (calendarios[tipo] || []).slice().sort((a,b)=> new Date(a.fecha) - new Date(b.fecha));
      if(items.length === 0){
        container.innerHTML = '<p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">No hay eventos disponibles.</p>';
        return;
      }

      // Paginación
      const totalPages = Math.ceil(items.length / EVENTS_PER_PAGE);
      if(paginacion[tipo] > totalPages) paginacion[tipo] = 1;
      const page = paginacion[tipo];
      const start = (page-1)*EVENTS_PER_PAGE;
      const pageItems = items.slice(start, start+EVENTS_PER_PAGE);

      pageItems.forEach(ev => {
        try {
          const card = document.createElement('div');
          card.className = 'rounded-lg shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-bg-secondary p-4 flex flex-col gap-2 hover:shadow-lg transition cursor-pointer';
          card.setAttribute('tabindex','0');
          card.dataset.fecha = ev.fecha;

          const fecha = document.createElement('div');
          fecha.className = 'text-xs font-semibold text-secondary mb-1';
          fecha.textContent = formatDate(ev.fecha);

          const titulo = document.createElement('div');
          titulo.className = 'font-bold text-base mb-1';
          titulo.textContent = ev.evento;

          const meta = document.createElement('div');
          meta.className = 'text-xs text-light-text-secondary dark:text-dark-text-secondary';
          const flags = [];
          if(ev.critico) flags.push('Crítico');
          if(ev.importante) flags.push('Importante');
          meta.textContent = flags.join(' • ');

          // badge
          let badge = '';
          if(ev.critico || ev.importante){
            badge = `<span class="inline-block px-2 py-1 rounded text-xs font-bold ${ev.critico ? 'bg-primary text-white' : 'bg-yellow-400 text-black'} ml-1">${ev.critico ? 'CRÍTICO' : 'IMPORTANTE'}</span>`;
          }

          card.innerHTML = `${fecha.outerHTML}${titulo.outerHTML}${meta.outerHTML}${badge}`;

          container.appendChild(card);

          // clicking an event highlights corresponding date in mini calendar
          card.addEventListener('click', ()=> selectDate(ev.fecha));
          card.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); card.click(); } });
        } catch(e) {
          console.warn('Error rendering event:', ev, e);
        }
      });

      // Render paginación si hay más de 1 página
      if(totalPages > 1){
        for(let i=1; i<=totalPages; i++){
          const btn = document.createElement('button');
          btn.textContent = i;
          btn.className = 'mx-1 px-3 py-1 rounded border text-sm ' + (i===page ? 'bg-primary text-white border-primary' : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-light-text-secondary dark:text-dark-text-secondary hover:bg-primary hover:text-white');
          btn.disabled = (i===page);
          btn.addEventListener('click', ()=>{
            paginacion[tipo] = i;
            renderList(tipo);
          });
          pagContainer.appendChild(btn);
        }
      }
    }

  function formatDate(iso){
    try{
      const d = new Date(iso + 'T00:00:00');
      if(isNaN(d.getTime())) throw new Error('Invalid date: ' + iso);
      return new Intl.DateTimeFormat('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }).format(d);
    }catch(e){
      console.warn('formatDate error:', e.message);
      return iso;
    }
  }

  // Toggle view
  function activate(tipo){
    btns.forEach(b=>{
      const is = b.dataset.tipo === tipo;
      b.classList.toggle('active', is);
      b.setAttribute('aria-pressed', is? 'true' : 'false');
    });

    Object.keys(vistas).forEach(k=>{
      const el = vistas[k];
      const show = k === tipo;
      el.classList.toggle('active', show);
      el.setAttribute('aria-hidden', show? 'false' : 'true');
    });
    // update mini calendar for this tipo
    currentTipo = tipo;
    renderMiniCalendar(currentTipo, currentYear, currentMonth);
  }

  // attach handlers
  btns.forEach(b=>{
    b.addEventListener('click', ()=>{
      const tipo = b.dataset.tipo;
      activate(tipo);
    });
    b.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        b.click();
      }
    });
  });

  // Mini calendar rendering
  function getEventsMap(tipo){
    const map = {};
    (calendarios[tipo]||[]).forEach(ev=>{
      if(!map[ev.fecha]) map[ev.fecha]=[];
      map[ev.fecha].push(ev);
    });
    return map;
  }

  function renderMiniCalendar(tipo, year, month){
    try{
      miniCalendar.innerHTML = '';
      const eventsMap = getEventsMap(tipo);
      // header month label with error handling
      try {
        const label = new Intl.DateTimeFormat('es-PE', { month: 'long', year: 'numeric' }).format(new Date(year, month, 1));
        miniMonth.textContent = label.charAt(0).toUpperCase() + label.slice(1);
      } catch(e) {
        console.warn('Month label formatting error:', e.message);
        miniMonth.textContent = `${month+1}/${year}`;
      }

      const weekdays = ['Do','Lu','Ma','Mi','Ju','Vi','Sa'];
      weekdays.forEach(w => {
        const wEl = document.createElement('div'); wEl.className='week-day'; wEl.textContent = w; miniCalendar.appendChild(wEl);
      });

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month+1, 0).getDate();
      const prevMonthDays = new Date(year, month, 0).getDate();

      // show 42 cells (6 weeks)
      for(let i=0;i<42;i++){
        const cell = document.createElement('div');
        cell.className = 'day';
        // calculate day number
        const dayIndex = i - firstDay + 1;
        let cellDate, dayNum, otherMonth=false;
        if(dayIndex <= 0){ // prev month
          dayNum = prevMonthDays + dayIndex;
          const d = new Date(year, month-1, dayNum);
          cellDate = toISO(d);
          otherMonth = true;
        } else if(dayIndex > daysInMonth){
          dayNum = dayIndex - daysInMonth;
          const d = new Date(year, month+1, dayNum);
          cellDate = toISO(d);
          otherMonth = true;
        } else {
          dayNum = dayIndex;
          const d = new Date(year, month, dayNum);
          cellDate = toISO(d);
        }

        if(!cellDate) continue; // skip if date conversion failed

        cell.dataset.date = cellDate;
        if(otherMonth) cell.classList.add('other-month');

        const num = document.createElement('div'); num.className='num'; num.textContent = dayNum;
        cell.appendChild(num);

        // if there are events for this date
        if(eventsMap[cellDate]){
          cell.classList.add('has-event');
          // small label (first event name truncated)
          const lab = document.createElement('div'); lab.className='label'; lab.textContent = truncate(eventsMap[cellDate][0].evento, 18);
          cell.appendChild(lab);
        }

        cell.addEventListener('click', ()=> selectDate(cellDate));
        miniCalendar.appendChild(cell);
      }

      // restore selection if within this month
      if(selectedDate){
        const s = miniCalendar.querySelector(`[data-date="${selectedDate}"]`);
        if(s) s.classList.add('selected');
      }
    }catch(e){
      console.error('renderMiniCalendar error:', e);
    }
  }

  function toISO(d){
    try{
      if(!(d instanceof Date) || isNaN(d.getTime())){
        throw new Error('Invalid date object');
      }
      const y = d.getFullYear();
      const m = String(d.getMonth()+1).padStart(2,'0');
      const day = String(d.getDate()).padStart(2,'0');
      return `${y}-${m}-${day}`;
    }catch(e){
      console.warn('toISO error:', e.message);
      return '';
    }
  }

  function truncate(s, n){ return s.length>n? s.slice(0,n-1)+'…': s; }

  function selectDate(dateStr){
    try{
      // clear previous
      const prev = miniCalendar.querySelector('.day.selected');
      if(prev) prev.classList.remove('selected');
      const cell = miniCalendar.querySelector(`[data-date="${dateStr}"]`);
      if(cell) cell.classList.add('selected');
      selectedDate = dateStr;

      // show events of currentTipo on this date
      const events = (calendarios[currentTipo]||[]).filter(ev=>ev.fecha===dateStr);
      if(events.length){
        selectedInfo.innerHTML = `<strong>${formatDate(dateStr)}</strong><ul class="mt-2">` + events.map(e=>`<li>${e.evento}</li>`).join('') + '</ul>';
      } else {
        selectedInfo.textContent = `No hay eventos (${formatDate(dateStr)})`;
      }

      // if clicked date is in other month, navigate the mini calendar to that month
      if(cell && cell.classList.contains('other-month')){
        try {
          const d = new Date(dateStr + 'T00:00:00');
          if(isNaN(d.getTime())) throw new Error('Invalid date for navigation: ' + dateStr);
          currentYear = d.getFullYear(); 
          currentMonth = d.getMonth();
          renderMiniCalendar(currentTipo, currentYear, currentMonth);
          // re-select after re-render
          const s2 = miniCalendar.querySelector(`[data-date="${dateStr}"]`);
          if(s2) s2.classList.add('selected');
        } catch(e) {
          console.warn('selectDate navigation error:', e.message);
        }
      }
    }catch(e){
      console.error('selectDate error:', e);
    }
  }

  miniPrev.addEventListener('click', ()=>{ currentMonth--; if(currentMonth<0){ currentMonth=11; currentYear--; } renderMiniCalendar(currentTipo,currentYear,currentMonth); });
  miniNext.addEventListener('click', ()=>{ currentMonth++; if(currentMonth>11){ currentMonth=0; currentYear++; } renderMiniCalendar(currentTipo,currentYear,currentMonth); });

    // Initial render
    ['elector','miembro','proceso'].forEach(t=>renderList(t));
    // initial view
    activate('elector');

    // Re-render lists on tab change to reset paginación
    btns.forEach(b=>{
      b.addEventListener('click', ()=>{
        paginacion[b.dataset.tipo] = 1;
        renderList(b.dataset.tipo);
      });
    });
  } catch(e) {
    console.error('Calendar initialization error:', e);
    console.error('Stack trace:', e.stack);
  }
});
