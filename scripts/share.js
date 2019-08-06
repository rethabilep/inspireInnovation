$(document).ready(
    function (){
        let count = 0;
        $("#share-site").click(function () {
            (count%2===0) ? $("#social-sharing").css({display:"flex"}) : $("#social-sharing").css({display:"none"});
            count++;
        })
    });