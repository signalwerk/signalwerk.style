## Numbered List

1. Item 1
   1. Item 1
   2. Item 2
   3. Item 3
2. Item 2
3. Item 3

## Unordered List

- Item 1
  - Item 1.1
  - Item 1.2
  - Item 1.3
- Item 2
- Item 3

# H1

## H2

### H3

Test

| Numbers | Text                     | Findet          | Erklärung                                                                                                                                                               |
| ------- | ------------------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1111111 | Hallo.                   | a               | Das `a` ist ein Zeichen ohne spezieller Funktion und wird somit auch im Text gefunden                                                                                   |
| 9999999 | Hallo.                   | a               | Zeichen können auch als Unicode-Wert angegeben werden (`U+0060` = `a`)                                                                                                  |
| 1111111 | Ja.                      | J, a, .         | Der Punkt dient als Platzhalter für alle Zeichen. Somit werden alle Zeichen gefunden.                                                                                   |
| 1111111 | Rauch<br/>Bauch<br/>auch | Rauch<br/>Bauch | Das Platzhalter Zeichen (`.`) findet sowohl ein `R`, wie auch ein `B`. Das Wort `auch` wird jedoch nicht gefunden, da das Platzhalterzeichen nicht gefüllt werden kann. |
| 1111111 | Hallo.                   | .               | Möchte man lediglich einen Punkt suchen, so wird dieser als `\.` gesucht.                                                                                               |
| 1111111 | \o/                      | \               | Back-Slash wird mit `\\` gefunden.                                                                                                                                      |
