
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("1500");
        $("#div3").fadeToggle(2000);
    });
});