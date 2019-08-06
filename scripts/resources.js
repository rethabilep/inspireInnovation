$(document).ready(function() {
    let resources = [{
        id: "res1",
        file: "1.Business_Plan_Template.docx",
        link: "https://docs.google.com/document/d/10-X9DOF9Nj33I3YwRe05pT8cgcMOBI2DRRq5nG6CF6w/edit",
        preview: "<iframe id=\"preview\" src=\"https://docs.google.com/document/d/e/2PACX-1vTdzDCiI8jP69DWPgQ6BQ2QIRMrJ7-I5RNPkBxjRSpevgYKFVjdJl5QBYOkmcEjjvyuPvsrbNVcP3Gd/pub?embedded=true\"></iframe>"
    }, {
        id: "res2",
        file: "2.Income-statement-example.xls",
        link: "https://docs.google.com/spreadsheets/d/14WFpD__I6oQVsWW1PIkmQ8UrltaCDO2kFtj3eQKJdJY/edit?ouid=109859113069779549577&usp=sheets_home&ths=true",
        preview: "<iframe id=\"preview\" src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vRU3u1py6slWpYz9z-76YdaftBtWLLdOc2eAuv54E0aDrGG2AUU45-jJYByK6TiFrH5EaKBMDovOhu6/pubhtml?widget=true&amp;headers=false\"></iframe>"
    }, {
        id: "res3",
        file: "3.Investor-Pitch-Deck-Template.ppt",
        link: "https://docs.google.com/presentation/d/1QBONMT3mhznS2TJdeYEKeJlMFt7eJxbO1mZR8km6EII/edit",
        preview: "<iframe id=\"preview\" class=\"slides\" src=\"https://docs.google.com/presentation/d/e/2PACX-1vQU_LzY4GR40TiKRDoPLwvfOJeQEmihTHegO6Sg86F03KBEpa5ygTtHOeYE3HPvIQ1vs9qKSBX90T8q/embed?start=true&loop=true&delayms=3000\" frameborder=\"0\" width=\"960\" height=\"749\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>"
    }];
    //    NOTE: add class="slides" for presentational content

    $(window).resize(function() {
        if ($(window).width() < 767) {
            let a = $(".resource").toArray();
            let index = 0;
            $.map(a, function(i) {
                let id = i.id;
                let resource = resources[index];
                console.log(id);
                $(id).attr('href', "resources/" + resource.file);
                index++;
            })
        }
    });

    $('.resource').click(function() {
        let id = this.id;
        reset();
        $("#" + id + "> p").css({
            color: "blue"
        });
        let index = resources.findIndex(function(element) {
            return element.id === id;
        });
        let resource = resources[index];
        $("#previewDownloadIcon").attr('href', "resources/" + resource.file);
        $("#previewViewIcon").attr('href', resource.link);
        $("#previewScreen").empty().append(resource.preview);
    });

    function reset() {
        let a = $(".resource").toArray();
        $.map(a, function(i) {
            let id = i.id;
            $("#" + id + "> p").css({
                color: "white"
            });
        });
    }

    // TODO: Make the resources downloadable on mobile.

});
// (function(a) {
//     (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
// })