import "https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.js";

const mapbox_token = "pk.eyJ1IjoibWFwYm94Y3JlYXRlIiwiYSI6ImNrYTg3c3Y2bzBhYWkycm11ZDI0ZGUxengifQ.dlzwdxuzygjewgO13vAsPQ";
mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    zoom: 1.5,
    center: [0,20]
});

map.on("load", function() {
        init()
      });

function init() {

    var data = getCeasefireData();
}
  

function getCeasefireData() {  

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://test.pax.peaceagreements.org/covid/api/ceasefires' 

    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';


    fetch(proxyUrl + targetUrl)
        .then((resp) => resp.json())

        .then(function(data) {

            var results = data.results;
            results.forEach(function(result) {
                console.log("uid : "+result.uid);
                
                var countries = result.countries;
                countries.forEach(function(country) {
                    console.log("country name : "+country.name);
                    setCoordinates(country);
                    console.log("latitude, longitude : "+country.latitude+","+country.longitude);

                    var popup = new mapboxgl.Popup()
                    // .setHTML('<h3> '+country.name+' </h3>' 
                    // +  '<h4>' + '<b>'+ 'Region: ' + '</b>'+result.region_entity+'</h4>' 
                    // + '<h4>' + '<b>'+ 'Type: ' + '</b> '+result.declaration_type+' </h4>' );      
                   .setHTML(contentString);
                    var marker = new mapboxgl.Marker({color: 'green'})
                    .setLngLat([country.longitude, country.latitude])
                    .setPopup(popup)
                    .addTo(map);

                })
                
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}

function setCoordinates(country) {

    console.log("In setCoordinates : "+country.name);
    switch(country.name) {
        case "United Nations": country.latitude = "37.09024";
                                country.longitude = "-95.712891";
                                break;
        case "Colombia": country.latitude = "4.570868";
                        country.longitude = "-74.297333"; 
                        break;
        case "Cameroon": country.latitude = "7.369721999999999";
                        country.longitude = "12.354722"; 
                        break;
        case "Philippines": country.latitude = "12.879721";
                            country.longitude = "121.774017"; 
                            break;
    }
}

function make_the_json() {
    var json = {
        "timeline":
        {
            "headline":"Sh*t People Say",
            "type":"default",
            "text":"People say stuff",
            "startDate":"2012,1,26",
            "date": [
                {
                    "startDate":"2011,12,12",
                    "endDate":"2012,1,27",
                    "headline":"Vine",
                    "text":"<p>Vine Test</p>",
                    "asset":
                    {
                        "media":"https://vine.co/v/b55LOA1dgJU",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,26",
                    "endDate":"2012,1,27",
                    "headline":"Sh*t Politicians Say",
                    "text":"<p>In true political fashion, his character rattles off common jargon heard from people running for office.</p>",
                    "asset":
                    {
                        "media":"http://youtu.be/u4XpeU9erbg",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,10",
                    "headline":"Sh*t Nobody Says",
                    "text":"<p>Have you ever heard someone say “can I burn a copy of your Nickelback CD?” or “my Bazooka gum still has flavor!” Nobody says that.</p>",
                    "asset":
                    {
                        "media":"http://youtu.be/f-x8t0JOnVw",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,26",
                    "headline":"Sh*t Chicagoans Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/Ofy5gNkKGOo",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2011,12,12",
                    "headline":"Sh*t Girls Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/u-yLGIH7W9Y",
                        "credit":"",
                        "caption":"Writers & Creators: Kyle Humphrey & Graydon Sheppard"
                    }
                },
                {
                    "startDate":"2012,1,4",
                    "headline":"Sh*t Broke People Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/zyyalkHjSjo",
                        "credit":"",
                        "caption":""
                    }
                },

                {
                    "startDate":"2012,1,4",
                    "headline":"Sh*t Silicon Valley Says",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/BR8zFANeBGQ",
                        "credit":"",
                        "caption":"written, filmed, and edited by Kate Imbach & Tom Conrad"
                    }
                },
                {
                    "startDate":"2011,12,25",
                    "headline":"Sh*t Vegans Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/OmWFnd-p0Lw",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,23",
                    "headline":"Sh*t Graphic Designers Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/KsT3QTmsN5Q",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2011,12,30",
                    "headline":"Sh*t Wookiees Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/vJpBCzzcSgA",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,17",
                    "headline":"Sh*t People Say About Sh*t People Say Videos",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/c9ehQ7vO7c0",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,20",
                    "headline":"Sh*t Social Media Pros Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/eRQe-BT9g_U",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,11",
                    "headline":"Sh*t Old People Say About Computers",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/HRmc5uuoUzA",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,11",
                    "headline":"Sh*t College Freshmen Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/rwozXzo0MZk",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2011,12,16",
                    "headline":"Sh*t Girls Say - Episode 2",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/kbovd-e-hRg",
                        "credit":"",
                        "caption":"Writers & Creators: Kyle Humphrey & Graydon Sheppard"
                    }
                },
                {
                    "startDate":"2011,12,24",
                    "headline":"Sh*t Girls Say - Episode 3 Featuring Juliette Lewis",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/bDHUhT71JN8",
                        "credit":"",
                        "caption":"Writers & Creators: Kyle Humphrey & Graydon Sheppard"
                    }
                },
                {
                    "startDate":"2012,1,27",
                    "headline":"Sh*t Web Designers Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/MEOb_meSHhQ",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,12",
                    "headline":"Sh*t Hipsters Say",
                    "text":"No meme is complete without a bit of hipster-bashing.",
                    "asset":
                    {
                        "media":"http://youtu.be/FUhrSVyu0Kw",
                        "credit":"",
                        "caption":"Written, Directed, Conceptualized and Performed by Carrie Valentine and Jessica Katz"
                    }
                },
                {
                    "startDate":"2012,1,6",
                    "headline":"Sh*t Cats Say",
                    "text":"No meme is complete without cats. This had to happen, obviously.",
                    "asset":
                    {
                        "media":"http://youtu.be/MUX58Vi-YLg",
                        "credit":"",
                        "caption":""
                    }
                },
                {
                    "startDate":"2012,1,21",
                    "headline":"Sh*t Cyclists Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/GMCkuqL9IcM",
                        "credit":"",
                        "caption":"Video script, production, and editing by Allen Krughoff of Hardcastle Photography"
                    }
                },
                {
                    "startDate":"2011,12,30",
                    "headline":"Sh*t Yogis Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/IMC1_RH_b3k",
                        "credit":"",
                        "caption":""
                    }
                },




                {
                    "startDate":"2012,1,18",
                    "headline":"Sh*t New Yorkers Say",
                    "text":"",
                    "asset":
                    {
                        "media":"http://youtu.be/yRvJylbSg7o",
                        "credit":"",
                        "caption":"Directed and Edited by Matt Mayer, Produced by Seth Keim, Written by Eliot Glazer. Featuring Eliot and Ilana Glazer, who are siblings, not married."
                    }
                }
            ]
        }
    }
    //var obj = JSON.parse(json);
    return json;
}


