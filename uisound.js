// created by Benimation

var audiologo;

function initUI() {
	// UI gain
	var uiGain = context.createGain();
	uiGain.gain.value = 1;
	uiGain.connect(mainGain);
	
	
	
	// audiologo
	audiologo = context.createBufferSource();
	audiologo.connect(uiGain);
	
	var audiologoreq = new XMLHttpRequest();
	audiologoreq.open("GET", "audio/logo.wav", true);
	audiologoreq.responseType = "arraybuffer";

	audiologoreq.onload = function() {
		context.decodeAudioData(audiologoreq.response, function(incomingBuffer) { 
			audiologo.buffer = incomingBuffer;
			
		});
		
	}
	
	audiologoreq.send();
	
	audiologo.start(0);
	
	setTimeout(function(e) {
		$("#splash").css("display", "none");
		$("#view").css("display", "block");
		$("#simulation").css("display", "block");
		
		inGain.gain.value = 1;
		
	}, 4500);
	
	
	
	// button
	var buttonsource;
	function buttoninit() {
		buttonsource = context.createBufferSource();
		
		var buttonrequest = new XMLHttpRequest();
		buttonrequest.open("GET", "audio/button.wav", true);
		buttonrequest.responseType = "arraybuffer";
	
		buttonrequest.onload = function() {
			context.decodeAudioData(buttonrequest.response, function(incomingBuffer) { 
				buttonsource.buffer = incomingBuffer; 
				
			});
			
		}
		
		buttonrequest.send();
		
		buttonsource.connect(uiGain);
		
	}
	
	buttoninit();
	
	$(".button").click(function(e) {
		buttonsource.start(0);
		
		buttoninit();
        
    });
	
	
	
	// slider
	var slidersource;
	function sliderinit() {
		slidersource = context.createBufferSource();
		
		var sliderrequest = new XMLHttpRequest();
		sliderrequest.open("GET", "audio/slider.wav", true);
		sliderrequest.responseType = "arraybuffer";
	
		sliderrequest.onload = function() {
			context.decodeAudioData(sliderrequest.response, function(incomingBuffer) { 
				slidersource.buffer = incomingBuffer; 
				
			});
			
		}
		
		sliderrequest.send();
		
		slidersource.connect(uiGain);
		
	}
	
	sliderinit();
	
	$(".slider").mousedown(function(e) {
		slidersource.start(0);
        
    });
	
	$(".slider").mouseup(function(e) {
		slidersource.stop();
		
		sliderinit();
        
    });
	
	
	
	// toggle
	// togglein
	var toggleinsource;
	function toggleininit() {
		toggleinsource = context.createBufferSource();
		
		var toggleinrequest = new XMLHttpRequest();
		toggleinrequest.open("GET", "audio/togglein.wav", true);
		toggleinrequest.responseType = "arraybuffer";
	
		toggleinrequest.onload = function() {
			context.decodeAudioData(toggleinrequest.response, function(incomingBuffer) { 
				toggleinsource.buffer = incomingBuffer; 
				
			});
			
		}
		
		toggleinrequest.send();
		
		toggleinsource.connect(uiGain);
		
	}
	
	toggleininit();
	
	// toggleout
	var toggleoutsource;
	function toggleoutinit() {
		toggleoutsource = context.createBufferSource();
		
		var toggleoutrequest = new XMLHttpRequest();
		toggleoutrequest.open("GET", "audio/toggleout.wav", true);
		toggleoutrequest.responseType = "arraybuffer";
	
		toggleoutrequest.onload = function() {
			context.decodeAudioData(toggleoutrequest.response, function(incomingBuffer) { 
				toggleoutsource.buffer = incomingBuffer; 
				
			});
			
		}
		
		toggleoutrequest.send();
		
		toggleoutsource.connect(uiGain);
		
	}
	
	toggleoutinit();
	
	$(".toggle").click(function(e) {
		if (man == true) {
			toggleinsource.start(0);
			toggleininit();
			$(".toggle").css("background-image", "url(img/v.png)");
			
			man = false;
			
		} else {
			toggleoutsource.start(0);
			toggleoutinit();
			$(".toggle").css("background-image", "url(img/m.png)");
			
			man = true;
			
		}
        
    });
    
}