$(document).ready(function() {
	$("#button1").click(function() {
		$("#meat").toggle()	
	});
    
	$("#button2").click(function() {
		$("#vegetables").toggle()
	});
    
	$("#button3").click(function() {
		$("#liquids").toggle()
	});
    
	$("#button4").click(function() {
		$("#seasoning").toggle()
	});
});

	$("#submit").click(function() {
		$("#output_div").show().addClass("main_divs" );
	});
