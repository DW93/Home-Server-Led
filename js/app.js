       
function RGBChange() {
	$('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
};

function PrintChanged() {
    console.log('(R,G,B): (' + r.getValue()+', '+g.getValue()+', '+b.getValue()+')');
};

function getBtnColour(rgb_colour){
    console.log('RGB Colour: ' + rgb_colour);
}

function getCustomSlot(slot_num){
    console.log('Get colour from slot: ' + slot_num);
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
        
