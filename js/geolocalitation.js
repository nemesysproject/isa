$(document).ready(function() {

    var siteText = [{
            code: 'us',
            tags: [
                { key: 'home', text: 'texto de home en ingles' },
                { key: 'home', text: 'texto de home en ingles' },
                { key: 'home', text: 'texto de home en ingles' },
                { key: 'home', text: 'texto de home en ingles' },
                { key: 'about', text: 'texto de about en ingles' },
            ]
        },

        {
            code: 'mx',
            tags: [
                { key: 'home', text: 'texto de home en español' },
                { key: 'about', text: 'texto de about en español' },

            ]
        },

    ];
    var requestUrl = "http://ip-api.com/json";

    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function(json) {
            console.log("My country is: " + json.country);
            console.log("My country code is: " + json.countryCode);

            changeLanguage(json.countryCode);
        },
        error: function(err) {
            console.error("Request failed, error= " + err);
        }
    });

    function changeLanguage(lang) {
        var texts = $('.lang');

        //$("#date").datepicker("option", "dateFormat", "yy-mm-dd ");
        
        texts.each(function(index, element) {
            var key = $(this).attr('key');
            var keys = siteText[lang][key];
            $(this).text(keys);
        });
    }

});