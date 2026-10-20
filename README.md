# Oneless – Bluesband aus Bern

Website der Berner Bluesband **Oneless** mit Pädl, Bruni und Reti.

🌐 **[eineweniger.ch](https://eineweniger.ch)**

## Über die Seite

Ein schlichter Onepager mit allem, was eine Band-Website braucht:

- **Band**: die drei Bandmitglieder und ihre Instrumente
- **Musik**: Songs zum Reinhören direkt im Browser
- **Geschichte**: von OliMeetsDänel (2002) über MeetatHome bis Oneless
- **Auftritte**: kommende und vergangene Gigs
- **Galerie**: Live-Fotos mit Lightbox
- **Kontakt**: Buchungsanfragen per Telefon oder E-Mail

## Technik

- Reines HTML, CSS und Vanilla JavaScript, ohne Framework und ohne Build-Schritt
- Responsive, Mobile-first
- Barrierearm: semantisches HTML, Skip-Link, Fokus-Stile, Kontrast nach WCAG AA
- Strukturierte Daten (JSON-LD `MusicGroup`) und Open-Graph-Tags
- Gehostet mit GitHub Pages

## Struktur

```
index.html          Die gesamte Seite
404.html            Fehlerseite
assets/css/         Styles (Farben als CSS-Variablen)
assets/js/          Navigation, Einblend-Effekte, Lightbox, Audio
assets/img/         Logo und Fotos
assets/audio/       Songs (MP3)
```

## Lokal starten

```bash
python -m http.server 8080
```

Danach http://localhost:8080 im Browser öffnen.

## Schriften

[Poppins](https://fonts.google.com/specimen/Poppins) und [Lato](https://fonts.google.com/specimen/Lato), beide unter der SIL Open Font License.

## Rechte

© Oneless. Fotos, Aufnahmen, Texte und Logo gehören der Band und dürfen nicht ohne Erlaubnis verwendet werden.
