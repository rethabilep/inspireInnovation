$(document).ready(
    function (){
        //The following code handles what happens when tabs are selected.
        $(".tab-heading").on('click touchstart',function () {
            let tabName = this.id.substring(3);
            openTab(tabName)
        });

        $("#homeText em").on( 'click touchstart',function () {
            let tabName = this.id.substring(2);
            openTab(tabName);
        });

        function openTab(tabName) {
            let x = $(".tab").toArray();
            $.map(x, function (a) {
                $("#" + a.id).hide();
                $("#btn" + a.id).removeClass("selected");
            });
            $("#" + tabName).css({display: "inline-block"});
            $("#btn" + tabName).addClass("selected");
        }

        //    The following code handles the display of information related to specific services offered under the Learning
        //    Division

        $(".learning-service").click(function (){
            let id = this.id;
            $("#lrnPlatform").css({fontWeight: "normal"});
            $("#lrnClientSolutions").css({fontWeight: "normal"});
            $("#"+id).css({fontWeight: "bold"});
            $("#Platform").hide();
            $("#ClientSolutions").hide();
            id=id.substring(3);
            $("#"+id).show();
        });
    }
);