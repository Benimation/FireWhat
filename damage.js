// JavaScript Document

var damageGain;

function initdamage() {
	// fireworks gain
	damageGain = context.createGain();
	damageGain.gain.value = 1;
	damageGain.connect(mainGain);
	
	initloss();
	
	
	
	
	
	// Tinnitus tones
	var tinn1;
	function inittinn1() {
		tinn1 = context.createOscillator();
		
		tinn1.type = "sine";
		tinn1.frequency.value = 0;
		
		var tinn1panner = context.createPanner();
		tinn1panner.setPosition(0, 0, 0);
		
		var tinn1gain = context.createGain();
		tinn1gain.gain.value = 0.5;
		
		tinn1.connect(tinn1panner);
		tinn1panner.connect(tinn1gain);
		tinn1gain.connect(mainGain);
		
	}
	
	inittinn1();
	
	tinn1.start();
	
	$("#frequency1").change(function(e) {
		tinn1.frequency.value = $(this).val() * 200;
		
	});
	
	
	
	var tinn2;
	function inittinn2() {
		tinn2 = context.createOscillator();
		
		tinn2.type = "sine";
		tinn2.frequency.value = 0;
		
		var tinn2panner = context.createPanner();
		tinn2panner.setPosition(0, 0, 0);
		
		var tinn2gain = context.createGain();
		tinn2gain.gain.value = 0.5;
		
		tinn2.connect(tinn2panner);
		tinn2panner.connect(tinn2gain);
		tinn2gain.connect(mainGain);
		
	}
	
	inittinn2();
	
	tinn2.start();
	
	$("#frequency2").change(function(e) {
		tinn2.frequency.value = $(this).val() * 200;
		
	});
	
	
	
	// Noise
	var noise;
	var noiseGain;
	
	function initNoise() {
		noise = context.createScriptProcessor(8192, 1, 1);
		noiseGain = context.createGain();
		noiseGain.gain.value = 0;
		noise.connect(noiseGain);
		noiseGain.connect(mainGain);
		
		noise.onaudioprocess = function(e) {
			var thenoise = e.outputBuffer.getChannelData(0);
			
			for (var i = 0; i < 8192; i++) {
				thenoise[i] = Math.random() * 2 - 1;
				
			}
			
		}
		
	}
	
	initNoise();
	
	$("#noiseGain").change(function(e) {
		noiseGain.gain.value = $(this).val() / 100;
		
	});
	
}