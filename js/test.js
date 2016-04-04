var projects = [];
var currentProject = 0;

$(document).ready(function () {
    Zoomerang.config({
        bgOpacity : 0.0,
        bgColor : "#59cbe8",
        maxWidth : $(window).width() * 1.2,
        maxHeight : $(window).height() * 1.2,
        deepCopy : true,
        onBeforeOpen : showProject,
        onOpen : addSpaces,
        onBeforeClose : hideProject,
        onClose : clearProject
    });
    //Zoomerang.listen(".zoomTarget");
    $('#thesisStatement a').click(function (e) {
        Zoomerang.open($(e.target).find(".zoomTarget")[0]);
        $('.sidebar').click(function (e) {
          console.log('clicked');
            if (e.target.dataset.direction == 'prev') {
                changeProject(-1);
            } else {
                changeProject(+1);
            }
        });
    });
    $('body, #currentcontent').click(function (e) {
        Zoomerang.close();
        $('.sidebar').unbind();
    });

    projects = $(".zoomTarget").map(function (i,e) { return e.dataset.project;});
});

function addSpaces(e) {
    $(e).find("span.project").show();
}

function showProject(e) {
    $.get(e.dataset.project + ".html",function (e){
        $('#currentcontent').replaceWith(e);
    });
}

function hideProject(e) {
    $(e).find("span.project").hide();
    $('#currentcontent').fadeOut();
}

function clearProject(e) {
    $("#currentcontent").empty();
}

function changeProject(n) {
    currentProject = currentProject + n;
    if (currentProject < 0)
        currentProject = projects.length - 1;
    if (currentProject >= projects.length)
        currentProject = 0;
    $.get(projects[currentProject] + ".html",function (e){
        $("#currentcontent").replaceWith(e);
    });
}
