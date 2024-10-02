function zad1() {
    odp = document.getElementById("odp");
    nr = document.getElementById("nr").value;
    check = document.getElementById("check");
    if (nr > 1 && nr < 50) {
        if (check.checked) {
            c = (nr * 2) - (0.2 * nr);
            odp.innerHTML = "Koszt ogłoszeń: " + c + " PLN";
        } else {
            c = nr * 2;
            odp.innerHTML = "Koszt ogłoszeń: " + c + " PLN";
        }
    } else if (nr => 51) {
        if (check.checked) {
            c = (nr) - (0.2 * nr);
            odp.innerHTML = "Koszt ogłoszeń: " + c + " PLN";
        } else {
            c = nr;
            odp.innerHTML = "Koszt ogłoszeń: " + c + " PLN";
        }
    } else {
        odp.innerHTML = "Podaj poprawną liczbę ogłoszeń";
    }
}
