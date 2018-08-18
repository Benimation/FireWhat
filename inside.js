// created by Benimation

var inGain;

function initIn() {
	// outside gain
	inGain = context.createGain();
	inGain.gain.value = 0;
	inGain.connect(simGain);
	
	initinRandom();
	
	
	
	// soundscape
	var inSS;
	
	function inSSinit() {
		inSS = context.createBufferSource();
		//inSS.gain.value = 0.1;
		inSS.connect(inGain);
		
		var inSSreq = new XMLHttpRequest();
		inSSreq.open("GET", "audio/inbg.wav", true);
		inSSreq.responseType = "arraybuffer";
	
		inSSreq.onload = function() {
			context.decodeAudioData(inSSreq.response, function(incomingBuffer) { 
				inSS.buffer = incomingBuffer;
				inSS.start(0);
				
			});
			
		}
		
		inSSreq.send();
		
	}
	
	//inSSinit();
	
	/*setInterval(function(e) {
		inSSinit();
		
	}, 29000 + 2724/44100*1000 - 500);*/
	
	
	
	// stemmen
	var instemmen;
	
	function instemmeninit() {
		instemmen = context.createBufferSource();
		instemmen.connect(inGain);
		
		var instemmenreq = new XMLHttpRequest();
		instemmenreq.open("GET", "audio/in/stemmen.wav", true);
		instemmenreq.responseType = "arraybuffer";
	
		instemmenreq.onload = function() {
			context.decodeAudioData(instemmenreq.response, function(incomingBuffer) { 
				instemmen.buffer = incomingBuffer;
				instemmen.start(0);
				
			});
			
		}
		
		instemmenreq.send();
		
	}
	
	instemmeninit();
	
	setInterval(function(e) {
		instemmeninit();
		
	}, 94770);
	
}