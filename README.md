# webfejlesztes
informatika és IT architektúra beadandó
1. készítette:  Diviánszky Eszter
2. URL cím: https://divieszti.github.io/webfejlesztes/ 
3. leírás: 
A Liget Bisztró nevű debreceni étteremről készítettem egy weblapot. Megtalálható rajta a kínálat, véleményt is lehet küldeni illetve egy játékot is ki lehet próbálni.
4. JavaScript kód helyének és működésének leírása:
helye:
<script src=“script.js’ defer></script>; <script src=“scriptjatek.js’ defer></script>
a Javascript kódok külső fájlokban találhatóak, a defer attribútum biztosítja, hogy a JS kódok csak a HTML kód teljes betöltése után fussanak le
script.js:
1. megkeresi a html-ben azt az elemet aminek az id attribútuma ‘velemenyForm’, a talált elemet lementi a form változóba
2. változókhoz csatoltam az elemeket (input, select, textarea)
3. hibaüzenet tárolók: amikor a felhasználó nem jól ad meg egy adatot, akkor ezekbe a változókba kerül az üzenet
4. amikor a a felhasználó rákattint a vélemény küldése gombra, akkor lefuttatja a kódot
5. a kód ellenőrzi, hogy minden mező helyesen van e kitöltve, és ha nem megállítja az űrlap elküldését
6. minden elküldés előtt törli a hibaüzeneteket, eltávolítja az összes input-error osztályt a mezőkről, hogy a korábbi hibák ne látszódjanak
7. validáció: ellenőrzi, hogy  a felhasználó minden üzenetet helyesen töltött-e ki
8. ellenőrzi, hogy a név mező nem-e  üres, hogy az email mező nem üres és érvényes az email cím (@, domain), hogy a születési dátum ki legyen töltve, hogy választott-e kedvenc desszertet, hogy bepipálta-e, hogy nem robot, hogy nem-e üres a vélemény mező
9. ha van hibás mező, akkor hibaüzenetet jelenít meg, illetve piros lesz a keret, és nem küldi el az űrlapot, ha viszont minden rendben van, akkor elküldi az űrlapot
jatekscript.js: 
1. lekéri az összes rádiógombot
2. ellenőrzi, hogy minden kérdés ki van-e töltve, ha nem, vagyis kevesebb checked van, mint 10, akkor figyelmeztetést ír ki
3. a 3 burger típus változó számolja, hogy az egyes típusokból hányat jelölt be a felhasználó 
4. végigmegy a kód minden válaszon, és a megfelelő számlálót növeli (minden radio-nak megnézi az értékét)
5. a 3 számláló közül kiválasztja a legnagyobbat, és az ehhez tartozó szöveget eltárolja a result változóban
6. az id=‘eredmeny’ nevű elembe belerakja  a result szövegét
7. a kvíz kérdéseit eltűnteti
8. megjeleníti az elemet (ami eddig rejtve volt)
5. használt Google Fonts betűtípus: 
HTML head részében: 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Grandstander:wght@100..900&display=swap" rel="stylesheet">
CSS-ben: font-family: "Grandstander", cursive; 
6. külső források:
A fejlesztés során csak a ChatGPT-t használtam segítségként, magyarázatok és kódrészek megértéséhez és elkészítéséhez.

