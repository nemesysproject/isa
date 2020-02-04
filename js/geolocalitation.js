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
            { key: 'orthodon', text: 'Odontology' },
            { key: 'healing', text: 'Healing' },
            { key: 'x-ray', text: 'X Ray' },
            { key: 'rehabilita', text: 'Rehabilitation' },
            { key: 'b-other', text: 'Between others...' },
            { key: 'services-offer', text: 'Services we offer' },
            { key: 'devices', text: '<strong>Devices Registration (Class I, II, III) with COFEPRIS and different MOH in LAtinoamerica</strong>' },
            { key: 'renewals', text: '<strong>Renewals</strong>' },
            { key: 'reports', text: '<strong>Surveillance Reports</strong>' },
            { key: 'regulatory', text: '<strong>Regulatory Assessment</strong>' },
            { key: 'sales', text: '<strong>Free Sales Certificates</strong>' },
            { key: 'conuntry-license', text: '<strong>License Hosting Service for foreign manufacturers</strong>' },
            { key: 'cofepris-assessment', text: '<strong>Assessment for COFEPRIS Good Manufacturing Practices Certificate</strong>' },
            { key: 'notice', text: 'Operation Notice, Advertising Permits, Sanitary Importation Permits' },
            { key: 'sanitary-licenses', text: 'Sanitary Licenses' },
            { key: 'importation-permits', text: 'Importation Permits' },
            { key: 'medical-etc', text: 'Medical Devices, Medicines (finished products and raw materials), Food, Beverages, Cosmetics, Dietary Supplements, Hazardous Chemicals.' },
            { key: 'avdertising-permi', text: 'Advertising Permits' },
            { key: 'medicines-etc', text: 'Medical Devices, Medicines, Food, Beverages, Cosmetics, Dietary Supplements, Tobacco, Beauty Services & Health Services).' },
            { key: 'countries-title', text: 'International Regualatory Affairs' },
            { key: 'offer-international', text: 'We offer international services' },
            { key: 'contact-us', text: 'Contact us' },
            { key: 'about-isah', text: 'About ISA Health' },
            { key: 'isa-have-experience', text: 'In ISA HEALTH we have extensive experience in regulatory affairs with health authorities in Mexico, Colombia, Costa Rica, Uruguay, Ecuador and other Latin American countries.' },
            { key: 'medic-treat', text: 'Our Main Services' },
            { key: 'terms-conditions', text: 'International Regualatory Affairs' },
            { key: 'wehelpyou', text: 'We help to comply' },
            { key: 'infor-link', text: 'Information' },
            { key: 'location', text: 'Contact' },
            { key: 'folow', text: 'Follow us' },
            { key: 'copyright', text: '&copy;Copyright - Isah Health. All rights reserved.' },
        ]
    },
    {
        code: 'MX',
        tags: [
            { key: 'call', text: 'Contacto +52 55 5669.3159 (CDMX) +52 818365.0298 (MTY)' },
            { key: 'home', text: 'Inicio' },
            { key: 'contact-email', text: 'WA: +52 8126 4253 48 Contáctenos: info@isahealth.com' },
            { key: 'about', text: 'Sobre nosotros' },
            { key: 'international', text: 'Servicio que ofrecemos' },
            { key: 'countries', text: 'Servicios internacionales' },
            { key: 'contact', text: 'Contacto' },
            { key: 'affairs', text: 'Servicios de Asuntos Regulatorios Internacionales' },
            { key: 'intro-body', text: 'Profesionales de distintas disciplinas trabajamos juntos formando un equipo entusiasta y comprometido que es ISA HEALTH.<br /><br /> En ISA HEALTH tenemos amplia experiencia en trámites regulatorios con autoridades sanitarias en México, Estados Unidos, Colombia, Costa Rica, Uruguay, Ecuador y otros países de América Latina. <br /><br /> Ofrecemos soporte y asesoría continua en el cumplimiento regulatorio con base en la legislación vigente y normativas aplicables.' },
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
            { key: 'diagnostic', text: 'Diagnóstico' },
            { key: 'surgery', text: 'Cirugía' },
            { key: 'orthodon', text: 'Odontología' },
            { key: 'healing', text: 'Curación' },
            { key: 'x-ray', text: 'Rayos X' },
            { key: 'rehabilita', text: 'Rehabilitación' },
            { key: 'b-other', text: 'Entre otros...' },
            { key: 'services-offer', text: 'Servicios que ofrecemos' },
            { key: 'devices', text: '<strong>Registro de dispositivos (Clase I, II, III) con COFEPRIS</strong>' },
            { key: 'renewals', text: '<strong>Prorroga de Registros Sanitarios</strong>' },
            { key: 'reports', text: '<strong>Informe de Tecnovigilancia</strong>' },
            { key: 'regulatory', text: '<strong>Asesoría Regulatoria</strong>' },
            { key: 'sales', text: '<strong>Certificados de Líbre Venta</strong>' },
            { key: 'conuntry-license', text: '<strong>Hospedaje de Licencias para Fabricantes extranjeros</strong>' },
            { key: 'cofepris-assessment', text: '<strong>Asesoría para la obtención de Certificado de Buenas Prácticas de Manufactura emitido por COFEPRIS</strong>' },
            { key: 'notice', text: 'Avisos de Funcionamiento, Aviso de Publicidad, Permisos de Publicidad, Permisos de Importación' },
            { key: 'sanitary-licenses', text: 'Licencias sanitarias' },
            { key: 'importation-permits', text: 'Permisos de Importación' },
            { key: 'medical-etc', text: 'Dispositivos médicos, medicamentos (productos terminados y materias primas), alimentos, bebidas, cosméticos, suplementos dietéticos, productos químicos peligrosos.' },
            { key: 'avdertising-permi', text: 'Permisos de publicidad' },
            { key: 'medicines-etc', text: 'Dispositivos médicos, medicamentos, alimentos, bebidas, cosméticos, suplementos dietéticos, tabaco, servicios de belleza y servicios de salud).' },
            { key: 'countries-title', text: 'Regulación Sanitaria y Registro de Dispositivos Médicos en Latinoamérica:' },
            { key: 'offer-international', text: 'Ofrecemos servicios internacionales' },
            { key: 'contact-us', text: 'Contáctenos' },
            { key: 'about-isah', text: 'Sobre ISA Health' },
            { key: 'isa-have-experience', text: 'En ISA HEALTH tenemos una amplia experiencia en asuntos regulatorios con autoridades de salud en México, Colombia, Costa Rica, Uruguay, Ecuador y otros países latinoamericanos.' },
            { key: 'medic-treat', text: 'Servicios que ofrecemos' },
            { key: 'terms-conditions', text: 'Servicios en otros paises' }, 
            { key: 'wehelpyou', text: 'Te ayudamos a cumplir' },
            { key: 'infor-link', text: 'Información' },
            { key: 'location', text: 'Contacto' },
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

        try{
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
        }catch(err){
            console.error(err);
        }
    }

    $("#lang-select").change(function() {
        var code =  $(this).children("option:selected").val();
        changeLanguage(code);
      });

});