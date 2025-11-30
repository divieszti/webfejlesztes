function finishQuiz() {
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  if (answers.length < 10) {
    alert("Töltsd ki az összes kérdést!");
    return;
  }

  let klasszik = 0;
  let chili = 0;
  let vega = 0;

  answers.forEach(a => {
    if (a.value === "klasszik") klasszik++;
    if (a.value === "chili") chili++;
    if (a.value === "vega") vega++;
  });

  let result = "";

  if (klasszik >= chili && klasszik >= vega) {
    result = "te egy KLASSZIK BURGER vagy! stabil, megbízható és barátságos személyiség, aki mindig hozza a megszokott hangulatot és nyugalmat a környezetébe. gyere és kóstold meg nálunk!";
  } else if (chili >= klasszik && chili >= vega) {
    result ="te egy CHILI BURGER vagy! tüzes, energikus és kalandvágyó típus, aki sosem fél kipróbálni az izgalmas, csípős dolgokat az életben. gyere és kóstold meg nálunk!";
;
  } else {
    result ="te egy VEGA BURGER vagy! kreatív, könnyed és természetközeli személyiség, aki szereti a friss, egészséges és színes dolgokat körülötte. gyere és kóstold meg nálunk!";
  }

  // kiírjuk az eredményt
  document.getElementById("eredmeny").textContent = result;

  // eltüntetjük a kérdéseket
  document.getElementById("jatekForm").style.display = "none";

  // megjelenítjük a szöveget
  document.getElementById("resultText").style.display = "block";
}