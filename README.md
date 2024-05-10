## DA FIXARE

- Fixare la breadcrumb (non deve portare alla schermata risorse)
- Fixare font di tutto
- Fixare scritta Ringraziamenti nel footer
- Fixare breadcrumb in Lezioni (non deve creare effetto hover come nei link della pagina)
- Fixare in Lezioni immagine (border radius) e testo
- Fixare colore a tutti i titoli
- Fixare pagine Lezioni-signole in modo che siano generali per tutte
- Fixare foto battery in pagina Lezioni-signole
- Fixare Ul nella pagina Lezioni-singole
- Fixare footer pagina Lezioni-singole
- Fixare batteria (UTILIZZARE FONTAWESOME)

## DA MODIFICARE

- Aggiungere animazione sfondo (leggera traslazione verso destra)
- Modificare immagini Home per ogni paragrafo
- Rendere dinamica la percentuale a pagina Materiale-condiviso
- Rendere dinamica la percentuale a pagina Lezioni-singole
- Modificare lo stile della checkbox per il completamento in pagina Lezioni-singole (FONTAWESOME PER LO STILE)
- Modificare stile pulsante aggiunta elementi in pagina Lezioni-singole

## SCRIPTS

### Percentuale materiali

Lo script della percentuale del completamento dei materiali deve comportarsi così:

- SENZA HOVER deve mostrare la percentuale del totale degli argomenti completati
- CON HOVER deve mostrare la percentuale del completamento di quella materia

### Percentuale batteria

La batteria deve rappresentare la percentuale dei completamento di quella materia:

- Sotto il 50% batteria scarica
- Sotto il 75% batteria 50
- Sotto il 100% batteria 75
- Completo batteria carica

### Traduttore

Il traduttore deve funzionare in modo diverso: ogni pagina deve avere la controparte in inglese.
Al cambio lingua deve portare alla pagina corrente ma nella lingua selezionata.
Il cambio lingua deve progredire con la pagina successiva.

### Aggiunta materiali

Questo script deve fare in modo che io posso aggiungere o eliminare un materiale dalla lezione corrente
!!!ATTENZIONE!!
La percentuale ovviamente si deve modificare con l'aggiunta o la rimozione dei materiali

### Bottone cookies

Il bottone cookies in Home deve essere posizionato in basso a sinistra della pagina e deve fare un pop-up con l'hover


## IL LATO SERVER

Bisogna creare una pagina signola in html/css ed un database.
Si creeranno le logiche grazie a php che andrà a prendere le risorse dal database e le metterà all'interno della pagina.

IMPARARE AD USARE PHP E CREARE UN SERVER PER IL DATABASE