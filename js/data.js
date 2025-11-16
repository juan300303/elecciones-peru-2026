
// La estructura ha cambiado para coincidir con las 3 pestañas
const candidateData = {
    '1': {
        name: "Keiko Fujimori",
        party: "Fuerza Popular",
        imgUrl: "../img/candidatos/keiko.png",
        planUrl: "https://apisije-e.jne.gob.pe/TRAMITE/ESCRITO/1095/ARCHIVO/FIRMADO/3017.PDF",
        jneUrl: "https://portal.jne.gob.pe/portal/Pagina/Ver/979/page/Elecciones-Generales-2026",
        bio: "Keiko Fujimori es una política peruana y lideresa de Fuerza Popular. Estudió Administración de Empresas en la Universidad de Boston y obtuvo un MBA en Columbia University. Fue Primera Dama del Perú en la década de 1990 y luego congresista entre 2006 y 2011, siendo la más votada de su elección. Ha sido candidata presidencial en tres ocasiones y continúa siendo una figura central en la política peruana.",
        // Pestaña 1: Array de propuestas
        propuestas: [
            { title: 'Educación', text: 'Impulsar la educación técnico-productiva y tecnológica (institutos, CETPROs) para que sea pertinente y se adecúe a las necesidades territoriales.' },
            { title: 'Salud', text: 'Transformar el SIS (Seguro Integral de Salud) para articularlo con EsSalud, bajo un sistema más integrado' },
            { title: 'Seguridad Ciudadana', text: 'Reorganizar el INPE (Instituto Nacional Penitenciario) y proponer medidas como libertad vigilada para reos no peligrosos.' },
            { title: 'Economía y Empleo', text: 'Reformar el sistema tributario para incentivar la formalización de las MYPEs (micro y pequeñas empresas), por ejemplo con exoneraciones tributarias.' },
            { title: 'Lucha contra la Corrupción', text: 'Promover transparencia en los contratos estatales, incluso con esquemas “Gobierno a Gobierno” para reducir la corrupción.' },
            { title: 'Infraestructura y Transporte', text: 'Agilizar y estandarizar los procesos para diseñar y ejecutar proyectos de inversión pública en infraestructura educativa (colegios) y otros espacios públicos.' },
            { title: 'Desarrollo Social y Pobreza', text: 'Revisar los programas sociales para que tengan un enfoque productivo, de modo que no solo asistan, sino que permitan a las personas generar ingresos (“inclusión social productiva”).' }
        ],
        // Pestaña 2: Array de formación
        formacion: [
            { title: 'Bachelor of Science en Administración de Empresas', text: 'Boston University, EE.UU. (1997).' },
            { title: 'Máster en Administración de Empresas (MBA)', text: 'Columbia Business School, Nueva York (2004-2008).' },
            { title: 'Diplomado en Parlamento, Democracia y Gobernabilidad', text: 'George Washington University, Washington D.C., EE.UU.' },
            { title: 'Liderazgo y resiliencia (curso)', text: '“El Camino de Keiko”, programa de formación política de la Escuela Naranja.' },
            { title: 'Diplomacia política (curso)', text: '“Diplomacia Presidencial”, programa de formación de la Escuela Naranja.' },
            { title: 'Formación política para candidatos', text: 'Programa “K-ndidatos” de la Escuela Naranja (capacitaciones para futuros representantes).' }
        ],

        experiencia: [
            { title: 'Primera Dama de la Nación', text: '1994 – 2000. Asumió el rol después del divorcio de sus padres con tan solo 19 años.' },
            { title: 'Presidenta de Fundación por los Niños del Perú', text: 'Durante su etapa como primera dama, dirigió la fundación para apoyar a menores en situación de abandono.' },
            { title: 'Fundadora y Presidenta de la Fundación Cardio Infantil', text: 'Creó esta institución para operar niños con cardiopatías congénitas. ' },
            { title: 'Congresista de la República', text: '2006 – 2011. Fue la congresista más votada en la elección, representando Lima. ' },
            { title: 'Lideresa de Fuerza Popular (Partido Político)', text: 'Desde 2010 dirige Fuerza Popular, el partido fujimorista.' },
            { title: 'Candidata Presidencial', text: 'Participó en las elecciones presidenciales de 2011, 2016, 2021 y anunció su candidatura para 2026.' }
        ]

    },



    '2': {
        name: "Hernando de Soto",
        party: "Avanza País",
        imgUrl: "../img/candidatos/hernando.png",
        planUrl: "https://apisije-e.jne.gob.pe/TRAMITE/ESCRITO/1983/ARCHIVO/FIRMADO/8336.PDF",
        jneUrl: "https://portal.jne.gob.pe/portal/Pagina/Ver/979/page/Elecciones-Generales-2026",
        bio: "Hernando de Soto es un economista peruano reconocido mundialmente por sus aportes sobre la economía informal y la propiedad. Estudió en Ginebra y preside el Instituto Libertad y Democracia. Ha asesorado a gobiernos y organismos internacionales, y es autor de libros influyentes como El Otro Sendero y El Misterio del Capital.",
        propuestas: [
            {
                title: 'Educación',
                text: 'Promover acceso al crédito para estudiantes y emprendedores mediante la titulación de activos, de modo que los mismos puedan usar sus propiedades como garantía para financiarse.'
            },
            {
                title: 'Salud',
                text: 'Modernizar la gestión sanitaria con una visión de mercado, permitiendo alianzas público-privadas y uso eficiente de los activos formales para atraer inversión en salud.'
            },
            {
                title: 'Seguridad Ciudadana',
                text: 'Fomentar “seguridad jurídica” garantizando que la propiedad formal esté reconocida legalmente, lo que reduciría la informalidad que contribuye a la inseguridad.'
            },
            {
                title: 'Economía y Empleo',
                text: 'Formalizar la economía: titular predios informales, reconocer el “capital muerto” para que sea usado como colateral y así impulsar el crédito y la inversión.'
            },
            {
                title: 'Lucha contra la Corrupción',
                text: 'Reforzar instituciones legales y propiedad privada, para que el Estado no dependa de regímenes informales ni del soborno para regular los activos económicos.'
            },
            {
                title: 'Infraestructura y Transporte',
                text: 'Crear un fondo soberano de riqueza que capitalice activos no líquidos (tierras, edificios, concesiones) para financiar proyectos de infraestructura.'
            },
            {
                title: 'Desarrollo Social y Pobreza',
                text: 'Reducir la desigualdad otorgando documentación formal (títulos) a los pobres, integrándolos al sistema económico y permitiendo que accedan a crédito para emprender.'
            }
        ],

        formacion: [
            {
                title: 'Postgrado en Economía',
                text: 'Instituto Universitario de Altos Estudios Internacionales, Ginebra, Suiza.'

            },
            {
                title: 'Bachelor en Ciencias Sociales',
                text: 'Universidad de Ginebra, Suiza.'

            },
            {
                title: 'Formación en Derecho Internacional y Economía',
                text: 'Máster en Derecho Internacional y Economía por el Instituto Universitario de Altos Estudios Internacionales (IUHEI), Ginebra.'

            }
        ],

        experiencia: [
            {
                title: 'Presidente del Instituto Libertad y Democracia (ILD)',
                text: 'Desde 1980. Fundó el ILD, organización que promueve la formalización de la propiedad para el desarrollo económico.'

            },
            {
                title: 'Asesor Económico Internacional',
                text: 'Ha asesorado a gobiernos de varios países sobre formalización, institucionalidad y desarrollo económico.'

            },
            {
                title: 'Consultor en GATT / OCDE',
                text: 'Trabajó en el Acuerdo General de Aranceles y Comercio (GATT) y ha sido consultor en temas de libre comercio y derechos de propiedad.'

            },
            {
                title: 'Autor y Pensador Económico',
                text: 'Escribió obras como “El Otro Sendero” y “El Misterio del Capital”, influyendo en debates sobre economía informal y derechos de propiedad.'

            }
        ],
        // --- AÑADE ESTA NUEVA SECCIÓN ---
        antecedentes: [
            {
                title: 'Caso Cócteles (Investigación)',
                text: 'Investigación por presunto lavado de activos en el financiamiento de sus campañas de 2011 y 2016. El caso se encuentra en etapa de juicio oral.',
                source: 'Fuente: Equipo Especial Lava Jato, Ministerio Público.' // ¡La fuente es clave!
            },
            {
                title: 'Obstrucción a la Justicia (Investigación)',
                text: 'Se le investiga por presunta obstrucción a la justicia relacionada con el caso anterior.',
                source: 'Fuente: Poder Judicial.'
            }
        ]
    },
    '3': {
        name: "Rafael López Aliaga",
        party: "Renovación Popular",
        imgUrl: "../img/candidatos/rafael.png",
        planUrl: "https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16482.pdf",
        jneUrl: "https://portal.jne.gob.pe/portal/Pagina/Ver/979/page/Elecciones-Generales-2026",
        bio: "Rafael López Aliaga es un empresario y político peruano, líder del partido Renovación Popular. Es ingeniero industrial por la Universidad de Piura y cuenta con formación en alta dirección. Ha sido regidor de Lima y dirige un conglomerado de empresas en los sectores hotelero y ferroviario. Se le reconoce por su discurso conservador y enfoque económico empresarial.",
        propuestas: [
            {
                title: 'Educación',
                text: 'Impulsar un sistema educativo con mayor participación del sector privado y municipal, fomentando colegios de alto rendimiento y reforzando la educación técnica desde secundaria.'
            },
            {
                title: 'Salud',
                text: 'Promover un sistema de salud descentralizado y autosostenible, priorizando la modernización de hospitales y ampliación de servicios básicos en zonas vulnerables.'
            },
            {
                title: 'Seguridad Ciudadana',
                text: 'Implementar tecnología de vigilancia a gran escala (cámaras, drones, software de reconocimiento) y crear patrullaje integrado entre serenazgo y PNP para reducir la delincuencia.'
            },
            {
                title: 'Economía y Empleo',
                text: 'Fomentar la inversión privada, atraer capital extranjero, reducir trabas burocráticas y simplificar impuestos para impulsar la formalización y generar empleo masivo.'
            },
            {
                title: 'Lucha contra la Corrupción',
                text: 'Aplicar control extremo del gasto público, eliminar contratos innecesarios y establecer auditorías permanentes para evitar el uso indebido de fondos estatales.'
            },
            {
                title: 'Infraestructura y Transporte',
                text: 'Promover megaproyectos nacionales: tren de la costa, trenes urbanos y carreteras modernas, priorizando APP y modelos de ejecución rápida.'
            },
            {
                title: 'Desarrollo Social y Pobreza',
                text: 'Impulsar programas productivos que conecten a familias vulnerables con empleo formal y oportunidades económicas, evitando la dependencia asistencial.'
            }
        ],
        formacion: [
            {
                title: 'Ingeniería Industrial',
                text: 'Universidad de Piura, Perú. Se tituló en 1995. '
            },
            {
                title: 'Máster en Administración de Empresas (MBA)',
                text: 'Universidad del Pacífico, Perú. '

            },
            {
                title: 'Programa de Alta Dirección (PAD)',
                text: 'Programa PAD en la Universidad de Piura. '

            }
        ],
        experiencia: [
            {
                title: 'Alcalde de Lima Metropolitana',
                text: '2023 – 2025. Fue elegido alcalde de Lima bajo el partido Renovación Popular. '

            },
            {
                title: 'Regidor de la Municipalidad de Lima',
                text: '2007 – 2010. Desempeñó funciones de regidor en la municipalidad capitalina. '

            },
            {
                title: 'Empresario de Transporte Ferroviario',
                text: 'Co-fundador y accionista de Peruval Corp y Ferrocarril Transandino / PeruRail. '

            },
            {
                title: 'Empresario Turístico / Hotelero',
                text: 'Presidente de Perú Holding de Turismo; tiene participación en hoteles mediante su grupo empresarial. '

            },
            {
                title: 'Denunciante por Competencia Ferroviaria',
                text: 'Denunció a 17 funcionarios por reformas que abrieron el mercado ferroviario, argumentando competencia desleal en sus empresas ferroviarias. '

            },
            {
                title: 'Líder Político / Presidente de Renovación Popular',
                text: 'Fundador y líder del partido Renovación Popular. '

            }
        ],
        antecedentes: [
            {
                title: 'Investigación Preliminar (Lavado de Activos)',
                text: 'Investigado preliminarmente por presunto lavado de activos vinculado a los "Panamá Papers". El candidato ha negado las acusaciones.',
                source: 'Fuente: Ministerio Público / Reportajes de investigación.'
            }
        ]
    },
    '4': {
        name: "Antauro Humala",
        party: "A.N.T.A.U.R.O",
        imgUrl: "../img/candidatos/antauro.png",
        planUrl: "https://epicentro.tv/los-planes-de-antauro-humala/",
        jneUrl: "https://portal.jne.gob.pe/portal/Pagina/Ver/979/page/Elecciones-Generales-2026",
        bio: "Antauro Humala es un militar en retiro y líder del movimiento etnocacerista en el Perú. Formado en la Escuela Militar de Chorrillos, participó en la lucha antisubversiva y en el conflicto del Cenepa. Es conocido por liderar las insurrecciones de Locumba y el Andahuaylazo, por las que fue condenado y posteriormente liberado. Tras su salida de prisión, retomó su actividad política con una propuesta nacionalista radical.",
        propuestas: [
            {
                title: 'Educación',
                text: 'Impulsar una educación nacionalista-etnocacerista que fortalezca la identidad ancestral y la cultura indígena, promoviendo valores “cobrizos” y una visión alternativa al modelo occidental.'
            },
            {
                title: 'Salud',
                text: 'Establecer un sistema de salud pública comunitaria con énfasis en la autosuficiencia regional y la participación de las comunidades rurales en la gestión sanitaria.'
            },
            {
                title: 'Seguridad Ciudadana',
                text: 'Restablecer la disciplina militar y el honor nacional con un cuerpo de reservistas organizados, patriotas “etnocáceres”, para reforzar la seguridad local y la soberanía.'
            },
            {
                title: 'Economía y Empleo',
                text: 'Promover la nacionalización de sectores estratégicos (minería, hidrocarburos) para que los recursos “cobrizos” del Perú beneficien directamente al pueblo y se financien programas de empleo local.'
            },
            {
                title: 'Lucha contra la Corrupción',
                text: 'Aplicar mano dura contra la corrupción, con sanciones militares y civiles para funcionarios corruptos, restableciendo una moral de servicio público basada en el “honor etnocacerista”.'
            },
            {
                title: 'Infraestructura y Transporte',
                text: 'Construir infraestructura estratégica nacional (carreteras, proyectos de integración regional) bajo control nacionalista, priorizando las zonas rurales y andinas.'
            },
            {
                title: 'Desarrollo Social y Pobreza',
                text: 'Refundar el Estado para reconstruir una “República cobriza”: un nuevo orden social donde los más pobres participen activamente en la economía nacional y no dependan solo de la asistencia.'
            }
        ],

        formacion: [
            {
                title: 'Formación Militar',
                text: 'Escuela Militar de Chorrillos, Perú. Se graduó como subteniente de infantería. '

            },
            {
                title: 'Estudios en Ingeniería Agrónoma',
                text: 'Universidad Nacional Agraria La Molina, Perú. '

            }

        ],

        experiencia: [
            {
                title: 'Militar (en retiro)',
                text: 'Sirvió en el Ejército del Perú, participó en la lucha antisubversiva y en la Guerra del Cenepa; fue ascendido a Mayor. '

            },
            {
                title: 'Líder Etnocacerista',
                text: 'Fundador de la Logia Etnocacerista, un movimiento nacionalista-militar con ideología indigenista. '

            },
            {
                title: 'Insurgente en Locumba',
                text: 'En 2000, lideró una sublevación junto a su hermano Ollanta Humala (el “Locumbazo”) para denunciar la corrupción del régimen de Fujimori. '

            },
            {
                title: 'Líder del Andahuaylazo',
                text: 'En 2005 comandó un levantamiento armado en Andahuaylas (Apurímac), exigiendo la restitución de la Constitución de 1979 y cambios estructurales. '

            },
            {
                title: 'Preso Político / Penitenciado',
                text: 'Fue condenado por los delitos derivados del Andahuaylazo; cumplió parte de su condena y fue liberado por redención de pena. '

            },
            {
                title: 'Organizador Político',
                text: 'Organiza políticamente a los reservistas y seguidores etnocaceristas tras su liberación para impulsar su proyecto nacionalista. '

            }
        ]
    }
    // ... (Agrega aquí los datos para el ID '5', '6', etc.)
};
