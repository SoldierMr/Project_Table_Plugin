// var q = document.getElementById('qdutils');
// var p = document.getElementById('Splugin');
// // var j = document.getElementById('QdJson');
//判断点击的是哪个a标签显示对应状态
function corActive(){
	var item = $("#left").contents().find("#main-left");
	item.find("a").each(function(e){
		$(this).click(function(){
			$(this).css({"color":"#43B81E"}).parent("li").siblings().find("a").css({"color":"white"});
		});
		
	})
}



