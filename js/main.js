$(document).ready(function() {

});
$(".MO").click(function() {
    var nodo = $(this).attr("href");

    if ($(nodo).is(":visible")) {
        return false;
    } else {
        $(".oculto").css("display", "none");
        $(nodo).show("slide", {direction: "up"}, 1000);

        return false;
    }
});
