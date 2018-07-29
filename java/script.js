(function () {

    setUpPage();

    function setUpPage() {
        addCarousel();
        addNavEventListeners();
        addModalEventListeners();

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
                $('#mainNav').slideDown(500);
            } else {
                $('#mainNav').slideUp(500);
            };
        });
    };

    //open about me modal

    function addModalEventListeners() {
        const modalTriggerElement = document.querySelector('#modal-trigger');

        const modalTriggerClickHandler = function () {
            document.body.classList.add('modal-open');
        };

        modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

        // Modal can be closed
        const modalCloseButton = document.querySelector('#modal a');

        const modalCloseButtonClickHandler = function () {
            document.body.classList.remove('modal-open');
        };

        modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
    };

    //project modal controls

    //Get the modal element
    var modal = document.getElementById('simpleModal');
    //Get open modal button
    var modalBtn = document.getElementById('modalBtn');
    //Get close button
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    //Listen for open click
    modalBtn.addEventListener('click', openModal);

    //Listen for close click
    closeBtn.addEventListener('click', closeModal);

    //Listen for outside click
    window.addEventListener('click', outsideClick);

    //Function to open modal
    function openModal() {
        modal.style.display = 'block';
    }

    //Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    //Function to close modal if outside click
    function outsideClick(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }

    //For Modal #2

    //Get the modal element
    var modal2 = document.getElementById('simpleModal2');
    //Get open modal button
    var modalBtn2 = document.getElementById('modalBtn2');
    //Get close button
    var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

    //Listen for open click
    modalBtn2.addEventListener('click', openModal2);

    //Listen for close click
    closeBtn2.addEventListener('click', closeModal2);

    //Listen for outside click
    window.addEventListener('click', outsideClick2);

    //Function to open modal
    function openModal2() {
        modal2.style.display = 'block';
    }

    //Function to close modal
    function closeModal2() {
        modal2.style.display = 'none';
    }

    //Function to close modal if outside click
    function outsideClick2(e) {
        if (e.target == modal2) {
            modal2.style.display = 'none';
        }
    }

    //For Modal3
    //Get the modal element
    var modal3 = document.getElementById('simpleModal3');
    //Get open modal button
    var modalBtn3 = document.getElementById('modalBtn3');
    //Get close button
    var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

    //Listen for open click
    modalBtn3.addEventListener('click', openModal3);

    //Listen for close click
    closeBtn3.addEventListener('click', closeModal3);

    //Listen for outside click
    window.addEventListener('click', outsideClick3);

    //Function to open modal
    function openModal3() {
        modal3.style.display = 'block';
    }

    //Function to close modal
    function closeModal3() {
        modal3.style.display = 'none';
    }

    //Function to close modal if outside click
    function outsideClick3(e) {
        if (e.target == modal3) {
            modal2.style.display = 'none';
        }
    }
})();