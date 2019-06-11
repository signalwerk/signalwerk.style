# H1
## H2
### H3

Test





| RegEx    | Text                     | Findet          | Erklärung                                                                                                                                                       |
|----------|--------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `a`        | Hallo.                   | a               | Das `a` ist ein Zeichen ohne spezieller Funktion und wird somit auch im Text gefunden                                                                             |
| `\x{0061}` | Hallo.                   | a               | Zeichen können auch als Unicode-Wert angegeben werden (`U+0060` = `a`)                                                                                              |
| `.`        | Ja.                      | J, a, .   | Der Punkt dient als Platzhalter für alle Zeichen. Somit werden alle Zeichen gefunden.                                                                           |
| `.auch`    | Rauch<br/>Bauch<br/>auch | Rauch<br/>Bauch | Das Platzhalter Zeichen (`.`) findet sowohl ein `R`, wie auch ein `B`. Das Wort `auch` wird jedoch nicht gefunden, da das Platzhalterzeichen nicht gefüllt werden kann. |
| `\.`       | Hallo.                   | .               | Möchte man lediglich einen Punkt suchen, so wird dieser als `\.` gesucht.                                                                                         |
| `\\`       | \o/                      | \               | Back-Slash wird mit `\\` gefunden.                                                                                                                                |
