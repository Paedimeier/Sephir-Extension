# Sephir Kursbewertung Chrome Extension

Diese Chrome Extension fügt auf sephir.ch einen Link mit Icon ein, sobald der Kursbewertungs-Tag gefunden wird. Über das Popup kann die Funktion an- und ausgeschaltet werden.

## Features
- Zeigt ein Icon-Link direkt auf sephir.ch an, wenn `<div class="titel" align="center"><b>Kursbewertung</b></div>` vorhanden ist
- Klick auf das Icon ruft die Funktion `pf_bew()` auf (wie der Instruktorenbewertung-Link)
- Funktioniert auch in Single Page Applications (SPA) und in iframes
- Aktivierung/Deaktivierung über Popup-Switch
- Keine Icons im Popup, sondern direkt auf der Webseite
- Extension-Icons für Toolbar und Chrome Web Store enthalten

## Installation
1. Repository herunterladen oder entpacken
2. Öffne Chrome und gehe zu `chrome://extensions/`
3. Aktiviere den Entwicklermodus (oben rechts)
4. Klicke auf „Entpackte Erweiterung laden“ und wähle den Projektordner aus
5. Besuche sephir.ch und öffne das Popup, um die Extension zu aktivieren

## Benutzung
- Sobald du auf einer passenden sephir.ch-Seite bist und der Kursbewertungs-Tag vorhanden ist, erscheint das Icon neben der Überschrift.
- Ein Klick auf das Icon öffnet die Kursbewertung (wie der Instruktorenbewertung-Link).
- Über das Popup der Extension kannst du die Funktion jederzeit an- und ausschalten.

## Anpassung
- Das Icon kann im Ordner `images/` durch eigene PNGs ersetzt werden (logo_32.png, logo_64.png, logo_128.png)
- Das SVG-Icon im Link kann im Code (`content.js`) angepasst werden
- Das Styling des Links kann direkt im Code geändert werden

## Hinweise
- Die Extension benötigt nur Zugriff auf sephir.ch und Speicherrechte
- Funktioniert nur auf sephir.ch (inkl. Unterseiten und iframes)
- Keine Daten werden an Dritte übertragen

---

**Support & Feedback:**
Für Fragen oder Verbesserungsvorschläge bitte ein Issue im Repository erstellen oder direkt Kontakt aufnehmen.
