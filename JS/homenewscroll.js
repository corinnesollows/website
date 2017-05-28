$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            var id = this.hash;
            var url = document.URL,
            shortUrl = url.substring(0, url.lastIndexOf("/"));
            window.location.href = shortUrl + '/Projects.html' + id;
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});