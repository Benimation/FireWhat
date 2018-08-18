// created by Benimation

var outrandomGain;

function initoutRandom() {
	// inside sounds gain
	outrandomGain = context.createGain();
	outrandomGain.gain.value = 1;
	outrandomGain.connect(outGain);
	
	
	var outrandomarray = ["out01.wav", "out02.wav"];
	
	var outrandomsource;
	function initoutSound() {
		outrandomsource = context.createBufferSource();
		
		var requestOUT = new XMLHttpRequest();
		requestOUT.open("GET", "audio/out/" + outrandomarray[Math.floor(Math.random()*outrandomarray.length)], true);
		requestOUT.responseType = "arraybuffer";
	
		requestOUT.onload = function() {
			context.decodeAudioData(requestOUT.response, function(incomingBuffer) { 
				outrandomsource.buffer = incomingBuffer; 
				
			});
			
		}
		
		requestOUT.send();
		
		var pannerOUT = context.createPanner();
		pannerOUT.setPosition(Math.random()*2-1, Math.random()*2-1, Math.random()*2-1);
		
		outrandomsource.connect(pannerOUT);
		pannerOUT.connect(outrandomGain);
		
	}
	
	initoutSound();
	
	function startOUT() {
		outrandomsource.start(0);
		
		initoutSound();
		
		outinterval = setTimeout(startOUT, Math.random()*100000);
		
	}
	
	var outinterval = setTimeout(startOUT, Math.random()*10000);
	
}