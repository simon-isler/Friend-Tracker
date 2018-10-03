/*
Autor: Simon Isler
Datum: 03.10.2018

Dieses Javascript-File speichert die Benutzer-Eingaben. Falls die Eingabe erfolgreich ist und das Datum
noch nicht besetzt ist, dann wird die Veranstaltung bei dem Belegungsplan (belegungsplan.html) hinzugefügt.
 */

// Datenverarbeitung (lokal)
function UserServices() {
    _NAME = 'USERSERVICE',
        _items = [],

        // Initialisieren
        this.initialize = function(empty) {
            // Array leeren
            if (empty === true) {
                console.log('init empty');
                localStorage.removeItem(_NAME); // clear data
                _items = [];
                localStorage.setItem(_NAME, JSON.stringify(_items)); // init empty
            } else {
                // falls array nicht leer ist
                _items = JSON.parse(localStorage.getItem(_NAME));

                if (_items == null) {
                    _items = []; // clear data
                }

                console.log('init');
                console.log(_items);
            }
        };

    // Daten anzeigen
    this.getUsers = function() {
        return _items;
    };

    // Daten hinzufügen
    this.addUser = function(name, age) {
        _items.push({name: name, age: age});

        console.log('items added');
        console.log(_items);
        localStorage.setItem(_NAME, JSON.stringify(_items));
    }
}

// Eingabe speichern
function saveRequest() {
    var betreff = document.getElementById('betreff').value;
    var vorname = document.getElementById('vorname').value;
    var nachname = document.getElementById('nachname').value;
    var email = document.getElementById('e-mail').value;
    var startdatum = document.getElementById('startdatum').value;
    var enddatum = document.getElementById('enddatum').value;
    var startzeit = document.getElementById('startzeit').value;
    var endzeit = document.getElementById('endzeit').value;
}


