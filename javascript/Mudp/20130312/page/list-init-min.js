KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<span class="number">',this.page!=1&&(c+='<span title="Page 1"><a href="javascript:'+b.name+'.toPage(1);">1</a></span>'),this.page>=5&&(c+="<span>...</span>");if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount;for(var g=this.page-2;g<=f;g++)g>0&&(g==this.page?c+='<span title="Page '+g+'">'+g+"</span>":g!=1&&g!=this.pageCount&&(c+='<span title="Page '+g+'"><a href="javascript:'+b.name+".toPage("+g+');">'+g+"</a></span>"));this.page+3<this.pageCount&&(c+="<span>...</span>"),this.page!=this.pageCount&&(c+='<span title="Page '+this.pageCount+'"><a href="javascript:'+b.name+".toPage("+this.pageCount+');">'+this.pageCount+"</a></span>"),c+="</span><br />";break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',this.page==1;if(this.page-2<=0){var h=1;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else if(this.page+2>=this.pageCount){var h=this.pageCount-4;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else{var h=this.page-2;if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount}for(var g=h;g<=f;g++)g>0&&(g==this.page?c+='<span class="current a-padding">'+g+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+g+');">'+g+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;\u5230\u7b2c&nbsp;",this.page>=this.pageCount?c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+this.pageCount+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875':c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+(this.page+1)+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875',c+='<input type="button" value="" class="page-pic-no gray-btm-h-go w-30 btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);">',c+="</font>"),c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/list-init",function(a,b){var c=a.DOM,d=a.Event;return list={Paginator:null,msg:null,init:function(){list.searchTbItems(),d.on("#J_Sort .sort","click",function(a){c.removeClass(c.query("#J_Sort .sort"),"current"),c.addClass(a.currentTarget,"current");var b=c.attr(a.currentTarget,"data")+":desc";c.val("#J_SortValue",b),list.searchTbItems()}),d.on("#J_target","mouseenter mouseleave",function(a){a.type=="mouseenter"?(c.addClass(a.currentTarget,"mouseenter"),c.show(".yuanjiao")):a.type=="mouseleave"&&(c.removeClass(a.currentTarget,"mouseenter"),c.hide(".yuanjiao"))}),a.one("#J_SyncItemsButton")&&d.on("#J_SyncItemsButton","click",function(a){var b=c.parent(a.currentTarget);c.hide(b);var d=function(a){new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u540c\u6b65\u6570\u636e\u8bf7\u6c42\u6210\u529f\uff0c\u8bf7\u70b9\u51fb\u641c\u7d22\u67e5\u770b\u5b9d\u8d1d\u3002\u5982\u65e0\u6cd5\u663e\u793a\u8bf7\u8fc71\u5206\u949f\u5de6\u53f3\u518d\u67e5\u770b",type:"info"}),KISSY.later(function(a){c.show(a)},6e4,!1,null,b)},e="";(new H.widget.asyncRequest).setURI(syncItemsUrl).setHandle(d).setMethod("GET").setData(e).setDataType("json").send()})},searchTbItems:function(){var a=function(a){c.hide("#J_LeftLoading"),c.show("#J_MainLeftContent"),totalRecords=a.payload.totalRecords,c.css(c.get("#J_NoteIcon"),"display","none"),totalRecords>0?(c.css(c.get("#J_LEmpty"),"display","none"),c.css(c.query(".J_ItemSelectBtnHolder"),"display","")):(c.css(c.get("#J_LEmpty"),"display",""),c.css(c.query(".J_ItemSelectBtnHolder"),"display","none")),list.renderItems(a.payload.body);var d=Math.ceil(totalRecords/a.payload.pageNum);list.paginator=(new b("list.paginator")).setRender(list.handlePagination).setPageCount(d).printHtml("#J_Paging",2)},d=list.getParamsData();c.show("#J_LeftLoading"),c.hide("#J_MainLeftContent"),(new H.widget.asyncRequest).setURI(loadTbItemsUrl).setMethod("GET").setHandle(a).setData(d).send()},getParamsData:function(){if(c.val(c.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var a=encodeURIComponent(c.val(c.get("#J_SearchTitle")));else var a="";var b=c.val(c.get("#J_SelectItemPage")),d=c.val(c.get("#J_SelectItemCid")),e=c.val(c.get("#J_SearchSelling")),f=c.val("#J_SortValue");if(f==0||f==1)var g=c.val(c.get("#J_SelectItemOrder"));else var g=f;var h="q="+a+"&cid="+d+"&type="+e;h+="&itemOrder="+g+"&pageSize="+b;if(e==0){var i=c.val(c.get("#J_StartPrice")),j=c.val(c.get("#J_EndPrice"));h+="&start_price="+i+"&end_price="+j}return h},renderItems:function(b){c.html(c.get("#J_TbItemList"),b);var e=c.query("#J_TbItemList .J_TbItem");d.on(e,"mouseenter mouseleave",function(a){a.type=="mouseenter"?c.addClass(a.currentTarget,"mouseover"):a.type=="mouseleave"&&c.removeClass(a.currentTarget,"mouseover")});var f;a.each(a.all("#J_Sort th"),function(a,b){return c.hasClass(a,"current")&&(f=c.attr(a,"data")),f}),a.each(a.all("#J_TbItemList td"),function(a,b){c.attr(a,"data")==f&&c.addClass(a,"current")})},handlePagination:function(a){pageId=a;var b=function(a){totalRecords=a.payload.totalRecords,totalRecords>0?(c.css(c.get("#J_LEmpty"),"display","none"),c.css(c.query(".J_ItemSelectBtnHolder"),"display","")):(c.css(c.get("#J_LEmpty"),"display",""),c.css(c.query(".J_ItemSelectBtnHolder"),"display","none"));var b=Math.ceil(totalRecords/a.payload.pageNum);list.paginator.setPage(pageId).setPageCount(b).printHtml("#J_Paging",2),list.renderItems(a.payload.body),c.hide("#J_LeftLoading"),c.show("#J_MainLeftContent")},d=list.getParamsData();d+="&page_id="+pageId,c.show("#J_LeftLoading"),c.hide("#J_MainLeftContent"),(new H.widget.asyncRequest).setURI(loadTbItemsUrl).setMethod("GET").setHandle(b).setData(d).send()}}},{requires:["utils/showPages/index"]}); 