/*
Autor: Simon Isler
Datum: 03.10.2018

Dieses Javascript-File speichert die Benutzer-Eingaben. Falls die Eingabe erfolgreich ist und das Datum
noch nicht besetzt ist, dann wird die Veranstaltung bei dem Belegungsplan (belegungsplan.html) hinzugefügt.
 */

// Datenverarbeitung (lokal)
class UserService {
    // Initialisieren
    constructor (empty) {
        this._NAME = 'USERSERVICE';
        this._items = [];

            // Array leeren
            if (empty === true) {
                console.log('init empty');
                localStorage.removeItem(this._NAME); // clear data
                this._items = [];
                localStorage.setItem(this._NAME, JSON.stringify(this._items)); // init empty
            } else {
                // falls array nicht leer ist
                this._items = JSON.parse(localStorage.getItem(this._NAME));

                if (this._items == null) {
                    this._items = []; // clear data
                }

                console.log('init');
                console.log(this._items);
            }
        };

    // Daten anzeigen
    getUsers() {
        return this._items;
    };

    // Daten hinzufügen
    addUser(betreff, vorname, nachname, email, startdatum, enddatum, startzeit, endzeit) {
        this._items.push({betreff: betreff, vorname: vorname, nachname: nachname, email: email, startdatum: startdatum, enddatum: enddatum, startzeit: startzeit, endzeit: endzeit});

        console.log(this._items);
        localStorage.setItem(this._NAME, JSON.stringify(this._items));
    }

    removeUser(name) {
        for(var i = this._items.length - 1; i >= 0; i--) {
            if(this._items[i].betreff === document.getElementById('betreff').value) {
                this._items.splice(i, 1);
            }
        }

        console.log(this._items);
        localStorage.setItem(this._NAME, JSON.stringify(this._items));
    }
}

// Events hinzufügen
function addEvent() {
    // Eingabe speichern
    var betreffTxt = document.getElementById('betreff').value;
    var vornameTxt = document.getElementById('vorname').value;
    var nachnameTxt = document.getElementById('nachname').value;
    var emailTxt = document.getElementById('e-mail').value;
    var startdatumTxt = document.getElementById('startdatum').value;
    var enddatumTxt = document.getElementById('enddatum').value;
    var startzeitTxt = document.getElementById('startzeit').value;
    var endzeitTxt = document.getElementById('endzeit').value;

    // UserService aufrufen
    var userService = new UserService();

    // Hinzufügen
    userService.addUser(betreffTxt, vornameTxt, nachnameTxt, emailTxt, startdatumTxt, enddatumTxt, startzeitTxt, endzeitTxt);
}

// Events löschen
function remove() {
    // UserService aufrufen
    var userService = new UserService();

    // Eingabe mit einem bestimmten Betreff wird gelöscht
    userService.removeUser(document.getElementById('betreff').value);
}


