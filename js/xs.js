if (xs.matches) {
	  $('.space').show();
	   /* changes all the revealed statemetents to names */
  $("#revealAll").click(function(e) {
	   $(".navText").hide();
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
		  $("#thesisStatement").animate({"margin-top":"50px"}, 500);
		  $("#about").hide(100);
		  aboutUp=false;
		  window.setTimeout("$('#thesisStatement').css('z-index','1')",1000);
 		 $(".navText").hide();
			 $(".navText").hide();
	  }

  });
  
  
	 
  
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
		  $("#thesisStatement").animate({"margin-top":"-1000px"}, 500);
		  aboutUp=true;
		  $("#aboutClick").html('<div class="navText">Close</div>&para;');
		  $(".navText").hide();

	  }

	  else if(aboutUp){

		  $("#about").animate({"margin-top":"1000px"}, 500);
		  $("#about").animate({"opacity":"0"}, 200);
		  $("#thesisStatement").animate({"margin-top":"50px"}, 500);
		  $("#about").hide(100);
		  aboutUp=false;
		  window.setTimeout("$('#thesisStatement').css('z-index','1')",1000);

		  $("#aboutClick").html('<div class="navText">About</div>&dagger;');
		  $(".navText").hide();

	  }
  });
  
  
  }// JavaScript Document