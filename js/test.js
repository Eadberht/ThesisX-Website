var projects = [];
var currentProject = 0;
var tweaks = {"projectA" : {top : '77%'}}

$(document).ready(function () {
    Zoomerang.config({
        transitionDuration : '0.7s',
        bgOpacity : 0.0,
        bgColor : "#59cbe8",
        maxWidth : $(window).width() * 1.2,
        maxHeight : $(window).height() * 1.2,
        deepCopy : true,
        onBeforeOpen : showProject,
        //onOpen : addSpaces,
        onBeforeClose : hideProject,
        onClose : clearProject,
    });
    //Zoomerang.listen(".zoomTarget");
    $('#thesisStatement a').click(function (e) {
        var zt = $(e.target).find(".zoomTarget")[0];
        Zoomerang.open(zt,null,tweaks[zt.dataset.project]);
        // make this less redundant later 
        $('.sidebar').click(function (e) {
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
    $(e).find("span.project").show();
    $.get(e.dataset.project + ".html",function (e){
        $('#currentcontent').append(e).fadeIn();
    });
    
}

function hideProject(e) {
    //$(e).find("span.project").hide();
    $('#currentcontent').fadeOut();
}

function clearProject(e) {
    $(e).find("span.project").hide();
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

