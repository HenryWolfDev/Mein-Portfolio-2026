# 🗂 Angular Projektstruktur – Übersicht & Erklärung

---

## 📁 src/app – Hauptordner der Anwendung

Hier liegt der komplette Anwendungscode: Komponenten, Services, Routing, Layout und Feature-Module.

---

## 📁 core/ – Zentrale Logik (ohne UI)

Enthält Services und Funktionen, die **in der ganzen App verfügbar** sind und **keiner UI-Komponente** direkt zugeordnet werden.

**Beispiele:**

- `scroll.service.ts` – zentrales Scroll-Handling
- `menu.service.ts` – Mobile-Menü Zustand
- `project-data.service.ts` – liefert Projektdaten für Overview & Detail
- Guards (optional)
- Globale State-Logik (optional)

**Regeln:**

- Keine UI-Elemente
- Wird einmalig geladen (Singleton-Services)

---

## 📁 shared/ – Wiederverwendbare UI-Komponenten

UI-Bausteine, die **mehrfach** in unterschiedlichen Features benutzt werden.

**Beispiele:**

- `ui-button/` – global einheitliche Buttons
- `ui-badge/` – Skill-Badges
- `ui-icon/` (optional)
- `section-divider/` – Trenner zwischen Sections
- wiederverwendbare Layout-Hilfs-Komponenten

**Regeln:**

- Nur UI
- Keine Business-Logik
- Muss unabhängig sein (dumm, stateless)

---

## 📁 layout/ – Rahmen & Struktur der App

Komponenten, die den globalen Aufbau definieren:

**Beispiele:**

- `header/` – Navigation (Desktop + Mobile)
- `mobile-menu/` – Mobile Overlay Menü
- `footer/` – Impressum, Datenschutz, Credit

**Regeln:**

- Wird auf jeder Seite angezeigt
- Gehört nicht zu einem Feature

---

## 📁 features/ – Inhaltliche Bereiche (jede Section ein Modul)

Alle eigenständigen Abschnitte deiner Seite.
