// JavaScript Document

var simGain;

function initsim() {
	// fireworks gain
	simGain = context.createGain();
	simGain.gain.value = 1;
	simGain.connect(biquad6);
	
	initIn();
	initOut();
	
}