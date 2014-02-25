// Nuggets of JavaScript for general use

$( document ).ready(function() {

    // Show large image when small image clicked
    $('#img1, #img2').click(function() {

        $.modal('<img src="' + this.src.replace("small","large")  + '" height="450" width="900">', {
        closeHTML:"",
        containerCss:{
            backgroundColor:"#fff", 
            borderColor:"#fff", 
            height:450, 
            padding:0, 
            width:830
        },
        overlayClose:true
    });

    });
});