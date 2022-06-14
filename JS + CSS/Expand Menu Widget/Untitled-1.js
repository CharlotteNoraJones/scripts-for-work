// expand menu v3
$(window).on("load", function () {
    $("#menubutton").click(function () {
        $("#m3 div.generated-links ul li.has-child").attr("class", "has-child open");
    });
  });

window.addEventListener('resize', (event) => {
    $("#m3 div.generated-links ul li.has-child").attr("class", "has-child open");
});

setTimeout(() => {
    $("#menubutton").click(function () {
        $("#m3 div.generated-links ul li.has-child").attr("class", "has-child open");
    });
}, 2000);