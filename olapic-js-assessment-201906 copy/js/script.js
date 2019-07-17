$(document).ready(function() {

    /******** Homepage Carousel - All Photos *********/

    /* Build API Request
     I found this end point when going through the olapic documentation online. It helps to meet all the necessary requiremets of the task.
     */
    var olapicEndpoint = "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?rights_given=0&include_tagged_galleries=0&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2";

    $.ajax({
        dataType: "json",
        url: olapicEndpoint,
        type: "GET",
        data: {
            format: "json"
        },
        success: function(data) {

            /* Create array of photos pulled from the Olapic API response
                First step was to log the data so that I could find how I would access the media portion of the JSON.
             */

            var mediaArray = data.data._embedded.media;
            console.log(mediaArray)

            /* Loop through the mediaArray
              I then had to loop through the array of images so that each could be displayed properly.
             */

            for (i=0; i < mediaArray.length; i++) {
                var mediaItem = mediaArray[i];
                console.log(mediaItem);

                var olapicImage = mediaItem.images.normal;
                $(".owl-carousel").append("<div class='item olapic-image'><img src='" + olapicImage + "'></div>");
            };


            // Append the images to the carousel


            // Set up Owl Carousel
            $(".owl-carousel").owlCarousel({
                items: 4,
                loop: true,
                touchDrag: true,
                nav: false,
                navText: ["<i class='arrow left'></i>", "<i class='arrow right'></i>"],
                dots: false,
                video: true,
                slideBy: 'page',
                navSpeed: 150,
                autoplay: false,
                autoplayTimeout: 2000,
                autoplaySpeed: 150,
                responsive: {
                    0: {
                        items:1,
                        center:true
                    },
                    414: {
                        items: 2
                    },
                    550: {
                        items:3
                    },
                    1000: {
                        items:4
                    }
                }
            });
        },
        error: function(error){
            console.log(error);
        }
    });
});
