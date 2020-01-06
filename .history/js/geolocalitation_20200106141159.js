$(document).ready(function () {

    var siteText = [{
        code: 'US',
        tags: [
            { key: 'call', text: 'Call us now +52 55 5669.3159 (CDMX) +52 818365.0298 (MTY)' },
            { key: 'home', text: 'Home' },
            { key: 'contact-email', text: 'WA: +52 8126 4253 48 Contact us: info@isahealth.com' },
            { key: 'about', text: 'About Us' },
            { key: 'international', text: 'Service we offer' },
            { key: 'countries', text: 'International Services' },
            { key: 'contact', text: 'Contact' },
            { key: 'affairs', text: 'International Regulatory Affairs Services' },
            { key: 'intro-body', text: 'Professionals of different areas work together as an enthusiastic and committed team that is ISA HEALTH.<br /><br /> In ISA HEALTH we have extensive experience in regulatory affairs with health authorities in Mexico, Colombia, Costa Rica, Uruguay, Ecuador and other Latin American countries.<br /><br /> We offer continuous assessment on regulatory compliance requirements based on the Health Agencies regulation updates.' },
            { key: 'our-mission', text: 'Our Mission' },
            { key: 'our-mission-body', text: 'Provide regulatory support and In-Country representation for medical devices, medicines and chemicals manufacturers or dealers to facilitate national and international business development.' },
            { key: 'our-values', text: 'Our Values' },
            { key: 'confidentiality', text: 'Confidentiality' },
            { key: 'honesty', text: 'Honesty' },
            { key: 'service', text: 'Service' },
            { key: 'committed', text: 'Commitment' },
            { key: 'loyalty', text: 'Loyalty' },
            { key: 'our-customers', text: 'Our Custumers' },
            { key: 'our-customers-body', text: 'Focused on a quality and service philosophy, since 2010, we have supported an important number of manufacturers and distributors of regulated products to comply with sanitary regulations, becoming a strategic partner for the legal marketing of their products.' },
            { key: 'medical-devices', text: 'Regarding to Medical Device Registration we have experience with Class I, II and III Devices in:' },
            { key: 'orthopedics', text: 'Orthopedics' },
            { key: 'cardiovascular', text: 'Cardiovascular' },
            { key: 'diagnostic', text: 'Diagnostics' },
            { key: 'surgery', text: 'Surgery' },
            { key: 'orthodon', text: 'Orthodontics' },
            { key: 'healing', text: 'Healing' },
            { key: 'x-ray', text: 'X Ray' },
            { key: 'rehabilita', text: 'Rehabilitation' },
            { key: 'b-other', text: 'Between others...' },
            { key: 'services-offer', text: 'Services we offer' },
            { key: 'devices', text: '<strong>Devices Registration (Class I, II, III) with COFEPRIS</strong>' },
            { key: 'renewals', text: '<strong>Renewals</strong>' },
            { key: 'reports', text: '<strong>Reports</strong>' },
            { key: 'regulatory', text: '<strong>Regulatory Assessment</strong>' },
            { key: 'sales', text: 'strong>Sales Certificates</strong>' },
            { key: 'conuntry-license', text: '<strong>In Country License Hosting Service for foreign manufacturers</strong>' },
            { key: 'cofepris-assessment', text: '<strong>Assessment for COFEPRIS Good Manufacturing Practices Certificate</strong>' },
            { key: 'notice', text: 'Notice' },
            { key: 'sanitary-licenses', text: 'Sanitary Licenses' },
            { key: 'importation-permits', text: 'Importation Permits' },
            { key: 'medical-etc', text: 'Medical Devices, Medicines (finished products and raw materials), Food, Beverages, Cosmetics, Dietary Supplements, Hazardous Chemicals.' },
            { key: 'avdertising-permi', text: 'Advertising Permits' },
            { key: 'medicines-etc', text: 'Medical Devices, Medicines, Food, Beverages, Cosmetics, Dietary Supplements, Tobacco, Beauty Services & Health Services).' },
            { key: 'countries-title', text: 'Countries in which we are' },
            { key: 'offer-international', text: 'we offer international services' },
            { key: 'contact-us', text: 'Contact us' },
            { key: 'about-isah', text: 'About ISA Health' },
            { key: 'isa-have-experience', text: 'In ISA HEALTH we have extensive experience in regulatory affairs with health authorities in Mexico, Colombia, Costa Rica, Uruguay, Ecuador and other Latin American countries.' },
            { key: 'medic-treat', text: 'Medical treatment' },
            { key: 'terms-conditions', text: 'Terms & conditions' },
            { key: 'infor-link', text: 'Information' },
            { key: 'location', text: 'Our location' },
            { key: 'folow', text: 'Follow us' },
            { key: 'copyright', text: '&copy;Copyright - Isah Health. All rights reserved.' },
        ]
    },

    {
        code: 'MX',
        tags: [
            { key: 'call', text: 'Llámenos ahora +52 55 5669.3159 (CDMX) +52 818365.0298 (MTY)' },
            { key: 'home', text: 'Inicio' },
            { key: 'contact-email', text: 'WA: +52 8126 4253 48 Contáctenos: info@isahealth.com' },
            { key: 'about', text: 'Sobre nosotros' },
            { key: 'international', text: 'Servicio que ofrecemos' },
            { key: 'countries', text: 'Servicios internacionales' },
            { key: 'contact', text: 'Contacto' },
            { key: 'affairs', text: 'Servicios de Asuntos Regulatorios Internacionales' },
            { key: 'intro-body', text: 'Profesionales de diferentes áreas trabajando juntos como un equipo entusiasta y comprometido que es ISA HEALTH.<br /><br /> En ISA HEALTH tenemos ámplia experiencia en servicios regulatorios con autoridades de salud en Mexico, Colombia, Costa Rica, Uruguay, Ecuador y otros países latinoamericanos. <br /><br /> Ofrecemos evaluación continua en el cumplimientode los requisitos normativos basados  en las actualizaciones de las regulaciones de las Agencias de Salud.' },
            { key: 'our-mission', text: 'Nuestra Misión' },
            { key: 'our-mission-body', text: 'Brindar apoyo normativo y representación en el país para fabricantes o distribuidores de dispositivos médicos, medicamentos y productos químicos para facilitar el desarrollo comercial nacional e internacional.' },
            { key: 'our-values', text: 'Nuestros Valores' },
            { key: 'confidentiality', text: 'Confidencialidad' },
            { key: 'honesty', text: 'Honestidad' },
            { key: 'service', text: 'Servicio' },
            { key: 'committed', text: 'Compromiso' },
            { key: 'loyalty', text: ' Lealtad' },
            { key: 'our-customers', text: 'Nuestros Clientes' },
            { key: 'our-customers-body', text: 'Centrados en una filosofía de calidad y servicio, desde 2010, hemos apoyado a un número importante de fabricantes y distribuidores de productos regulados para cumplir con las regulaciones sanitarias, convirtiéndonos en un socio estratégico para la comercialización legal de sus productos.' },
            { key: 'medical-devices', text: 'Con respecto al registro de dispositivos médicos, tenemos experiencia con dispositivos de clase I, II y III en:' },
            { key: 'orthopedics', text: 'Ortopedía' },
            { key: 'cardiovascular', text: 'Cardiovascular' },
            { key: 'diagnostic', text: 'Diagnósticos' },
            { key: 'surgery', text: 'Cirugía' },
            { key: 'orthodon', text: 'Ortodoncia' },
            { key: 'healing', text: 'Curación' },
            { key: 'x-ray', text: 'Rayos X' },
            { key: 'rehabilita', text: 'Rehabilitación' },
            { key: 'b-other', text: 'Entre otros...' },
            { key: 'services-offer', text: 'Servicios que ofrecemos' },
            { key: 'devices', text: '<strong>Registro de dispositivos (Clase I, II, III) con COFEPRIS</strong>' },
            { key: 'renewals', text: '<strong>Renovaciones</strong>' },
            { key: 'reports', text: '<strong>Informes</strong>' },
            { key: 'regulatory', text: '<strong>Evaluación regulatoria</strong>' },
            { key: 'sales', text: '<strong>Certificados de ventas</strong>' },
            { key: 'conuntry-license', text: '<strong>Servicio de alojamiento de licencias en el país para fabricantes extranjeros</strong>' },
            { key: 'cofepris-assessment', text: '<strong>Assessment for COFEPRIS Good Manufacturing Practices Certificate</strong>' },
            { key: 'notice', text: 'Aviso' },
            { key: 'sanitary-licenses', text: 'Licencias sanitarias' },
            { key: 'importation-permits', text: 'Permisos de Importación' },
            { key: 'medical-etc', text: 'Dispositivos médicos, medicamentos (productos terminados y materias primas), alimentos, bebidas, cosméticos, suplementos dietéticos, productos químicos peligrosos.' },
            { key: 'avdertising-permi', text: 'Permisos de publicidad' },
            { key: 'medicines-etc', text: 'Dispositivos médicos, medicamentos, alimentos, bebidas, cosméticos, suplementos dietéticos, tabaco, servicios de belleza y servicios de salud).' },
            { key: 'countries-title', text: 'Países en los que estamos' },
            { key: 'offer-international', text: 'ofrecemos servicios internacionales' },
            { key: 'contact-us', text: 'Contáctenos' },
            { key: 'about-isah', text: 'Sobre ISA Health' },
            { key: 'isa-have-experience', text: 'En ISA HEALTH tenemos una amplia experiencia en asuntos regulatorios con autoridades de salud en México, Colombia, Costa Rica, Uruguay, Ecuador y otros países latinoamericanos.' },
            { key: 'medic-treat', text: 'Tratamiento médico' },
            { key: 'terms-conditions', text: 'Términos y condiciones' },
            { key: 'infor-link', text: 'Información' },
            { key: 'location', text: 'Nuestra ubicación' },
            { key: 'folow', text: 'Síguenos' },
            { key: 'copyright', text: '&copy;Copyright - Isah Health. Todos los derechos reservados.' },

        ]
    },

    ];
    var requestUrl = "https://ipinfo.io/json";

    var url = window.location.pathname;
    var segments = url.split('/');
    var countrycode = segments[1];

    // $.ajax({
    //     url: requestUrl,
    //     type: 'GET',
    //     success: function (json) {
    //         changeLanguage(json.country);
    //     },
    //     error: function (err) {
    //         console.error("Request failed, error= " + err);
    //     }
    // });

    function changeLanguage(code) {
        var texts = $('.lang');

        //$("#date").datepicker("option", "dateFormat", "yy-mm-dd ");

        texts.each(function (index, element) {
            var key = $(this).attr('key');
            siteText.filter(item => {
                if (item.code === code) {
                    var obj = item.tags.find(i => i.key === key);
                    if (obj) {
                        $(this).html(obj.text);
                    }
                }
            });

        });
    }

});