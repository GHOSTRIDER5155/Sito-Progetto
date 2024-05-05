// costruzione della breadcrum
// Ottieni l'URL corrente
var url = window.location.pathname;

// Definisci l'URL della home
var homeUrl = '/';

// Nascondi la breadcrumb se sei nella home
if (url === homeUrl) {
    document.getElementById('breadcrumbs-container').style.display = 'none';
} else {
    // Dividi l'URL in segmenti
    var segments = url.split('/');

    // Rimuovi il primo elemento (vuoto)
    segments.shift();

    // Inizializza la breadcrumb come stringa vuota
    var breadcrumb = '';

    // Costruisci la breadcrumb
    segments.forEach(function(segment, index) {
        // Aggiungi il separatore se non si tratta dell'ultimo segmento
        if (index > 0 && index < segments.length - 1) {
            breadcrumb += ' > ';
        }
        // Aggiungi il link del segmento senza estensione
        var segmentName = segment.split('.')[0]; // Rimuovi l'estensione del file
        if (index < segments.length - 1) {
            breadcrumb += '<a href="/' + segment + '">' + segmentName + '</a>';
        } else {
            // Non aggiungere nulla per l'ultimo segmento
        }
    });

    // Aggiungi la breadcrumb all'elemento HTML con id "breadcrumbs"
    document.getElementById('breadcrumbs').innerHTML = breadcrumb;
}

// Funzione per gestire il cambio di lingua
function cambiaLingua() {
    // Ottieni lo stato dello slider
    var checkbox = document.getElementById("checkbox-language");
    var lingua = checkbox.checked ? "inglese" : "italiano";
    
    // Seleziona gli elementi da tradurre
    var elementiDaTradurre = document.querySelectorAll("[data-" + lingua + "]");
    
    // Modifica il testo degli elementi
    elementiDaTradurre.forEach(function(elemento) {
        // Verifica se l'elemento è un link (<a>)
        if (elemento.tagName.toLowerCase() === "a") {
            // Modifica il testo del link con il testo tradotto
            elemento.textContent = elemento.getAttribute("data-" + lingua);
        } else {
            // Se non è un link, aggiorna il testo del contenuto
            elemento.innerHTML = elemento.getAttribute("data-" + lingua);
        }
    });
}

// Aggiungi un event listener per il cambio di lingua
document.getElementById("checkbox-language").addEventListener("click", cambiaLingua);

// Inizializza la traduzione quando la pagina viene caricata
document.addEventListener("DOMContentLoaded", cambiaLingua);
