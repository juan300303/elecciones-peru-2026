document.addEventListener('DOMContentLoaded', function () {
    const languageDropdowns = document.querySelectorAll('.language-dropdown');
    const supportedLangs = ['es', 'qu', 'ay'];
    let currentLang = localStorage.getItem('lang') || 'es';

    async function loadTranslations(lang) {
        if (!supportedLangs.includes(lang)) {
            console.error(`Language '${lang}' not supported.`);
            return;
        }
        try {
            const path = window.location.pathname.includes('/html/') ? '../lang/' : 'lang/';
            const response = await fetch(`${path}${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${lang}.json`);
            }
            const translations = await response.json();
            applyTranslations(translations);
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    function applyTranslations(translations) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        loadTranslations(lang);
    }

    languageDropdowns.forEach(function (dropdown) {
        const menu = dropdown.querySelector('.language-dropdown-menu');
        let timeout;

        dropdown.addEventListener('mouseenter', function () {
            clearTimeout(timeout);
            menu.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function () {
            timeout = setTimeout(function () {
                menu.style.display = 'none';
            }, 200);
        });

        menu.addEventListener('mouseenter', function () {
            clearTimeout(timeout);
        });

        menu.addEventListener('mouseleave', function () {
            timeout = setTimeout(function () {
                menu.style.display = 'none';
            }, 200);
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                if (lang) {
                    setLanguage(lang);
                    menu.style.display = 'none';
                }
            });
        });
    });

    // Load initial language
    loadTranslations(currentLang);
});