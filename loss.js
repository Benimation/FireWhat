// JavaScript Document

var lossGain;
var biquad6;
var losson = false;

function initloss() {
	// fireworks gain
	lossGain = context.createGain();
	lossGain.gain.value = 1;
	lossGain.connect(damageGain);
	
	
	
	// BiquadFilters (age & gender)
	var biquad1 = context.createBiquadFilter();
	biquad1.connect(lossGain);
	biquad1.frequency.value = 250;
	biquad1.type = "highshelf";
	biquad1.gain.value = 0;
	
	var biquad2 = context.createBiquadFilter();
	biquad2.connect(biquad1);
	biquad2.type = "highshelf";
	biquad2.frequency.value = 500;
	biquad2.gain.value = 0;
	
	var biquad3 = context.createBiquadFilter();
	biquad3.connect(biquad2);
	biquad3.type = "highshelf";
	biquad3.frequency.value = 1000;
	biquad3.gain.value = 0;
	
	var biquad4 = context.createBiquadFilter();
	biquad4.connect(biquad3);
	biquad4.type = "highshelf";
	biquad4.frequency.value = 2000;
	biquad4.gain.value = 0;
	
	var biquad5 = context.createBiquadFilter();
	biquad5.connect(biquad4);
	biquad5.type = "highshelf";
	biquad5.frequency.value = 4000;
	biquad5.gain.value = 0;
	
	biquad6 = context.createBiquadFilter();
	biquad6.connect(biquad5);
	biquad6.type = "highshelf";
	biquad6.frequency.value = 8000;
	biquad6.gain.value = 0;
	
	function evalLoss(agepercentage) {
		if (losson) {
			if (man) {
				// hoogste - (verschil hoogste/laagste)*hoeveelheid - vorige_biquad
				biquad1.gain.value = -10 - (-10 + 30)*agepercentage + 10;
				
				biquad2.gain.value = -8 - (-8 + 32)*agepercentage - biquad1.gain.value + 10;
				
				biquad3.gain.value = -10 - (-10 + 38)*agepercentage - biquad2.gain.value + 10;
				
				biquad4.gain.value = -18 - (-18 + 52)*agepercentage - biquad3.gain.value + 10;
				
				biquad5.gain.value = -38 - (-38 + 70)*agepercentage - biquad4.gain.value + 10;
				
				biquad6.gain.value = -38 - (-38 + 80)*agepercentage - biquad5.gain.value + 10;
				
			} else {
				// hoogste - (verschil hoogste/laagste)*hoeveelheid - vorige_biquad
				biquad1.gain.value = -10 - (-10 + 30)*agepercentage + 10;
				
				biquad2.gain.value = -8 - (-8 + 32)*agepercentage - biquad1.gain.value + 10;
				
				biquad3.gain.value = -10 - (-10 + 38)*agepercentage - biquad2.gain.value + 10;
				
				biquad4.gain.value = -9 - (-9 + 42)*agepercentage - biquad3.gain.value + 10;
				
				biquad5.gain.value = -18 - (-18 + 68)*agepercentage - biquad4.gain.value + 10;
				
				biquad6.gain.value = -24 - (-24 + 78)*agepercentage - biquad5.gain.value + 10;
				
			}
			
		} else {
			biquad1.gain.value = 0;
			
			biquad2.gain.value = 0;
			
			biquad3.gain.value = 0;
			
			biquad4.gain.value = 0;
			
			biquad5.gain.value = 0;
			
			biquad6.gain.value = 0;
			
		}
		
	}
	
	
	// change biquad
	var savedage = 0;
	$("#age").change(function(e) {
		evalLoss($(this).val()/100);
		savedage = $(this).val()/100;
		
	});
	
	$(".toggle").click(function(e) {
		evalLoss(savedage);
        
    });
	
	$("#loss").click(function(e){
		if (losson == true) {
			losson = false;
			
			evalLoss(savedage);
			
		} else {
			losson = true;
			
			evalLoss(savedage);
			
		}
        
    });
	
	
	
	
	
	initsim();
	
}