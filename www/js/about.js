// Open any external link with InAppBrowser Plugin
$(document).on('click', 'a[href^=http], a[href^=https]', function(e){
    e.preventDefault();
    window.open($(this).attr('href'), '_system');
});
