import {
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  CodeXml,
  DatabaseZap,
  HeartHandshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { l } from "@/lib/i18n/config";

export type PortfolioService = {
  title: string;
  description: string;
  outcomes: string[];
  href?: string;
};

export type PortfolioDomain = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  promise: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  services: PortfolioService[];
};

export type PortfolioDomainDetail = {
  problems: { title: string; description: string }[];
  approach: { step: string; title: string; description: string }[];
  deliverables: string[];
};

const outcome = (es: string, en: string) => l(es, en);

export const PORTFOLIO_DOMAINS: PortfolioDomain[] = [
  {
    id: "personas-nomina",
    number: "01",
    title: l("Personas, talento y nómina", "People, talent, and payroll"),
    shortTitle: l("Personas + nómina", "People + payroll"),
    promise: l(
      "Una operación de personas conectada, precisa y preparada para cada país.",
      "A connected, precise people operation prepared for every country.",
    ),
    description: l(
      "Diseñamos y evolucionamos el núcleo de RR. HH., talento, tiempo y nómina para que los datos del empleado, las reglas del negocio y la ejecución operativa trabajen como un solo sistema.",
      "We design and evolve the HR, talent, time, and payroll core so employee data, business rules, and operational execution work as one system.",
    ),
    icon: HeartHandshake,
    services: [
      {
        title: l("Estrategia y arquitectura de RR. HH.", "HR strategy and architecture"),
        description: l(
          "Evaluamos procesos, aplicaciones, datos y modelo operativo para definir una hoja de ruta realista hacia una plataforma de personas más simple, integrada y medible.",
          "We assess processes, applications, data, and the operating model to define a realistic roadmap toward a simpler, integrated, measurable people platform.",
        ),
        outcomes: [outcome("Hoja de ruta", "Roadmap"), outcome("Caso de negocio", "Business case")],
      },
      {
        title: "SAP SuccessFactors Employee Central",
        description: l(
          "Implementamos y optimizamos el núcleo global de empleados, estructuras, posiciones y eventos de ciclo de vida con reglas, permisos y flujos alineados a la organización.",
          "We implement and optimize the global employee, structure, position, and lifecycle core with rules, permissions, and workflows aligned to the organization.",
        ),
        outcomes: [outcome("Core HR", "Core HR"), outcome("Dato maestro", "Master data")],
      },
      {
        title: "SAP Employee Central Payroll",
        description: l(
          "Diseñamos, implementamos y estabilizamos nómina en la nube conectando Employee Central, Finanzas, tiempo, prestaciones e interfaces bancarias.",
          "We design, implement, and stabilize cloud payroll by connecting Employee Central, Finance, time, benefits, and banking interfaces.",
        ),
        outcomes: [outcome("Nómina cloud", "Cloud payroll"), outcome("Integración financiera", "Finance integration")],
      },
      {
        title: l("Modernización SAP HCM y Payroll", "SAP HCM and Payroll modernization"),
        description: l(
          "Evolucionamos entornos on-premise, híbridos o privados preservando reglas críticas, históricos y continuidad operativa mientras se reduce complejidad técnica.",
          "We evolve on-premise, hybrid, or private environments while preserving critical rules, history, and operational continuity as technical complexity is reduced.",
        ),
        outcomes: [outcome("Continuidad", "Continuity"), outcome("Menor complejidad", "Lower complexity")],
      },
      {
        title: l("Localización y operación de nómina", "Payroll localization and operations"),
        description: l(
          "Configuramos reglas fiscales, legales y estatutarias por país, calendarios de pago, reportes regulatorios y controles de cierre con una base global gobernada.",
          "We configure country tax, legal, and statutory rules, pay calendars, regulatory reporting, and close controls on a governed global foundation.",
        ),
        outcomes: [outcome("Cumplimiento local", "Local compliance"), outcome("Modelo global", "Global model")],
      },
      {
        title: l("Nómina gestionada", "Managed payroll"),
        description: l(
          "Operamos ciclos de nómina con calendario, controles, incidencias, conciliación y niveles de servicio definidos para que el equipo interno conserve visibilidad sin cargar toda la operación.",
          "We run payroll cycles with defined calendars, controls, incidents, reconciliation, and service levels so internal teams retain visibility without carrying the full operation.",
        ),
        outcomes: [outcome("SLA operativo", "Operational SLA"), outcome("Control de cierre", "Close control")],
      },
      {
        title: l("Reclutamiento e incorporación", "Recruiting and onboarding"),
        description: l(
          "Conectamos vacantes, selección, oferta, documentación e incorporación para reducir capturas duplicadas y acelerar el tiempo hasta productividad.",
          "We connect requisitions, selection, offers, documentation, and onboarding to reduce duplicate entry and accelerate time to productivity.",
        ),
        outcomes: [outcome("Experiencia del candidato", "Candidate experience"), outcome("Onboarding digital", "Digital onboarding")],
      },
      {
        title: l("Aprendizaje, desempeño y objetivos", "Learning, performance, and goals"),
        description: l(
          "Implementamos capacidades para asignar aprendizaje, evaluar desempeño, alinear objetivos y convertir conversaciones de talento en decisiones trazables.",
          "We implement capabilities to assign learning, assess performance, align goals, and turn talent conversations into traceable decisions.",
        ),
        outcomes: [outcome("Desarrollo continuo", "Continuous development"), outcome("Objetivos alineados", "Aligned goals")],
      },
      {
        title: l("Compensación y sucesión", "Compensation and succession"),
        description: l(
          "Orquestamos ciclos de mérito, bonos, calibración, talento clave y planes de sucesión con reglas transparentes y escenarios presupuestales.",
          "We orchestrate merit, bonus, calibration, key talent, and succession cycles with transparent rules and budget scenarios.",
        ),
        outcomes: [outcome("Equidad y control", "Equity and control"), outcome("Planeación de talento", "Talent planning")],
      },
      {
        title: l("Tiempo, asistencia y fuerza laboral", "Time, attendance, and workforce"),
        description: l(
          "Integramos horarios, turnos, ausencias, marcajes, horas extra y reglas de convenio con nómina y operación para reducir excepciones manuales.",
          "We integrate schedules, shifts, absences, punches, overtime, and agreement rules with payroll and operations to reduce manual exceptions.",
        ),
        outcomes: [outcome("Tiempo confiable", "Trusted time"), outcome("Menos excepciones", "Fewer exceptions")],
      },
      {
        title: l("Autoservicio, documentos y workflows", "Self-service, documents, and workflows"),
        description: l(
          "Creamos experiencias para empleados y líderes con solicitudes guiadas, aprobaciones, notificaciones, generación documental y expediente digital.",
          "We create employee and manager experiences with guided requests, approvals, notifications, document generation, and digital records.",
        ),
        outcomes: [outcome("Menos correos", "Fewer emails"), outcome("Trazabilidad", "Traceability")],
      },
      {
        title: l("Migración, calidad y pruebas de datos HR", "HR data migration, quality, and testing"),
        description: l(
          "Perfilamos, transformamos, cargamos y conciliamos datos; además automatizamos comparaciones de nómina, regresión, actualizaciones legales y cierre anual.",
          "We profile, transform, load, and reconcile data while automating payroll comparison, regression, legal update, and year-end testing.",
        ),
        outcomes: [outcome("Migración controlada", "Controlled migration"), outcome("Pruebas repetibles", "Repeatable testing")],
      },
      {
        title: l("Analítica de personas y nómina", "People and payroll analytics"),
        description: l(
          "Construimos reportes operativos y ejecutivos sobre plantilla, costo, ausentismo, rotación, excepciones y resultados de nómina con trazabilidad al dato fuente.",
          "We build operational and executive reporting for workforce, cost, absence, turnover, exceptions, and payroll results with source-level traceability.",
        ),
        outcomes: [outcome("Visibilidad ejecutiva", "Executive visibility"), outcome("Dato auditable", "Auditable data")],
      },
    ],
  },
  {
    id: "sap-erp",
    number: "02",
    title: l("SAP ERP, S/4HANA y transformación", "SAP ERP, S/4HANA, and transformation"),
    shortTitle: "SAP + S/4HANA",
    promise: l(
      "Transformar el núcleo sin perder control del negocio.",
      "Transform the core without losing control of the business.",
    ),
    description: l(
      "Acompañamos la evolución del ERP desde la estrategia y el caso de negocio hasta la migración, implementación, integración y estabilización de procesos críticos.",
      "We support ERP evolution from strategy and business case through migration, implementation, integration, and stabilization of critical processes.",
    ),
    icon: BriefcaseBusiness,
    services: [
      {
        title: l("Estrategia y readiness de S/4HANA", "S/4HANA strategy and readiness"),
        href: "/services/sap#estrategia",
        description: l(
          "Analizamos procesos, simplification items, custom code, datos, integraciones e infraestructura para construir una ruta viable y priorizada.",
          "We analyze processes, simplification items, custom code, data, integrations, and infrastructure to build a viable, prioritized path.",
        ),
        outcomes: [outcome("Readiness", "Readiness"), outcome("Roadmap ejecutivo", "Executive roadmap")],
      },
      {
        title: l("Caso de negocio y prueba de valor", "Business case and proof of value"),
        href: "/services/sap#estrategia",
        description: l(
          "Traducimos la transformación en impacto operativo, inversión, riesgos, dependencias y valor esperado antes de comprometer el programa completo.",
          "We translate transformation into operational impact, investment, risk, dependencies, and expected value before committing to the full program.",
        ),
        outcomes: [outcome("Decisión informada", "Informed decision"), outcome("Alcance defendible", "Defensible scope")],
      },
      {
        title: l("SAP Cloud ERP, RISE y GROW", "SAP Cloud ERP, RISE, and GROW"),
        href: "/services/sap#s4hana",
        description: l(
          "Diseñamos la arquitectura, responsabilidades y modelo de operación para escenarios de nube pública o privada, extensiones y servicios gestionados.",
          "We design architecture, responsibilities, and the operating model for public or private cloud scenarios, extensions, and managed services.",
        ),
        outcomes: [outcome("Arquitectura cloud", "Cloud architecture"), outcome("Modelo operativo", "Operating model")],
      },
      {
        title: l("Implementación greenfield", "Greenfield implementation"),
        href: "/services/sap#s4hana",
        description: l(
          "Rediseñamos procesos con principios fit-to-standard, una base limpia de datos y una gobernanza que controla extensiones y excepciones.",
          "We redesign processes using fit-to-standard principles, a clean data foundation, and governance that controls extensions and exceptions.",
        ),
        outcomes: [outcome("Núcleo limpio", "Clean core"), outcome("Proceso estandarizado", "Standardized process")],
      },
      {
        title: l("Conversión brownfield", "Brownfield conversion"),
        href: "/services/sap#s4hana",
        description: l(
          "Convertimos el sistema existente preservando la continuidad y atendiendo código, datos, interfaces, pruebas y ventanas de cutover.",
          "We convert the existing system while preserving continuity and addressing code, data, interfaces, testing, and cutover windows.",
        ),
        outcomes: [outcome("Continuidad ERP", "ERP continuity"), outcome("Cutover controlado", "Controlled cutover")],
      },
      {
        title: l("Transición selectiva de datos", "Selective data transition"),
        href: "/services/sap#datos",
        description: l(
          "Combinamos rediseño y conservación para migrar solamente sociedades, periodos y datos necesarios, reduciendo volumen y exposición del programa.",
          "We combine redesign and preservation to migrate only the required companies, periods, and data, reducing volume and program exposure.",
        ),
        outcomes: [outcome("Menor volumen", "Lower volume"), outcome("Transformación selectiva", "Selective transformation")],
      },
      {
        title: l("Finanzas y control", "Finance and controlling"),
        href: "/services/sap#finanzas",
        description: l(
          "Integramos contabilidad, cierres, activos, tesorería, costos, rentabilidad y consolidación con controles y reportes consistentes.",
          "We integrate accounting, close, assets, treasury, cost, profitability, and consolidation with consistent controls and reporting.",
        ),
        outcomes: [outcome("Cierre confiable", "Trusted close"), outcome("Visibilidad financiera", "Financial visibility")],
      },
      {
        title: l("Compras y abastecimiento", "Procurement and sourcing"),
        href: "/services/sap#operaciones",
        description: l(
          "Diseñamos solicitud, aprobación, compra, recepción, factura y evaluación de proveedores con automatización y reglas de cumplimiento.",
          "We design request, approval, purchase, receipt, invoice, and supplier assessment flows with automation and compliance rules.",
        ),
        outcomes: [outcome("Ciclo procure-to-pay", "Procure-to-pay cycle"), outcome("Control del gasto", "Spend control")],
      },
      {
        title: l("Cadena de suministro y logística", "Supply chain and logistics"),
        href: "/services/sap#operaciones",
        description: l(
          "Conectamos planeación, inventario, almacenes, producción, pedidos, transporte y distribución para mejorar continuidad y nivel de servicio.",
          "We connect planning, inventory, warehouses, production, orders, transport, and distribution to improve continuity and service levels.",
        ),
        outcomes: [outcome("Flujo de punta a punta", "End-to-end flow"), outcome("Menos interrupciones", "Fewer disruptions")],
      },
      {
        title: l("SAP HANA, BW y analítica", "SAP HANA, BW, and analytics"),
        href: "/services/sap#datos",
        description: l(
          "Dimensionamos, migramos y optimizamos plataformas HANA, BW y modelos analíticos para acelerar consulta, integración y toma de decisiones.",
          "We size, migrate, and optimize HANA, BW, and analytical models to accelerate querying, integration, and decision-making.",
        ),
        outcomes: [outcome("Rendimiento", "Performance"), outcome("Modelo analítico", "Analytical model")],
      },
      {
        title: l("Extensiones sobre SAP BTP", "SAP BTP extensions"),
        href: "/services/sap#tecnologia",
        description: l(
          "Construimos extensiones side-by-side, automatizaciones, aplicaciones y servicios que amplían SAP sin comprometer el núcleo estándar.",
          "We build side-by-side extensions, automations, applications, and services that extend SAP without compromising the standard core.",
        ),
        outcomes: [outcome("Clean core", "Clean core"), outcome("Innovación desacoplada", "Decoupled innovation")],
      },
      {
        title: l("Integración y estabilización post-arranque", "Integration and post-go-live stabilization"),
        href: "/services/sap#ams",
        description: l(
          "Orquestamos interfaces, cutover, hypercare, monitoreo y transferencia de conocimiento para que la nueva plataforma se convierta en operación estable.",
          "We orchestrate interfaces, cutover, hypercare, monitoring, and knowledge transfer so the new platform becomes a stable operation.",
        ),
        outcomes: [outcome("Hypercare", "Hypercare"), outcome("Adopción operativa", "Operational adoption")],
      },
    ],
  },
  {
    id: "fabrica-integracion",
    number: "03",
    title: l("Fábrica de software e integración", "Software factory and integration"),
    shortTitle: l("Fábrica + integración", "Factory + integration"),
    promise: l(
      "Más capacidad de entrega con calidad industrial y menor costo total.",
      "More delivery capacity with industrial quality and lower total cost.",
    ),
    description: l(
      "Una fábrica multidisciplinaria para convertir backlog en productos, evolutivos e integraciones mantenibles. La célula ABAP + Fiori puede reducir hasta 60% el costo estimado según volumen, repetibilidad y alcance validado.",
      "A multidisciplinary factory that turns backlog into maintainable products, enhancements, and integrations. The ABAP + Fiori cell can reduce estimated cost by up to 60% depending on validated volume, repeatability, and scope.",
    ),
    icon: CodeXml,
    featured: true,
    services: [
      {
        title: "ABAP + Fiori Factory",
        description: l(
          "Industrializamos demanda SAP con células especializadas, patrones reutilizables, estimación consistente, QA integrado y liberaciones frecuentes.",
          "We industrialize SAP demand through specialist cells, reusable patterns, consistent estimating, built-in QA, and frequent releases.",
        ),
        outcomes: [outcome("Hasta 60% potencial", "Up to 60% potential"), outcome("Ciclos más cortos", "Shorter cycles")],
      },
      {
        title: l("Desarrollo ABAP", "ABAP development"),
        description: l(
          "Construimos y evolucionamos reportes, interfaces, conversiones, mejoras, formularios y workflows para ECC y S/4HANA con estándares y revisión técnica.",
          "We build and evolve reports, interfaces, conversions, enhancements, forms, and workflows for ECC and S/4HANA with standards and technical review.",
        ),
        outcomes: [outcome("Código gobernado", "Governed code"), outcome("Rendimiento", "Performance")],
      },
      {
        title: l("Experiencias Fiori y SAPUI5", "Fiori and SAPUI5 experiences"),
        description: l(
          "Diseñamos aplicaciones responsivas orientadas a tareas, con OData, roles, Launchpad y una experiencia coherente para usuarios de negocio.",
          "We design responsive task-oriented applications with OData, roles, Launchpad, and a consistent business-user experience.",
        ),
        outcomes: [outcome("UX empresarial", "Enterprise UX"), outcome("Movilidad", "Mobility")],
      },
      {
        title: l("Software a la medida", "Custom software"),
        description: l(
          "Creamos plataformas empresariales, productos internos y herramientas funcionales alrededor de procesos que una solución estándar no resuelve adecuadamente.",
          "We create enterprise platforms, internal products, and functional tools around processes that a standard solution does not solve well.",
        ),
        outcomes: [outcome("Producto propio", "Owned product"), outcome("Arquitectura mantenible", "Maintainable architecture")],
      },
      {
        title: l("Portales y aplicaciones internas", "Portals and internal applications"),
        description: l(
          "Construimos frontales para empleados, clientes, proveedores y operación con identidad, permisos, búsqueda, notificaciones y seguimiento.",
          "We build employee, customer, supplier, and operations front ends with identity, permissions, search, notifications, and tracking.",
        ),
        outcomes: [outcome("Autoservicio", "Self-service"), outcome("Experiencia unificada", "Unified experience")],
      },
      {
        title: l("APIs y microservicios", "APIs and microservices"),
        description: l(
          "Diseñamos servicios reutilizables con contratos claros, versionado, seguridad, documentación y observabilidad de punta a punta.",
          "We design reusable services with clear contracts, versioning, security, documentation, and end-to-end observability.",
        ),
        outcomes: [outcome("API-first", "API-first"), outcome("Reutilización", "Reuse")],
      },
      {
        title: l("Integración SAP y middleware", "SAP integration and middleware"),
        description: l(
          "Conectamos SAP y terceros mediante RFC, BAPI, IDoc, OData, REST, SOAP, eventos, CPI, PI/PO y plataformas de integración empresarial.",
          "We connect SAP and third parties through RFC, BAPI, IDoc, OData, REST, SOAP, events, CPI, PI/PO, and enterprise integration platforms.",
        ),
        outcomes: [outcome("Menos silos", "Fewer silos"), outcome("Interfaces observables", "Observable interfaces")],
      },
      {
        title: l("NetWeaver, Web Dynpro y portales", "NetWeaver, Web Dynpro, and portals"),
        description: l(
          "Mantenemos y modernizamos capacidades existentes de NetWeaver, Web Dynpro, Portal, ESS y MSS con una ruta clara de evolución.",
          "We maintain and modernize existing NetWeaver, Web Dynpro, Portal, ESS, and MSS capabilities with a clear evolution path.",
        ),
        outcomes: [outcome("Continuidad tecnológica", "Technology continuity"), outcome("Plan de evolución", "Evolution plan")],
      },
      {
        title: l("Forms, workflow y automatización", "Forms, workflow, and automation"),
        description: l(
          "Digitalizamos formularios, aprobaciones, reglas, tareas y excepciones con SAP Workflow, Adobe Forms y servicios modernos de automatización.",
          "We digitize forms, approvals, rules, tasks, and exceptions through SAP Workflow, Adobe Forms, and modern automation services.",
        ),
        outcomes: [outcome("Menos captura", "Less data entry"), outcome("Proceso trazable", "Traceable process")],
      },
      {
        title: l("QA, pruebas y DevSecOps", "QA, testing, and DevSecOps"),
        description: l(
          "Integramos análisis estático, revisión, pruebas funcionales, regresión, seguridad, transportes y evidencia dentro del flujo de entrega.",
          "We integrate static analysis, review, functional testing, regression, security, transport, and evidence into the delivery flow.",
        ),
        outcomes: [outcome("Calidad integrada", "Built-in quality"), outcome("Liberación confiable", "Trusted release")],
      },
      {
        title: l("Modernización de aplicaciones", "Application modernization"),
        description: l(
          "Renovamos experiencia, arquitectura, integraciones y operación de aplicaciones heredadas sin exigir un reemplazo total en un solo paso.",
          "We renew the experience, architecture, integrations, and operation of legacy applications without requiring full replacement in one step.",
        ),
        outcomes: [outcome("Riesgo progresivo", "Progressive risk"), outcome("Vida útil extendida", "Extended life")],
      },
      {
        title: l("Soporte y evolución continua", "Continuous support and evolution"),
        description: l(
          "Tomamos responsabilidad por incidencias L2/L3, deuda técnica, mejoras, observabilidad y roadmap para dar continuidad a las plataformas entregadas.",
          "We take responsibility for L2/L3 incidents, technical debt, enhancements, observability, and roadmap continuity for delivered platforms.",
        ),
        outcomes: [outcome("SLA", "SLA"), outcome("Backlog evolutivo", "Evolution backlog")],
      },
    ],
  },
  {
    id: "operacion-ams",
    number: "04",
    title: l("Operación, AMS y fuerza laboral", "Operations, AMS, and workforce"),
    shortTitle: "AMS + Workforce",
    promise: l(
      "Plataformas críticas estables, observables y en evolución continua.",
      "Critical platforms that remain stable, observable, and continuously evolving.",
    ),
    description: l(
      "Operamos aplicaciones y plataformas con acuerdos claros, cobertura especializada y mejora continua; además conectamos tiempo y fuerza laboral con HR, nómina y operación.",
      "We operate applications and platforms with clear agreements, specialist coverage, and continuous improvement while connecting time and workforce with HR, payroll, and operations.",
    ),
    icon: CloudCog,
    services: [
      {
        title: l("Application Management Services 24/7", "24/7 Application Management Services"),
        description: l(
          "Atendemos aplicaciones SAP y no SAP con monitoreo, priorización, resolución, análisis de causa y gobierno de niveles de servicio.",
          "We support SAP and non-SAP applications through monitoring, prioritization, resolution, root-cause analysis, and service-level governance.",
        ),
        outcomes: [outcome("Cobertura global", "Global coverage"), outcome("SLA medible", "Measurable SLA")],
      },
      {
        title: l("Soporte funcional SAP", "SAP functional support"),
        description: l(
          "Damos continuidad a Finanzas, Logística, Compras, Ventas, HR, Nómina, Tiempo y Talento con especialistas funcionales y técnicos coordinados.",
          "We provide continuity across Finance, Logistics, Procurement, Sales, HR, Payroll, Time, and Talent through coordinated functional and technical specialists.",
        ),
        outcomes: [outcome("Soporte integral", "Integrated support"), outcome("Menor escalamiento", "Less escalation")],
      },
      {
        title: l("SAP Basis y operación técnica", "SAP Basis and technical operations"),
        description: l(
          "Administramos disponibilidad, jobs, transportes, copias, usuarios técnicos, rendimiento, capacidad y coordinación de infraestructura.",
          "We manage availability, jobs, transports, copies, technical users, performance, capacity, and infrastructure coordination.",
        ),
        outcomes: [outcome("Estabilidad", "Stability"), outcome("Observabilidad", "Observability")],
      },
      {
        title: l("Mantenimiento correctivo y evolutivo", "Corrective and evolutionary maintenance"),
        description: l(
          "Separamos urgencias, problemas recurrentes y mejoras para estabilizar hoy mientras se reduce la causa estructural del backlog.",
          "We separate urgent issues, recurring problems, and enhancements to stabilize today while reducing structural backlog causes.",
        ),
        outcomes: [outcome("Menos reincidencia", "Less recurrence"), outcome("Mejora continua", "Continuous improvement")],
      },
      {
        title: l("Actualizaciones, soporte legal y regresión", "Updates, legal support, and regression"),
        description: l(
          "Planeamos y ejecutamos support packs, notas, cambios legales, pruebas de regresión y ventanas productivas con evidencia y reversibilidad.",
          "We plan and execute support packs, notes, legal changes, regression testing, and production windows with evidence and reversibility.",
        ),
        outcomes: [outcome("Cambio seguro", "Safe change"), outcome("Cumplimiento", "Compliance")],
      },
      {
        title: l("Mesa de servicio y experiencia del usuario", "Service desk and user experience"),
        description: l(
          "Diseñamos intake, clasificación, comunicación, base de conocimiento, autoservicio y seguimiento para que el soporte también sea una buena experiencia.",
          "We design intake, classification, communication, knowledge, self-service, and tracking so support is also a good experience.",
        ),
        outcomes: [outcome("Atención clara", "Clear support"), outcome("Conocimiento reusable", "Reusable knowledge")],
      },
      {
        title: "WorkForce Software",
        description: l(
          "Implementamos, integramos y optimizamos capacidades de gestión de tiempo, turnos y fuerza laboral conectadas a SAP y a sistemas de nómina.",
          "We implement, integrate, and optimize time, scheduling, and workforce management capabilities connected to SAP and payroll systems.",
        ),
        outcomes: [outcome("Fuerza laboral conectada", "Connected workforce"), outcome("Tiempo preciso", "Accurate time")],
      },
      {
        title: l("Servicios UKG", "UKG services"),
        description: l(
          "Realizamos diagnóstico, implementación, optimización, integraciones, adopción y soporte especializado para plataformas UKG.",
          "We provide assessment, implementation, optimization, integrations, adoption, and specialist support for UKG platforms.",
        ),
        outcomes: [outcome("Mejor utilización", "Better utilization"), outcome("Adopción", "Adoption")],
      },
      {
        title: l("Integraciones ADP y ecosistema HR", "ADP and HR ecosystem integrations"),
        description: l(
          "Conectamos proveedores de nómina, tiempo, beneficios, identidad y talento con contratos de datos, conciliación y monitoreo de interfaces.",
          "We connect payroll, time, benefits, identity, and talent providers through data contracts, reconciliation, and interface monitoring.",
        ),
        outcomes: [outcome("Ecosistema conectado", "Connected ecosystem"), outcome("Conciliación", "Reconciliation")],
      },
      {
        title: l("Staff augmentation especializado", "Specialist staff augmentation"),
        description: l(
          "Integramos perfiles técnicos, funcionales y de producto a equipos existentes con objetivos, responsabilidades y transferencia de conocimiento definidos.",
          "We embed technical, functional, and product specialists into existing teams with defined objectives, responsibilities, and knowledge transfer.",
        ),
        outcomes: [outcome("Capacidad inmediata", "Immediate capacity"), outcome("Conocimiento transferido", "Transferred knowledge")],
      },
      {
        title: l("Gestión del cambio y adopción", "Change management and adoption"),
        description: l(
          "Preparamos impactos por rol, comunicación, formación, champions y medición de adopción para convertir el lanzamiento en uso sostenido.",
          "We prepare role impacts, communication, training, champions, and adoption measurement to turn launch into sustained use.",
        ),
        outcomes: [outcome("Uso sostenido", "Sustained use"), outcome("Menor fricción", "Lower friction")],
      },
    ],
  },
  {
    id: "nube-datos",
    number: "05",
    title: l("Nube, datos y entornos SAP", "Cloud, data, and SAP environments"),
    shortTitle: l("Nube + datos", "Cloud + data"),
    promise: l(
      "Infraestructura eficiente y datos confiables desde origen hasta decisión.",
      "Efficient infrastructure and trusted data from source to decision.",
    ),
    description: l(
      "Diseñamos, migramos y operamos plataformas cloud y de datos; reducimos el peso de los landscapes SAP y automatizamos entornos de prueba, refreshes y retiro de sistemas.",
      "We design, migrate, and operate cloud and data platforms while reducing SAP landscape weight and automating test environments, refreshes, and system retirement.",
    ),
    icon: DatabaseZap,
    services: [
      {
        title: l("Estrategia y assessment cloud", "Cloud strategy and assessment"),
        description: l(
          "Evaluamos aplicaciones, infraestructura, dependencias, costos, seguridad y criticidad para definir oleadas y una arquitectura objetivo defendible.",
          "We assess applications, infrastructure, dependencies, cost, security, and criticality to define waves and a defensible target architecture.",
        ),
        outcomes: [outcome("Mapa de migración", "Migration map"), outcome("TCO", "TCO")],
      },
      {
        title: "SAP on AWS",
        href: "/services/cloud-data/aws",
        description: l(
          "Arquitectura, migración, operación y optimización de cargas SAP sobre AWS con foco en disponibilidad, rendimiento, seguridad y costo.",
          "Architecture, migration, operation, and optimization of SAP workloads on AWS with focus on availability, performance, security, and cost.",
        ),
        outcomes: [outcome("Arquitectura SAP", "SAP architecture"), outcome("Operación cloud", "Cloud operations")],
      },
      {
        title: l("AWS, Azure, GCP, privada e híbrida", "AWS, Azure, GCP, private, and hybrid"),
        description: l(
          "Construimos plataformas en la nube adecuada para cada carga, integrando identidad, red, observabilidad, datos y servicios compartidos.",
          "We build platforms on the right cloud for each workload, integrating identity, networking, observability, data, and shared services.",
        ),
        outcomes: [outcome("Arquitectura multicloud", "Multicloud architecture"), outcome("Conectividad", "Connectivity")],
      },
      {
        title: l("Migración y modernización cloud", "Cloud migration and modernization"),
        description: l(
          "Ejecutamos rehost, replatform, refactor o retiro por oleadas con pruebas, cutover, reversa y estabilización operacional.",
          "We execute rehost, replatform, refactor, or retirement in waves with testing, cutover, rollback, and operational stabilization.",
        ),
        outcomes: [outcome("Oleadas controladas", "Controlled waves"), outcome("Modernización", "Modernization")],
      },
      {
        title: l("Cloud managed services", "Cloud managed services"),
        description: l(
          "Operamos infraestructura, plataforma, seguridad, respaldos, capacidad, observabilidad y respuesta a incidentes con cobertura continua.",
          "We operate infrastructure, platform, security, backups, capacity, observability, and incident response with continuous coverage.",
        ),
        outcomes: [outcome("24/7", "24/7"), outcome("Operación gobernada", "Governed operations")],
      },
      {
        title: l("FinOps y optimización de costo", "FinOps and cost optimization"),
        description: l(
          "Hacemos visible el consumo, asignamos responsables, eliminamos desperdicio y definimos compromisos de capacidad sin comprometer el servicio.",
          "We make consumption visible, assign ownership, remove waste, and define capacity commitments without compromising service.",
        ),
        outcomes: [outcome("Ahorro continuo", "Continuous savings"), outcome("Costo por servicio", "Cost per service")],
      },
      {
        title: l("Resiliencia y recuperación", "Resilience and recovery"),
        description: l(
          "Diseñamos alta disponibilidad, respaldos, geo-redundancia, recuperación ante desastre y ejercicios periódicos con RTO y RPO explícitos.",
          "We design high availability, backups, geo-redundancy, disaster recovery, and periodic exercises with explicit RTO and RPO.",
        ),
        outcomes: [outcome("Continuidad", "Continuity"), outcome("Recuperación probada", "Tested recovery")],
      },
      {
        title: l("Plataformas de datos y pipelines", "Data platforms and pipelines"),
        description: l(
          "Integramos ingesta, transformación, calidad, catálogo, linaje y publicación para entregar datos reproducibles a operación, analítica e IA.",
          "We integrate ingestion, transformation, quality, catalog, lineage, and publishing to deliver reproducible data to operations, analytics, and AI.",
        ),
        outcomes: [outcome("Dato confiable", "Trusted data"), outcome("Linaje", "Lineage")],
      },
      {
        title: l("BI, reporting y capa semántica", "BI, reporting, and semantic layer"),
        description: l(
          "Construimos indicadores, modelos y reportes con definiciones comunes, acceso gobernado y trazabilidad hasta el sistema fuente.",
          "We build metrics, models, and reporting with shared definitions, governed access, and traceability to source systems.",
        ),
        outcomes: [outcome("Una definición", "One definition"), outcome("Reporte auditable", "Auditable reporting")],
      },
      {
        title: l("Gestión de datos de prueba SAP", "SAP test data management"),
        description: l(
          "Aprovisionamos subconjuntos consistentes y protegidos para pruebas, desarrollo, capacitación y resolución de incidencias sin replicar todo productivo.",
          "We provision consistent, protected subsets for testing, development, training, and incident resolution without copying all production data.",
        ),
        outcomes: [outcome("Pruebas ágiles", "Agile testing"), outcome("Menor huella", "Smaller footprint")],
      },
      {
        title: l("Refresh, copias y entornos ligeros", "Refreshes, copies, and lean environments"),
        description: l(
          "Automatizamos creación de clientes, copias selectivas, refreshes, enmascaramiento y orquestación para reducir tiempos y errores de preparación.",
          "We automate client creation, selective copies, refreshes, masking, and orchestration to reduce preparation time and errors.",
        ),
        outcomes: [outcome("Entorno bajo demanda", "Environment on demand"), outcome("Automatización", "Automation")],
      },
      {
        title: l("Retiro, archivo y acceso histórico", "Retirement, archive, and historical access"),
        description: l(
          "Retiramos sistemas heredados conservando la información necesaria para consulta, auditoría y retención sin mantener toda la plataforma activa.",
          "We retire legacy systems while retaining required information for access, audit, and retention without keeping the full platform running.",
        ),
        outcomes: [outcome("Menor costo", "Lower cost"), outcome("Acceso histórico", "Historical access")],
      },
    ],
  },
  {
    id: "privacidad-transformacion",
    number: "06",
    title: l("Privacidad, seguridad y transformación de landscapes", "Privacy, security, and landscape transformation"),
    shortTitle: l("Seguridad + transformación", "Security + transformation"),
    promise: l(
      "Mover, proteger y separar información crítica con evidencia.",
      "Move, protect, and separate critical information with evidence.",
    ),
    description: l(
      "Combinamos privacidad, seguridad de acceso y transformación selectiva de datos para responder a regulación, reorganizaciones, adquisiciones, desinversiones y evolución tecnológica.",
      "We combine privacy, access security, and selective data transformation to address regulation, reorganizations, acquisitions, divestitures, and technology evolution.",
    ),
    icon: ShieldCheck,
    services: [
      {
        title: l("Assessment de privacidad SAP", "SAP privacy assessment"),
        description: l(
          "Identificamos sistemas, datos sensibles, finalidades, accesos, transferencias, retención y exposición para priorizar un programa ejecutable.",
          "We identify systems, sensitive data, purposes, access, transfers, retention, and exposure to prioritize an executable program.",
        ),
        outcomes: [outcome("Mapa de riesgo", "Risk map"), outcome("Plan de remediación", "Remediation plan")],
      },
      {
        title: l("Descubrimiento y clasificación de PII", "PII discovery and classification"),
        description: l(
          "Localizamos información personal en tablas, campos, documentos e interfaces y la relacionamos con responsables y políticas.",
          "We locate personal information in tables, fields, documents, and interfaces and connect it to owners and policies.",
        ),
        outcomes: [outcome("Inventario PII", "PII inventory"), outcome("Trazabilidad", "Traceability")],
      },
      {
        title: l("Enmascaramiento y anonimización", "Masking and anonymization"),
        description: l(
          "Protegemos datos no productivos conservando consistencia referencial y utilidad de prueba para reducir exposición sin detener desarrollo.",
          "We protect non-production data while preserving referential consistency and test utility to reduce exposure without stopping development.",
        ),
        outcomes: [outcome("No productivo seguro", "Safe non-production"), outcome("Datos útiles", "Useful data")],
      },
      {
        title: l("Acceso, rectificación y eliminación", "Access, correction, and erasure"),
        description: l(
          "Diseñamos procesos para localizar, revelar, corregir o eliminar información de una persona con autorizaciones y evidencia completa.",
          "We design processes to locate, disclose, correct, or erase an individual's information with authorization and complete evidence.",
        ),
        outcomes: [outcome("Derechos del titular", "Data subject rights"), outcome("Evidencia", "Evidence")],
      },
      {
        title: l("Retención y minimización", "Retention and minimization"),
        description: l(
          "Traducimos políticas legales en reglas técnicas de conservación, bloqueo, archivo y eliminación para reducir datos innecesarios.",
          "We translate legal policies into technical retention, blocking, archival, and deletion rules to reduce unnecessary data.",
        ),
        outcomes: [outcome("Política ejecutable", "Executable policy"), outcome("Menor exposición", "Lower exposure")],
      },
      {
        title: l("Riesgo de acceso y segregación de funciones", "Access risk and segregation of duties"),
        description: l(
          "Analizamos roles, transacciones, conflictos y accesos críticos para priorizar remediación, mitigaciones y control continuo.",
          "We analyze roles, transactions, conflicts, and critical access to prioritize remediation, mitigation, and continuous control.",
        ),
        outcomes: [outcome("SoD", "SoD"), outcome("Acceso gobernado", "Governed access")],
      },
      {
        title: l("Seguridad y hardening SAP", "SAP security and hardening"),
        description: l(
          "Reducimos superficie de ataque mediante revisión de configuración, interfaces, cuentas, cifrado, logging, parches y monitoreo.",
          "We reduce attack surface through reviews of configuration, interfaces, accounts, encryption, logging, patches, and monitoring.",
        ),
        outcomes: [outcome("Hardening", "Hardening"), outcome("Monitoreo", "Monitoring")],
      },
      {
        title: l("Carve-outs y separaciones", "Carve-outs and separations"),
        description: l(
          "Separamos sociedades, unidades, procesos y datos por desinversión o reorganización, controlando dependencias, privacidad y acuerdos transitorios.",
          "We separate companies, units, processes, and data for divestitures or reorganizations while controlling dependencies, privacy, and transitional agreements.",
        ),
        outcomes: [outcome("Separación precisa", "Precise separation"), outcome("TSA reducido", "Reduced TSA")],
      },
      {
        title: l("Fusiones y consolidación de sistemas", "Mergers and system consolidation"),
        description: l(
          "Integramos paisajes, maestros, estructuras y procesos después de una adquisición con reglas de calidad y reconciliación.",
          "We integrate landscapes, master data, structures, and processes after an acquisition using quality and reconciliation rules.",
        ),
        outcomes: [outcome("Integración M&A", "M&A integration"), outcome("Dato reconciliado", "Reconciled data")],
      },
      {
        title: l("System Landscape Optimization", "System Landscape Optimization"),
        description: l(
          "Realineamos sociedades, plantas, controlling areas, maestros y datos históricos para reflejar una nueva estructura de negocio.",
          "We realign companies, plants, controlling areas, master data, and history to reflect a new business structure.",
        ),
        outcomes: [outcome("Landscape alineado", "Aligned landscape"), outcome("Estructura futura", "Future structure")],
      },
      {
        title: l("Transformación y depuración selectiva", "Selective transformation and cleansing"),
        description: l(
          "Movemos, reasignamos, consolidamos o eliminamos datos de manera controlada para preparar migraciones, reducir volumen o corregir estructuras.",
          "We move, reassign, consolidate, or remove data in a controlled way to prepare migrations, reduce volume, or correct structures.",
        ),
        outcomes: [outcome("Dato transformado", "Transformed data"), outcome("Volumen optimizado", "Optimized volume")],
      },
      {
        title: l("Nube soberana y cumplimiento", "Sovereign cloud and compliance"),
        description: l(
          "Diseñamos opciones de alojamiento, residencia, acceso y operación alineadas con requisitos regulatorios y de soberanía de datos.",
          "We design hosting, residency, access, and operating options aligned with regulatory and data sovereignty requirements.",
        ),
        outcomes: [outcome("Residencia", "Residency"), outcome("Control jurisdiccional", "Jurisdictional control")],
      },
    ],
  },
  {
    id: "innovacion-inteligencia",
    number: "07",
    title: l("IA aplicada e innovación empresarial", "Applied AI and enterprise innovation"),
    shortTitle: l("IA + innovación", "AI + innovation"),
    promise: l(
      "De información fragmentada a decisiones explicables y acciones supervisadas.",
      "From fragmented information to explainable decisions and supervised action.",
    ),
    description: l(
      "Combinamos IA generativa, agentes especializados, modelos cuantitativos, automatización y software a la medida sobre datos gobernados. La autoridad permanece en las personas y cada resultado conserva contexto y evidencia.",
      "We combine generative AI, specialist agents, quantitative models, automation, and custom software over governed data. Authority remains with people, and every result preserves context and evidence.",
    ),
    icon: BrainCircuit,
    featured: true,
    services: [
      {
        title: l("Sistema de inteligencia de decisión", "Decision intelligence system"),
        description: l(
          "Una capa que observa señales del negocio, estudia causas, compara rutas y prepara acciones con reglas, permisos, evidencia y aprobación humana.",
          "A layer that observes business signals, studies causes, compares paths, and prepares actions with rules, permissions, evidence, and human approval.",
        ),
        outcomes: [outcome("Decisión explicable", "Explainable decision"), outcome("Acción supervisada", "Supervised action")],
      },
      {
        title: l("IA generativa sobre datos privados", "Generative AI over private data"),
        description: l(
          "Construimos experiencias con modelos de lenguaje, búsqueda aumentada, citas, permisos y controles que responden sobre conocimiento empresarial autorizado.",
          "We build experiences with language models, augmented retrieval, citations, permissions, and controls that answer over authorized enterprise knowledge.",
        ),
        outcomes: [outcome("RAG corporativo", "Enterprise RAG"), outcome("Respuesta con evidencia", "Evidence-backed answer")],
      },
      {
        title: l("Agentes especializados", "Specialist agents"),
        description: l(
          "Diseñamos agentes con responsabilidades limitadas para investigar, validar, conciliar, preparar y escalar tareas sin darles autoridad irrestricta.",
          "We design bounded agents to research, validate, reconcile, prepare, and escalate tasks without granting unrestricted authority.",
        ),
        outcomes: [outcome("Rol limitado", "Bounded role"), outcome("Orquestación", "Orchestration")],
      },
      {
        title: l("Modelos cuantitativos y escenarios", "Quantitative models and scenarios"),
        description: l(
          "Construimos modelos calibrados para explorar sensibilidad, restricciones y rutas posibles antes de comprometer presupuesto, inventario, capacidad o servicio.",
          "We build calibrated models to explore sensitivity, constraints, and possible paths before committing budget, inventory, capacity, or service.",
        ),
        outcomes: [outcome("Comparación de rutas", "Path comparison"), outcome("Sensibilidad", "Sensitivity")],
      },
      {
        title: l("Machine learning productivo", "Production machine learning"),
        description: l(
          "Desarrollamos modelos de predicción, clasificación, recomendación y anomalías con MLOps, monitoreo, evaluación y responsables claros.",
          "We develop prediction, classification, recommendation, and anomaly models with MLOps, monitoring, evaluation, and clear ownership.",
        ),
        outcomes: [outcome("Modelo en producción", "Production model"), outcome("Monitoreo", "Monitoring")],
      },
      {
        title: l("Automatización inteligente", "Intelligent automation"),
        description: l(
          "Combinamos reglas, workflows, integraciones e IA para reducir tareas repetitivas manteniendo validación humana en decisiones sensibles.",
          "We combine rules, workflows, integrations, and AI to reduce repetitive tasks while preserving human validation for sensitive decisions.",
        ),
        outcomes: [outcome("Human-in-the-loop", "Human-in-the-loop"), outcome("Menor esfuerzo manual", "Less manual effort")],
      },
      {
        title: l("Asistentes internos y conocimiento", "Internal assistants and knowledge"),
        description: l(
          "Creamos asistentes para soporte, políticas, procedimientos, onboarding y operación con acceso condicionado por identidad y rol.",
          "We create assistants for support, policies, procedures, onboarding, and operations with access conditioned by identity and role.",
        ),
        outcomes: [outcome("Conocimiento accesible", "Accessible knowledge"), outcome("Permisos heredados", "Inherited permissions")],
      },
      {
        title: l("Inteligencia documental", "Document intelligence"),
        description: l(
          "Extraemos, clasificamos, validamos y relacionamos información de contratos, facturas, expedientes y reportes para activar procesos posteriores.",
          "We extract, classify, validate, and connect information from contracts, invoices, files, and reports to trigger downstream processes.",
        ),
        outcomes: [outcome("Documento a dato", "Document to data"), outcome("Validación", "Validation")],
      },
      {
        title: l("Detección de anomalías y calidad", "Anomaly detection and quality"),
        description: l(
          "Combinamos reglas y aprendizaje para identificar cambios inesperados, datos incompletos y patrones que requieren investigación.",
          "We combine rules and learning to identify unexpected changes, incomplete data, and patterns that require investigation.",
        ),
        outcomes: [outcome("Alerta temprana", "Early warning"), outcome("Priorización", "Prioritization")],
      },
      {
        title: l("Optimización de procesos y supply chain", "Process and supply chain optimization"),
        description: l(
          "Estudiamos demanda, capacidad, inventario, restricciones y nivel de servicio para preparar alternativas operativas medibles.",
          "We study demand, capacity, inventory, constraints, and service levels to prepare measurable operating alternatives.",
        ),
        outcomes: [outcome("Mejor alternativa", "Better alternative"), outcome("Restricciones visibles", "Visible constraints")],
      },
      {
        title: l("Innovación BTP y soluciones a la medida", "BTP innovation and custom solutions"),
        description: l(
          "Prototipamos y construimos nuevas experiencias, integraciones y productos digitales conectados al núcleo SAP y al ecosistema empresarial.",
          "We prototype and build new experiences, integrations, and digital products connected to the SAP core and enterprise ecosystem.",
        ),
        outcomes: [outcome("Prueba de valor", "Proof of value"), outcome("Producto escalable", "Scalable product")],
      },
      {
        title: l("Gobierno, evaluación y seguridad de IA", "AI governance, evaluation, and security"),
        description: l(
          "Definimos casos autorizados, datos permitidos, evaluaciones, trazas, protección, límites de acción y revisión continua del comportamiento.",
          "We define authorized use cases, permitted data, evaluations, traces, protection, action boundaries, and continuous behavior review.",
        ),
        outcomes: [outcome("IA gobernada", "Governed AI"), outcome("Evaluación continua", "Continuous evaluation")],
      },
    ],
  },
];

export const PORTFOLIO_DOMAIN_DETAILS: Record<string, PortfolioDomainDetail> = {
  "personas-nomina": {
    problems: [
      {
        title: l("Datos de empleado fragmentados", "Fragmented employee data"),
        description: l(
          "La información cambia entre HR, nómina, tiempo, finanzas y proveedores, generando diferencias que terminan corrigiéndose durante el cierre.",
          "Information changes across HR, payroll, time, finance, and providers, creating differences that are ultimately corrected during close.",
        ),
      },
      {
        title: l("Procesos que dependen de intervención manual", "Processes dependent on manual intervention"),
        description: l(
          "Altas, movimientos, incidencias, aprobaciones y conciliaciones requieren correos, hojas de cálculo o capturas repetidas.",
          "Hires, changes, incidents, approvals, and reconciliations depend on email, spreadsheets, or repeated data entry.",
        ),
      },
      {
        title: l("Nómina difícil de cambiar y comprobar", "Payroll that is hard to change and prove"),
        description: l(
          "Las reglas locales, integraciones y pruebas no tienen una trazabilidad común, aumentando riesgo ante actualizaciones y cierres.",
          "Local rules, integrations, and tests lack shared traceability, increasing risk during updates and closes.",
        ),
      },
    ],
    approach: [
      {
        step: "01",
        title: l("Mapear la operación real", "Map the real operation"),
        description: l(
          "Documentamos reglas, responsables, calendarios, interfaces, controles y excepciones antes de proponer cambios.",
          "We document rules, owners, calendars, interfaces, controls, and exceptions before proposing change.",
        ),
      },
      {
        step: "02",
        title: l("Diseñar el núcleo y sus integraciones", "Design the core and its integrations"),
        description: l(
          "Definimos qué vive en SuccessFactors, HCM, nómina, tiempo y sistemas externos, con una fuente responsable para cada dato.",
          "We define what belongs in SuccessFactors, HCM, payroll, time, and external systems, with one accountable source for each data point.",
        ),
      },
      {
        step: "03",
        title: l("Migrar, probar y estabilizar", "Migrate, test, and stabilize"),
        description: l(
          "Ejecutamos conversiones, paralelos, regresión, capacitación y soporte de cierre hasta que la operación sea repetible.",
          "We execute conversions, parallels, regression, training, and close support until the operation is repeatable.",
        ),
      },
    ],
    deliverables: [
      l("Mapa de procesos, reglas y responsables", "Map of processes, rules, and owners"),
      l("Arquitectura HR y nómina objetivo", "Target HR and payroll architecture"),
      l("Configuración e integraciones documentadas", "Documented configuration and integrations"),
      l("Datos migrados y conciliados", "Migrated and reconciled data"),
      l("Evidencia de pruebas y resultados paralelos", "Test evidence and parallel results"),
      l("Modelo de soporte y calendario operativo", "Support model and operating calendar"),
    ],
  },
  "sap-erp": {
    problems: [
      {
        title: l("Un ERP que limita el cambio", "An ERP that limits change"),
        description: l(
          "El código, las interfaces y las decisiones históricas convierten cada evolución en un proyecto de alto riesgo.",
          "Code, interfaces, and historical decisions turn each enhancement into a high-risk project.",
        ),
      },
      {
        title: l("Ruta a S/4HANA sin decisión clara", "An S/4HANA path without a clear decision"),
        description: l(
          "No está definido qué conservar, rediseñar, retirar o mover a nube, ni el costo operativo de cada alternativa.",
          "It is unclear what to preserve, redesign, retire, or move to cloud, or what each option costs to operate.",
        ),
      },
      {
        title: l("Procesos distintos dentro de la misma empresa", "Different processes within the same company"),
        description: l(
          "Finanzas, compras, inventario y logística trabajan con definiciones y controles que no siempre cierran entre sí.",
          "Finance, procurement, inventory, and logistics operate with definitions and controls that do not always reconcile.",
        ),
      },
    ],
    approach: [
      {
        step: "01",
        title: l("Evaluar proceso, dato y tecnología", "Assess process, data, and technology"),
        description: l(
          "Revisamos simplificaciones, custom code, volumen, calidad de datos, integraciones, infraestructura y capacidad de cambio.",
          "We review simplifications, custom code, volume, data quality, integrations, infrastructure, and capacity for change.",
        ),
      },
      {
        step: "02",
        title: l("Elegir una ruta defendible", "Choose a defensible path"),
        description: l(
          "Comparamos greenfield, conversión y transición selectiva con alcance, dependencias, riesgo, costo y beneficio verificables.",
          "We compare greenfield, conversion, and selective transition using verifiable scope, dependencies, risk, cost, and benefit.",
        ),
      },
      {
        step: "03",
        title: l("Entregar por frentes gobernados", "Deliver through governed workstreams"),
        description: l(
          "Coordinamos diseño, construcción, datos, integración, pruebas, cutover y estabilización con criterios de salida por fase.",
          "We coordinate design, build, data, integration, testing, cutover, and stabilization with exit criteria for each phase.",
        ),
      },
    ],
    deliverables: [
      l("Readiness y mapa de dependencias", "Readiness and dependency map"),
      l("Caso de negocio y roadmap de transformación", "Business case and transformation roadmap"),
      l("Diseño de procesos y arquitectura objetivo", "Process design and target architecture"),
      l("Plan de migración y reconciliación de datos", "Data migration and reconciliation plan"),
      l("Plan de pruebas, cutover y reversa", "Testing, cutover, and rollback plan"),
      l("Modelo de hypercare y transferencia", "Hypercare and transition model"),
    ],
  },
  "fabrica-integracion": {
    problems: [
      {
        title: l("Backlog creciente y entregas impredecibles", "Growing backlog and unpredictable delivery"),
        description: l(
          "La demanda ABAP, Fiori, integraciones y aplicaciones compite por los mismos especialistas y pierde prioridad entre urgencias.",
          "ABAP, Fiori, integration, and application demand competes for the same specialists and loses priority among urgent issues.",
        ),
      },
      {
        title: l("Costo alto por trabajo repetido", "High cost from repeated work"),
        description: l(
          "Estimaciones, componentes, pruebas y documentación se recrean proyecto por proyecto en lugar de aprovechar patrones.",
          "Estimating, components, tests, and documentation are recreated project by project instead of reusing patterns.",
        ),
      },
      {
        title: l("Velocidad que genera deuda", "Speed that creates debt"),
        description: l(
          "Cuando QA, seguridad, rendimiento y observabilidad llegan al final, la entrega rápida se convierte en retrabajo productivo.",
          "When QA, security, performance, and observability arrive at the end, fast delivery becomes production rework.",
        ),
      },
    ],
    approach: [
      {
        step: "01",
        title: l("Clasificar y dimensionar la demanda", "Classify and size demand"),
        description: l(
          "Separamos mantenimiento, evolutivos, productos e integraciones; acordamos criterios, prioridad y capacidad por célula.",
          "We separate maintenance, enhancements, products, and integrations, agreeing criteria, priority, and capacity per team.",
        ),
      },
      {
        step: "02",
        title: l("Industrializar el flujo", "Industrialize the flow"),
        description: l(
          "Aplicamos estándares, activos reutilizables, automatización, revisiones y pruebas dentro de una cadencia visible.",
          "We apply standards, reusable assets, automation, reviews, and testing within a visible cadence.",
        ),
      },
      {
        step: "03",
        title: l("Medir costo, tiempo y calidad", "Measure cost, time, and quality"),
        description: l(
          "Seguimos throughput, cycle time, defectos, retrabajo, predictibilidad y ahorro frente a la base acordada.",
          "We track throughput, cycle time, defects, rework, predictability, and savings against the agreed baseline.",
        ),
      },
    ],
    deliverables: [
      l("Backlog priorizado y modelo de capacidad", "Prioritized backlog and capacity model"),
      l("Arquitectura y estándares de desarrollo", "Architecture and development standards"),
      l("Componentes y patrones reutilizables", "Reusable components and patterns"),
      l("Código, pruebas y documentación por liberación", "Code, testing, and documentation per release"),
      l("Tablero de costo, tiempo y calidad", "Cost, time, and quality dashboard"),
      l("Roadmap de soporte y evolución", "Support and evolution roadmap"),
    ],
  },
  "operacion-ams": {
    problems: [
      {
        title: l("Incidentes que se repiten", "Recurring incidents"),
        description: l(
          "El soporte cierra tickets, pero las causas estructurales permanecen y vuelven a consumir capacidad del negocio.",
          "Support closes tickets, but structural causes remain and continue consuming business capacity.",
        ),
      },
      {
        title: l("Responsabilidad fragmentada", "Fragmented accountability"),
        description: l(
          "Funcional, Basis, infraestructura, proveedor y usuario operan con métricas distintas y sin una visión de servicio completa.",
          "Functional, Basis, infrastructure, vendors, and users operate with different metrics and no complete service view.",
        ),
      },
      {
        title: l("Tiempo y fuerza laboral desconectados", "Disconnected time and workforce"),
        description: l(
          "Turnos, marcajes, ausencias y horas extra no llegan con precisión a nómina ni a la planeación operativa.",
          "Shifts, punches, absences, and overtime do not reach payroll or operating plans accurately.",
        ),
      },
    ],
    approach: [
      {
        step: "01",
        title: l("Establecer el modelo de servicio", "Establish the service model"),
        description: l(
          "Definimos alcance, severidades, SLA, RACI, horarios, escalamiento, herramientas y criterios de comunicación.",
          "We define scope, severity, SLA, RACI, coverage, escalation, tools, and communication criteria.",
        ),
      },
      {
        step: "02",
        title: l("Tomar control con conocimiento", "Take control with knowledge"),
        description: l(
          "Levantamos aplicaciones, jobs, interfaces, calendarios, riesgos y pendientes; documentamos lo mínimo necesario para operar.",
          "We inventory applications, jobs, interfaces, calendars, risk, and backlog, documenting what is required to operate.",
        ),
      },
      {
        step: "03",
        title: l("Estabilizar y mejorar", "Stabilize and improve"),
        description: l(
          "Separamos operación, problemas y evolución; medimos reincidencia, tiempo de solución, cumplimiento y valor del backlog.",
          "We separate operations, problems, and evolution, measuring recurrence, resolution time, compliance, and backlog value.",
        ),
      },
    ],
    deliverables: [
      l("Catálogo de servicios y matriz RACI", "Service catalog and RACI matrix"),
      l("SLA, severidades y esquema de escalamiento", "SLA, severity, and escalation model"),
      l("Runbooks y base de conocimiento", "Runbooks and knowledge base"),
      l("Monitoreo de aplicaciones e interfaces", "Application and interface monitoring"),
      l("Reporte operativo y de causas recurrentes", "Operations and recurring-cause reporting"),
      l("Roadmap trimestral de mejora", "Quarterly improvement roadmap"),
    ],
  },
  "nube-datos": {
    problems: [
      {
        title: l("Costo cloud sin dueño", "Cloud cost without ownership"),
        description: l(
          "El consumo crece por capacidad sobredimensionada, recursos inactivos y servicios compartidos sin asignación clara.",
          "Consumption grows through oversized capacity, inactive resources, and shared services without clear allocation.",
        ),
      },
      {
        title: l("Reportes que no coinciden", "Reports that do not agree"),
        description: l(
          "Cada área transforma los datos de forma distinta y no existe una definición común ni trazabilidad hasta el origen.",
          "Each area transforms data differently, with no shared definition or traceability to the source.",
        ),
      },
      {
        title: l("Entornos SAP lentos y pesados", "Slow, heavy SAP environments"),
        description: l(
          "Copias completas, refreshes manuales y sistemas heredados elevan almacenamiento, tiempo de preparación y exposición de datos.",
          "Full copies, manual refreshes, and legacy systems increase storage, preparation time, and data exposure.",
        ),
      },
    ],
    approach: [
      {
        step: "01",
        title: l("Descubrir cargas, datos y dependencias", "Discover workloads, data, and dependencies"),
        description: l(
          "Levantamos aplicaciones, flujos, niveles de servicio, sensibilidad, costo y relaciones técnicas antes de mover o rediseñar.",
          "We inventory applications, flows, service levels, sensitivity, cost, and technical relationships before moving or redesigning.",
        ),
      },
      {
        step: "02",
        title: l("Diseñar una plataforma gobernada", "Design a governed platform"),
        description: l(
          "Definimos landing zone, identidad, red, seguridad, observabilidad, datos, respaldo y responsabilidades de operación.",
          "We define landing zones, identity, network, security, observability, data, backup, and operating responsibilities.",
        ),
      },
      {
        step: "03",
        title: l("Migrar y optimizar por oleadas", "Migrate and optimize in waves"),
        description: l(
          "Movemos con pruebas y reversa; después medimos disponibilidad, rendimiento, costo, calidad y uso de la plataforma.",
          "We move with testing and rollback, then measure availability, performance, cost, quality, and platform utilization.",
        ),
      },
    ],
    deliverables: [
      l("Assessment de aplicaciones y TCO", "Application assessment and TCO"),
      l("Arquitectura cloud y de datos objetivo", "Target cloud and data architecture"),
      l("Landing zone, seguridad y observabilidad", "Landing zone, security, and observability"),
      l("Pipelines, calidad, catálogo y linaje", "Pipelines, quality, catalog, and lineage"),
      l("Plan de migración, DR y pruebas", "Migration, DR, and testing plan"),
      l("Modelo FinOps y operación gestionada", "FinOps and managed operations model"),
    ],
  },
  "privacidad-transformacion": {
    problems: [
      {
        title: l("Datos sensibles sin mapa completo", "Sensitive data without a complete map"),
        description: l(
          "La organización conoce los sistemas principales, pero no todas las copias, interfaces, tablas y documentos que contienen PII.",
          "The organization knows its main systems, but not every copy, interface, table, and document containing PII.",
        ),
      },
      {
        title: l("Accesos y retención difíciles de demostrar", "Access and retention that are hard to prove"),
        description: l(
          "Roles, mitigaciones, conservación y eliminación no siempre están conectados a responsables y evidencia auditable.",
          "Roles, mitigations, retention, and erasure are not always connected to owners and auditable evidence.",
        ),
      },
      {
        title: l("Transformaciones con datos mezclados", "Transformations with mixed data"),
        description: l(
          "Carve-outs, fusiones y reorganizaciones requieren separar o consolidar información sin romper procesos ni revelar datos indebidos.",
          "Carve-outs, mergers, and reorganizations require separating or consolidating information without breaking processes or exposing the wrong data.",
        ),
      },
    ],
    approach: [
      {
        step: "01",
        title: l("Descubrir y clasificar", "Discover and classify"),
        description: l(
          "Identificamos datos, finalidades, accesos, dependencias, jurisdicciones y obligaciones que condicionan la solución.",
          "We identify data, purposes, access, dependencies, jurisdictions, and obligations that shape the solution.",
        ),
      },
      {
        step: "02",
        title: l("Diseñar reglas ejecutables", "Design executable rules"),
        description: l(
          "Convertimos políticas en controles de acceso, enmascaramiento, retención, transformación, aprobación y evidencia.",
          "We turn policy into access, masking, retention, transformation, approval, and evidence controls.",
        ),
      },
      {
        step: "03",
        title: l("Ejecutar y reconciliar", "Execute and reconcile"),
        description: l(
          "Aplicamos cambios de forma selectiva, validamos integridad y dejamos trazas para negocio, seguridad, auditoría y legal.",
          "We apply selective change, validate integrity, and leave traces for business, security, audit, and legal teams.",
        ),
      },
    ],
    deliverables: [
      l("Inventario de PII, accesos y dependencias", "Inventory of PII, access, and dependencies"),
      l("Matriz de riesgo y plan de remediación", "Risk matrix and remediation plan"),
      l("Reglas de enmascaramiento y retención", "Masking and retention rules"),
      l("Diseño de carve-out o consolidación", "Carve-out or consolidation design"),
      l("Datos transformados y reconciliados", "Transformed and reconciled data"),
      l("Evidencia técnica y funcional de ejecución", "Technical and functional execution evidence"),
    ],
  },
  "innovacion-inteligencia": {
    problems: [
      {
        title: l("Información abundante, decisión lenta", "Abundant information, slow decisions"),
        description: l(
          "Los equipos invierten más tiempo buscando, conciliando y explicando señales que evaluando las alternativas disponibles.",
          "Teams spend more time searching, reconciling, and explaining signals than evaluating available alternatives.",
        ),
      },
      {
        title: l("IA aislada del proceso", "AI isolated from the process"),
        description: l(
          "Un chat puede redactar, pero no conoce todas las reglas, permisos, restricciones ni efectos operativos de una acción.",
          "A chat can draft, but it does not know every rule, permission, constraint, or operating effect of an action.",
        ),
      },
      {
        title: l("Resultados difíciles de comprobar", "Results that are hard to prove"),
        description: l(
          "Sin evaluación, evidencia, responsables y límites de acción, una recomendación no puede incorporarse a una operación crítica.",
          "Without evaluation, evidence, owners, and action boundaries, a recommendation cannot enter a critical operation.",
        ),
      },
    ],
    approach: [
      {
        step: "01",
        title: l("Definir una decisión concreta", "Define one concrete decision"),
        description: l(
          "Acordamos señal, responsable, frecuencia, datos permitidos, restricciones, alternativas y criterio de éxito.",
          "We agree the signal, owner, frequency, permitted data, constraints, alternatives, and success criteria.",
        ),
      },
      {
        step: "02",
        title: l("Construir inteligencia por capas", "Build intelligence in layers"),
        description: l(
          "El núcleo cuantitativo mide y compara; los agentes investigan; la IA generativa explica y prepara la interacción.",
          "The quantitative core measures and compares, agents investigate, and generative AI explains and prepares the interaction.",
        ),
      },
      {
        step: "03",
        title: l("Evaluar antes de ampliar", "Evaluate before scaling"),
        description: l(
          "Probamos exactitud, utilidad, seguridad, trazabilidad y adopción en un alcance limitado antes de conectar nuevas decisiones.",
          "We test accuracy, utility, security, traceability, and adoption in a limited scope before connecting new decisions.",
        ),
      },
    ],
    deliverables: [
      l("Contrato de decisión y matriz de responsabilidad", "Decision contract and accountability matrix"),
      l("Mapa de datos, reglas y permisos", "Map of data, rules, and permissions"),
      l("Modelo cuantitativo calibrado", "Calibrated quantitative model"),
      l("Agentes y flujos con límites explícitos", "Agents and flows with explicit boundaries"),
      l("Evaluaciones, trazas y evidencia de respuestas", "Evaluations, traces, and response evidence"),
      l("Piloto medible y roadmap de escalamiento", "Measurable pilot and scaling roadmap"),
    ],
  },
};

export const PORTFOLIO_SERVICE_COUNT = PORTFOLIO_DOMAINS.reduce(
  (total, domain) => total + domain.services.length,
  0,
);
