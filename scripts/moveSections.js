$(document).ready(
    function (){
        let sections =["home", "about", "team", "resources", "contacts"];
        let currentOne = 0;
        $(document).keydown(function(e) {
            switch(e.which) {

                case 38: // up
                    navigate("up");
                    break;

                case 40: // down
                    navigate("down");
                    break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });

        $("#homeText em").click(function () {
            let destination = "about";
            let end = sections.findIndex(function (element){
                return element===destination;
            });
            let dir ="down";
            let count = currentOne;
            while (count!==end){
                navigate(dir);
                (dir==="down") ? count++ : count--;
            }
        });

        $("#redirectToContacts").click(function () {
            let destination = "contacts";
            let end = sections.findIndex(function (element){
                return element===destination;
            });
            let dir ="down";
            let count = currentOne;
            while (count!==end){
                navigate(dir);
                (dir==="down") ? count++ : count--;
            }

        });

        $(".dropdown_item").click(function () {
            let beg = currentOne;
            // let destination = $(this).attr('id');
            let destination = this.id;
            destination = destination.substring(3);
            let end = sections.findIndex(function (element){
                return element===destination;
            });

            let dir,diff;
            diff = beg - end;
            if (diff > 0){
                dir="up";
            }
            else if (diff < 0){
                dir="down";
            }
            let count = beg;
            while (count!==end){
                navigate(dir);
                (dir==="down") ? count++ : count--;
            }

        })
        $(".sections").click(function () {
            let beg = currentOne;
            // let destination = $(this).attr('id');
            let destination = this.id;
            destination = destination.substring(4);
            let end = sections.findIndex(function (element){
                return element===destination;
            });

            let dir,diff;
            diff = beg - end;
            if (diff > 0){
                dir="up";
            }
            else if (diff < 0){
                dir="down";
            }
            let count = beg;
            while (count!==end){
                navigate(dir);
                (dir==="down") ? count++ : count--;
            }

            // navigateTo(currentSection,destination);
        });

        function navigate(direction) {
            let destination;
            let currentSection = sections[currentOne];
            if(direction==="up"){
                (currentOne >= 1) ? currentOne -- : currentOne;
                destination = sections[currentOne];
            }
            else{
                (currentOne <= sections.length-2 ) ?currentOne ++ : currentOne;
                destination = sections[currentOne];
            }
            navigateTo(currentSection,destination,direction);
        }

        function navigateTo(currentSection,destination,direction){
            if (currentSection === destination){
            }
            else if (direction === 'down'){
                $("#"+destination).slideDown("slow");
                $("#"+currentSection).hide();
            }
            else{
                $("#"+destination).show();
                $("#"+currentSection).slideUp("slow");
            }
            indicator(currentSection,destination);
        }

        function indicator(currentSection, destination) {
            $("#ind-"+currentSection).css({color:"white",
                fontWeight:"700"});
            if (destination === "team"){
                $("#ind-"+destination).css({color:"#1E6F94",
                    fontWeight:"bold"});
            }
            else{
                $("#ind-"+destination).css({color:"#dcd214",
                    fontWeight:"bold"});
            }
        }

    });
