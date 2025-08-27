// fungsi untuk drowpdown navbar
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }
});



// fungsi untuk pergerakan konten cirkuits
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const cardWidth = cards[0].getBoundingClientRect().width;
    const cardsToShow = 3; 

    let currentIndex = 0;

    function moveToCard(index) {
        track.style.transform = 'translateX(-' + (cardWidth + 20) * index + 'px)'; 
        currentIndex = index;
        updateButtons();
    }

    function updateButtons() {
        if (currentIndex === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (currentIndex >= cards.length - cardsToShow) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    nextBtn.addEventListener('click', () => {
        moveToCard(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        moveToCard(currentIndex - 1);
    });

    updateButtons();
});


// fungsi untuk pergerakan konten driver
document.addEventListener('DOMContentLoaded', function() {
    const driverTrack = document.querySelector('#drivers .carousel-track');
    if (driverTrack) {
        const driverCards = Array.from(driverTrack.children);
        const driverNextBtn = document.getElementById('driverNextBtn');
        const driverPrevBtn = document.getElementById('driverPrevBtn');

        if (driverCards.length > 0 && driverNextBtn && driverPrevBtn) {
            const cardWidth = driverCards[0].getBoundingClientRect().width;
            const gap = 20; 
            const cardsToShowDesktop = 4; 
            
            let currentIndex = 0;

            function moveToCard(index) {
                driverTrack.style.transform = 'translateX(-' + (cardWidth + gap) * index + 'px)';
                currentIndex = index;
                updateDriverButtons();
            }

            function updateDriverButtons() {
                let cardsToShow = cardsToShowDesktop;
                if (window.innerWidth <= 992) cardsToShow = 3;
                if (window.innerWidth <= 768) cardsToShow = 2;
                if (window.innerWidth <= 480) cardsToShow = 1;


                prevBtn.disabled = currentIndex === 0;

                driverNextBtn.disabled = currentIndex >= driverCards.length - cardsToShow;
            }

            driverNextBtn.addEventListener('click', () => {
                moveToCard(currentIndex + 1);
            });

            driverPrevBtn.addEventListener('click', () => {
                moveToCard(currentIndex - 1);
            });

            window.addEventListener('resize', updateDriverButtons);
            

            updateDriverButtons();
        }
    }
});


// fungsi untuk pergerakan konten tim
document.addEventListener('DOMContentLoaded', function() {
    const teamTrack = document.querySelector('.team-slider-track');

    if (teamTrack) {
        const teamSlides = Array.from(teamTrack.children);
        const teamNextBtn = document.getElementById('teamNextBtn');
        const teamPrevBtn = document.getElementById('teamPrevBtn');

        if (teamSlides.length > 0 && teamNextBtn && teamPrevBtn) {
            let currentIndex = 0;

            const moveToSlide = (index) => {
                teamTrack.style.transform = 'translateX(-' + index * 100 + '%)';
                currentIndex = index;
                updateTeamButtons();
            };

            const updateTeamButtons = () => {
                teamPrevBtn.disabled = currentIndex === 0;
                teamNextBtn.disabled = currentIndex === teamSlides.length - 1;
            };

            teamNextBtn.addEventListener('click', () => {
                moveToSlide(currentIndex + 1);
            });

            teamPrevBtn.addEventListener('click', () => {
                moveToSlide(currentIndex - 1);
            });

            updateTeamButtons();
        }
    }
});