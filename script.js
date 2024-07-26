function highlightTab(element) {
    // Remove the active class from all tabs
    var tabs = document.querySelectorAll('.tabs p');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Add the active class to the clicked tab
    element.classList.add('active');
}
