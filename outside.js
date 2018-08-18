// created by Benimation

var outGain;

function initOut() {
	// outside gain
	outGain = context.createGain();
	outGain.gain.value = 0;
	outGain.connect(simGain);
	
	initFW();
	initoutRandom();
	
	
	
	// soundscape
	var outSS;
	
	function outSSinit() {
		outSS = context.createBufferSource();
		outSS.connect(outGain);
		
		var outSSreq = new XMLHttpRequest();
		outSSreq.open("GET", "audio/outbg.wav", true);
		outSSreq.responseType = "arraybuffer";
	
		outSSreq.onload = function() {
			context.decodeAudioData(outSSreq.response, function(incomingBuffer) { 
				outSS.buffer = incomingBuffer;
				outSS.start(0);
				
			});
			
		}
		
		outSSreq.send();
		
	}
	
	outSSinit();
	
	setInterval(function(e) {
		outSSinit();
		
	}, 50000 + 17386/44100*1000 - 500);
	
}