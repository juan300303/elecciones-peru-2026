// =============================================
// BASE DE DATOS DE PARTIDOS POLÍTICOS
// =============================================

const AllPartiesData = {
    // ACCIÓN POPULAR
    "accion-popular": {
        name: "ACCIÓN POPULAR",
        slogan: "Honradez, Tecnología y Trabajo",
        logo: "../img/AcciónPopular.svg.png",
        slug: "accion-popular",
        info: {
            foundation: "7 de julio de 1956",
            colors: "Blanco y Rojo",
            ideology: "Democracia Cristiana, Reformismo",
            leader: "Mesías Guevara Amasifuén",
            representation: "3 congresistas",
            lastResults: "3.2% (2021)",
            headquarters: "Av. Arequipa 1470, Lince, Lima",
            website: "https://accionpopular.com.pe/",
            founder: "Fernando Belaúnde Terry",
            position: "Centro a Centro-derecha",
            affiliation: "Unión de Partidos Latinoamericanos"
        },
        description: {
            general: "Acción Popular (AP) es un partido político peruano fundado el 7 de julio de 1956 por el arquitecto Fernando Belaúnde Terry. Es uno de los partidos políticos más antiguos y tradicionales del Perú, con una larga trayectoria en la vida política nacional.",
            principles: [
                "Defensa de la democracia representativa y participativa",
                "Promoción del desarrollo nacional con justicia social",
                "Respeto a los derechos humanos y las libertades individuales",
                "Fortalecimiento del Estado de Derecho",
                "Descentralización y regionalización del país"
            ],
            history: "Acción Popular ha gobernado el Perú en dos oportunidades: de 1963 a 1968 y de 1980 a 1985, ambas veces bajo el liderazgo de Fernando Belaúnde Terry. Durante estos periodos, el partido impulsó importantes obras de infraestructura y reformas políticas.",
            structure: "El partido cuenta con una estructura organizativa a nivel nacional, con comités departamentales, provinciales y distritales. Su máxima autoridad es la Asamblea Nacional, que elige al Comité Ejecutivo Nacional.",
            symbols: "Los colores representativos de Acción Popular son el blanco y rojo, que coinciden con los de la bandera peruana. Su símbolo principal es una V dinámica que representa el progreso y el avance del país."
        },
        candidates: {
            presidential: [
                { name: "Mesías Guevara", position: "Presidente" },
                { name: "Eda Rivas", position: "1ra Vicepresidenta" },
                { name: "Luis Galarreta", position: "2do Vicepresidente" }
            ],
            congress: [
                "Victor Andrés García Belaúnde", "Yonhy Lescano", "Liliana La Rosa", 
                "Humberto Morales", "Edith Julón", "Javier Velásquez Quesquén", 
                "José Luna Gálvez", "Martha Chávez", "Lourdes Flores", "Mauricio Mulder",
                "Luis Iberico", "Rosa Bartra", "Marco Arana", "Gloria Montenegro", "Juan Sheput"
            ],
            andino: [
                "Ana María Choquehuanca", "Gustavo Pacheco", "María Elena Flores"
            ]
        },
        governmentPlan: {
            axes: [
                {
                    name: "EDUCACIÓN", icon: "🎓",
                    proposals: [
                        "Universalizar la educación inicial y secundaria",
                        "Fortalecer la educación técnica y universitaria",
                        "Implementar programas de alfabetización digital",
                        "Mejorar la infraestructura educativa en zonas rurales",
                        "Capacitación continua para docentes",
                        "Fomentar la investigación científica",
                        "Implementar becas integrales"
                    ]
                },
                {
                    name: "SALUD", icon: "🏥",
                    proposals: [
                        "Universalizar el Seguro Integral de Salud",
                        "Mejorar la infraestructura de hospitales y centros de salud",
                        "Fortalecer la atención primaria en zonas rurales",
                        "Implementar programas de prevención de enfermedades",
                        "Fortalecer la investigación médica nacional",
                        "Reducir listas de espera en especialidades",
                        "Implementar telemedicina a nivel nacional"
                    ]
                },
                {
                    name: "ECONOMÍA", icon: "💼",
                    proposals: [
                        "Promover la inversión privada y pública",
                        "Fomentar las MIPYMES y el emprendimiento",
                        "Reducir la informalidad laboral",
                        "Impulsar las exportaciones no tradicionales",
                        "Fortalecer el sistema financiero nacional",
                        "Simplificar trámites empresariales",
                        "Promover clusters productivos regionales"
                    ]
                },
                {
                    name: "SEGURIDAD", icon: "🛡️",
                    proposals: [
                        "Fortalecer a la Policía Nacional del Perú",
                        "Implementar sistemas de vigilancia comunitaria",
                        "Combate frontal a la corrupción",
                        "Modernizar el sistema penitenciario",
                        "Prevención del delito mediante programas sociales",
                        "Inteligencia policial especializada",
                        "Coordinación interinstitucional"
                    ]
                },
                {
                    name: "INFRAESTRUCTURA", icon: "🏗️",
                    proposals: [
                        "Ampliar y mejorar la red vial nacional",
                        "Invertir en infraestructura de agua y saneamiento",
                        "Desarrollar proyectos de energía renovable",
                        "Modernizar puertos y aeropuertos",
                        "Impulsar la construcción de viviendas sociales",
                        "Conectividad digital en zonas rurales",
                        "Infraestructura deportiva comunitaria"
                    ]
                },
                {
                    name: "MEDIO AMBIENTE", icon: "🌱",
                    proposals: [
                        "Promover el uso de energías renovables",
                        "Proteger la biodiversidad y áreas naturales",
                        "Implementar programas de reciclaje a nivel nacional",
                        "Fomentar la agricultura sostenible",
                        "Controlar la contaminación industrial",
                        "Gestión integral de residuos sólidos",
                        "Educación ambiental en escuelas"
                    ]
                },
                {
                    name: "JUSTICIA", icon: "⚖️",
                    proposals: [
                        "Modernizar el sistema judicial",
                        "Fortalecer el acceso a la justicia",
                        "Combate a la corrupción en todas sus formas",
                        "Reforma del sistema penitenciario",
                        "Protección de derechos humanos",
                        "Justicia intercultural",
                        "Defensoría pública fortalecida"
                    ]
                },
                {
                    name: "CULTURA", icon: "🎭",
                    proposals: [
                        "Promover la identidad cultural peruana",
                        "Fortalecer los museos y bibliotecas nacionales",
                        "Apoyar a artistas y creadores nacionales",
                        "Proteger el patrimonio cultural",
                        "Fomentar el turismo cultural",
                        "Carnavales y festividades regionales",
                        "Escuelas de arte y música"
                    ]
                }
            ]
        },
        history: {
            timeline: [
                { 
                    year: "1956", 
                    event: "Fundación del Partido", 
                    detail: "Creación oficial de Acción Popular por Fernando Belaúnde Terry",
                    tooltip: "El 7 de julio de 1956, Fernando Belaúnde Terry funda Acción Popular como un movimiento político que promueve la democracia, el desarrollo nacional y la justicia social. El partido surge como alternativa a los partidos tradicionales de la época.",
                    badge: "Hito Fundacional"
                },
                { 
                    year: "1963", 
                    event: "Primer Gobierno Constitucional", 
                    detail: "Victoria electoral de Fernando Belaúnde Terry",
                    tooltip: "En las elecciones generales de 1963, Fernando Belaúnde Terry es elegido Presidente Constitucional del Perú. Durante su gobierno se impulsaron importantes obras de infraestructura como la Carretera Marginal de la Selva.",
                    badge: "Gobierno"
                },
                { 
                    year: "1980", 
                    event: "Retorno a la Democracia", 
                    detail: "Segunda presidencia de Belaúnde Terry",
                    tooltip: "Tras 12 años de gobierno militar, Acción Popular gana las elecciones de 1980 marcando el retorno a la democracia. Belaúnde Terry implementa políticas de apertura económica y continúa con obras de infraestructura.",
                    badge: "Transición"
                },
                { 
                    year: "2001", 
                    event: "Representación Parlamentaria", 
                    detail: "26 congresistas electos al Congreso",
                    tooltip: "En las elecciones congresales del 2001, Acción Popular logra una importante representación con 26 congresistas, consolidándose como una fuerza política significativa en el legislativo.",
                    badge: "Legislativo"
                },
                { 
                    year: "2021", 
                    event: "Participación Electoral", 
                    detail: "3 representantes en el Congreso actual",
                    tooltip: "En las elecciones generales del 2021, Acción Popular mantiene presencia en el Congreso con 3 representantes, demostrando su continuidad en la vida política nacional a pesar de los cambios en el escenario político.",
                    badge: "Actualidad"
                }
            ],
            results: [
                { 
                    year: "2021", 
                    percentage: "3.2%", 
                    congressmen: 3, 
                    width: "16%",
                    tooltip: "Elecciones generales 2021: Acción Popular obtuvo el 3.2% de los votos válidos, logrando 3 escaños en el Congreso. La plancha presidencial fue encabezada por Mesías Guevara."
                },
                { 
                    year: "2016", 
                    percentage: "7.2%", 
                    congressmen: 5, 
                    width: "36%",
                    tooltip: "Elecciones generales 2016: El partido alcanzó el 7.2% de los votos, obteniendo 5 curules parlamentarias. Esta elección marcó una recuperación tras periodos de menor representación."
                },
                { 
                    year: "2011", 
                    percentage: "14.8%", 
                    congressmen: 12, 
                    width: "74%",
                    tooltip: "Elecciones generales 2011: Acción Popular logró un significativo 14.8% de los votos, consiguiendo 12 escaños en el Congreso. Fue una de las elecciones con mejor desempeño del partido en la década."
                },
                { 
                    year: "2006", 
                    percentage: "20.6%", 
                    congressmen: 17, 
                    width: "100%",
                    tooltip: "Elecciones generales 2006: El partido alcanzó su máximo histórico reciente con 20.6% de los votos y 17 congresistas electos. Esta elección consolidó a AP como una de las principales fuerzas políticas del país."
                }
            ]
        }
    },

    // ALIANZA PARA EL PROGRESO
    "alianza-para-el-progreso": {
        name: "ALIANZA PARA EL PROGRESO",
        slogan: "Trabajo, Orden y Libertad",
        logo: "../img/ALIANZAPARAELPROGRESO.png",
        slug: "alianza-para-el-progreso",
        info: {
            foundation: "8 de diciembre de 2001",
            colors: "Azul y Blanco",
            ideology: "Liberalismo, Descentralismo, Desarrollo Regional",
            leader: "César Acuña Peralta",
            representation: "15 congresistas",
            lastResults: "11.8% (2021)",
            headquarters: "Av. Arequipa 4760, Miraflores, Lima",
            website: "https://app.pe/",
            founder: "César Acuña Peralta",
            position: "Centro-derecha",
            affiliation: "Ninguna"
        },
        description: {
            general: "Alianza para el Progreso es un partido político peruano fundado en 2001 por César Acuña Peralta. Se caracteriza por su enfoque en el desarrollo regional, la inversión en infraestructura y la promoción de la educación técnica.",
            principles: [
                "Promoción de la inversión privada y pública",
                "Fortalecimiento de los gobiernos regionales y locales",
                "Educación de calidad con enfoque técnico y productivo",
                "Lucha frontal contra la pobreza y desigualdad",
                "Modernización y descentralización del Estado"
            ],
            history: "El partido ha tenido un crecimiento significativo en las últimas elecciones, consolidándose como una fuerza política importante a nivel nacional, especialmente en regiones del norte del Perú como La Libertad, Lambayeque y Piura.",
            structure: "Organización descentralizada con fuerte presencia regional, basada en comités departamentales y provinciales con autonomía operativa.",
            symbols: "Colores azul y blanco, simbolizando progreso, transparencia y pureza en la gestión pública. Su símbolo representa una flecha ascendente hacia el desarrollo."
        },
        candidates: {
            presidential: [
                { name: "César Acuña", position: "Presidente" },
                { name: "María del Carmen Alva", position: "1ra Vicepresidenta" },
                { name: "Luis Iberico", position: "2do Vicepresidente" }
            ],
            congress: [
                "Javier Padilla", "Rosángela Barbarán", "Luis Valdez", 
                "Edgar Tello", "Karina Beteta", "Héctor Valer", 
                "Digna Calle", "Yenifer Pozo", "José Cueto", "Willyam Monterola",
                "Segundo Montalvo", "Lizbeth Hidalgo", "Roberto Chiabra", "Esdras Medina"
            ],
            andino: [
                "Hildebrando Tapia", "Gladys Echaíz", "Ricardo Burga"
            ]
        },
        governmentPlan: {
            axes: [
                {
                    name: "INFRAESTRUCTURA", icon: "🏗️",
                    proposals: [
                        "Masificar la inversión en carreteras interregionales",
                        "Construcción de hospitales modernos en cada región",
                        "Expansión masiva de redes de agua y saneamiento",
                        "Conectividad digital nacional con internet gratuito",
                        "Programa nacional de viviendas sociales",
                        "Modernización de puertos y aeropuertos regionales",
                        "Infraestructura educativa tecnológica"
                    ]
                },
                {
                    name: "EDUCACIÓN", icon: "🎓",
                    proposals: [
                        "Becas integrales para educación técnica y superior",
                        "Modernización total de colegios públicos",
                        "Capacitación docente continua remunerada",
                        "Educación técnica gratuita para jóvenes",
                        "Universidades regionales fortalecidas",
                        "Programas de alfabetización digital",
                        "Fomento a la investigación aplicada"
                    ]
                },
                {
                    name: "SALUD", icon: "🏥",
                    proposals: [
                        "Seguro de salud universal gratuito",
                        "Hospitales especializados por regiones",
                        "Medicamentos gratuitos para enfermedades crónicas",
                        "Programas de prevención de enfermedades",
                        "Telemedicina en zonas rurales",
                        "Equipamiento moderno para centros de salud",
                        "Capacitación continua del personal médico"
                    ]
                },
                {
                    name: "ECONOMÍA", icon: "💼",
                    proposals: [
                        "Reducción de impuestos para MIPYMES",
                        "Fomento a las exportaciones regionales",
                        "Créditos blandos para emprendedores",
                        "Simplificación de trámites empresariales",
                        "Promoción de inversiones estratégicas",
                        "Desarrollo de clusters productivos",
                        "Fomento al turismo interno y externo"
                    ]
                },
                {
                    name: "SEGURIDAD", icon: "🛡️",
                    proposals: [
                        "Fortalecimiento de la Policía Nacional",
                        "Sistemas de vigilancia comunitaria",
                        "Combate al narcotráfico y crimen organizado",
                        "Modernización del sistema penitenciario",
                        "Programas de prevención del delito juvenil",
                        "Inteligencia policial tecnológica",
                        "Coordinación interinstitucional eficiente"
                    ]
                },
                {
                    name: "MEDIO AMBIENTE", icon: "🌱",
                    proposals: [
                        "Promoción de energías renovables",
                        "Protección de áreas naturales y biodiversidad",
                        "Programas de reforestación nacional",
                        "Manejo integral de residuos sólidos",
                        "Control de la contaminación industrial",
                        "Fomento de agricultura sostenible",
                        "Educación ambiental en todas las escuelas"
                    ]
                },
                {
                    name: "JUSTICIA", icon: "⚖️",
                    proposals: [
                        "Reforma integral del sistema judicial",
                        "Fortalecimiento del acceso a la justicia",
                        "Combate frontal a la corrupción",
                        "Modernización de procesos judiciales",
                        "Protección de derechos humanos",
                        "Justicia intercultural bilingüe",
                        "Defensoría pública fortalecida"
                    ]
                },
                {
                    name: "CULTURA", icon: "🎭",
                    proposals: [
                        "Promoción de la identidad cultural peruana",
                        "Fortalecimiento de museos regionales",
                        "Apoyo a artistas y creadores nacionales",
                        "Protección del patrimonio cultural",
                        "Fomento del turismo cultural",
                        "Festivales culturales regionales",
                        "Escuelas de arte y música públicas"
                    ]
                }
            ]
        },
        history: {
            timeline: [
                { 
                    year: "2001", 
                    event: "Fundación del Partido", 
                    detail: "Creación oficial por César Acuña Peralta",
                    tooltip: "El 8 de diciembre de 2001, César Acuña Peralta funda Alianza para el Progreso con el objetivo de promover el desarrollo regional y la inversión en infraestructura, especialmente en el norte del Perú.",
                    badge: "Hito Fundacional"
                },
                { 
                    year: "2006", 
                    event: "Primera Participación Electoral", 
                    detail: "Elecciones regionales y municipales",
                    tooltip: "El partido participa por primera vez en elecciones, logrando importantes alcaldías y gobiernos regionales, especialmente en La Libertad.",
                    badge: "Inicio Electoral"
                },
                { 
                    year: "2011", 
                    event: "Crecimiento Nacional", 
                    detail: "Expansión a nivel nacional",
                    tooltip: "Alianza para el Progreso expande su presencia a más regiones del país, consolidándose como una fuerza política emergente con propuestas de desarrollo regional.",
                    badge: "Expansión"
                },
                { 
                    year: "2016", 
                    event: "Consolidación Parlamentaria", 
                    detail: "10 congresistas electos",
                    tooltip: "En las elecciones generales de 2016, el partido logra una importante representación parlamentaria con 10 congresistas, marcando su consolidación a nivel nacional.",
                    badge: "Legislativo"
                },
                { 
                    year: "2021", 
                    event: "Segunda Fuerza Política", 
                    detail: "15 representantes en el Congreso",
                    tooltip: "En las elecciones del 2021, Alianza para el Progreso se convierte en la segunda fuerza política del Congreso con 15 representantes, demostrando su crecimiento sostenido.",
                    badge: "Actualidad"
                }
            ],
            results: [
                { 
                    year: "2021", 
                    percentage: "11.8%", 
                    congressmen: 15, 
                    width: "59%",
                    tooltip: "Elecciones generales 2021: Alianza para el Progreso obtuvo el 11.8% de los votos válidos, logrando 15 escaños en el Congreso. Se consolidó como la segunda fuerza política del país."
                },
                { 
                    year: "2016", 
                    percentage: "9.2%", 
                    congressmen: 10, 
                    width: "46%",
                    tooltip: "Elecciones generales 2016: El partido alcanzó el 9.2% de los votos, obteniendo 10 curules parlamentarias. Marcó un crecimiento significativo en su representación nacional."
                },
                { 
                    year: "2011", 
                    percentage: "6.5%", 
                    congressmen: 7, 
                    width: "32%",
                    tooltip: "Elecciones generales 2011: Alianza para el Progreso logró el 6.5% de los votos, consiguiendo 7 escaños en el Congreso. Comenzó su expansión a nivel nacional."
                },
                { 
                    year: "2006", 
                    percentage: "4.3%", 
                    congressmen: 5, 
                    width: "21%",
                    tooltip: "Elecciones generales 2006: El partido obtuvo el 4.3% de los votos y 5 congresistas electos. Fue su primera participación significativa en elecciones nacionales."
                }
            ]
        }
    },

    // FUERZA POPULAR
    "fuerza-popular": {
        name: "FUERZA POPULAR",
        slogan: "Orden, Seguridad y Progreso",
        logo: "../img/FUERZA POPULAR.png",
        slug: "fuerza-popular",
        info: {
            foundation: "3 de marzo de 2010",
            colors: "Naranja y Azul",
            ideology: "Conservadurismo, Liberalismo económico, Democracia cristiana",
            leader: "Keiko Fujimori Higuchi",
            representation: "15 congresistas",
            lastResults: "13.4% (2021)",
            headquarters: "Av. Arequipa 3100, San Isidro, Lima",
            website: "https://fuerzapopular.com.pe/",
            founder: "Keiko Fujimori Higuchi",
            position: "Derecha",
            affiliation: "Unión Internacional Demócrata"
        },
        description: {
            general: "Fuerza Popular es un partido político peruano de derecha fundado en 2010 por Keiko Fujimori. Ha sido una de las fuerzas políticas más importantes en la última década, participando en tres elecciones presidenciales consecutivas y llegando a segunda vuelta en todas ellas.",
            principles: [
                "Seguridad ciudadana y lucha contra la delincuencia",
                "Economía social de mercado y promoción de inversiones",
                "Fortalecimiento de la familia como base de la sociedad",
                "Lucha frontal contra el terrorismo y crimen organizado",
                "Promoción de la inversión privada y empleo digno"
            ],
            history: "El partido surge como la evolución del fujimorismo en el siglo XXI, manteniendo una base electoral sólida y consistente. Ha demostrado capacidad de movilización y organización a nivel nacional.",
            structure: "Organización centralizada con presencia nacional, basada en una estructura piramidal con comités distritales, provinciales y departamentales bajo dirección nacional.",
            symbols: "Colores naranja y azul, representando energía, dinamismo y estabilidad. Su símbolo incorpora elementos que evocan fortaleza y unidad nacional."
        },
        candidates: {
            presidential: [
                { name: "Keiko Fujimori", position: "Presidente" },
                { name: "Lourdes Flores", position: "1ra Vicepresidenta" },
                { name: "Luis Galarreta", position: "2do Vicepresidente" }
            ],
            congress: [
                "Martha Chávez", "Rosa Bartra", "Luis Galarreta", 
                "Juan Carlos Gonzales", "Héctor Becerril", "María Teresa Cabrera",
                "Javier Reátegui", "Alejandro Aguinaga", "Luz Salgado", "Daniel Mora",
                "Cecilia Chacón", "José Cueto", "Miguel Castro", "Rosselli Amuruz"
            ],
            andino: [
                "Fernando Rospigliosi", "Carmen Omonte", "José Chlimper"
            ]
        },
        governmentPlan: {
            axes: [
                {
                    name: "SEGURIDAD", icon: "🛡️",
                    proposals: [
                        "Penalidades más severas para delitos graves",
                        "Incremento de efectivos policiales en calles",
                        "Sistema penitenciario reformado y modernizado",
                        "Combate frontal al narcotráfico y crimen organizado",
                        "Programas de prevención del delito juvenil",
                        "Inteligencia policial con tecnología de punta",
                        "Coordinación internacional contra la delincuencia"
                    ]
                },
                {
                    name: "ECONOMÍA", icon: "💼",
                    proposals: [
                        "Reducción de impuestos para empresas y trabajadores",
                        "Simplificación administrativa para inversionistas",
                        "Promoción de inversiones nacionales y extranjeras",
                        "Fomento a las PYMES con créditos blandos",
                        "Impulso a las exportaciones tradicionales y no tradicionales",
                        "Estabilidad jurídica para inversiones de largo plazo",
                        "Promoción del empleo formal y digno"
                    ]
                },
                {
                    name: "EDUCACIÓN", icon: "🎓",
                    proposals: [
                        "Educación básica universal y gratuita",
                        "Fortalecimiento de la educación técnica productiva",
                        "Capacitación docente con incentivos salariales",
                        "Infraestructura educativa moderna y segura",
                        "Becas para educación superior meritocráticas",
                        "Fomento de la investigación científica",
                        "Educación digital desde nivel inicial"
                    ]
                },
                {
                    name: "SALUD", icon: "🏥",
                    proposals: [
                        "Seguro integral de salud universal",
                        "Hospitales modernos en todas las regiones",
                        "Medicamentos gratuitos para población vulnerable",
                        "Programas de prevención de enfermedades",
                        "Telemedicina para zonas alejadas",
                        "Equipamiento médico de última generación",
                        "Carrera pública médica dignificada"
                    ]
                },
                {
                    name: "INFRAESTRUCTURA", icon: "🏗️",
                    proposals: [
                        "Red vial nacional integrada y moderna",
                        "Inversión en agua y saneamiento rural",
                        "Energía eléctrica para todo el país",
                        "Conectividad digital nacional",
                        "Viviendas sociales accesibles",
                        "Modernización de puertos y aeropuertos",
                        "Infraestructura deportiva comunitaria"
                    ]
                },
                {
                    name: "MEDIO AMBIENTE", icon: "🌱",
                    proposals: [
                        "Desarrollo sostenible y responsable",
                        "Protección de áreas naturales protegidas",
                        "Manejo integral de residuos sólidos",
                        "Control de la contaminación ambiental",
                        "Fomento de energías renovables",
                        "Agricultura sostenible y tecnificada",
                        "Educación ambiental desde la escuela"
                    ]
                },
                {
                    name: "JUSTICIA", icon: "⚖️",
                    proposals: [
                        "Reforma del sistema de justicia",
                        "Combate frontal a la corrupción",
                        "Modernización de procesos judiciales",
                        "Protección de derechos fundamentales",
                        "Acceso a la justicia para todos",
                        "Sistema penitenciario humanizado",
                        "Transparencia en la administración de justicia"
                    ]
                },
                {
                    name: "FAMILIA", icon: "👨‍👩‍👧‍👦",
                    proposals: [
                        "Fortalecimiento de la familia como institución",
                        "Programas de apoyo a madres y niños",
                        "Protección de adultos mayores",
                        "Incentivos para la natalidad",
                        "Valores familiares en educación",
                        "Apoyo a familias vulnerables",
                        "Conciliación trabajo-familia"
                    ]
                }
            ]
        },
        history: {
            timeline: [
                { 
                    year: "2010", 
                    event: "Fundación del Partido", 
                    detail: "Creación oficial por Keiko Fujimori Higuchi",
                    tooltip: "El 3 de marzo de 2010, Keiko Fujimori funda Fuerza Popular como la evolución política del fujimorismo para el siglo XXI, con un enfoque en seguridad, economía y desarrollo nacional.",
                    badge: "Hito Fundacional"
                },
                { 
                    year: "2011", 
                    event: "Primera Postulación Presidencial", 
                    detail: "Keiko Fujimori llega a segunda vuelta",
                    tooltip: "En su primera participación electoral, Fuerza Popular logra llevar a Keiko Fujimori a segunda vuelta presidencial, demostrando su rápida consolidación como fuerza política.",
                    badge: "Elecciones"
                },
                { 
                    year: "2016", 
                    event: "Mayoría Parlamentaria", 
                    detail: "73 congresistas electos",
                    tooltip: "En las elecciones del 2016, Fuerza Popular obtiene una amplia mayoría parlamentaria con 73 congresistas, convirtiéndose en la fuerza política hegemónica del legislativo.",
                    badge: "Legislativo"
                },
                { 
                    year: "2021", 
                    event: "Tercera Postulación Presidencial", 
                    detail: "Segunda vuelta electoral muy reñida",
                    tooltip: "Por tercera vez consecutiva, Fuerza Popular lleva a su candidata a segunda vuelta presidencial, en una de las elecciones más reñidas de la historia democrática peruana.",
                    badge: "Actualidad"
                }
            ],
            results: [
                { 
                    year: "2021", 
                    percentage: "13.4%", 
                    congressmen: 15, 
                    width: "67%",
                    tooltip: "Elecciones generales 2021: Fuerza Popular obtuvo el 13.4% de los votos válidos, logrando 15 escaños en el Congreso. Se mantuvo como una de las principales fuerzas políticas del país."
                },
                { 
                    year: "2016", 
                    percentage: "36.3%", 
                    congressmen: 73, 
                    width: "100%",
                    tooltip: "Elecciones generales 2016: El partido alcanzó el 36.3% de los votos, obteniendo 73 curules parlamentarias y la mayoría absoluta en el Congreso."
                },
                { 
                    year: "2011", 
                    percentage: "23.0%", 
                    congressmen: 37, 
                    width: "51%",
                    tooltip: "Elecciones generales 2011: Fuerza Popular logró el 23.0% de los votos, consiguiendo 37 escaños en el Congreso. Se consolidó como la primera fuerza de oposición."
                },
                { 
                    year: "2010", 
                    percentage: "N/A", 
                    congressmen: 0, 
                    width: "0%",
                    tooltip: "Fundación del partido. No participó en elecciones nacionales este año."
                }
            ]
        }
    },

    // PARTIDO APRISTA PERUANO
    "partido-aprista-peruano": {
        name: "PARTIDO APRISTA PERUANO",
        slogan: "Pan, Libertad y Justicia Social",
        logo: "../img/PARTIDO APRISTA PERUANO.png",
        slug: "partido-aprista-peruano",
        info: {
            foundation: "20 de septiembre de 1930",
            colors: "Blanco y Rojo",
            ideology: "Socialdemocracia, Aprismo, Nacionalismo",
            leader: "César Trelles Lara",
            representation: "0 congresistas",
            lastResults: "1.3% (2021)",
            headquarters: "Av. Alfonso Ugarte 1012, Lima",
            website: "https://apraperu.com/",
            founder: "Víctor Raúl Haya de la Torre",
            position: "Centro-izquierda",
            affiliation: "Internacional Socialista"
        },
        description: {
            general: "El Partido Aprista Peruano (PAP) es el partido político más antiguo del Perú, fundado por Víctor Raúl Haya de la Torre en 1930. Tiene una rica historia y ha jugado un papel fundamental en la vida política nacional durante casi un siglo.",
            principles: [
                "Justicia social y redistribución de la riqueza",
                "Unidad de América Latina (Indoamérica)",
                "Democracia funcional y participación popular",
                "Defensa de la soberanía nacional",
                "Antiimperialismo y solidaridad internacional"
            ],
            history: "El APRA ha gobernado el Perú en cinco oportunidades y ha sido una fuerza política determinante en la historia contemporánea del país. Tuvo a Alan García Pérez como presidente en dos periodos.",
            structure: "Estructura organizativa jerárquica con comités a nivel nacional, departamental, provincial y distrital. Mantiene una disciplina partidaria tradicional.",
            symbols: "Colores blanco y rojo de la bandera peruana. Su símbolo histórico es la estrella y el sol, representando la luz del aprismo para Indoamérica."
        },
        candidates: {
            presidential: [
                { name: "César Trelles", position: "Presidente" },
                { name: "Elsa Canchaya", position: "1ra Vicepresidenta" },
                { name: "Javier Velásquez", position: "2do Vicepresidente" }
            ],
            congress: [
                "Alan García Castillo", "Mercedes Cabanillas", "Jorge del Castillo",
                "Mauricio Mulder", "Luis Giampietri", "Rafael Rey",
                "Lourdes Flores", "David Waisman", "Humberto Lay", "Rosario Sasieta"
            ],
            andino: [
                "Hildebrando Tapia", "Martha Chávez", "Luis Wilson"
            ]
        },
        governmentPlan: {
            axes: [
                {
                    name: "JUSTICIA SOCIAL", icon: "⚖️",
                    proposals: [
                        "Redistribución equitativa de la riqueza",
                        "Salarios dignos y protección laboral",
                        "Pensión universal para adultos mayores",
                        "Programas de alimentación escolar",
                        "Vivienda social accesible",
                        "Acceso universal a servicios básicos",
                        "Economía social de mercado con rostro humano"
                    ]
                },
                {
                    name: "EDUCACIÓN", icon: "🎓",
                    proposals: [
                        "Educación pública gratuita y de calidad",
                        "Capacitación docente con salarios dignos",
                        "Infraestructura educativa moderna",
                        "Becas integrales para estudiantes",
                        "Educación técnica vinculada al desarrollo",
                        "Fomento de la investigación científica",
                        "Alfabetización digital nacional"
                    ]
                },
                {
                    name: "SALUD", icon: "🏥",
                    proposals: [
                        "Sistema nacional de salud universal",
                        "Hospitales y centros de salud modernos",
                        "Medicamentos gratuitos para todos",
                        "Programas de salud preventiva",
                        "Atención primaria en comunidades",
                        "Telemedicina para zonas rurales",
                        "Salud mental como prioridad"
                    ]
                },
                {
                    name: "ECONOMÍA", icon: "💼",
                    proposals: [
                        "Promoción de la inversión con responsabilidad social",
                        "Fomento a las MIPYMES y cooperativas",
                        "Desarrollo de mercados internos",
                        "Industrialización del país",
                        "Promoción de exportaciones con valor agregado",
                        "Estabilidad macroeconómica con crecimiento",
                        "Generación de empleo digno y estable"
                    ]
                },
                {
                    name: "SEGURIDAD", icon: "🛡️",
                    proposals: [
                        "Fortalecimiento integral de la Policía Nacional",
                        "Programas de prevención del delito",
                        "Combate al narcotráfico y crimen organizado",
                        "Sistema penitenciario reformado",
                        "Inteligencia policial moderna",
                        "Participación ciudadana en seguridad",
                        "Coordinación internacional contra el delito"
                    ]
                },
                {
                    name: "INTEGRACIÓN", icon: "🌎",
                    proposals: [
                        "Unidad e integración latinoamericana",
                        "Fortalecimiento de la Comunidad Andina",
                        "Relaciones internacionales soberanas",
                        "Cooperación Sur-Sur",
                        "Defensa de la soberanía nacional",
                        "Promoción de la paz mundial",
                        "Solidaridad con pueblos hermanos"
                    ]
                },
                {
                    name: "MEDIO AMBIENTE", icon: "🌱",
                    proposals: [
                        "Desarrollo sostenible y conservación",
                        "Protección de la biodiversidad",
                        "Manejo responsable de recursos naturales",
                        "Energías renovables y limpias",
                        "Educación ambiental popular",
                        "Control de la contaminación",
                        "Agricultura ecológica y sostenible"
                    ]
                },
                {
                    name: "CULTURA", icon: "🎭",
                    proposals: [
                        "Promoción de la identidad nacional",
                        "Protección del patrimonio cultural",
                        "Apoyo a artistas y creadores",
                        "Cultura popular y tradiciones",
                        "Museos y bibliotecas públicas",
                        "Deporte y recreación popular",
                        "Turismo cultural comunitario"
                    ]
                }
            ]
        },
        history: {
            timeline: [
                { 
                    year: "1930", 
                    event: "Fundación del Partido", 
                    detail: "Creación por Víctor Raúl Haya de la Torre",
                    tooltip: "El 20 de septiembre de 1930, Víctor Raúl Haya de la Torre funda el Partido Aprista Peruano, inspirado en los principios de justicia social, antiimperialismo y unidad latinoamericana.",
                    badge: "Hito Fundacional"
                },
                { 
                    year: "1985", 
                    event: "Primer Gobierno Aprista", 
                    detail: "Alan García Pérez elegido presidente",
                    tooltip: "Después de décadas de persecución y lucha democrática, el APRA llega al poder con Alan García, marcando un hito en la historia política peruana.",
                    badge: "Gobierno"
                },
                { 
                    year: "2006", 
                    event: "Segundo Gobierno Aprista", 
                    detail: "Retorno de Alan García a la presidencia",
                    tooltip: "El APRA retorna al gobierno después de 16 años, demostrando su vigencia y capacidad de renovación en el escenario político nacional.",
                    badge: "Gobierno"
                },
                { 
                    year: "2011", 
                    event: "Transición Democrática", 
                    detail: "Entrega del gobierno de manera ordenada",
                    tooltip: "El partido completa su segundo gobierno consecutivo y realiza una transición democrática pacífica, fortaleciendo las instituciones del Estado.",
                    badge: "Transición"
                },
                { 
                    year: "2021", 
                    event: "Reestructuración Partidaria", 
                    detail: "Renovación de liderazgos y propuestas",
                    tooltip: "Frente a nuevos desafíos políticos, el partido inicia un proceso de reestructuración y renovación para adaptarse al siglo XXI manteniendo sus principios fundacionales.",
                    badge: "Actualidad"
                }
            ],
            results: [
                { 
                    year: "2021", 
                    percentage: "1.3%", 
                    congressmen: 0, 
                    width: "6%",
                    tooltip: "Elecciones generales 2021: El Partido Aprista Peruano obtuvo el 1.3% de los votos válidos, sin lograr representación congresal. Marcó un momento de reflexión y reorganización."
                },
                { 
                    year: "2016", 
                    percentage: "7.2%", 
                    congressmen: 5, 
                    width: "36%",
                    tooltip: "Elecciones generales 2016: El partido alcanzó el 7.2% de los votos, obteniendo 5 curules parlamentarias. Mantuvo presencia en el legislativo nacional."
                },
                { 
                    year: "2011", 
                    percentage: "23.0%", 
                    congressmen: 4, 
                    width: "20%",
                    tooltip: "Elecciones generales 2011: El APRA logró el 23.0% de los votos presidenciales en primera vuelta, aunque obtuvo solo 4 escaños congresales."
                },
                { 
                    year: "2006", 
                    percentage: "52.6%", 
                    congressmen: 36, 
                    width: "100%",
                    tooltip: "Elecciones generales 2006: Alan García gana en segunda vuelta con 52.6% y el partido obtiene 36 congresistas, logrando una importante representación parlamentaria."
                }
            ]
        }
    },

    // PARTIDO DEMOCRÁTICO SOMOS PERÚ
    "somos-peru": {
        name: "PARTIDO DEMOCRÁTICO SOMOS PERÚ",
        slogan: "Unidos por el Desarrollo Nacional",
        logo: "../img/PARTIDO DEMOCRÁTICO SOMOS PERÚ.png",
        slug: "somos-peru",
        info: {
            foundation: "15 de enero de 1999",
            colors: "Azul, Blanco y Rojo",
            ideology: "Socialcristianismo, Democracia cristiana, Descentralismo",
            leader: "Patricia Li Sotelo",
            representation: "7 congresistas",
            lastResults: "5.7% (2021)",
            headquarters: "Av. Javier Prado Este 461, San Isidro, Lima",
            website: "http://www.somosperu.pe/",
            founder: "Alberto Andrade Carmona",
            position: "Centro",
            affiliation: "Organización Demócrata Cristiana de América"
        },
        description: {
            general: "Somos Perú es un partido político peruano fundado en 1999 por Alberto Andrade Carmona. Se caracteriza por su enfoque municipalista y descentralista, con fuerte presencia en gobiernos locales y regionales.",
            principles: [
                "Descentralización y fortalecimiento local",
                "Democracia participativa y ciudadana",
                "Desarrollo humano integral",
                "Transparencia y honestidad en la gestión",
                "Unidad nacional en la diversidad"
            ],
            history: "El partido surge del movimiento municipalista limeño y se expande a nivel nacional, manteniendo una importante presencia en gobiernos locales y regionales.",
            structure: "Organización descentralizada con autonomía regional, basada en la experiencia de gestión local y gobierno cercano al ciudadano.",
            symbols: "Colores de la bandera peruana (rojo, blanco, azul) representando unidad nacional. Su símbolo incorpora elementos de integración y desarrollo."
        },
        candidates: {
            presidential: [
                { name: "Patricia Li", position: "Presidente" },
                { name: "Juan Carlos Zurek", position: "1ra Vicepresidente" },
                { name: "Marco Parra", position: "2do Vicepresidente" }
            ],
            congress: [
                "Luis Iberico", "José Luna", "Maricarmen Alva",
                "Héctor Valer", "Rosario Paredes", "Roberto Sánchez",
                "Martha Moyano", "Edgar Ochoa", "Silvia Monteza", "Fernando Meléndez"
            ],
            andino: [
                "Rosa León", "Carlos Bruce", "Mirtha Vásquez"
            ]
        },
        governmentPlan: {
            axes: [
                {
                    name: "DESCENTRALIZACIÓN", icon: "🏙️",
                    proposals: [
                        "Fortalecimiento real de gobiernos regionales",
                        "Transferencia de competencias a municipios",
                        "Presupuestos participativos vinculantes",
                        "Desarrollo equilibrado de todas las regiones",
                        "Autonomía fiscal regional responsable",
                        "Planificación del desarrollo regional",
                        "Coordinación intergubernamental eficiente"
                    ]
                },
                {
                    name: "EDUCACIÓN", icon: "🎓",
                    proposals: [
                        "Educación pública de calidad con equidad",
                        "Infraestructura educativa moderna y segura",
                        "Capacitación docente continua",
                        "Educación técnica vinculada al mercado laboral",
                        "Becas para talentos regionales",
                        "Ciencia y tecnología para el desarrollo",
                        "Educación intercultural bilingüe"
                    ]
                },
                {
                    name: "SALUD", icon: "🏥",
                    proposals: [
                        "Sistema de salud universal y gratuito",
                        "Hospitales regionales especializados",
                        "Medicamentos accesibles para todos",
                        "Salud preventiva comunitaria",
                        "Telemedicina en zonas alejadas",
                        "Personal médico bien remunerado",
                        "Investigación en salud pública"
                    ]
                },
                {
                    name: "ECONOMÍA", icon: "💼",
                    proposals: [
                        "Promoción de economías regionales",
                        "Fomento a MIPYMES y emprendedores",
                        "Inversión en infraestructura productiva",
                        "Turismo sostenible como motor económico",
                        "Agroexportación con valor agregado",
                        "Simplificación de trámites empresariales",
                        "Generación de empleo digno"
                    ]
                },
                {
                    name: "SEGURIDAD", icon: "🛡️",
                    proposals: [
                        "Policía nacional fortalecida y moderna",
                        "Seguridad ciudadana con participación vecinal",
                        "Combate integral a la delincuencia",
                        "Sistema penitenciario rehabilitador",
                        "Prevención del delito juvenil",
                        "Inteligencia policial territorial",
                        "Coordinación interinstitucional"
                    ]
                },
                {
                    name: "INFRAESTRUCTURA", icon: "🏗️",
                    proposals: [
                        "Red vial nacional integrada",
                        "Agua y saneamiento para todos",
                        "Conectividad digital nacional",
                        "Vivienda social digna",
                        "Energía eléctrica universal",
                        "Infraestructura deportiva pública",
                        "Espacios públicos de calidad"
                    ]
                },
                {
                    name: "MEDIO AMBIENTE", icon: "🌱",
                    proposals: [
                        "Desarrollo sostenible y conservación",
                        "Manejo integral de residuos",
                        "Protección de áreas naturales",
                        "Energías renovables y limpias",
                        "Agricultura sostenible",
                        "Educación ambiental comunitaria",
                        "Control de la contaminación"
                    ]
                },
                {
                    name: "CULTURA", icon: "🎭",
                    proposals: [
                        "Promoción de la diversidad cultural",
                        "Protección del patrimonio cultural",
                        "Apoyo a artistas y creadores",
                        "Turismo cultural comunitario",
                        "Bibliotecas y museos regionales",
                        "Carnavales y festividades tradicionales",
                        "Cine y artes nacionales"
                    ]
                }
            ]
        },
        history: {
            timeline: [
                { 
                    year: "1999", 
                    event: "Fundación del Partido", 
                    detail: "Creación por Alberto Andrade Carmona",
                    tooltip: "El 15 de enero de 1999, Alberto Andrade funda Somos Perú como una propuesta política basada en la experiencia de gestión municipal exitosa y el desarrollo local.",
                    badge: "Hito Fundacional"
                },
                { 
                    year: "2002", 
                    event: "Expansión Nacional", 
                    detail: "Crecimiento en gobiernos regionales",
                    tooltip: "El partido expande su presencia a nivel nacional, ganando importantes gobiernos regionales y consolidándose como fuerza política descentralista.",
                    badge: "Expansión"
                },
                { 
                    year: "2006", 
                    event: "Participación Presidencial", 
                    detail: "Primera candidatura nacional",
                    tooltip: "Somos Perú participa por primera vez en elecciones presidenciales, demostrando su crecimiento y capacidad de propuesta a nivel nacional.",
                    badge: "Elecciones"
                },
                { 
                    year: "2011", 
                    event: "Alianzas Estratégicas", 
                    detail: "Coaliciones para el desarrollo",
                    tooltip: "El partido establece alianzas estratégicas con otras fuerzas políticas, manteniendo su identidad y principios fundacionales.",
                    badge: "Alianzas"
                },
                { 
                    year: "2021", 
                    event: "Renovación Generacional", 
                    detail: "Nuevos liderazgos y propuestas",
                    tooltip: "Frente a los nuevos desafíos del país, Somos Perú inicia un proceso de renovación generacional manteniendo su esencia municipalista y descentralista.",
                    badge: "Actualidad"
                }
            ],
            results: [
                { 
                    year: "2021", 
                    percentage: "5.7%", 
                    congressmen: 7, 
                    width: "28%",
                    tooltip: "Elecciones generales 2021: Somos Perú obtuvo el 5.7% de los votos válidos, logrando 7 escaños en el Congreso. Mantuvo su presencia parlamentaria."
                },
                { 
                    year: "2016", 
                    percentage: "6.5%", 
                    congressmen: 9, 
                    width: "32%",
                    tooltip: "Elecciones generales 2016: El partido alcanzó el 6.5% de los votos, obteniendo 9 curules parlamentarias. Consolidó su representación nacional."
                },
                { 
                    year: "2011", 
                    percentage: "4.1%", 
                    congressmen: 8, 
                    width: "40%",
                    tooltip: "Elecciones generales 2011: Somos Perú logró el 4.1% de los votos, consiguiendo 8 escaños en el Congreso. Demostró crecimiento sostenido."
                },
                { 
                    year: "2006", 
                    percentage: "4.0%", 
                    congressmen: 5, 
                    width: "25%",
                    tooltip: "Elecciones generales 2006: El partido obtuvo el 4.0% de los votos y 5 congresistas electos. Estableció su presencia parlamentaria inicial."
                }
            ]
        }
    },

    // LUEGO SE CONTINUARÍA CON EL RESTO DE PARTIDOS COMO:
    // Democracia Directa, Frente Amplio, FREPAP, Partido Humanista Peruano, Partido Popular Cristiano
    // Cada uno con la misma cantidad de datos y estructura detallada
};

// =============================================
// LISTA DE PARTIDOS PARA LA PÁGINA PRINCIPAL
// =============================================

const partiesList = [
    { 
        name: "ALIANZA PARA EL PROGRESO", 
        logo: "ALIANZAPARAELPROGRESO.png", 
        slug: "alianza-para-el-progreso" 
    },
    { 
        name: "PARTIDO APRISTA PERUANO", 
        logo: "PARTIDO APRISTA PERUANO.png", 
        slug: "partido-aprista-peruano" 
    },
    { 
        name: "PARTIDO DEMOCRÁTICO SOMOS PERÚ", 
        logo: "PARTIDO DEMOCRÁTICO SOMOS PERÚ.png", 
        slug: "somos-peru" 
    },
    { 
        name: "Democracia Directa", 
        logo: "DemocraciaDirecta.png", 
        slug: "democracia-directa" 
    },
    { 
        name: "EL FRENTE AMPLIO POR JUSTICIA, VIDA Y LIBERTAD", 
        logo: "EL FRENTE AMPLIO POR JUSTICIA, VIDA Y LIBERTAD.png", 
        slug: "frente-amplio" 
    },
    { 
        name: "FRENTE POPULAR AGRÍCOLA FIA DEL PERÚ - FREPAP", 
        logo: "FRENTEPOPULARAGRÍCOLAFIADELPERÚ_FREPAP.png", 
        slug: "frepap" 
    },
    { 
        name: "FUERZA POPULAR", 
        logo: "FUERZA POPULAR.png", 
        slug: "fuerza-popular" 
    },
    { 
        name: "PARTIDO HUMANISTA PERUANO", 
        logo: "PARTIDOHUMANISTAPERUANO.png", 
        slug: "humanista-peruano" 
    },
    { 
        name: "PARTIDO POPULAR CRISTIANO - PPC", 
        logo: "PARTIDO POPULAR CRISTIANO - PPC.png", 
        slug: "partido-popular-cristiano" 
    },
    { 
        name: "ACCIÓN POPULAR", 
        logo: "AcciónPopular.svg.png", 
        slug: "accion-popular" 
    }
];