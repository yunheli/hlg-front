KISSY.add("page/reprice-index-init",function(S,O){var DOM=S.DOM,Event=S.Event;return reprice={panel:null,msg:null,checkBoxs:null,init:function(){Event.on("#J_CheckAll","click",reprice.CheckAll),reprice.panel=new O.Dialog({width:500,headerContent:"\u786e\u8ba4\u63d0\u4ea4",bodyContent:"",mask:!1,align:{points:["cc","cc"]},closable:!0,draggable:!0,aria:!0}),Event.on("#J_BtnPublish","click",function(){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;if(isVersionPer("tool"))return;var a=IsExpired();if(a>-5e3){var b=function(a){var b="",c="\u60a8\u5f53\u524d\u8bbe\u7f6e\u7684\u6539\u4ef7\u65b9\u6848\u4e3a\uff1a<br>";if(DOM.attr("#J_Modifytype_1","checked"))c+='\u7edf\u4e00\u4ef7:<font color="red">'+DOM.val("#J_Samevalue")+"</font>";else{c+='\u539f\u4ef7 X <font color="red">'+DOM.val("#J_Percent")+"</font>%";var d=parseFloat(DOM.val("#J_PriceDiff"));d>=0?c+=' + <font color="red">'+d+"</font>.":c+=' - <font color="red">'+d*-1+"</font>.",c+=" <br>\u5982\u539f\u4ef7=100\uff0c\u6539\u540e\u4ef7="+(parseFloat(DOM.val("#J_Percent"))+d)+"."}c+="<br>\u70b9\u51fb\u3010\u786e\u5b9a\u3011\u5f00\u59cb\u4fee\u6539\u4ef7\u683c\uff0c\u6539\u5b8c\u540e\u65e0\u6cd5\u6062\u590d\uff0c\u60a8\u786e\u8ba4\u8981\u8fdb\u884c\u4fee\u6539\u5417\uff1f",b='<div class="point" style="height: 150px;"><div class="point-w" style="height: auto;"><span class="point-img-2"></span><span class=""><span id="J_ScheMess">'+c+'</span><div class="btm-content btm-margin-15auto" style="width:160px;"><input type="button" id="J_Sure" class="btm-68-orange fl" value="\u786e\u5b9a" /><input type="button" id="J_Cancel" class="btm-68-gray fl" value="\u53d6\u6d88" /></div></div></div>',reprice.panel.set("bodyContent",b),reprice.panel.show(),Event.remove("#J_Sure"),Event.remove("#J_Cancel"),Event.on("#J_Sure","click",function(a){if(isVersionPer("tool"))return;a.preventDefault();if(!reprice.checkForm())return reprice.panel.hide(),!1;reprice.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),DOM.get("#J_subform").submit()}),Event.on("#J_Cancel","click",function(a){a.preventDefault(),reprice.panel.hide();return});return},c=function(a){KISSY.Event.fire(".J_TopExpired","click")},d="";(new H.widget.asyncRequest).setURI(isExpiredUrl).setMethod("GET").setHandle(b).setErrorHandle(c).setData(d).send()}else{var e="",f="\u60a8\u5f53\u524d\u8bbe\u7f6e\u7684\u6539\u4ef7\u65b9\u6848\u4e3a\uff1a<br>";if(DOM.attr("#J_Modifytype_1","checked"))f+='\u7edf\u4e00\u4ef7:<font color="red">'+DOM.val("#J_Samevalue")+"</font>";else{f+='\u539f\u4ef7 X <font color="red">'+DOM.val("#J_Percent")+"</font>%";var g=parseFloat(DOM.val("#J_PriceDiff"));g>=0?f+=' + <font color="red">'+g+"</font>.":f+=' - <font color="red">'+g*-1+"</font>.",f+=" <br>\u5982\u539f\u4ef7=100\uff0c\u6539\u540e\u4ef7="+(parseFloat(DOM.val("#J_Percent"))+g)+"."}f+="<br>\u70b9\u51fb\u3010\u786e\u5b9a\u3011\u5f00\u59cb\u4fee\u6539\u4ef7\u683c\uff0c\u6539\u5b8c\u540e\u65e0\u6cd5\u6062\u590d\uff0c\u60a8\u786e\u8ba4\u8981\u8fdb\u884c\u4fee\u6539\u5417\uff1f",e='<div class="point" style="height: 150px;"><div class="point-w" style="height: auto;"><span class="point-img-2"></span><span class=""><span id="J_ScheMess">'+f+'</span><div class="btm-content btm-margin-15auto" style="width:160px;"><input type="button" id="J_Sure" class="btm-68-orange fl" value="\u786e\u5b9a" /><input type="button" id="J_Cancel" class="btm-68-gray fl" value="\u53d6\u6d88" /></div></div></div>',reprice.panel.set("bodyContent",e),reprice.panel.show(),Event.remove("#J_Sure"),Event.remove("#J_Cancel"),Event.on("#J_Sure","click",function(a){if(isVersionPer("tool"))return;a.preventDefault();if(!reprice.checkForm())return reprice.panel.hide(),!1;reprice.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),DOM.get("#J_subform").submit()}),Event.on("#J_Cancel","click",function(a){a.preventDefault(),reprice.panel.hide();return})}})},CheckAll:function(a){if(!reprice.checkBoxs)var b=DOM.query("#J_PromotionItemList1 .J_CheckBox");else var b=rebaseprop.checkBoxs;var c=b.length;for(i=0;i<c;i++){var d=b[i].value;if(b[i].disabled)continue;this.checked?b[i].checked=!0:b[i].checked=!1}},addSelectItemsRetryReprice:function(){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;if(isVersionPer("tool"))return;var diff=IsExpired();if(diff>-5e3){var sucessHandle=function(o){if(!reprice.checkBoxs)var checkBoxs=DOM.query("#J_PromotionItemList1 .J_CheckBox");else var checkBoxs=rebaseprop.checkBoxs;reprice.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"});var len=checkBoxs.length,m=0,json=[];for(i=0;i<len;i++)if(checkBoxs[i].checked&&!checkBoxs[i].disabled){id=checkBoxs[i].value;var reprice_item_id=DOM.val(DOM.get("#J_Repriceitem_"+id)),new_price=DOM.val(DOM.get("#J_NewPrice_"+id)),o='{"item_id":"'+id+'","reprice_item_id":"'+reprice_item_id+'", "new_price":"'+new_price+'"}';o=eval("("+o+")"),json.push(o),m++}if(m==0){reprice.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u9009\u62e9\u4efb\u4f55\u5b9d\u8d1d\uff01",type:"error",autoClose:!0,timeOut:1e3});return}var itemsJson=KISSY.JSON.stringify(json),data="itemIds="+itemsJson,submitHandle=function(a){reprice.msg.hide(),new H.widget.msgBox({type:"sucess",content:"\u6210\u529f\u4fee\u6539",dialogType:"msg",autoClose:!0,timeOut:3e3})},errorHandle=function(a){reprice.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};(new H.widget.asyncRequest).setURI(retryRepriceUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();return},errorHandle1=function(a){KISSY.Event.fire(".J_TopExpired","click")},data="";(new H.widget.asyncRequest).setURI(isExpiredUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(errorHandle1).setData(data).send()}else{if(!reprice.checkBoxs)var checkBoxs=DOM.query("#J_PromotionItemList1 .J_CheckBox");else var checkBoxs=rebaseprop.checkBoxs;reprice.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"});var len=checkBoxs.length,m=0,json=[];for(i=0;i<len;i++)if(checkBoxs[i].checked&&!checkBoxs[i].disabled){id=checkBoxs[i].value;var reprice_item_id=DOM.val(DOM.get("#J_Repriceitem_"+id)),new_price=DOM.val(DOM.get("#J_NewPrice_"+id)),o='{"item_id":"'+id+'","reprice_item_id":"'+reprice_item_id+'", "new_price":"'+new_price+'"}';o=eval("("+o+")"),json.push(o),m++}if(m==0){reprice.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u9009\u62e9\u4efb\u4f55\u5b9d\u8d1d\uff01",type:"error",autoClose:!0,timeOut:1e3});return}var itemsJson=KISSY.JSON.stringify(json),data="itemIds="+itemsJson,submitHandle=function(a){reprice.msg.hide(),new H.widget.msgBox({type:"sucess",content:"\u6210\u529f\u4fee\u6539",dialogType:"msg",autoClose:!0,timeOut:3e3})},errorHandle=function(a){reprice.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};(new H.widget.asyncRequest).setURI(retryRepriceUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()}},RetryItemReprice:function(id){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;if(isVersionPer("tool"))return;var diff=IsExpired();if(diff>-5e3){var sucessHandle=function(o){reprice.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"});var json=[],reprice_item_id=DOM.val(DOM.get("#J_Repriceitem_"+id)),new_price=DOM.val(DOM.get("#J_NewPrice_"+id)),o='{"item_id":"'+id+'","reprice_item_id":"'+reprice_item_id+'", "new_price":"'+new_price+'"}';o=eval("("+o+")"),json.push(o);var itemsJson=KISSY.JSON.stringify(json),data="itemIds="+itemsJson,submitHandle=function(a){reprice.msg.hide(),new H.widget.msgBox({type:"sucess",content:"\u6210\u529f\u4fee\u6539",dialogType:"msg",autoClose:!0,timeOut:3e3})},errorHandle=function(a){reprice.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};(new H.widget.asyncRequest).setURI(retryRepriceUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();return},errorHandle1=function(a){KISSY.Event.fire(".J_TopExpired","click")},data="";(new H.widget.asyncRequest).setURI(isExpiredUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(errorHandle1).setData(data).send()}else{reprice.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"});var json=[],reprice_item_id=DOM.val(DOM.get("#J_Repriceitem_"+id)),new_price=DOM.val(DOM.get("#J_NewPrice_"+id)),o='{"item_id":"'+id+'","reprice_item_id":"'+reprice_item_id+'", "new_price":"'+new_price+'"}';o=eval("("+o+")"),json.push(o);var itemsJson=KISSY.JSON.stringify(json),data="itemIds="+itemsJson,submitHandle=function(a){reprice.msg.hide(),new H.widget.msgBox({type:"sucess",content:"\u6210\u529f\u4fee\u6539",dialogType:"msg",autoClose:!0,timeOut:3e3})},errorHandle=function(a){reprice.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};(new H.widget.asyncRequest).setURI(retryRepriceUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()}},toggleCal:function(){DOM.attr("#J_Modifytype_1","checked")?DOM.hide(".J_CalStrategy"):DOM.show(".J_CalStrategy")},checkForm:function(){if(!reprice.checkCategory())return new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u8bf7\u9009\u62e9\u8981\u4fee\u6539\u7684\u5206\u7c7b\uff01",type:"error",autoClose:!0,timeOut:2e3}),!1;if(!DOM.attr("#J_Modifyonsale","checked")&&!DOM.attr("#J_Modifyinstock","checked"))return new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u8bf7\u9009\u62e9\u8981\u4fee\u6539\u7684\u8303\u56f4\uff01",type:"error",autoClose:!0,timeOut:2e3}),!1;if(DOM.attr("#J_Modifytype_1","checked")){if(S.trim(DOM.val("#J_Samevalue"))=="")return new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u5bf9\u4e0d\u8d77\uff0c\u8bf7\u8f93\u5165\u7edf\u4e00\u4ef7\uff01",type:"error",autoClose:!0,timeOut:2e3}),!1}else{var a=S.trim(DOM.val("#J_Percent")),b=S.trim(DOM.val("#J_PriceDiff")),c=/^[\+\-]?[0-9]+(\.[0-9]{1,2})?$/;if(parseInt(a)<=0)return new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u767e\u5206\u6bd4\u5fc5\u987b\u5927\u4e8e0\uff0c\u8bf7\u786e\u8ba4\uff01",type:"error",autoClose:!0,timeOut:2e3}),!1;if(b!=""&&!c.test(b))return new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u5dee\u4ef7\u5fc5\u987b\u662f\u6570\u5b57\uff0c\u53ef\u4ee5\u652f\u6301\u5c0f\u6570\u70b9\u540e2\u4f4d\uff01",type:"error",autoClose:!0,timeOut:2e3}),!1}return!0},checkCategory:function(){var a=document.getElementsByName("category[]");for(var b=0;b<a.length;b++)if(a[b].checked)return!0;return!1}}},{requires:["overlay"]}); 