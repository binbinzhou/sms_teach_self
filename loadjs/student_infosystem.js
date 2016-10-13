$(function(){
	$(".tab_header ul").on("click","li",function(event){
			if(!$(this).hasClass("current")){
				//改变当前元素样式
				$(this)
					.addClass("current")
					.siblings()
					.removeClass("current");
				//获取当前点击元素的索引
				var url = $(this).attr("url");
				//console.log(url)	
				//打印出获取数据的地址
				url = url+"?time="+new Date().getTime();
				$(".tab_content").load(url);
				
			}
		});
		//默认点击
		$(".tab_header li:first").trigger("click");
	
	});	
