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

            ]
        },

    ];
    var requestUrl = "https://ipinfo.io/json";

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