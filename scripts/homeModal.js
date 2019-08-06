$(document).ready(
    function(){
        // When the user clicks on the "Learn More" button, open the modal
        $(".btn-full").click(function () {
            let id = $(this).attr('id');
            console.log(id);
            $("."+id+" > div.modal" ).show();
            $("#indicator").css({zIndex: "-1"})
        });

        // When the user clicks on <span> (x), close the modal
        $(".close").click(function () {
            $(".modal").hide();
            $("#indicator").css({zIndex: "0"})
        });
    }
);