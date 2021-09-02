(function () {
    console.log("custom scripts loaded!!!")
    $("#show_1").click(function (event) {
        console.log("click detected");
        $("#abstract_1").toggleClass("hideabs");
    });
})