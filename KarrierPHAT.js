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