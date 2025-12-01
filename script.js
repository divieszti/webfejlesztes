const form = document.getElementById('velemenyForm');

// elemek referenciái
const nev = document.getElementById('nev');
const telefon = document.getElementById('telefon');
const email = document.getElementById('email');
const datum = document.getElementById('datum');
const desszert = document.getElementById('desszert');
const robot = document.getElementById('robot');
const velemeny = document.getElementById('velemeny');

// hibaüzenet tárolók
const errorNev = document.getElementById('error-nev');
const errorTel = document.getElementById('error-tel');
const errorEmail = document.getElementById('error-email');
const errorDatum = document.getElementById('error-datum');
const errorDesszert = document.getElementById('error-desszert');
const errorRobot = document.getElementById('error-robot');
const errorVelemeny = document.getElementById('error-velemeny');

form.addEventListener('submit', function(event) {
    let isValid = true;

    // előző hibák törlése
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(el => el.textContent = '');
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(el => el.classList.remove('input-error'));

    //VALIDÁCIÓK 

    // név
    if (nev.value.trim() === '') {
        errorNev.textContent = 'a név megadása kötelező!';
        nev.classList.add('input-error');
        isValid = false;
    }

    // email
    if (email.value.trim() === '' || !email.checkValidity()) {
        errorEmail.textContent = 'érvényes email címet adj meg!';
        email.classList.add('input-error');
        isValid = false;
    }

    // dátum
    if (datum.value === '') {
        errorDatum.textContent = 'a születési dátum megadása kötelező!';
        datum.classList.add('input-error');
        isValid = false;
    }

    // desszert select
    if (desszert.value === '') {
        errorDesszert.textContent = 'válassz kedvenc desszertet!';
        desszert.classList.add('input-error');
        isValid = false;
    }

    // checkbox
    if (!robot.checked) {
        errorRobot.textContent = 'jelöld be, hogy nem vagy robot!';
        isValid = false;
    }

    // vélemény
    if (velemeny.value.trim() === '') {
        errorVelemeny.textContent = 'írd meg a véleményed!';
        velemeny.classList.add('input-error');
        isValid = false;
    }

    // DÖNTÉS 
    if (!isValid) {
        event.preventDefault(); // Megállítjuk a küldést
        console.log('Hiba az űrlapon!');
    } else {
        console.log('Minden adat rendben, küldés...');
    }
});
