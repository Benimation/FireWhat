// created by Benimation

var inrandomGain;

function initinRandom() {
	// inside sounds gain
	inrandomGain = context.createGain();
	inrandomGain.gain.value = 0.2;
	inrandomGain.connect(inGain);
	
	
	var inrandomarray = ["in01.wav", "in02.wav", "in03.wav", "in04.wav", "in05.wav", "in06.wav"];
	
	var inrandomsource;
	function initinSound() {
		inrandomsource = context.createBufferSource();
		
		var requestIN = new XMLHttpRequest();
		requestIN.open("GET", "audio/in/" + inrandomarray[Math.floor(Math.random()*inrandomarray.length)], true);
		requestIN.responseType = "arraybuffer";
	
		requestIN.onload = function() {
			context.decodeAudioData(requestIN.response, function(incomingBuffer) { 
				inrandomsource.buffer = incomingBuffer; 
				
			});
			
		}
		
		requestIN.send();
		
		var pannerIN = context.createPanner();
		pannerIN.setPosition(Math.random()*2-1, Math.random()*2-1, Math.random()*2-1);
		
		inrandomsource.connect(pannerIN);
		pannerIN.connect(inrandomGain);
		
	}
	
	initinSound();
	
	function startIN() {
		inrandomsource.start(0);
		
		initinSound();
		
		ininterval = setTimeout(startIN, Math.random()*10000);
		
	}
	
	var ininterval = setTimeout(startIN, Math.random()*10000);
	
}