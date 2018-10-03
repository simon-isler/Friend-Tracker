/*
Autor: Simon Isler
Datum: 03.10.2018

Dieses Javascript-File speichert die Benutzer-Eingaben. Falls die Eingabe erfolgreich ist und das Datum
noch nicht besetzt ist, dann wird die Veranstaltung bei dem Belegungsplan (belegungsplan.html) hinzugefügt.
 */

// Eingabe
function saveRequest() {
    // Eingabe speichern
    var betreff = document.getElementById('betreff').value;
    var vorname = document.getElementById('vorname').value;
    var nachname = document.getElementById('nachname').value;
    var email = document.getElementById('e-mail').value;
    var startdatum = document.getElementById('startdatum').value;
    var enddatum = document.getElementById('enddatum').value;
    var startzeit = document.getElementById('startzeit').value;
    var endzeit = document.getElementById('endzeit').value;
}