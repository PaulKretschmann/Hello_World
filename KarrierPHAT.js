function showContent() {
    var content = document.getElementById("content");
    var showButton = document.getElementById("showButton");
    var hideButton=document.getElementById("hideButton")
    content.style.display="block";
    showButton.style.display = 'none'; 
    hideButton.style.display = 'block'; 
}
function hideContent() {
    var content = document.getElementById('content');
    var showButton = document.getElementById('showButton');
    var hideButton = document.getElementById('hideButton');

    content.style.display = 'none'; 
    showButton.style.display = 'block'; 
    hideButton.style.display = 'none'; 
}
