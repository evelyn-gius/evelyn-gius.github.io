// Hilfsfunktion zum Extrahieren von Überschriften aus dem Inhalt
function findHeadings(content) {
    var headings = [];
    var parser = new DOMParser();
    var doc = parser.parseFromString(content, 'text/html');
    var h2Elements = doc.querySelectorAll('h2');
    h2Elements.forEach(function(element) {
        headings.push({
            Text: element.textContent,
            Identifier: element.id
        });
    });
    return headings;
}
