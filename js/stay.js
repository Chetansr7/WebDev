// Hotel slideshow
let currentHotelSlide = 0;
const hotelSlides = document.querySelectorAll('.hotel img');
const totalHotelSlides = hotelSlides.length;

function showHotelSlide(n) {
    hotelSlides.forEach(slide => slide.style.display = 'none');
    hotelSlides[n].style.display = 'block';
}

function nextHotelSlide() {
    currentHotelSlide = (currentHotelSlide + 1) % totalHotelSlides;
    showHotelSlide(currentHotelSlide);
}

function prevHotelSlide() {
    currentHotelSlide = (currentHotelSlide - 1 + totalHotelSlides) % totalHotelSlides;
    showHotelSlide(currentHotelSlide);
}

showHotelSlide(currentHotelSlide);

// Villas slideshow
let currentVillaSlide = 0;
const villaSlides = document.querySelectorAll('.villa img');
const totalVillaSlides = villaSlides.length;

function showVillaSlide(n) {
    villaSlides.forEach(slide => slide.style.display = 'none');
    villaSlides[n].style.display = 'block';
}

function nextVillaSlide() {
    currentVillaSlide = (currentVillaSlide + 1) % totalVillaSlides;
    showVillaSlide(currentVillaSlide);
}

function prevVillaSlide() {
    currentVillaSlide = (currentVillaSlide - 1 + totalVillaSlides) % totalVillaSlides;
    showVillaSlide(currentVillaSlide);
}

showVillaSlide(currentVillaSlide);

// Airbnb slideshow
let currentAirbnbSlide = 0;
const AirbnbSlides = document.querySelectorAll('.airbnb img');
const totalAirbnbSlides = AirbnbSlides.length;

function showAirbnbSlide(n) {
    AirbnbSlides.forEach(slide => slide.style.display = 'none');
    AirbnbSlides[n].style.display = 'block';
}

function nextAirbnbSlide() {
    currentAirbnbSlide = (currentAirbnbSlide + 1) % totalAirbnbSlides;
    showAirbnbSlide(currentAirbnbSlide);
}

function prevAirbnbSlide() {
    currentAirbnbSlide = (currentAirbnbSlide - 1 + totalAirbnbSlides) % totalAirbnbSlides;
    showAirbnbSlide(currentAirbnbSlide);
}

showAirbnbSlide(currentAirbnbSlide);

// Homestay slideshow
let currenthomeSlide = 0;
const homeSlides = document.querySelectorAll('.homestay img');
const totalhomeSlides = homeSlides.length;

function showhomeSlide(n) {
    homeSlides.forEach(slide => slide.style.display = 'none');
    homeSlides[n].style.display = 'block';
}

function nexthomeSlide() {
    currenthomeSlide = (currenthomeSlide + 1) % totalhomeSlides;
    showhomeSlide(currenthomeSlide);
}

function prevhomeSlide() {
    currenthomeSlide = (currenthomeSlide - 1 + totalhomeSlides) % totalhomeSlides;
    showhomeSlide(currenthomeSlide);
}

showhomeSlide(currenthomeSlide);

// Lodge slideshow
let currentlodgeSlide = 0;
const lodgeSlides = document.querySelectorAll('.lodge img');
const totallodgeSlides = lodgeSlides.length;

function showlodgeSlide(n) {
    lodgeSlides.forEach(slide => slide.style.display = 'none');
    lodgeSlides[n].style.display = 'block';
}

function nextlodgeSlide() {
    currentlodgeSlide = (currentlodgeSlide + 1) % totallodgeSlides;
    showlodgeSlide(currentlodgeSlide);
}

function prevlodgeSlide() {
    currentlodgeSlide = (currentlodgeSlide - 1 + totallodgeSlides) % totallodgeSlides;
    showlodgeSlide(currentlodgeSlide);
}

showlodgeSlide(currentlodgeSlide);
