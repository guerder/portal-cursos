$(document).ready(function(){
	$("li").click(function(){
		$("li").removeClass("selecionado");
		$(this).addClass("selecionado");
		$("html, body").animate({scrollTop:0}, "slow");
	});
	$("#ajustarVideo").click(function(){
		
		if($("#ajustarVideo").text() == "Reduzir Vídeo"){
			$("#ajustarVideo").text("Aumentar Vídeo");
			$("#frame-video").width(640).height(360);
			$("#principal").width(640);
		}else{
			$("#ajustarVideo").text("Reduzir Vídeo");
			$("#frame-video").width(800).height(450);
			$("#principal").width(800);
		}
	});
	$("#voltarTopo").click(function(){
		$("html, body").animate({scrollTop:0}, 1000);
	});

	$("#1").attr("href", "index.html").text("Home");
	$("#2").attr("href", "#").text("News");
	$("#3").attr("href", "#").text("Contact");
	$("#4").attr("href", "#").text("About");
});