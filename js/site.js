$(document).ready(function() {
	var whosOpen=0;
	var zoomed = false;
	var aboutUp = false;
	var namesShown = true;
	var studentNames= ["Michael Zibin Yuan","Moein Shashaei","Craig Roberts","Ryan Schoenherr","Alexis Baran","Corwin Green","Emilia Aragon","Katie Wylie","Andrea Laszlo","Aryn Beitz","Nicole Salamone","Jacqueline Anerella","Xinyi Li","Kiran Puri","Dina Michl","Leonor Kerke","Abbey Roam","Melissa Berman"];
	var studentQuotes= ["Login for interactive obedience","scoff at this while reflecting on existence","thou ought to","get in the zone","ultimate empathy","there is strength in numbers","Dead world walking","nature inspires","how do you know","The same only different","Shia LaBeouf","wait what","From this angle","you are when you are where you are","adobe will not fork with you","it is natural entropy","two dyslexics walk into a bra","Design pedagogy reloaded"];
	$(".studentPage").data('clicked','close');
	
	
	/*window.setInterval(function(){
		var rn = Math.floor(Math.random() * 18);
		if(  $('b').data('clicked') == 'yes') {
			$("b").removeClass('shake-constant');
		} else {
		  $("b").eq(rn).addClass('shake-constant');
		}
	}, 1000);*/
	
  
		
		
  $("html").css("opacity","0");
  
   $("html").animate({"opacity":"100"},16000);
  
  
  $(".studentName").css("opacity","0");
	$("#about").hide();
	$(".space").hide();
	$(".navText").hide();
	$(".navText").data('open','no')

	 $(".studentPage").hover(function(e) {
     	var index = $(this).index(".studentPage");
		if( $(".studentPage").data('clicked')=='close'){
		$(".studentPage").addClass("shake-chunk");
    	$(".studentName").eq(index).animate({"opacity":"100"},2000);
		$(".studentName").eq(index).data('on','yes');
		}
    });

	$(".studentPage2:eq(0)").hover(function(e) {
    	$(".studentName").eq(0).animate({"opacity":"100"},2000);
    });
	
	$(".studentPage2:eq(1)").hover(function(e) {
    	$(".studentName").eq(3).animate({"opacity":"100"},2000);
    });
	
	$(".studentPage2:eq(2)").hover(function(e) {
    	$(".studentName").eq(7).animate({"opacity":"100"},2000);
    });
	
	$(".studentPage2:eq(3)").hover(function(e) {
    	$(".studentName").eq(9).animate({"opacity":"100"},2000);
    });
	
	$(".studentPage2:eq(4)").hover(function(e) {
    	$(".studentName").eq(13).animate({"opacity":"100"},2000);
    });
	
	$(".studentPage2:eq(5)").hover(function(e) {
    	$(".studentName").eq(14).animate({"opacity":"100"},2000);
    });




	$(".studentPage").hover(function(e) {
		
        $('.studentPage').css( 'cursor', 'pointer' );
		
    });
	





	 $(".studentPage").click(function(evt) {
		 var index = $(this).children(".space").index(".space");
		 whosOpen=index;
		 $(this).removeClass('shake-chunk');
		$(this).children(".space").show();
        $(this).children(".space").zoomTo({targetsize:.8, duration:1000, closeclick: false});
		/*$(this).zoomTarget();*/;
		//zoomed=true;
		//$(this).data('clicked',true)
		evt.stopPropagation();
		 $(".studentPage").data('clicked','open');
    });
	
	
	
	
	
	$(document).on("keydown", function (e) {
  			if($(".studentPage").data('clicked')=='open'){
				if(e.which == 39)
				{
					$(".studentPage").removeClass('shake-chunk');
					$(".space").eq(whosOpen+1).show();
					$(".space").eq(whosOpen+1).zoomTo({targetsize:.8, duration:2000});
					whosOpen=whosOpen+1;
				}
				
				if(e.which == 37)
				{
					$(".studentPage").removeClass('shake-chunk');
					$(".space").eq(whosOpen-1).show();
					$(".space").eq(whosOpen-1).zoomTo({targetsize:.8, duration:2000});
					whosOpen=whosOpen-1;
				}
			}
		});
	
	
	

	 $("#mainContainer").click(function(evt) {
       $(".space").hide(200);
	   $(".studentPage").data('clicked','close');
	   $("body").zoomTo({targetsize:1, duration:1000});
    });
	
	
	
		



	$("#revealAll").click(function(e) {
		namesShown = !namesShown;
			for (i = 0; i < studentNames.length; i++) {
			$(".studentName").eq(i).text(function(a, text){
				if (namesShown) {
					$(this).removeClass('swap');
					return studentQuotes[i];
					
				} else {
					$(this).addClass('swap');
          			return studentNames[i];
				}
      		});
			}

    });

	$("#revealAll").hover(function(){
		
		$(".navText").eq(0).show(200);
		$(".navText").data('open','yes');
		
	},
	function(){
		$(".navText").eq(0).hide(200);
		$(".navText").data('open','no')
	});
	
	
	
	$("#aboutClick").hover(function(){
		if($(".navText").data('open')=='no'){
		$(".navText").eq(1).show(200);
		}
	},
	function(){
		$(".navText").eq(1).hide(200);
		;
	});

	
	 /*$(".studentName").click(
	 function(){
		$(this).text(function(i, text){
			hideAll();
			var index = $(this).index(".studentName");
			if(text === studentQuotes[index]){
				$(this).toggleClass('swap');
			}
          return text === studentNames[index] ? studentQuotes[index] : studentNames[index];
      });


	 });*/
	 
	 $(".studentName").hover(function(){
	
	 	var index = $(this).index(".studentName");
		
        if($(".studentName").eq(index).data('on')==='yes'){
		$("#descriptionText").text(function(a, text){
					return studentNames[index];
   		 });
		$("#descriptionText").animate({"opacity":"100"},200);
		}
		},
	 
	 function(){
	 $("#descriptionText").animate({"opacity":"0"},200);
                                        
	 });
	 
	 


	 $("#aboutClick").click(function(e) {
		 var dWidth = $(window).width();
		 if(!aboutUp){

		 	$("#thesisStatement").css("z-index","-1");
			$("#about").show(10);
				
			$("#about").animate({"opacity":"100"}, 200);
			$("#about").animate({"margin-top":"-30px"}, 500);
			$("#thesisStatement").animate({"margin-top":"-700px"}, 500);
			aboutUp=true;

			$("#aboutClick").html('<div class="navText">Close</div>&para;');
   		

		 }
		 else if(aboutUp){

		 	$("#about").animate({"margin-top":"1000px"}, 500);
			$("#about").animate({"opacity":"0"}, 200);
			$("#thesisStatement").animate({"margin-top":"0px"}, 500);
			$("#about").hide(100);
			aboutUp=false;
			window.setTimeout("$('#thesisStatement').css('z-index','1')",1000);
			
			$("#aboutClick").html('<div class="navText">About</div>&dagger;');
		 }
		});

	function hideAll() {
			for (i = 0; i < studentNames.length; i++) {
				$(".studentName").eq(i).removeClass('swap');
				$(".studentName").eq(i).text(function(a, text){
					return studentQuotes[i];
      			});
			}
	};

	function randomShake() {
		var rn = Math.floor(Math.random() * 18);
		$(".studentPage").addClass('shake-slow');
		$(".studentPage").addClass('shake-constant');
		sleep(1000);
		$(".studentPage").removeClass('shake-constant');
	};

	function sleep(miliseconds) {
	   var currentTime = new Date().getTime();

	   while (currentTime + miliseconds >= new Date().getTime()) {
	   }
	};


$( "#mainContainer").mousemove(function( event ) {
	$("#descriptionText").css('margin-left',(event.pageX));
	$("#descriptionText").css('margin-top',(event.pageY-60));
	});                                  

});