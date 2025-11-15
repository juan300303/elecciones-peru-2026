
document.addEventListener('DOMContentLoaded', () => {

    // Lógica para el modo oscuro
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const htmlElement = document.documentElement;

    const applyTheme = (isDark) => {
        if (isDark) {
            htmlElement.classList.add('dark');
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        } else {
            htmlElement.classList.remove('dark');
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
        }
    };

    // Aplicar el tema al cargar la página
    const isDarkMode = localStorage.getItem('color-theme') === 'dark' || 
                       (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDarkMode);

    themeToggleBtn.addEventListener('click', () => {
        const isDark = htmlElement.classList.toggle('dark');
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        applyTheme(isDark);
    });


    // Lógica para el menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        // Usamos la clase 'open' para la animación CSS
        if(isHidden) {
            // Un pequeño retraso para permitir que 'hidden' se elimine antes de agregar la clase de animación
            requestAnimationFrame(() => {
                 mobileMenu.classList.add('open');
            });
        } else {
            mobileMenu.classList.remove('open');
        }
        mobileMenuButton.setAttribute('aria-expanded', String(!isHidden));
    });

    // Lógica del contador regresivo
    const countdownElement = document.getElementById('countdown-timer');
    if (countdownElement) {
        const monthsEl = document.getElementById('months');
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');

        const electionDate = new Date('2026-04-12T00:00:00');

        const updateCountdown = () => {
            const now = new Date();
            const difference = electionDate - now;

            if (difference < 0) {
                if(countdownElement) {
                    countdownElement.innerHTML = '<span class="text-2xl font-bold">¡Las elecciones han comenzado!</span>';
                }
                clearInterval(countdownInterval);
                return;
            }

            const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            
            let diffYears = electionDate.getFullYear() - now.getFullYear();
            let diffMonths = electionDate.getMonth() - now.getMonth();
            let diffDays = electionDate.getDate() - now.getDate();
            let diffHours = electionDate.getHours() - now.getHours();
            let diffMinutes = electionDate.getMinutes() - now.getMinutes();
            let diffSeconds = electionDate.getSeconds() - now.getSeconds();

            if (diffSeconds < 0) {
                diffSeconds += 60;
                diffMinutes--;
            }
             if (diffMinutes < 0) {
                diffMinutes += 60;
                diffHours--;
            }
            if (diffHours < 0) {
                diffHours += 24;
                diffDays--;
            }
            if (diffDays < 0) {
                // Se resta un mes, así que obtenemos los días del mes *anterior*
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                diffDays += prevMonth.getDate();
                diffMonths--;
            }
            if (diffMonths < 0) {
                diffMonths += 12;
                diffYears--;
            }
            
            const totalMonths = diffMonths + diffYears * 12;

            if(monthsEl) monthsEl.textContent = String(totalMonths).padStart(2, '0');
            if(daysEl) daysEl.textContent = String(diffDays).padStart(2, '0');
            if(hoursEl) hoursEl.textContent = String(diffHours).padStart(2, '0');
            if(minutesEl) minutesEl.textContent = String(diffMinutes).padStart(2, '0');
        };

        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }
});
