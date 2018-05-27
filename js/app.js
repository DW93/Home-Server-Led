       
function RGBChange() {
	$('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
};

function PrintChanged() {
    console.log('(R,G,B): (' + r.getValue()+', '+g.getValue()+', '+b.getValue()+')');
};

function getBtnColour(rgb_val){
    console.log('RGB Colour: ' + rgb_val);
}

function getCustomSlotColour(slot_num){
    console.log('Get colour from slot: ' + slot_num);
    //get value
}

function saveColourToSlot(slot_num){
    console.log('Save colour to slot: ' + slot_num);
    //save value
}

//--------------------------------------------------------
// effects
function rainbowEffect(){
    console.log('Rainbow effect');
}
function glowEffect(){
    console.log('Glow effect');
}

//--------------------------------------------------------
// leds off
function leds_off(){
    console.log('Turn off all leds');
}

//--------------------------------------------------------
// change led colour
function changeStripColour(rgb_val){
    console.log('Change colour to: ' + rgb_val);
    //save value
}

var r = $('#R').slider()
            .on('slide', RGBChange)
            .on('slide', PrintChanged)
            .data('slider');
var g = $('#G').slider()
            .on('slide', RGBChange)
            .on('slide', PrintChanged)
            .data('slider');
var b = $('#B').slider()
            .on('slide', RGBChange)
            .on('slide', PrintChanged)
            .data('slider');
        
