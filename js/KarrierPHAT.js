function showContent(contentId,showButtonId,hideButtonId) {
    var content = document.getElementById(contentId);
    var showButton = document.getElementById(showButtonId);
    var hideButton=document.getElementById(hideButtonId)
    content.style.display="block";
    showButton.style.display = 'none'; 
    hideButton.style.display = 'block'; 
}
function hideContent(contentId, showButtonId, hideButtonId) {
    var content = document.getElementById(contentId);
    var showButton = document.getElementById(showButtonId);
    var hideButton = document.getElementById(hideButtonId);
    content.style.display = 'none';
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
}
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    // Beispielhafte Validierung der Eingaben
    let valid = true;
    const requiredFields = ['firstName', 'lastName', 'email'];
    requiredFields.forEach(function(field) {
        const input = document.getElementById(field);
        if (!input.value) {
            valid = false;
            input.nextElementSibling.style.display = 'block';
        } else {
            input.nextElementSibling.style.display = 'none';
        }
    });

    if (valid) {
        // Hier können Sie weitere Verarbeitung durchführen
        alert('Bewerbung erfolgreich eingereicht!');

        // Optional: Leeren Sie das Formular nach der erfolgreichen Einreichung
        document.getElementById('applicationForm').reset();
    } else {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
    }
});

