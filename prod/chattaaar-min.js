!function(t,e,i,s){var a=function(e,i,s){this.elem=e,this.$elem=t(e),this.options=i,this.stages=s,this.store={}};a.prototype={defaults:{message:"Hello world!"},init:function(){return this.options=t.extend({formName:"form-"+(1+Math.floor(1e3*Math.random())),yourName:"Us",theirName:"You",welcomeTitle:'<i class="el-icon-envelope"></i>',welcomeText:"Welcome",welcomeStrapline:"Please add a strapline",startBtnText:"Start",nextBtnText:"Next",sendBtnText:"Send",skipBtnText:"Skip",modal:!1,modalOpenBtn:".chattaaar-open",modalContainer:".chattaaar-modal",modalFullScreen:!1,testMode:!1},options),this.setup.main.call(this),this.scaffold.main.call(this),this.scaffold.welcome.call(this),this.setup.stages.call(this),this.links.init.call(this),this.utilities.init.call(this),!this.options.modal==!1&&this.utilities.initModal.call(this),this},setup:{main:function(){console.log(this),this.$elem.attr({name:options.formName,action:options.formAction}),"undefined"!=typeof options.theme&&this.$elem.addClass(this.options.theme)},stages:function(){for(this.stage=1,this.stages=stages,this.stagesLength=Object.keys(this.stages).length,this.sss=0,this.sss=1;this.sss<this.stagesLength+1;this.sss++){var t=this.stages["stage"+this.sss];"input"===t.type?this.append.input.call(this,t,t.type):"email"===t.type?this.append.input.call(this,t,t.type):"textarea"===t.type?this.append.textarea.call(this,t):"select"===t.type?this.append.select.call(this,t):"checkbox"===t.type||"radio"===t.type?this.append.checkboxradio.call(this,t):"date"===t.type?this.append.input.call(this,t,t.type):"rating"===t.type?this.append.rating.call(this,t):"media"===t.type?this.append.input.call(this,t,t.type):console.log("Error: Stage #"+this.sss+" has no valid 'type' set."),this.store[t.inputName]=""}this.$elem.append('<div class="ch-sending"><h2 class="alert-text"><i class="el-icon-envelope"></i> Sending...</h2></div>')},focus:function(){function t(){e=!1,setTimeout(function(){e=!0},1e3)}var e=!0,i=this.$elem.find("section:nth-of-type("+this.stage+")"),s=this,a=i.find("input"),n=i.find("textarea"),o=i.find("select"),l=i.find(".ch-next");n.length>0?a=n:o.length>0&&(a=o),a.length>0||n.length>0||o.length>0?(a.focus(),a.unbind("keydown").bind("keydown",function(i){e===!1&&i.preventDefault(),9===i.keyCode?(i.preventDefault(),l.hasClass("validated")&&l.focus()):13===i.keyCode&&e===!0&&(i.preventDefault(),s.links.nextStage.call(s,l),a.blur(),l.blur(),t())}),l.bind("keydown",function(t){9===t.which&&(t.preventDefault(),a.focus())})):(l.focus(),l.unbind("keydown").bind("keydown",function(i){e===!1&&i.preventDefault(),13===i.keyCode&&e&&(i.preventDefault(),s.links.nextStage.call(s,l),l.blur(),t())})),i.find(".checkbox-radio").on("click",function(){l.focus()})}},scaffold:{main:function(){var t='<div class="ch-title"><span>'+options.welcomeTitle+"</span></div>",e='<div class="ch-counter"><span>-</span></div>',i="",s="",a="",n="";this.options.modal&&(i='<div class="ch-close"><i class="el-icon-remove"></i></div>'),s='<div class="chattaaar-topbar">'+t+e+i+" </div>",this.$elem.append(s),this.options.modal&&(n=this.options.modalContainer,n=n.replace(/\./g,""),"undefined"!=typeof this.options.theme&&(a=" "+options.theme),this.$elem.wrap('<div class="chattaaar-modal '+n+a+'"></div>'))},stage:function(t,e){var i,s;this.stagesLength=Object.keys(this.stages).length,i=this.sss===this.stagesLength?this.options.sendBtnText:e.skippable===!0?this.options.skipBtnText:this.options.nextBtnText,s=e.skippable===!0?'<button type="button" class="ch-next skip validated">'+i+"</button>":'<button type="button" class="ch-next">'+i+"</button>";var a='<div class="default-icon"><i class="el-icon-child"></i></div>',n="",o=a,l="",c=a;"undefined"!=typeof this.options.yourAvatar&&(o="",n=this.options.yourAvatar),"undefined"!=typeof this.options.theirAvatar&&(c="",l=this.options.theirAvatar);var h='<section>             <div class="section-padding">               <div class="question-container">                 <div class="person-icon" style="background-image: url('+this.options.yourAvatar+');">                   '+o+'                   <span class="name"><small>'+this.options.yourName+"</small></span>                 </div>                 <p>                   <span>"+e.question+'</span>                 </p>               </div>               <div class="action-container">                 <div class="person-icon" style="background-image: url('+this.options.theirAvatar+');">                   '+c+'                   <span class="name"><small>'+this.options.theirName+'</small></span>                 </div>                 <div class="action-wrapper">'+t+'</div>                 <div class="ch-btns-container">                   '+s+'                   <button type="button" class="ch-prev"><small><i class="el-icon-caret-up"></i></small> Prev</button>                 </div>               </div>             </div>           </section>';return h},welcome:function(){var t="";"undefined"!=typeof this.options.welcomeImage&&(t='<div style="background-image: url('+this.options.welcomeImage+"); height: "+this.options.welcomeImageHeight+"; width: "+this.options.welcomeImageWidth+"; background-size: "+this.options.welcomeImageWidth+" "+this.options.welcomeImageHeight+';" class="welcome-image"></div>'),this.$elem.append('           <section class="welcome active">             <div class="section-padding">               '+t+"               <h2>"+this.options.welcomeText+"</h2>               <p>"+this.options.welcomeStrapline+'</p>               <div class="ch-next validated"><h4>'+this.options.startBtnText+"</h4></div>             </div>           </section>")}},append:{input:function(e,i){var s,a="",n,o;if("media"===i){var l=e.accepts;t.each(l,function(t,e){a=a+" data-"+e+'="true"'}),i="text",s="ch-media"}"date"===i&&(i="text",s="ch-datepicker");var c='<input type="'+i+'" name="'+e.inputName+'" placeholder="'+e.placeholder+'" class="'+s+'" autocomplete="off"'+a+">";this.$elem.append(this.scaffold.stage.call(this,c,e))},textarea:function(t){var e='<textarea name="'+t.inputName+'" placeholder="'+t.placeholder+'"></textarea>';this.$elem.append(this.scaffold.stage.call(this,e,t))},checkboxradio:function(e){var i="";t.each(e.options,function(t,s){var a='             <label class="checkbox-radio">               <input type="'+e.type+'" name="'+e.inputName+'" value="'+s+'"/>               <span>                 <i class="el-icon-check-empty"></i>                 <i class="el-icon-edit"></i>                 <i class="el-icon-check"></i>                 '+s+"               </span>             </label>";i+=a}),i='<div class="checkbox-group">'+i+"</div>",this.$elem.append(this.scaffold.stage.call(this,i,e))},select:function(e){var i="";t.each(e.options,function(t,e){var s="<option>"+e+"</option>";i+=s});var s='           <select type="text" name="'+e.inputName+'" placeholder="'+e.placeholder+'">             <option value="" disabled selected>'+e.placeholder+"</option>             "+i+"           </select>";this.$elem.append(this.scaffold.stage.call(this,s,e))},rating:function(t){var e='<input type="hidden" name="'+t.inputName+'">',i='<li><i class="star el-icon-star"></i></li>',s='<span class="star-count"></span>',a='<ul class="rating rating-'+t.inputName+'">'+i+i+i+i+i+s+e+"</ul>";this.$elem.append(this.scaffold.stage.call(this,a,t))}},links:{nextStage:function(t){if(t.hasClass("validated"))if(this.stage===this.stagesLength+1)this.send.call(this);else{this.$elem.find("section:nth-of-type("+this.stage+")").removeClass("active").addClass("after"),this.$elem.find("section:nth-of-type("+(this.stage+1)+")").addClass("active"),this.stage++,this.utilities.changeTitle.call(this);var e=this;this.utilities.isMobile()||setTimeout(function(){e.setup.focus.call(e)},500),this.validations.validate.call(this)}},previousStage:function(t){this.$elem.find("section:nth-of-type("+this.stage+")").removeClass("active"),this.$elem.find("section:nth-of-type("+(this.stage-1)+")").removeClass("after").addClass("active"),this.stage--,this.utilities.changeTitle.call(this);var e=this;this.utilities.isMobile()||setTimeout(function(){e.setup.focus.call(e)},500),this.validations.validate.call(this)},init:function(){var e=this;this.$elem.find(".ch-next").on("click",function(i){i.preventDefault(),e.links.nextStage.call(e,t(this))}),this.$elem.find(".ch-prev").on("click",function(i){i.preventDefault(),e.links.previousStage.call(e,t(this))})}},validations:{makeValid:function(t){t.hasClass("skip")?t.html("Next"):t.addClass("validated")},makeInvalid:function(t){t.hasClass("skip")?t.html("Skip"):t.removeClass("validated")},validate:function(){var e=this.$elem.find("section:nth-of-type("+this.stage+")"),i=e.find("input, textarea"),s=e.find("select"),a=e.find(".checkbox-group"),n=e.find(".rating"),o=e.find(".ch-datepicker"),l=e.find(".ch-next"),c=this;i.keyup(function(){var e=t(this),s=e.attr("name"),a=e.val(),n=i.filter(function(){return""===t.trim(this.value)});n.length?c.validations.makeInvalid(l):"email"===e.attr("type")?c.validations.types.email.call(c,a,l):e.hasClass("ch-datepicker")?c.validations.types.date(value):e.hasClass("ch-media")?c.validations.types.media.call(c,a,e,l):c.validations.makeValid(l),c.store[s]=a,t("span.ch-"+s).html(a)}),s.each(function(){c.validations.types.select.call(c,t(this),l)}),a.on("click",function(){c.validations.types.checkboxradio.call(c,t(this),l)}),n.length>0&&this.plugins.rating.init.call(this),o.length>0&&this.plugins.date.init.call(this,o)},types:{email:function(t,e){var i=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;i.test(t)?this.validations.makeValid(e):this.validations.makeInvalid(e)},select:function(e,i){var s=this;e.change(function(){s.validations.makeValid(i);var e=t(this).attr("name"),a=t(this).val();s.store[e]=a,t("span.ch-"+e).html(a)})},checkboxradio:function(t,e){var i=t.find("input:checked");i.length>0?this.validations.makeValid(e):this.validations.makeInvalid(e)},media:function(t,e,i){if(e.is("[data-youtube]")||e.is("[data-soundcloud]")){var s=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,a=/^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/;s.test(t)||a.test(t)?this.validations.makeValid(i):this.validations.makeInvalid(i)}}}},plugins:{rating:{init:function(){var e=this.$elem.find("section:nth-of-type("+this.stage+")"),i=e.find(".rating"),s=i.find("li"),a=e.find(".ch-next"),n=this;s.unbind("mouseenter mouseleave").bind("mouseenter",function(){if(!i.hasClass("valueSelected")){i.find("li").removeClass("hover");for(var e=t(this).index(),s=1;e+1>=s;s++)i.find("li:nth-child("+s+")").addClass("hover")}}),i.unbind("mouseenter mouseleave").bind("mouseleave",function(){i.find("li").removeClass("hover")}),s.on("click",function(){i.find("li").removeClass("selected"),i.addClass("valueSelected");for(var e=t(this).index()+1,s=1;e>=s;s++)i.find("li:nth-child("+s+")").addClass("selected");var o=i.find("input"),l=o.attr("name");o.val(e),a.addClass("validated").focus();var c=i.find("span");c.html(e+"/5"),n.store[l]=e,t("span.ch-"+l).html(e)})},reset:function(){var t=this.$elem.find(".rating");t.removeClass("valueSelected"),t.find("li").removeClass(),t.find("span").html("")}},date:{init:function(e){var i=this.stages["stage"+(this.stage-1)].datepicker,s=this;e.datepicker(i),e.on("change paste",function(){var e=t(this).val();s.plugins.date.validate.call(s,e)})},validate:function(t){var e=this.$elem.find("section:nth-of-type("+this.stage+")"),i=e.find(".ch-next"),s=/^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;s.test(t)?this.validations.makeValid(i):this.validations.makeInvalid(i)}}},send:function(){var e=this.$elem.find(".ch-sending"),i=this,s=function(t){e.addClass("show"),options.testMode&&setTimeout(function(){t()},2e3)},a=function(){var s;s=i.options.testMode?"Sent <i>(in test mode)</i>":"Sent",e.find("h2").html('<i class="el-icon-check"></i> '+s),setTimeout(function(){i.options.modal?(t(i.options.modalContainer).removeClass("open").addClass("close"),setTimeout(function(){t(i.options.modalContainer).removeClass("close"),resetForm()},400)):i.utilities.resetForm.call(i)},2e3)};return i.options.testMode?void s(function(){a()}):(s(),console.log(t("form[name="+i.options.formName+"]").serialize()),t.post(t("form[name="+i.options.formName+"]").attr("action"),t("form[name="+i.options.formName+"]").serialize(),function(t){"sent"===t?a():(e.removeClass("show"),setTimeout(function(){alert("Form sending timed out")},3e4))}),!1)},utilities:{init:function(){this.utilities.verticalAlign.call(this),this.utilities.responsive.call(this),this.utilities.changeTitle.call(this),this.utilities.initModal.call(this)},verticalAlign:function(){function i(i){function s(t){var e=t.height();t.css({"margin-top":"-"+e/2+"px"})}t(i).each(function(){s(t(this))}),t(e).resize(function(){t(i).each(function(){s(t(this))})})}var s=this.$elem.find(".section-padding");i(s)},responsive:function(){function i(){console.log(s.$elem);var e;e=s.options.modal?t(s.options.modalContainer):s.$elem,e.width()<=700?s.$elem.addClass("condensed"):s.$elem.removeClass("condensed")}var s=this;i(),t(e).resize(function(){i()})},changeTitle:function(){var t=this.$elem.find(".ch-title span"),e=this.$elem.find(".ch-counter span");1===this.stage?(t.html(this.options.welcomeTitle),e.html("-")):(t.html(this.stages["stage"+(this.stage-1)].title),e.html(this.stage-1+"/"+this.stagesLength))},initModal:function(){var e=this;console.log(e.options),e.options.modalFullScreen&&e.$elem.addClass("fullscreen"),t(i).on("click",e.options.modalOpenBtn,function(){t(e.options.modalContainer).addClass("open")}),e.$elem.find(".ch-close").on("click",function(){t(e.options.modalContainer).removeClass("open").addClass("close"),setTimeout(function(){t(e.options.modalContainer).removeClass("close"),e.utilities.resetForm.call(e)},400)})},resetForm:function(){t("form[name="+this.options.formName+"]")[0].reset(),this.$elem.find(".ch-next").each(function(){t(this).hasClass("skip")?t(this).html("Skip"):t(this).removeClass("validated")}),this.$elem.find("section").removeClass("after active"),this.$elem.find(".ch-sending").removeClass("show"),this.$elem.find("section:nth-of-type(1)").addClass("active"),this.$elem.find("section:nth-of-type(1) .ch-next").addClass("validated"),this.plugins.rating.reset.call(this),this.stage=1,this.utilities.changeTitle.call(this)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},a.options=Plugin.prototype.options,t.fn.newChattaaar=function(t,e){return this.each(function(){new a(this,t,e).init()})}}(jQuery,window,document);
//# sourceMappingURL=./chattaaar-min.map