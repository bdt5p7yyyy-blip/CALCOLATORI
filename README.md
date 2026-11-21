# CALCOLATORI

App web (PWA) per iPhone e computer: calcolatori per **covered warrant e opzioni di stile europeo**, **coperture con put su indice** e **obbligazioni**.
È un unico file `index.html` pubblicato su GitHub Pages. Funziona anche senza connessione, una volta installata.

## Installazione su iPhone
Apri la pagina in Safari → Condividi → **Aggiungi alla schermata Home**.

## Le sezioni

| Gruppo | Tab | A che cosa serve |
|---|---|---|
| Guida | Guida e backup | Esporta/importa i dati salvati, istruzioni |
| CW & Opzioni | Payoff | Rimborso e P&L a scadenza di un CW |
| | Strategia | Fino a 2 gambe, tabella scenari, export PDF |
| | Confronto CW | Fino a 4 CW: a parità di strike e scadenza vince il premio più basso |
| | IV implicita | Volatilità implicita dal prezzo del CW (Black-Scholes inverso) |
| | Costo annuo | Costo della protezione in % annua del nozionale |
| Coperture | Hedge | Quante put comprare per un capitale; delta-matching |
| | Scala | Gradini di strike da 0 a −30% |
| | Scala Σ | Strike fissi (franchigia), strike sigma e la loro media, con premi teorici |
| | Tracker | Segue le put della scala: semaforo per il rolling |
| | Ladder | Regola del cricchetto e strike invecchiati |
| | Calendario | Quale trancia rinnovare e quando |
| | Riacquisto | Quote per ripristinare un blocco dopo una perdita |
| Obbligazioni | Obbligazioni | Cedola, prezzo massimo, YTM composta e lineare |
| | Confronto Bond | Duration, convessità, stress dei tassi |
| | Bond FX | Rendimento in € di un bond in valuta |
| | Bond TRY | Tracker giornaliero di un bond in lire turche |

## Barra valuta
Nei tab dei CW c'è una barra comune: **sottostante in € o in $**, **CW quanto sì/no** e **cambio EUR/USD**.
Con sottostante in dollari e CW non quanto, il premio in euro viene convertito (premio € × cambio) prima di confrontarlo con l'indice,
e i rimborsi in dollari vengono riportati in euro (÷ cambio).

## Dati
Tracker, Bond TRY e impostazioni restano nel browser del dispositivo (`localStorage`). Dal tab **Guida e backup** si esporta un file JSON e lo si reimporta su un altro dispositivo.

## File
- `index.html` — l'app
- `manifest.webmanifest`, `icons/` — installazione come app
- `sw.js` — funzionamento offline (prima la rete, poi la copia salvata)

Strumento di calcolo: non esegue ordini e non costituisce consulenza finanziaria.
