$(document).ready(function() {

    var siteText = [{
            code: 'US',
            tags: [
                { key: 'call', text: 'Call us now +52 55 5669.3159 (CDMX) +52 818365.0298 (MTY)' },
                { key: 'home', text: 'Home' },
                { key: 'contact-email', text: 'Contact us: info@isahealth.com' },                
                { key: 'about', text: 'About Us' },
                { key: 'international', text: 'Service we offer' },
                { key: 'countries', text: 'International Services' },
                { key: 'contact', text: 'Contact' },
                { key: 'affairs', text: 'International Regulatory Affairs Services' },
                { key: 'intro-body', text: 'Professionals of different areas work together as an enthusiastic and committed team that is ISA HEALTH.<br /><br /> In ISA HEALTH we have extensive experience in regulatory affairs with health authorities in Mexico, Colombia, Costa Rica, Uruguay, Ecuador and other Latin American countries.<br /><br /> We offer continuous assessment on regulatory compliance requirements based on the Health Agencies regulation updates.' },
            ]
        },

        {
            code: 'MX',
            tags: [
                { key: 'call', text: 'Llámenos ahora +52 55 5669.3159 (CDMX) +52 818365.0298 (MTY)' },
                { key: 'home', text: 'Inicio' },
                { key: 'contact-email', text: 'Contáctenos: info@isahealth.com' },
                { key: 'about', text: 'Sobre nosotros' },
                { key: 'international', text: 'Servicio que ofrecemos' },
                { key: 'countries', text: 'Servicios internacionales' },
                { key: 'contact', text: 'Contacto' },
                { key: 'affairs', text: 'Servicios de Asuntos Regulatorios Internacionales' },
                { key: 'intro-body', text: 'Profesionales de diferentes áreas trabajando juntos como un equipo entusiasta y comprometido que es ISA HEALTH.<br /><br /> En ISA HEALTH tenemos ámplia experiencia en servicios regulatorios con autoridades de salud en Mexico, Colombia, Costa Rica, Uruguay, Ecuador y otros países latinoamericanos. <br /><br /> Ofrecemos evaluación continua en el cumplimientode los requisitos normativos basados  en las actualizaciones de las regulaciones de las Agencias de Salud.' },

            ]
        },

    ];
    var requestUrl = "https://ipinfo.io/json";

    var url = window.location.pathname;
    var segments = url.split('/');
    var countrycode = segments[1];

    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function(json) {
            changeLanguage(json.country);
        },
        error: function(err) {
            console.error("Request failed, error= " + err);
        }
    });

    function changeLanguage(code) {
        var texts = $('.lang');

        //$("#date").datepicker("option", "dateFormat", "yy-mm-dd ");
        
        texts.each(function(index, element) {
            var key = $(this).attr('key');
            siteText.filter(item=>{
                if(item.code == code){
                    var obj = item.tags.find(i=>i.key === key);
                    if(obj){
                        $(this).text(obj.text);                        
                    }
                }
            });
            
        });
    }

});