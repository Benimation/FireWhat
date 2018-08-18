// created by Benimation

var fwGain;

function initFW() {
	// fireworks gain
	fwGain = context.createGain();
	fwGain.gain.value = 1;
	fwGain.connect(outGain);
	
	
	var fireworksarray = ["firework01.wav", "firework02.wav", "firework03.wav", "firework04.wav", "firework05.wav", "firework06.wav", "firework07.wav", "firework08.wav", "firework09.wav", "firework10.wav", "firework11.wav", "firework12.wav", "firework13.wav", "firework14.wav", "firework15.wav", "firework16.wav", "firework17.wav", "firework18.wav"];
	
	var fireworksource;
	function initFire() {
		fireworksource = context.createBufferSource();
		
		var requestFW = new XMLHttpRequest();
		requestFW.open("GET", "audio/fw/" + fireworksarray[Math.floor(Math.random()*fireworksarray.length)], true);
		requestFW.responseType = "arraybuffer";
	
		requestFW.onload = function() {
			context.decodeAudioData(requestFW.response, function(incomingBuffer) { 
				fireworksource.buffer = incomingBuffer; 
				
			});
			
		}
		
		requestFW.send();
		
		var pannerFW = context.createPanner();
		pannerFW.setPosition(Math.random()*2-1, Math.random()*2-1, Math.random()*2-1);
		
		fireworksource.connect(pannerFW);
		pannerFW.connect(fwGain);
		
	}
	
	initFire();
	
	function startFW() {
		fireworksource.start(0);
		
		initFire();
		
		fireinterval = setTimeout(startFW, Math.random()*5000);
		
	}
	
	var fireinterval = setTimeout(startFW, Math.random()*5000);
	
}