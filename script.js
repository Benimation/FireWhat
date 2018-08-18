// created by Benimation
var man = true;

$(document).ready(function(e) {
	var binnen = true;
	$("#deur").click(function(e) {
		if (binnen) {
			outGain.gain.value = 1;
			inGain.gain.value = 0;
			binnen = false;
			
			$("#view").css("background-image", 'url("img/out.jpg")');
			$(this).html("Naar binnen");
			
		} else {
			outGain.gain.value = 0;
			inGain.gain.value = 1;
			binnen = true;
			
			$("#view").css("background-image", 'url("img/in.jpg")');
			$(this).html("Naar buiten");
			
		}
        
    });
	
	
	
	// source 2
	var source2;
	function init2() {
		source2 = context.createBufferSource();
		
		var request2 = new XMLHttpRequest();
		request2.open("GET", "audio/bg.wav", true);
		request2.responseType = "arraybuffer";
	
		request2.onload = function() {
			context.decodeAudioData(request2.response, function(incomingBuffer) { 
				source2.buffer = incomingBuffer; 
				
			});
			
		}
		
		request2.send();
		
		var panner2 = context.createPanner();
		panner2.setPosition(1, 0, 0);
		
		var gain2 = context.createGain();
		gain2.gain.value = 2;
		
		source2.connect(panner2);
		panner2.connect(gain2);
		gain2.connect(mainGain);
		
	}
	
	init2();
	
	$("#source2").click(function(e) {
		source2.start(0);
		
		init2();
        
    });
	
	
	
	// GUI
	$(document).ready(function(e) {
		$(".slider").each(function(index) {
			var lucipos = $(this).val()/100*397 - 246;
			$(this).css("background-position", lucipos);
			console.log("loaded");
			
		});
		
		$(".slider").change(function(e) {
			var lucipos = $(this).val()/100*397 - 246;
			$(this).css("background-position", lucipos);
			
		});
        
    });
	
	
	
});