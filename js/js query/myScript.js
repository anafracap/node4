$("#bStart").click(function(){
    $("#initial").toggle();
    $("#bStart").toggle();
    $("#myForm").toggle();
});

$("#bCancel").click(function(){
    $('#myForm')[0].reset();
    $("#initial").toggle();
    $("#bStart").toggle();
    $("#myForm").toggle();
});

$("#myForm").submit(function(){
    alert("You have succesfully logged in");
});
    