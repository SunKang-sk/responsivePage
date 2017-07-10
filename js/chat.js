function message(){
	var a=$.blinkTitle.show();
	setTimeout(function(){
		$.blinkTitle.clear(a)},8e3)
}
	$(document).ready(function(){
		function e(){
			function h(){
				-1!=g.indexOf("*#emo_")&&(g=g.replace("*#","<img src='img/draws/").replace("#*",".gif'/>"),h());
			}
			var e=new Date,f="";
				f+=e.getFullYear()+"-",
				f+=e.getMonth()+1+"-",
				f+=e.getDate()+"  ",
				f+=e.getHours()+":",
				f+=e.getMinutes()+":",
				f+=e.getSeconds();
				var g=$("#textarea").val();
				h();
				var i="<div class='message clearfix fr'><div class='user-logo fr'><span class='icon-user custSer-self'></span>"+
					"</div>"+"<div class='wrap-text rightTxt fr'><div>"+g+"</div></div>"+
					"<div class='wrap-ri fr'>"+"<span class='fr'>"+f+"</span>"+"</div>"+"<div style='clear:both;'></div>"+"</div>";
				null!=g&&""!=g?($(".mes"+a).append(i),
					$(".chat01_content").scrollTop($(".mes"+a).height()),
					$("#textarea").val(""),message()):alert("\u8bf7\u8f93\u5165\u804a\u5929\u5185\u5bb9!");//请输入聊天内容
		}
		$(".talkTo a").text($(".chat03_content ul li.choosed").children(".chat03_name").text());
		var a=1,//被选中的客服索引
		    d="";
		var liLen=$(".chat03_content ul li").length;//会话客服人员个数
		$(".close_btn").click(function(){
			$(".chat-window").hide();//关闭聊天窗口
			$(".foldBar").hide();
			$(".chat03_content ul li").remove();
			liLen=$(".chat03_content ul li").length;
			flag=true;
			console.log(liLen)
		}),$(".chat03_content li").mouseover(function(){
			$(this).addClass("hover").siblings().removeClass("hover");
		}).mouseout(function(){
			$(this).removeClass("hover").siblings().removeClass("hover");
		}),$(".chat03_content").on('click','li',function(){//点击左侧客服高亮显示
			var b=$(this).index()+1;
			a=b,
				d=$(this).find(".chat03_name").text(),
				$(".chat01_content").scrollTop(0),
				$(this).addClass("choosed").siblings().removeClass("choosed"),
				$(".talkTo a").text($(this).children(".chat03_name").text()),
				$(".mes"+b).show().siblings().hide();
		});
		$(".ctb01").mouseover(function(){
			$(".wl_faces_box").show();
		}).mouseout(function(){
			$(".wl_faces_box").hide();
		}),$(".wl_faces_box").mouseover(function(){
			$(".wl_faces_box").show();
		}).mouseout(function(){
			$(".wl_faces_box").hide();
		}),$(".wl_faces_close").click(function(){
			$(".wl_faces_box").hide();
		}),$(".wl_faces_main img").click(function(){
			var a=$(this).attr("src");
			$("#textarea").val($("#textarea").val()+"*#"+a.substr(a.indexOf("img/draws/")+10,6)+"#*"),$("#textarea").focusEnd(),$(".wl_faces_box").hide();
		}),$(".btn-send").click(function(){e()}),document.onkeydown=function(a){
			var b=document.all?window.event:a;
			return 13==b.keyCode?(e(),!1):void 0
		},$.fn.setCursorPosition=function(a){
			return 0==this.lengh?this:$(this).setSelection(a,a)
		},$.fn.setSelection=function(a,b){
			if(0==this.lengh)
				return this;
			if(input=this[0],input.createTextRange){
				var c=input.createTextRange();
				c.collapse(!0),
					c.moveEnd("character",b),
					c.moveStart("character",a),
					c.select()
			}else
				input.setSelectionRange&&(input.focus(),input.setSelectionRange(a,b));return this
		},$.fn.focusEnd=function(){
			this.setCursorPosition(this.val().length)
		};
		var flag=true;
		//从侧边栏打开客服窗口
		$(".custLink a").click(function(){
			var txt=$(this).children('.custserName').text();//侧边栏点击时客服名称
			console.log("oppenwin:"+liLen);
			if(liLen < 1){
				$(".chat-window").show();
				$(".dragContent").animate({opacity: 'show'});
				$(".foldBar").hide();
				$(".chatLeft").show();
				var con="<li >"+
					"<label class='online'></label>"+
					"<a href='javascript:;'><span class='icon-custService custSer'></span></a>"+
					"<a href='javascript:;' class='chat03_name'>"+txt+"</a>"+
					"</li>";
				$(".chat03_content ul").append(con);
				//$(".chat03_content ul li a.chat03_name").text(txt);//
				$(".talkTo a").text(txt);//会话框顶部名称为侧边栏点击时名称
				$(".chat03_content ul li").addClass('choosed');
				liLen++;
				console.log(liLen);
			}else{
				//此处更换为on循环
				$(".chat03_content ul li a.chat03_name").each(function(index){
					console.log("txt:"+txt+",thistext:"+$(this).text())
					//var tx=txt;
					if(txt == $(this).text()){
						console.log(txt + ': ' + $(this).text());
						console.log("deng: "+liLen);
						$(this).parent('li').eq(1).addClass('choosed').siblings().removeClass('choosed');
						flag=false;
						return;
					}else if(txt != $(this).text() && flag==true){//当侧边点击名称不等于会话左侧名称时
						var con="<li>"+
							"<label class='online'></label>"+
							"<a href='javascript:;'><span class='icon-custService custSer'></span></a>"+
							"<a href='javascript:;' class='chat03_name'>"+txt+"</a>"+
							"</li>";
						$(".chat03_content ul").append(con);
						$(".talkTo a").text(txt);//会话框顶部名称为侧边栏点击时名称
						var eqs=index+1;
						console.log($(this).parent('li').eq(1).html())
						console.log("added:"+liLen+txt+eqs);
						liLen++;
						flag=false;
						return;
					}
					return;
				})
				console.log("statu:"+flag)
			}
			console.log("opened: "+liLen);
		});
		$(".btn-closeCur").on('click',function(){//关闭当前会话
			console.log("whenlclose:"+liLen)
			if(liLen > 1){
				$(this).parent('li').parent('ul').parent('.chat02_bar').parent('.chat02').prev('.chat01').children('.chat01_content').children(".mes"+a).hide();
				$(".chat03_content ul li.choosed").remove();
				$(".chat03_content ul li").eq(0).addClass('choosed').siblings().removeClass("choosed");
				var l=liLen;
				if(l==1){
					$(".chatLeft").hide();
				}
				var b=$(".chat03_content ul li.choosed").index()+1;//
				a=b;
				$(".talkTo a").text($(".chat03_content ul li.choosed").children(".chat03_name").text());
				$(".mes"+b).show().siblings().hide();
				liLen--;
			}else if(liLen <= 1){
				if(liLen = 1 && window.confirm('\u786e\u5b9a\u5173\u95ed\u5f53\u524d\u4f1a\u8bdd\u6846\u5417\uff1f')){
					$(".dragContent").hide();
					$(".chat-window").hide();
					$(".chat03_content ul li").remove();
					liLen=$(".chat03_content ul li").length;
					console.log("closed:"+liLen)
				}else{
					console.log("li<1:"+liLen)
				}
				flag=true;
			}
		});

		//对HTMLImageElement原型进行了扩展，增加了stop()和play()两个方法
		if ('getContext' in document.createElement('canvas')) {
			HTMLImageElement.prototype.play = function() {
				if (this.storeCanvas) {
					// 移除存储的canvas
					this.storeCanvas.parentElement.removeChild(this.storeCanvas);
					this.storeCanvas = null;
					// 透明度还原
					this.style.opacity = '1';
				}
				if (this.storeUrl) {
					this.src = this.storeUrl;
				}
			};
			HTMLImageElement.prototype.stop = function() {
				var canvas = document.createElement('canvas');
				// 尺寸
				var width = this.width, height = this.height;
				if (width && height) {
					// 存储之前的地址
					if (!this.storeUrl) {
						this.storeUrl = this.src;
					}
					// canvas大小
					canvas.width = width;
					canvas.height = height;
					// 绘制图片帧（第一帧）
					canvas.getContext('2d').drawImage(this, 0, 0, width, height);
					// 重置当前图片
					try {
						this.src = canvas.toDataURL("image/gif");
					} catch(e) {
						// 跨域
						this.removeAttribute('src');
						// 载入canvas元素
						canvas.style.position = 'absolute';
						// 前面插入图片
						this.parentElement.insertBefore(canvas, this);
						// 隐藏原图
						this.style.opacity = '0';
						// 存储canvas
						this.storeCanvas = canvas;
					}
				}
			};
		}
		var imgList =document.getElementById("imgList");
		var image=imgList.getElementsByTagName("img");
		for(var i = 0; i < image.length;i++){
			image[i].stop();
			image[i].onmouseover=function(){
				this.play();
			}
			image[i].onmouseout=function(){
				this.stop();
			}
		}
	}),function(a){
		a.extend({
				blinkTitle:{show:function(){
					var a=0,b=document.title;
					if(-1==document.title.indexOf("\u3010"))
						var c=setInterval(function(){
					a++,
					3==a&&(a=1),
					1==a&&(document.title="\u3010\u3000\u3000\u3000\u3011"+b),
					2==a&&(document.title="\u3010\u65b0\u6d88\u606f\u3011"+b)
				},500);return[c,b]},clear:function(a){a&&(clearInterval(a[0]),
					document.title=a[1])
				}
				}
			}

		)
	}(jQuery);
