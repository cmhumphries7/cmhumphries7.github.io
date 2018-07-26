(function () {

    setUpPage();

    function setUpPage() {
        addCarousel();
        addNavEventListeners();
        // addArticleEventListeners();
        // addWindowEventListeners();
        // addModalEventListeners();

    };

    //carousel object

    function addCarousel() {

        let frameIndex = 1;
        let rotation;

        showFrames(frameIndex);

        const carouselPrev = document.getElementById('carousel-prev');
        const carouselNext = document.getElementById('carousel-next');


        carouselPrev.addEventListener('click', function () {
            showFrames(--frameIndex);
            clearInterval(rotation);
        });
        carouselNext.addEventListener('click', function () {
            showFrames(++frameIndex);
            clearInterval(rotation);
        });

        function showFrames(n) {
            let i;
            const frames = document.getElementsByClassName("carouselImages");
            if (n > frames.length) { frameIndex = 1 }
            if (n < 1) { frameIndex = frames.length }
            for (i = 0; i < frames.length; i++) {
                frames[i].style.display = "none";
            }
            frames[frameIndex - 1].style.display = "block";
        };

        // Auto rotation
        rotation = setInterval(function () {
            showFrames(frameIndex += 1);
        }, 3000);

    };

    //hide nav

    function addNavEventListeners() {

        let navToggleButton = document.getElementById('navToggleButton');
        let mainNav = document.getElementById('mainNav');

        navToggleButton.addEventListener('click', function () {
            if (mainNav.style.display === "none") {
                $('#mainNav').slideDown();
            } else {
                $('#mainNav').slideUp();
            };
        });
    };


})();