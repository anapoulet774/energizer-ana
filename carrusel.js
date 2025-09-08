<script>
    document.addEventListener('DOMContentLoaded', function() {
        var myCarousel = document.getElementById('carruselEjemploOscuro');
        var myVideo = document.getElementById('myVideo');

        if (myCarousel && myVideo) {
            myCarousel.addEventListener('slide.bs.carousel', function (e) {
                if (!myVideo.paused) {
                    myVideo.pause();
                }
            });

            myCarousel.addEventListener('slid.bs.carousel', function (e) {
                var activeItem = e.relatedTarget;
                var isVideoSlide = activeItem.querySelector('video');
                if (isVideoSlide) {
                    myVideo.play();
                }
            });
        }
    });
</script>