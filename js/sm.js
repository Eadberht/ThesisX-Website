else if ((sm.matches) || (md.matches) || (lg.matches)) {
	  $(".space").hide();
	  
	   /* changes all the revealed statemetents to names */
  $("#revealAll").click(function(e) {
	  namesShown = !namesShown;
	  for ( var i = 0; i < studentNames.length; i++) {
		  $(".studentName").eq(i).text(function(a, text){
			  if (namesShown) {
			  $(this).removeClass('swap');
			  return studentQuotes[i];

		  }
		  else {
			  $(this).addClass('swap');
			  return studentNames[i];
		  }
		});
	  }


	   if(aboutUp){

		  $("#about").animate({"margin-top":"1000px"}, 500);
		  $("#about").animate({"opacity":"0"}, 200);
		  $("#thesisStatement").animate({"margin-top":"0px"}, 500);
		  $("#about").hide(100);
		  aboutUp=false;
		  window.setTimeout("$('#thesisStatement').css('z-index','1')",1000);

		  $("#aboutClick").html('<div class="navText">About</div>&dagger;');

	  }

  });
  
	  /* Uses the punctuation to zoom to the student pages ".space" */
  $(".studentPage").click(function(evt) {

	  var index = $(this).children(".space").index(".space");

		
	   //if( $(".studentPage").data('clicked') == 'close'){
	  whosOpen=index;
	  $(this).removeClass('shake-chunk');
	  $(this).children(".space").show();
	  $(this).children(".space").zoomTo({targetsize:.8, duration:1000, closeclick: false});
	 
	  //$("#navi").eq(whosOpen-1).animate({"width":"200px"},2000);
	  evt.stopPropagation();
	  $(".studentPage").data('clicked','open');
	   //}
	   
	   if($(".studentPage").data('clicked')=='open'){
	 	$("#aboutClick").html('<div class="navText">Close</div>&para;');
		$(".navText").hide();
	  	$("#revealAll").hide();
		 //$("#navi").animate({"padding-top":"10px"},500);
		 $("#navi img").animate({"opacity":"0"},200);
		}
	
	$('.studentPage').css( 'cursor', 'default' );
	
  });
  
	   /* Reveals the nav button names */
   $("#revealAll").hover(
   	function(){

	  $(".navText").eq(0).show("slide", {direction: "right" }, "fast");
	  $(".navText").data('open','yes');

  	},
 	 function(){

	  $(".navText").eq(0).hide("slide", {direction: "right" }, "fast");
	  $(".navText").data('open','no');

 	 });


  /* Reveals the nav about button name */
  $("#aboutClick").hover(
  	function(){

	  if($(".navText").data('open')=='no'){

	 	 $(".navText").eq(1).show("slide", {direction: "right" }, "fast");
	  }

	  },

	function(){

	  	$(".navText").eq(1).hide("slide", {direction: "right" }, "fast");

  });
  
 	 $(".studentName").css("opacity","0");
	 /* Slides up about box & changes Pilcro*/
  $("#aboutClick").click(function(e) {

	  var dWidth = $(window).width();
	  
	    if($(".studentPage").data('clicked')=='open'){
			 $(".space").hide(1000);
	  		$(".studentPage").data('clicked','close');
	 		 $("#mainContainer").zoomTo({targetsize:1, duration:1000});
	 		$("#aboutClick").html('<div class="navText">About</div>&dagger;');
			$(".navText").hide();
	  		$("#revealAll").show();
	    $("#navi").animate({"padding-top":"30"},500);
	   $("#navi img").animate({"opacity":"100"},2000);
		}

	  else if(!aboutUp){

		  $("#thesisStatement").css("z-index","-1");
		  $("#about").show(10);

		  $("#about").animate({"opacity":"100"}, 10);
		 // $("#about").animate({"margin-top":"-300px"}, 'fast', );
		 $("#about").animate( { marginTop: 40 },{ duration: 2000, easing: 'easeOutQuart' });
		  $("#thesisStatement").animate({"margin-top":"-700px"}, 500);
		  aboutUp=true;
		  $("#aboutClick").html('<div class="navText">Close</div>&para;');

	  }

	  else if(aboutUp){

		  $("#about").animate({"margin-top":"1000px"}, 500);
		  $("#about").animate({"opacity":"0"}, 200);
		  $("#thesisStatement").animate({"margin-top":"100px"}, 500);
		  $("#about").hide(100);
		  aboutUp=false;
		  window.setTimeout("$('#thesisStatement').css('z-index','1')",1000);

		  $("#aboutClick").html('<div class="navText">About</div>&dagger;');

	  }
  });
  
  /* ============= Hover Functions ============= */

  /* Reveals student statements */
  $(".studentPage").hover(function(e) {

  var index = $(this).index(".studentPage");
	  if( $(".studentPage").data('clicked')=='close'){

		  $(".studentPage").addClass("shake-chunk");
		  $(".studentName").eq(index).animate({"opacity":"100"},2000);
		  $(".studentName").eq(index).data('on','yes');
		  $('.prevo').css( 'cursor', 'pointer' );
		  $('.nexo').css( 'cursor', 'pointer' );

	  }

	   if( $(".studentPage").data('clicked')=='open'){

		  $(".studentPage").removeClass("shake-chunk");
		  $(".studentName").eq(index).animate({"opacity":"100"},2000);
		  $(".studentName").eq(index).data('on','yes');
		  $('.prevo').css( 'cursor', 'default' );
		  $('.nexo').css( 'cursor', 'default' );

	  }


  });

  /* Reveals student statements with unique IDs */
  $(".studentPage2:eq(0)").hover(function(e) {

  	$(".studentName").eq(0).animate({"opacity":"100"},2000);

  });

  /* Reveals student statements with unique IDs */
  $(".studentPage2:eq(1)").hover(function(e) {

  	$(".studentName").eq(3).animate({"opacity":"100"},2000);

  });

  /* Reveals student statements with unique IDs */
  $(".studentPage2:eq(2)").hover(function(e) {

  	$(".studentName").eq(7).animate({"opacity":"100"},2000);

  });

  /* Reveals student statements with unique IDs */
  $(".studentPage2:eq(3)").hover(function(e) {

  	$(".studentName").eq(9).animate({"opacity":"100"},2000);

  });

  /* Reveals student statements with unique IDs */
  $(".studentPage2:eq(4)").hover(function(e) {

  	$(".studentName").eq(13).animate({"opacity":"100"},2000);

  });

  /* Reveals student statements with unique IDs */
  $(".studentPage2:eq(5)").hover(function(e) {

  	$(".studentName").eq(14).animate({"opacity":"100"},2000);

  });

  /* Changes cursor to indicate clickable punctuation */
  $(".studentPage").hover(function(e) {
  	$('.studentPage').css( 'cursor', 'default' );
 		
		if($(".studentPage").data('clicked')=='close'){
  	$('.studentPage').css( 'cursor', 'pointer' );
 		}
  });

  


    /* Controls the hover box */

  $(".studentName").hover(
  	function(){

	  var index = $(this).index(".studentName");

	  if($(".studentName").eq(index).data('on')==='yes'){

	  	$("#descriptionText").text(function(a, text){

	  		return studentNames[index];
	  	});

		  if(namesShown){

			$("#descriptionText").animate({"opacity":"100"},200);

		  }
	  }

	 },

	function(){

	  $("#descriptionText").animate({"opacity":"0"},200);

  	});
	
	$(".prevo").hover(
	function(){
		if( $(".studentPage").data('clicked') == 'open'){
			$(this).animate({"opacity":".5"},10);
			$('.prevo').css( 'cursor', 'pointer' );
		}
		
	},
	function(){
		$(this).animate({"opacity":"1"},10);
		$('.prevo').css( 'cursor', 'default' );
	});

     $(".nexo").hover(
	function(){
		if( $(".studentPage").data('clicked') == 'open'){
			$(this).animate({"opacity":".5"},10);
			$('.nexo').css( 'cursor', 'pointer' );
		}
		
	},
	function(){
		$(this).animate({"opacity":"1"},10);
		$('.nexo').css( 'cursor', 'default' );
	});
	
	


/* ============= Click Functions ============= */


   $(".prevo").click(function(evt) {
	   if( $(".studentPage").data('clicked') == 'open'){
	  event.stopPropagation();
	  $(".studentPage").removeClass('shake-chunk');
	  $(".space").eq(whosOpen-1).show();
	  $(".space").eq(whosOpen-1).zoomTo({targetsize:.8, duration:2000});
	  $(".studentName").eq(whosOpen-1).animate({"opacity":"100"},2000);
	  $(".studentName").eq(whosOpen-1).data('on','yes');
	  whosOpen=whosOpen-1;
	   }
  });

     $(".nexo").click(function(evt) {
	   if( $(".studentPage").data('clicked') == 'open'){
	  event.stopPropagation();
	  $(".studentPage").removeClass('shake-chunk');
	  $(".space").eq(whosOpen+1).show();
	  $(".space").eq(whosOpen+1).zoomTo({targetsize:.8, duration:2000});
	  $(".studentName").eq(whosOpen+1).animate({"opacity":"100"},2000);
	  $(".studentName").eq(whosOpen+1).data('on','yes');
	  whosOpen=whosOpen+1;
	   }
  });


  /* Controls the hover box */
  $(document).on("keydown", function (e) {
	  if($(".studentPage").data('clicked')=='open'){
	  if(e.which == 39)
	  {
	  $(".studentPage").removeClass('shake-chunk');
	  $(".space").eq(whosOpen+1).show();
	  $(".space").eq(whosOpen+1).zoomTo({targetsize:.8, duration:2000});
	  $(".studentName").eq(whosOpen+1).animate({"opacity":"100"},2000);
	  $(".studentName").eq(whosOpen+1).data('on','yes');
	  whosOpen=whosOpen+1;

	  }

	  if(e.which == 37)
	  {
	  $(".studentPage").removeClass('shake-chunk');
	  $(".space").eq(whosOpen-1).show();
	  $(".space").eq(whosOpen-1).zoomTo({targetsize:.8, duration:2000});
	  $(".studentName").eq(whosOpen-1).animate({"opacity":"100"},2000);
	  $(".studentName").eq(whosOpen-1).data('on','yes');
	  whosOpen=whosOpen-1;
	  }

	  if(e.which == 27)
	  {
		  
	      if($(".studentPage").data('clicked')=='open'){
			 $(".space").hide(1000);
	  		$(".studentPage").data('clicked','close');
	 		 $("#mainContainer").zoomTo({targetsize:1, duration:1000});
	 		$("#aboutClick").html('<div class="navText">About</div>&dagger;');
			$(".navText").hide();
	  		$("#revealAll").show();
	    //$("#navi").animate({"padding-top":"30"},500);
	   	$("#navi img").animate({"opacity":"100"},2000);
		}
	  whosOpen=0;
	  }
	  }
  });

$(".brand").click(function(evt) {
	 $(".space").hide(1000);
	  $(".studentPage").data('clicked','close');
	  $("#mainContainer").zoomTo({targetsize:1, duration:1000});
	 	$("#aboutClick").html('<div class="navText">About</div>&dagger;');
		$(".navText").hide();
	  	$("#revealAll").show();
		 $("#navi").animate({"padding-top":"30"},500);
		 $("#navi img").removeClass('sImg');
});

  /* zooms out to the main page */
  $("#mainContainer").click(function(evt) {
	  $(".space").hide(1000);
	  $(".studentPage").data('clicked','close');
	  $(this).zoomTo({targetsize:1, duration:1000});
	   $("#navi").animate({"padding-top":"30"},500);
	   $("#navi img").animate({"opacity":"100"},2000)
	 	$("#aboutClick").html('<div class="navText">About</div>&dagger;');
		$(".navText").hide();
	  	$("#revealAll").show();
		
  });


  $(window).resize(function() {
	  if($(".studentPage").data('clicked')=='open'){
	 	$(".space").eq(whosOpen).zoomTo({targetsize:.8, duration:20});
	  }
	});


  $( "#mainContainer").mousemove(function( event ) {
  $("#descriptionText").css('margin-left',(event.pageX-20));
  $("#descriptionText").css('margin-top',(event.pageY-60));
  });
  	
  	document.ontouchstart = function(e){ 
		if($(".studentPage").data('clicked')=='open'){
		
		//e.preventDefault(); 
			}
		}
  }