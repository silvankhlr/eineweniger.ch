# eineweniger.ch – Oneless

Onepager der Berner Bluesband **Oneless**. Die Seite ist rein statisch (HTML, CSS und etwas JS), braucht keinen Build-Schritt und wird über GitHub Pages ausgeliefert.

## Struktur

```
index.html            Die ganze Seite (alle Inhalte)
404.html              Fehlerseite
assets/css/style.css  Styles (Farben als CSS-Variablen in :root)
assets/js/main.js     Navigation, Einblenden, Lightbox, Audio
assets/img/           Logo und Fotos
assets/audio/         MP3s (siehe assets/audio/README.md)
CNAME                 Custom Domain für GitHub Pages
```

## Lokal ansehen

```bash
python -m http.server 8080
```

Danach http://localhost:8080 öffnen.

## Inhalte pflegen

- **Texte, Mitglieder, Timeline, Kontakt:** direkt in `index.html` bearbeiten.
- **Auftritte:** in `index.html` im Abschnitt `#auftritte`. Kommende Termine kommen in die Box „Nächste Auftritte“, vergangene als `<li>` ins passende Jahr. Ältere Jahre stehen im aufklappbaren Block „Frühere Auftritte“.
- **Songs:** MP3 nach `assets/audio/` legen und in `index.html` im Abschnitt `#musik` eine `<article class="song">`-Karte kopieren.
- **Fotos:** nach `assets/img/` legen. Sie werden per CSS automatisch schwarzweiss dargestellt.

## Deployment (GitHub Pages)

1. Auf `main` pushen.
2. Auf GitHub unter **Settings → Pages**: Source „Deploy from a branch“, Branch `main` und Ordner `/ (root)` wählen.
3. Bei **Custom domain** `eineweniger.ch` eintragen (die Datei `CNAME` existiert bereits). Wenn das Zertifikat bereit ist, **Enforce HTTPS** aktivieren.

## DNS bei Infomaniak einrichten

Die Domain und ihre DNS-Zone liegen bei Infomaniak (Nameserver `nsany1/nsany2.infomaniak.com`). Im Infomaniak Manager unter Domains → eineweniger.ch → DNS-Zone folgende Einträge hinzufügen:

| Typ   | Name  | Wert                    |
|-------|-------|-------------------------|
| A     | @     | 185.199.108.153         |
| A     | @     | 185.199.109.153         |
| A     | @     | 185.199.110.153         |
| A     | @     | 185.199.111.153         |
| AAAA  | @     | 2606:50c0:8000::153     |
| AAAA  | @     | 2606:50c0:8001::153     |
| AAAA  | @     | 2606:50c0:8002::153     |
| AAAA  | @     | 2606:50c0:8003::153     |
| CNAME | www   | silvankhlr.github.io.   |

- Den bestehenden TXT-Eintrag `v=spf1 -all` stehen lassen.
- Optional die Domain in den GitHub-Kontoeinstellungen (Profil → Settings → Pages) verifizieren, damit niemand sonst sie für Pages nutzen kann. GitHub nennt dafür einen TXT-Eintrag, der ebenfalls in die DNS-Zone kommt.
- **E-Mail:** `info@eineweniger.ch` läuft über den Mail-Dienst von Infomaniak (MX `mta-gw.infomaniak.ch`, SPF `include:spf.infomaniak.ch`). Diese Einträge nicht entfernen.
