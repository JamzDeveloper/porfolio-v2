export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  audience: string;
  duration: string;
  badge: string;
}

export interface ArchitectureCase {
  id: string;
  title: string;
  client: string;
  role: string;
  period: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlight: boolean;
}

export interface CareerItem {
  company: string;
  clientOrContext?: string;
  clientName?: string;
  isConsultingAssignment?: boolean;
  engagementType: "Consultoría (Asignado a Cliente)" | "Contratación Directa" | "Startup Propia" | "Docencia";
  role: string;
  type: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  skills: string[];
}

export interface TeachingItem {
  institution: string;
  role: string;
  period: string;
  highlight: string;
  courses: string[];
  impact: string;
}

export interface ClientProject {
  id: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  role: string;
  year: string;
  badge: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ArchitectureBlueprint {
  id: string;
  title: string;
  topic: string;
  tagline: string;
  diagramImage: string;
  problemStatement: string;
  architectureHighlights: string[];
  components: { name: string; role: string }[];
  tradeoffs: string;
}

export interface SpeakerEvent {
  id: string;
  title: string;
  eventName: string;
  type: "Keynote" | "Conferencia" | "Taller Magistral" | "Reconocimiento";
  date: string;
  location: string;
  audience: string;
  description: string;
  image: string;
  badge: string;
  slidesUrl?: string;
  repoUrl?: string;
  recordingUrl?: string;
  materialsNote?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "José Montenegro Zelada",
    handle: "jamzdeveloper",
    title: "Senior Backend Engineer & Tech Lead",
    subtitle: "Cloud Architect | AI Distributed Systems | Instructor",
    bio: "Especialista en sistemas distribuidos de alta concurrencia, arquitecturas orientadas a eventos e ingeniería de Agentes de IA en tiempo real. Con experiencia directa diseñando y operando plataformas críticas para Yape, Bancolombia y KasNet, y formando a más de 1,500 ingenieros de software.",
    location: "Trujillo, Perú · Remoto para LatAm & Global",
    availableForHire: true,
    availabilityStatus: "Disponible para Asesorías Técnicas & Consultoría de Arquitectura",
    calendlyUrl: "https://calendly.com/jamzdeveloper", // customizable
    linkedinUrl: "https://www.linkedin.com/in/jamzdeveloper",
    githubUrl: "https://github.com/jamzdeveloper",
    email: "jamzdeveloper@gmail.com",
    cvPdfUrl: "/cv-jose-montenegro.pdf",
    metrics: [
      { value: "+6 Años", label: "Arquitectura & Backend" },
      { value: "+15M", label: "Usuarios en Sistemas Operados" },
      { value: "+1,500", label: "Desarrolladores Formados" },
      { value: "Top 1%", label: "Docente Destacado Idat" }
    ]
  },

  trustLogos: [
    { name: "Yape", category: "Superapp Fintech (vía Arkano)" },
    { name: "Bancolombia", category: "Banca Internacional (vía PRAGMA)" },
    { name: "KasNet", category: "Red de Pagos (vía QDS)" },
    { name: "NuriPoint", category: "Outdoor Tech Startup (Cofundador)" },
    { name: "Idat", category: "Educación Superior (Docente)" },
    { name: "Arkano", category: "Software Consulting" },
    { name: "PRAGMA", category: "Cloud & Enterprise" },
    { name: "QDS", category: "Quality & Dev Software" },
    { name: "Digenio", category: "Software House (Directo)" }
  ],

  services: [
    {
      id: "architecture-audit",
      title: "Auditoría de Arquitectura & Rescate de Sistemas",
      tagline: "Desbloquea el cuello de botella de tu backend y escala sin fricciones",
      description: "Analizo a fondo la base de código, los patrones de diseño y la infraestructura para identificar cuellos de botella de latencia, acoplamientos dañinos y problemas de concurrencia. Diseñado para startups y fintechs que necesitan dar el salto de prototipo a producción masiva.",
      deliverables: [
        "Diagnóstico técnico integral de cuellos de botella y deuda técnica",
        "Plan de transición de Monolito a Microservicios / Modular Monolith",
        "Diseño de modelos de dominio desacoplados (Hexagonal + DDD)",
        "Blueprint de escalabilidad y resiliencia para bases de datos"
      ],
      audience: "CTOs, VPs of Engineering, Equipos en crecimiento",
      duration: "Diagnóstico inicial de 1-2 semanas",
      badge: "Empresarial"
    },
    {
      id: "ai-agents",
      title: "Arquitectura de Agentes de IA en Tiempo Real",
      tagline: "Lleva agentes autónomos reales con baja latencia y streaming a producción",
      description: "Construyo arquitecturas avanzadas de agentes inspiradas en los pipelines de ElevenLabs y Suno: orquestación de voz en tiempo real, gestión de contexto con Redis, tool calling dinámico y bases de datos vectoriales. Nada de chatbots genéricos: agentes con impacto transaccional directo.",
      deliverables: [
        "Pipeline de streaming de audio y texto de ultra baja latencia",
        "Orquestación de Multi-Tenancy y control de estado conversacional",
        "Integración de Tool Calling con APIs bancarias / servicios existentes",
        "Evaluación de costo por token, latencia y observabilidad de LLMs"
      ],
      audience: "Fintechs, Plataformas SaaS, Startups de IA",
      duration: "Proyectos de 2 a 6 semanas",
      badge: "Alta Especialización"
    },
    {
      id: "cloud-serverless",
      title: "Modernización Cloud & AWS Serverless",
      tagline: "Reduce costos operativos y escala a cero con arquitecturas event-driven",
      description: "Diseño e implemento soluciones serverless sobre AWS utilizando Step Functions, EventBridge, Lambda y DynamoDB, acompañadas de Infraestructura como Código (Pulumi / Terraform) para despliegues reproducibles y seguros.",
      deliverables: [
        "Migración de cargas de trabajo heredadas a AWS Serverless",
        "Orquestación de flujos de negocio complejos con Step Functions",
        "Implementación de arquitecturas orientadas a eventos (Kafka / SQS / EventBridge)",
        "Estrategia de caching y optimización de latencia p99"
      ],
      audience: "Equipos que buscan optimizar costos e infraestructura cloud",
      duration: "Consultoría por hitos o sprints",
      badge: "Cloud Certified"
    },
    {
      id: "mentorship",
      title: "Mentoría 1-a-1 & Capacitación a Equipos Backend",
      tagline: "El camino directo de Junior/Mid a Senior & Tech Lead de alto rendimiento",
      description: "Sesiones privadas enfocadas en dominar NestJS avanzado, Arquitectura Hexagonal, Clean Code, pruebas automatizadas (TDD) y preparación para entrevistas técnicas rigurosas en empresas multinacionales.",
      deliverables: [
        "Revisión de código en vivo (Live Code Review) y refactorización guiada",
        "Diseño de sistemas distribuidos y ejercicios de System Design",
        "Estrategias de liderazgo técnico y toma de decisiones arquitectónicas",
        "Acceso a plantillas y arquitecturas de referencia listas para usar"
      ],
      audience: "Desarrolladores backend, aspirantes a Tech Lead",
      duration: "Sesiones de 60 min o programas mensuales",
      badge: "1-a-1 Directo"
    }
  ],

  caseStudies: [
    {
      id: "agentecore",
      title: "AgenteCore: Motor Distribuido de Agentes de IA en Tiempo Real",
      client: "NuriPoint & Plataformas de Telemetría",
      role: "Lead AI & Backend Architect",
      period: "2025 - Presente",
      summary: "Motor de orquestación de agentes inteligentes multi-tenant con baja latencia, capacidad de streaming de audio/voz bidireccional y ejecución de herramientas en tiempo real para asistencia en exteriores.",
      challenge: "Lograr una respuesta en tiempo real (<800ms total) integrando reconocimiento de voz, razonamiento contextual con memoria episódica en Redis, consulta de mapas topográficos offline y síntesis neuronal.",
      solution: "Pipeline asíncrono con NestJS 11 y Redis Streams. Implementación de orquestador de herramientas desacoplado que evalúa llamadas a APIs de clima, rescate y telemetría antes de sintetizar voz en chunks de streaming.",
      technologies: ["NestJS", "Google Gemini API", "OpenAI", "Redis Streams", "Qdrant Vector DB", "PostgreSQL", "WebRTC / Audio Streaming"],
      metrics: [
        { label: "Latencia de Respuesta", value: "<750ms" },
        { label: "Modo Offline-First", value: "Sincronizado" },
        { label: "Arquitectura", value: "Multi-Tenant" }
      ],
      highlight: true
    },
    {
      id: "yape",
      title: "Sistemas Distribuidos de Alta Escala en Yape",
      client: "Yape (vía Arkano)",
      role: "Senior Backend Engineer",
      period: "2026 - Presente",
      summary: "Diseño e implementación de microservicios críticos para el ecosistema transaccional de la superapp financiera líder de Perú con más de 15 millones de usuarios activos.",
      challenge: "Mantener tolerancia a fallos extrema y latencias sub-segundo en picos de alta concurrencia transaccional a escala nacional.",
      solution: "Arquitectura hexagonal de alto aislamiento, procesamiento desacoplado y observabilidad de punta a punta garantizando resiliencia y cero pérdidas de transacciones.",
      technologies: ["Node.js", "TypeScript", "AWS Cloud", "Distributed Caching", "Microservicios", "Observabilidad"],
      metrics: [
        { label: "Usuarios Activos", value: "+15M" },
        { label: "Disponibilidad", value: "99.99%" },
        { label: "Concurrencia", value: "Crítica" }
      ],
      highlight: true
    },
    {
      id: "bancolombia",
      title: "Modernización Serverless del Core Bancario Bancolombia Guatemala",
      client: "Bancolombia Guatemala (vía Pragma)",
      role: "Cloud Software Engineer",
      period: "2024 - 2025",
      summary: "Transición de componentes bancarios monolíticos hacia arquitectura Serverless en AWS utilizando Arquitectura Hexagonal y orquestación de eventos.",
      challenge: "Garantizar idoneidad transaccional bancaria, cumplimiento de seguridad estricto y desacoplamiento de dependencias externas sin interrupción de servicios.",
      solution: "Adopción de AWS Step Functions para máquinas de estados bancarias complejas, EventBridge para comunicación asíncrona, TDD con Jest al 95%+ de cobertura y análisis continuo con SonarQube.",
      technologies: ["AWS Lambda", "Step Functions", "EventBridge", "Hexagonal Architecture", "TypeScript", "SonarQube", "Azure DevOps"],
      metrics: [
        { label: "Cobertura de Pruebas", value: ">92%" },
        { label: "Arquitectura", value: "100% Serverless" },
        { label: "Seguridad", value: "Aprobada por Auditoría" }
      ],
      highlight: true
    },
    {
      id: "kasnet",
      title: "Plataforma de Microservicios Financieros KasNet",
      client: "KasNet (vía QDS)",
      role: "Software Engineer & Tech Interviewer",
      period: "2025 - 2026",
      summary: "Construcción de microservicios de pagos y corresponsalía bancaria con patrón CQRS y comunicación de eventos mediante Apache Kafka.",
      challenge: "Garantizar sincronización eventual precisa entre fuentes de lectura optimizadas y fuentes de escritura transaccionales en una red de miles de agentes físicos.",
      solution: "Implementación de CQRS separando comandos (DynamoDB) de consultas analíticas (PostgreSQL), con Apache Kafka como bus de eventos e infraestructura gestionada mediante Pulumi.",
      technologies: ["Apache Kafka", "CQRS", "Pulumi (IaC)", "DynamoDB", "PostgreSQL", "NestJS", "Docker"],
      metrics: [
        { label: "Event Bus", value: "Apache Kafka" },
        { label: "IaC", value: "Pulumi" },
        { label: "Patrón", value: "CQRS" }
      ],
      highlight: false
    }
  ],

  careerTimeline: [
    {
      company: "NuriPoint",
      clientOrContext: "Startup Tech Propia (Directo)",
      clientName: "NuriPoint",
      isConsultingAssignment: false,
      engagementType: "Startup Propia",
      role: "Cofundador & Lead Software Architect",
      type: "Jornada completa · En remoto",
      location: "Perú · En remoto",
      period: "Ago. 2026 - Presente",
      current: true,
      bullets: [
        "Cofundador y responsable de la arquitectura de software integral de la plataforma de inteligencia y telemetría outdoor.",
        "Diseño e implementación de AgenteCore: motor de agentes de IA con telemetría de voz y asistencia en senderos sin conexión (offline-first).",
        "Dirección de la estrategia tecnológica, infraestructura cloud y roadmap técnico del producto."
      ],
      skills: ["Arquitectura de Software", "Liderazgo de Startup", "Agentes de IA", "NestJS", "Google Gemini", "Redis", "Qdrant", "Offline-First"]
    },
    {
      company: "Arkano",
      clientOrContext: "Cliente Asignado: Yape (BCP)",
      clientName: "Yape",
      isConsultingAssignment: true,
      engagementType: "Consultoría (Asignado a Cliente)",
      role: "Software Engineer",
      type: "Jornada completa · En remoto",
      location: "Perú · En remoto",
      period: "Abr. 2026 - Presente",
      current: true,
      bullets: [
        "Asignado al equipo de ingeniería de Yape, la superapp financiera y billetera digital líder del Perú con más de 15 millones de usuarios activos.",
        "Diseño, desarrollo y optimización de microservicios backend de alta criticidad, baja latencia y concurrencia masiva.",
        "Implementación de patrones de resiliencia, tolerancia a fallos y observabilidad distribuida para garantizar SLAs de máxima disponibilidad y respuesta en milisegundos."
      ],
      skills: ["Node.js", "TypeScript", "AWS", "Microservicios", "High Concurrency", "Fintech", "Distributed Systems"]
    },
    {
      company: "Idat",
      clientOrContext: "Educación Superior Tecnológica (Directo)",
      clientName: "Idat",
      isConsultingAssignment: false,
      engagementType: "Docencia",
      role: "Profesor a tiempo parcial",
      type: "Contrato temporal · Tiempo parcial",
      location: "Chiclayo / Lima, Perú · En remoto",
      period: "May. 2023 - Presente (3 años 5 meses)",
      current: true,
      bullets: [
        "Instructor especializado en Backend y Bases de Datos (SQL Server, PostgreSQL, NoSQL), dictando cursos para el desarrollo de habilidades de nivel profesional.",
        "Mentoría y guía a estudiantes y profesionales a través de lecciones teórico-prácticas y proyectos reales de arquitectura de software.",
        "Reconocido como docente destacado por altos estándares pedagógicos, satisfacción estudiantil y efectividad en la inserción laboral de egresados."
      ],
      skills: ["SQL Server", "PostgreSQL", "NoSQL", "NestJS", "Node.js", "Clean Architecture", "Mentoring"]
    },
    {
      company: "QDS - Quality & Development Software SAC",
      clientOrContext: "Cliente Asignado: KasNet",
      clientName: "KasNet",
      isConsultingAssignment: true,
      engagementType: "Consultoría (Asignado a Cliente)",
      role: "Ingeniero de Software & Evaluador Técnico",
      type: "Jornada completa · En remoto",
      location: "Lima, Perú · En remoto",
      period: "Ago. 2025 - Abr. 2026 (9 meses)",
      current: false,
      bullets: [
        "Formé parte del equipo backend asignado al proyecto de KasNet (la red de agentes corresponsales multired más grande de Perú), participando en el diseño, desarrollo y modernización de una plataforma basada en microservicios sobre AWS.",
        "Desarrollo de servicios backend desacoplados, implementación de APIs orientadas al dominio (DDD), diseño bajo el patrón CQRS e implementación de arquitecturas event-driven con Apache Kafka.",
        "Migración de servicios legacy hacia arquitecturas cloud, resolución de incidentes críticos en producción, refactorización de componentes críticos y toma de decisiones de arquitectura.",
        "Participación activa en entrevistas técnicas y evaluación de desarrolladores para la incorporación de nuevos integrantes al equipo de ingeniería."
      ],
      skills: ["Node.js", "TypeScript", "AWS", "Apache Kafka", "PostgreSQL", "DynamoDB", "Microservicios", "CQRS", "Pulumi", "AWS Lambda"]
    },
    {
      company: "PRAGMA",
      clientOrContext: "Cliente Asignado: Bancolombia Guatemala",
      clientName: "Bancolombia",
      isConsultingAssignment: true,
      engagementType: "Consultoría (Asignado a Cliente)",
      role: "Software Engineer",
      type: "Jornada completa · En remoto",
      location: "Medellín, Colombia / Remoto",
      period: "Jun. 2024 - Jul. 2025 (1 año 2 meses)",
      current: false,
      bullets: [
        "Formé parte del equipo de desarrollo cloud de PRAGMA asignado a Bancolombia Guatemala, enfocado en modernización de plataformas y adopción de arquitecturas cloud-native sobre AWS.",
        "Migración de servicios críticos desde infraestructura on-premise hacia AWS utilizando arquitecturas serverless.",
        "Desarrollo de microservicios desacoplados aplicando Arquitectura Hexagonal con Node.js y TypeScript.",
        "Diseño e implementación de flujos de negocio con AWS Step Functions y orquestación de eventos mediante Amazon EventBridge.",
        "Automatización de despliegues CI/CD con Azure DevOps y Serverless Framework; observabilidad con Amazon CloudWatch, gestión de secretos en AWS Secrets Manager y administración de accesos IAM.",
        "Aplicación de buenas prácticas de ingeniería, incluyendo TDD, análisis estático con SonarQube y documentación de contratos de APIs con Stoplight."
      ],
      skills: ["Node.js", "TypeScript", "AWS Lambda", "AWS Step Functions", "Amazon EventBridge", "Arquitectura Hexagonal", "Azure DevOps", "Serverless Framework", "SonarQube", "PostgreSQL", "Amazon S3", "TDD"]
    },
    {
      company: "Digenio",
      clientOrContext: "Consultoría de Software (Directo)",
      clientName: "Digenio",
      isConsultingAssignment: false,
      engagementType: "Contratación Directa",
      role: "Consultor de Software",
      type: "Profesional independiente · En remoto",
      location: "Trujillo, Perú · En remoto",
      period: "Jun. 2024 - Ene. 2025 (8 meses)",
      current: false,
      bullets: [
        "Tras finalizar mi etapa full-time en Digenio, continué brindando soporte y consultoría como profesional independiente, asegurando la estabilidad y evolución continua de las plataformas desarrolladas.",
        "Mantenimiento y optimización de APIs y bases de datos NoSQL para garantizar escalabilidad y alto rendimiento transaccional.",
        "Resolución de incidencias críticas en producción, soporte técnico especializado e implementación de mejoras de infraestructura.",
        "Asesoramiento técnico de arquitectura y documentación para facilitar la transición y futuras integraciones."
      ],
      skills: ["Apollo GraphQL", "Amazon S3", "NoSQL", "Node.js", "Performance Tuning", "Software Consulting"]
    },
    {
      company: "Tec Gurus",
      clientOrContext: "Educación Tecnológica Internacional (México · Directo)",
      clientName: "Tec Gurus",
      isConsultingAssignment: false,
      engagementType: "Docencia",
      role: "Profesor a tiempo parcial",
      type: "Jornada parcial · En remoto",
      location: "México · En remoto",
      period: "Dic. 2023 - Jun. 2024 (7 meses)",
      current: false,
      bullets: [
        "Instructor especializado en JavaScript, capacitando a estudiantes de diversos países desde fundamentos algorítmicos hasta programación avanzada.",
        "Enseñanza de principios esenciales de programación, asincronía, event loop y desarrollo web moderno con un enfoque eminentemente práctico."
      ],
      skills: ["JavaScript (ES6+)", "Async Programming", "Algorithms", "Web Development", "Teaching"]
    },
    {
      company: "Digenio",
      clientOrContext: "Plataformas Web & E-Commerce (Directo)",
      clientName: "Digenio",
      isConsultingAssignment: false,
      engagementType: "Contratación Directa",
      role: "Back End Developer",
      type: "Jornada completa",
      location: "Trujillo, La Libertad, Perú",
      period: "Feb. 2022 - Jun. 2024 (2 años 5 meses)",
      current: false,
      bullets: [
        "Diseño e implementación de bases de datos NoSQL y APIs escalables para un directorio de ventas comercial, optimizando búsquedas y gestión de información.",
        "Desarrollo de soluciones de almacenamiento y APIs seguras para la gestión eficiente de documentos e investigaciones.",
        "Construcción de aplicación de reservas, pedidos y ventas para restaurantes, integrando bases de datos NoSQL y APIs transaccionales para optimizar la operación del negocio.",
        "Liderazgo en el desarrollo de plataforma de venta de cursos online: arquitectura de base de datos NoSQL, pasarelas de pago y gestión de contenido.",
        "Desarrollo de APIs avanzadas para red social con protección de datos, almacenamiento temporal, notificaciones en tiempo real, chat en vivo y geolocalización con datos espaciales.",
        "Implementación de paneles administrativos a medida para cada API, revisiones de código (code reviews) y promoción activa de buenas prácticas de desarrollo."
      ],
      skills: ["Apollo GraphQL", "Node.js", "TypeScript", "NoSQL", "MongoDB", "WebSockets", "Geospatial Data", "REST APIs", "Bitbucket"]
    },
    {
      company: "Coini",
      clientOrContext: "Fintech & Criptoactivos (Directo)",
      clientName: "Coini",
      isConsultingAssignment: false,
      engagementType: "Contratación Directa",
      role: "Full-stack Developer",
      type: "Jornada completa · En remoto",
      location: "Perú · En remoto",
      period: "Nov. 2022 - Jun. 2023 (8 meses)",
      current: false,
      bullets: [
        "Remodelamiento y optimización de bases de datos relacionales para transacciones seguras.",
        "Mejora y securización de API REST en NestJS y TypeORM con autenticación JWT, gestión de roles de usuario y autorización por API Key.",
        "Mantenimiento y desarrollo de nuevas funcionalidades en el portal web con React y JavaScript.",
        "Mantenimiento y optimización de la aplicación móvil multiplataforma desarrollada con Dart y Flutter."
      ],
      skills: ["NestJS", "Node.js", "TypeScript", "MySQL", "TypeORM", "React", "Dart", "Flutter", "JWT Security"]
    },
    {
      company: "POS Cloud",
      clientOrContext: "Sistemas POS & Facturación Cloud (Directo)",
      clientName: "POS Cloud",
      isConsultingAssignment: false,
      engagementType: "Contratación Directa",
      role: "Full-stack Developer",
      type: "Jornada completa · En remoto",
      location: "Perú · En remoto",
      period: "Ene. 2020 - Feb. 2022 (2 años 2 meses)",
      current: false,
      bullets: [
        "Desarrollo integral de plataforma SaaS de punto de venta (POS) y facturación en la nube construida sobre Amazon Web Services (AWS) y MongoDB.",
        "Optimización de consultas de catálogo de productos, sincronización transaccional en tiempo real y módulo de reportes para comercios."
      ],
      skills: ["MongoDB", "Amazon Web Services (AWS)", "Node.js", "JavaScript", "Cloud POS", "REST APIs"]
    },
    {
      company: "Desarrollo Independiente",
      clientOrContext: "Proyectos de Arquitectura & APIs (Directo)",
      clientName: "Autónomo",
      isConsultingAssignment: false,
      engagementType: "Contratación Directa",
      role: "Desarrollador Back-end Autónomo",
      type: "Autónomo · Remoto",
      location: "Perú",
      period: "Ene. 2020 - 2021 (1 año 1 mes)",
      current: false,
      bullets: [
        "Desarrollo de API para Gestión de Investigaciones: Diseño de base de datos SQL con MySQL, desarrollo de API con Node.js, TypeScript y TypeORM, y panel de administración en React.js.",
        "Colaboración en Desarrollo de API para Viajes y Pedidos: Diseño de esquema relacional MySQL, backend estructurado con Node.js y cliente web en React.js.",
        "Desarrollo colaborativo de API REST para Estaciones de Servicio (Sempiterno): Análisis de base de datos SQL Server, migración y rediseño completo a PostgreSQL, backend desacoplado con Nest.js y documentación OpenAPI con Swagger."
      ],
      skills: ["NestJS", "TypeORM", "MySQL", "PostgreSQL", "SQL Server", "TypeScript", "Swagger", "React.js"]
    }
  ],

  clientProjects: [
    {
      id: "zpr-roofing",
      title: "ZPR Roofing: Plataforma Comercial & Portal de Servicios",
      client: "ZPR Roofing (Rockford, Illinois, EE.UU.)",
      category: "Plataforma Web & Conversión Comercial",
      tagline: "Plataforma web de alto rendimiento con SEO geolocalizado y optimización de conversión",
      description: "Diseño y desarrollo de la plataforma web corporativa para importante contratista de techos en Illinois, EE.UU. Arquitectura orientada a conversión con catálogo de servicios dinámicos (Reparación, Instalación, Daños por Tormenta e Inspecciones), optimización técnica de Core Web Vitals y acreditación BBB.",
      features: [
        "Arquitectura en Next.js con Server Components para máxima velocidad de indexación y carga inmediata",
        "Estructura de páginas geolocalizadas (Service Areas) para dominar el SEO local en Northern Illinois",
        "Formularios de cotización inmediata y captura de prospectos con validación estricta",
        "Soporte bilingüe (inglés/español) y cumplimiento de estándares de confiabilidad BBB"
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Schema", "Vercel Cloud"],
      role: "Fullstack Engineer & Web Architect",
      year: "2025",
      badge: "Cliente Internacional (USA)",
      image: "/projects/zpr-roofing.png",
      liveUrl: "https://zprroofing.com/"
    },
    {
      id: "rugerios-roofing",
      title: "Rugerios Roofing: Plataforma Web & CMS Desacoplado",
      client: "Rugerios Roofing (Estados Unidos)",
      category: "Plataforma Web & Panel Administrativo",
      tagline: "Arquitectura desacoplada con carga directa a AWS S3 y páginas dinámicas por slug",
      description: "Desarrollo integral de plataforma web para empresa de techos y remodelación en EE.UU. Incluye portal público de alta conversión y panel administrativo privado para creación de servicios y portafolios dinámicos por slug.",
      features: [
        "Carga optimizada de imágenes en alta resolución con Presigned URLs hacia AWS S3",
        "Páginas internas de servicios generadas dinámicamente según la base de datos PostgreSQL",
        "Panel administrativo privado con autenticación segura JWT y gestión de portafolio",
        "Optimización de Core Web Vitals y diseño responsive de alto impacto"
      ],
      stack: ["Next.js", "Node.js API", "PostgreSQL", "Prisma ORM", "AWS S3", "Tailwind CSS", "Docker"],
      role: "Lead Fullstack & Cloud Architect",
      year: "2026",
      badge: "Cliente Internacional (USA)",
      image: "/projects/rugerios-roofing.png",
      liveUrl: "https://rugeriosroofing.com/"
    },
    {
      id: "jose-landscaping",
      title: "Jose Landscaping: Plataforma Comercial & Servicios de Paisajismo",
      client: "Jose Landscaping (Las Vegas, Nevada, EE.UU.)",
      category: "Plataforma Web & Captura Comercial",
      tagline: "Plataforma web de paisajismo residencial y comercial con cotización directa y catálogo interactivo",
      description: "Diseño y desarrollo de la plataforma web corporativa para empresa de paisajismo y diseño de exteriores en Las Vegas, Nevada. Incluye catálogo interactivo de servicios (pasto sintético, adoquines, irrigación, iluminación exterior), galería de transformaciones y cotización directa para clientes residenciales y comerciales.",
      features: [
        "Arquitectura en Next.js optimizada para rendimiento y SEO geolocalizado en Las Vegas, Nevada",
        "Catálogo visual de servicios con modales interactivos y galería de transformaciones de exteriores",
        "Formulario de cotización directa ('Quote here') integrado con WhatsApp y contacto comercial",
        "Diseño mobile-first adaptativo con carga ultrarrápida y alta fidelidad visual"
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Swiper", "Vercel Cloud"],
      role: "Fullstack Engineer & Web Architect",
      year: "2026",
      badge: "Cliente Internacional (USA)",
      image: "/projects/jose-landscaping.png",
      liveUrl: "https://jose-landscapping-phi.vercel.app/"
    },
    {
      id: "nexfy-app",
      title: "Nexfy App: Plataforma & Red Global de Agentes de Ventas",
      client: "Nexfy (Plataforma B2B / SaaS)",
      category: "SaaS & Marketplace B2B",
      tagline: "Marketplace de matching comercial y gestión de comisiones para empresas y vendedores",
      description: "Plataforma SaaS que conecta empresas con una red global de profesionales y agentes de ventas a comisión. Incluye panel de control para empresas y agentes, visualización de métricas comerciales, tracking de oportunidades y matching de talentos.",
      features: [
        "Dashboard interactivo con analítica de oportunidades y seguimiento de pipeline comercial",
        "Sistema de registro segmentado por roles (Empresas contratantes vs Agentes de Ventas)",
        "Arquitectura frontend de ultra alta velocidad con microinteracciones fluidas",
        "Infraestructura escalable para el onboarding masivo de profesionales comerciales"
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js"],
      role: "Frontend & Product Engineer",
      year: "2025",
      badge: "SaaS & Marketplace B2B",
      image: "/projects/nexfy-app.png",
      liveUrl: "https://www.nexfyapp.com/"
    },
    {
      id: "evox-3d",
      title: "EVOX 3D: Laboratorio de Diseño 3D & Manufactura Aditiva",
      client: "EVOX 3D (Ingeniería & Prototipado)",
      category: "E-Commerce & Catálogo de Ingeniería",
      tagline: "Plataforma de servicios de modelado CAD, prototipado industrial y venta de piezas técnicas",
      description: "Plataforma digital para laboratorio líder en manufactura aditiva y modelado CAD (SolidWorks, Fusion360). Presenta pipelines de servicio (Concept to Model, Model to Physical), catálogo interactivo de piezas de ingeniería y portal de cotizaciones técnicas.",
      features: [
        "Flujo interactivo de 3 pasos para cotización y envío de archivos técnicos (.STL, .STEP, .OBJ)",
        "Catálogo dinámico de productos y piezas con especificaciones de material y tiempo de fabricación",
        "SEO técnico optimizado para diseño y manufactura aditiva de alta precisión",
        "Diseño visual industrial oscuro de alta fidelidad estética"
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloud Storage", "Node.js"],
      role: "Fullstack Web Developer",
      year: "2025",
      badge: "Manufactura & CAD 3D",
      image: "/projects/evox-3d.png",
      liveUrl: "https://evox3d.com/"
    },
    {
      id: "nuripoint",
      title: "NuriPoint: Plataforma de Inteligencia Outdoor & Senderismo",
      client: "NuriPoint (Startup Tecnológica)",
      category: "Plataforma Outdoor & Agentes de IA",
      tagline: "Ecosistema integral de telemetría offline, mapas topográficos y motor AgenteCore",
      description: "Cofundador y arquitecto de la plataforma líder para turismo de aventura y senderismo. Integra portal web corporativo, apps móviles con mapas offline sincronizados y el motor inteligente de AgenteCore para asistencia conversacional por voz en exteriores.",
      features: [
        "Backend geodistribuido para gestión de rutas, telemetría y seguridad en montaña",
        "Integración del motor AgenteCore para asistencia contextual y predicción meteorológica",
        "Sincronización bidireccional offline-first de coordenadas y estados de expedición",
        "SEO técnico con Google Search Console verificado y Schema markup enriquecido"
      ],
      stack: ["Next.js", "NestJS", "Google Gemini API", "Redis Streams", "Qdrant", "PostgreSQL", "Flutter"],
      role: "Co-founder & Chief Software Architect",
      year: "2026",
      badge: "Startup & Co-Founder",
      image: "/projects/nuripoint.png",
      liveUrl: "https://nuripoint.com/"
    }
  ],

  architectureBlueprints: [
    {
      id: "event-driven-outbox",
      title: "Event-Driven Microservices con Transactional Outbox",
      topic: "Sistemas Distribuidos & Consistencia Eventual",
      tagline: "Garantía de entrega At-least-once y cero pérdida de mensajes entre PostgreSQL y Apache Kafka",
      diagramImage: "/blueprints/blueprint-event-driven-kafka.svg",
      problemStatement: "En arquitecturas de microservicios, emitir un evento a Kafka y persistir en la base de datos dentro de la misma llamada genera el problema de doble escritura (Dual-write problem): si Kafka falla, la base de datos queda desfasada o viceversa.",
      architectureHighlights: [
        "Transacción ACID única que guarda la entidad y el evento en la tabla 'outbox'",
        "Relay / CDC con Debezium o poller que despacha eventos a Kafka de forma asíncrona",
        "Consumidores idempotentes que filtran eventos duplicados mediante claves de idempotencia",
        "Particionamiento por orderId para garantizar orden secuencial de transacciones"
      ],
      components: [
        { name: "API Gateway", role: "Autenticación JWT, Rate Limiting y Reverse Proxy" },
        { name: "Order Core Service", role: "NestJS con transacción atómica local (Order + Outbox)" },
        { name: "Apache Kafka", role: "Bus distribuido de eventos con particiones ordenadas" },
        { name: "Payment & Inventory Services", role: "Consumidores desacoplados con Dead Letter Queue (DLQ)" }
      ],
      tradeoffs: "Mayor complejidad operativa vs. consistencia eventual absoluta sin candados distribuidos (2PC)."
    },
    {
      id: "hexagonal-nest",
      title: "Arquitectura Hexagonal & DDD en NestJS",
      topic: "Clean Architecture & Ports and Adapters",
      tagline: "Aislamiento estricto de las reglas de negocio del framework e infraestructura",
      diagramImage: "/blueprints/blueprint-hexagonal-nest.svg",
      problemStatement: "Los proyectos backend suelen acoplar el código de negocio directamente a los decoradores de NestJS, TypeORM y librerías externas, haciendo que migrar de base de datos o probar la lógica sea costoso y propenso a regresiones.",
      architectureHighlights: [
        "Dominio puro sin dependencias externas ni decoradores de base de datos",
        "Puertos de entrada (Driving Ports) invocados por Controllers HTTP o Consumers",
        "Puertos de salida (Driven Ports) implementados por repositorios Prisma/TypeORM y clientes S3/Redis",
        "100% de la lógica de aplicación testeable con mocks en milisegundos sin levantar Docker"
      ],
      components: [
        { name: "Driving Adapters", role: "Controladores HTTP, WebSockets y Jobs programados" },
        { name: "Input Ports", role: "Interfaces que definen los casos de uso disponibles" },
        { name: "Domain Core", role: "Entidades, Value Objects y Reglas de Negocio inmutables" },
        { name: "Driven Adapters", role: "Implementación concreta de persistencia, caché y APIs de terceros" }
      ],
      tradeoffs: "Más boilerplate inicial de interfaces vs. mantenimiento a largo plazo y facilidad de testing."
    },
    {
      id: "realtime-ai-agents",
      title: "Pipeline de Agentes de IA en Streaming de Baja Latencia",
      topic: "AI Engineering & Real-Time Audio",
      tagline: "Orquestación de voz bidireccional en sub-segundo con Silero VAD y Redis Streams",
      diagramImage: "/blueprints/blueprint-realtime-ai-agents.svg",
      problemStatement: "Los asistentes de IA tradicionales tardan entre 3 a 6 segundos en responder al esperar la transcripción completa, la inferencia sincrónica y la síntesis de audio, generando pausas incómodas para el usuario.",
      architectureHighlights: [
        "Detección de voz en el borde (Silero VAD) para filtrar silencios en <20ms",
        "Streaming de transcripción parcial con Whisper / Deepgram",
        "Memoria contextual deslizante con Redis Streams y aislamiento multi-tenant en <5ms",
        "Ejecución determinista de herramientas (APIs de telemetría y bancos) con Zod",
        "Síntesis neural progresiva en chunks de audio con Time to First Audio <750ms"
      ],
      components: [
        { name: "Edge VAD & Ingestion", role: "Captura de paquetes Opus/PCM vía WebRTC y filtrado de ruido" },
        { name: "AgenteCore Orchestrator", role: "Coordinador en NestJS 11 con sesión y memoria episódica" },
        { name: "Dynamic Tool Executors", role: "Evaluadores asíncronos de consultas externas (APIs, mapas, transacciones)" },
        { name: "Neural Audio Streamer", role: "Generador de voz neural progresiva hacia el parlante del cliente" }
      ],
      tradeoffs: "Requiere infraestructura de streaming full-duplex vs. experiencia conversacional verdaderamente humana."
    }
  ],

  speakerEvents: [
    {
      id: "expotive-unt",
      title: "Expotive UNT: Ponencia Magistral de Arquitectura de Software",
      eventName: "Expotive - Universidad Nacional de Trujillo",
      type: "Conferencia",
      date: "Noviembre 2024",
      location: "Auditorio Central UNT, Trujillo, Perú",
      audience: "+300 Estudiantes e Ingenieros",
      description: "Ponencia magistral sobre patrones modernos de arquitectura backend, microservicios orientados a eventos y transición de proyectos académicos a sistemas de producción empresarial.",
      image: "/speaker/speaker-expotive-unt.svg",
      badge: "🏆 1er Puesto Desarrollo de Software",
      slidesUrl: "https://www.linkedin.com/in/jamzdeveloper",
      repoUrl: "https://github.com/jamzdeveloper",
      materialsNote: "Diapositivas de la conferencia sobre Microservicios y Caso Bancolombia disponibles."
    },
    {
      id: "idat-catedra",
      title: "Cátedra Magistral: Backend Profesional & Bases de Datos",
      eventName: "Idat Educación Superior Tecnológica",
      type: "Reconocimiento",
      date: "2023 - Presente",
      location: "Lima / Remoto Nacional",
      audience: "+1,500 Alumnos Graduados",
      description: "Formación intensiva de desarrolladores en Node.js, NestJS, modelado relacional en SQL Server y PostgreSQL. Distinguido oficialmente como 'Docente Destacado' por excelencia pedagógica.",
      image: "/speaker/speaker-idat-docente.svg",
      badge: "⭐ Docente Destacado Idat",
      slidesUrl: "https://www.linkedin.com/in/jamzdeveloper",
      repoUrl: "https://github.com/jamzdeveloper",
      materialsNote: "Guías de laboratorio de NestJS, Interceptors, Pipes y filtros de excepción."
    },
    {
      id: "workshop-hexagonal",
      title: "Masterclass: Arquitectura Hexagonal y DDD en Producción",
      eventName: "Comunidades de Desarrollo & Meetups Técnicos",
      type: "Taller Magistral",
      date: "2025",
      location: "Transmisión en Vivo & Laboratorios Prácticos",
      audience: "Desarrolladores Mid & Senior",
      description: "Sesión práctica en vivo donde construimos desde cero un servicio financiero desacoplado con NestJS, puertos y adaptadores, pruebas unitarias con Jest y despliegue en contenedores Docker.",
      image: "/speaker/speaker-workshop-microservices.svg",
      badge: "⚡ Masterclass Práctica",
      slidesUrl: "https://www.linkedin.com/in/jamzdeveloper",
      repoUrl: "https://github.com/jamzdeveloper",
      materialsNote: "Repositorio de plantilla base en GitHub con arquitectura hexagonal en NestJS 11."
    }
  ] as SpeakerEvent[],

  technicalStack: [
    {
      category: "Arquitectura & Patrones",
      items: ["Arquitectura Hexagonal (Ports & Adapters)", "Domain-Driven Design (DDD)", "CQRS", "Event-Driven Architecture", "Microservicios & Modular Monoliths", "TDD & BDD"]
    },
    {
      category: "Backend & Lenguajes",
      items: ["Node.js", "TypeScript", "NestJS (Filtros, Interceptors, Guards, Pipes)", "Express", "RxJS", "Go (Fundamentos)"]
    },
    {
      category: "Inteligencia Artificial",
      items: ["Agentes Autónomos", "Tool / Function Calling", "Real-Time Audio Pipelines", "RAG & Vector DBs (Qdrant, PGVector)", "Gemini 2.5/Pro", "OpenAI APIs"]
    },
    {
      category: "Cloud & Event Streaming",
      items: ["AWS (Lambda, Step Functions, EventBridge, SQS, S3)", "Apache Kafka", "Redis & Redis Streams", "Pulumi & Terraform (IaC)", "Docker"]
    },
    {
      category: "Bases de Datos",
      items: ["PostgreSQL", "DynamoDB", "SQL Server", "TypeORM / Prisma", "Modelado Transaccional & Sharding"]
    }
  ]
};
