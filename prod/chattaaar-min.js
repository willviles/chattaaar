!function(i,t,a,e){var n=function(t,a,e){this.elem=t,this.$elem=i(t),this.options=a,this.stages=e,this.store={}};n.prototype={init:function(){return this.options=i.extend({formName:"form-"+(1+Math.floor(1e3*Math.random())),yourName:"Us",theirName:"You",welcomeTitle:'<i class="el-icon-envelope"></i>',welcomeText:"Welcome",welcomeStrapline:"Please add a strapline",startBtnText:"Start",nextBtnText:"Next",sendBtnText:"Send",skipBtnText:"Skip",modal:!1,modalOpenBtn:".chattaaar-open",modalContainer:".chattaaar-modal",modalFullScreen:!1,testMode:!1},options),this.setup.main.call(this),this.scaffold.main.call(this),this.scaffold.welcome.call(this),this.setup.stages.call(this),this.links.init.call(this),this.utilities.init.call(this),!this.options.modal==!1&&this.utilities.initModal.call(this),this},setup:{main:function(){this.$elem.attr({name:options.formName,action:options.formAction}),"undefined"!=typeof options.theme&&this.$elem.addClass(this.options.theme)},stages:function(){for(this.stage=1,this.stages=stages,this.stagesLength=Object.keys(this.stages).length,this.sss=0,this.sss=1;this.sss<this.stagesLength+1;this.sss++){var i=this.stages["stage"+this.sss];"input"===i.type?this.append.input.call(this,i,i.type):"email"===i.type?this.append.input.call(this,i,i.type):"textarea"===i.type?this.append.textarea.call(this,i):"select"===i.type?this.append.select.call(this,i):"country"===i.type?this.append.select.call(this,i,"country"):"checkbox"===i.type||"radio"===i.type?this.append.checkboxradio.call(this,i):"date"===i.type?this.append.input.call(this,i,i.type):"rating"===i.type?this.append.rating.call(this,i):"media"===i.type?this.append.input.call(this,i,i.type):console.log("Error: Stage #"+this.sss+" has no valid 'type' set."),this.store[i.inputName]=""}this.$elem.append('<div class="ch-sending"><h2 class="alert-text"><i class="el-icon-envelope"></i> Sending...</h2></div>')},focus:function(){function i(){t=!1,setTimeout(function(){t=!0},1e3)}var t=!0,a=this.$elem.find("section:nth-of-type("+this.stage+")"),e=this,n=a.find("input"),s=a.find("textarea"),o=a.find("select"),l=a.find(".ch-next");s.length>0?n=s:o.length>0&&(n=o),n.length>0||s.length>0||o.length>0?(n.focus(),n.unbind("keydown").bind("keydown",function(a){t===!1&&a.preventDefault(),9===a.keyCode?(a.preventDefault(),l.hasClass("validated")&&l.focus()):13===a.keyCode&&t===!0&&(a.preventDefault(),e.links.nextStage.call(e,l),n.blur(),l.blur(),i())}),l.bind("keydown",function(i){9===i.which&&(i.preventDefault(),n.focus())})):(l.focus(),l.unbind("keydown").bind("keydown",function(a){t===!1&&a.preventDefault(),13===a.keyCode&&t&&(a.preventDefault(),e.links.nextStage.call(e,l),l.blur(),i())})),a.find(".checkbox-radio").on("click",function(){l.focus()})}},scaffold:{main:function(){var i='<div class="ch-title"><span>'+options.welcomeTitle+"</span></div>",t='<div class="ch-counter"><span>-</span></div>',a="",e="",n="",s="";this.options.modal&&(a='<div class="ch-close"><i class="el-icon-remove"></i></div>'),e='<div class="chattaaar-topbar">'+i+t+a+" </div>",this.$elem.append(e),this.options.modal&&(s=this.options.modalContainer,s=s.replace(/\./g,""),"undefined"!=typeof this.options.theme&&(n=" "+options.theme),this.$elem.wrap('<div class="chattaaar-modal '+s+n+'"></div>'))},stage:function(i,t){var a,e;this.stagesLength=Object.keys(this.stages).length,a=this.sss===this.stagesLength?this.options.sendBtnText:t.skippable===!0?this.options.skipBtnText:this.options.nextBtnText,e=t.skippable===!0?'<button type="button" class="ch-next skip validated">'+a+"</button>":'<button type="button" class="ch-next">'+a+"</button>";var n='<div class="default-icon"><i class="el-icon-child"></i></div>',s="",o=n,l="",c=n;"undefined"!=typeof t.useDifferentPerson?"undefined"!=typeof t.useDifferentPerson.avatar&&(o="",s=t.useDifferentPerson.avatar):"undefined"!=typeof this.options.yourAvatar&&(o="",s=this.options.yourAvatar),"undefined"!=typeof this.options.theirAvatar&&(c="",l=this.options.theirAvatar);var d;"undefined"!=typeof t.useDifferentPerson?"undefined"!=typeof t.useDifferentPerson.name&&(d=t.useDifferentPerson.name):d=this.options.yourName;var r='<section>             <div class="section-padding">               <div class="question-container">                 <div class="person-icon" style="background-image: url('+s+');">                   '+o+'                   <span class="name"><small>'+d+"</small></span>                 </div>                 <p>                   <span>"+t.question+'</span>                 </p>               </div>               <div class="action-container">                 <div class="person-icon" style="background-image: url('+this.options.theirAvatar+');">                   '+c+'                   <span class="name"><small>'+this.options.theirName+'</small></span>                 </div>                 <div class="action-wrapper">'+i+'</div>                 <div class="ch-btns-container">                   '+e+'                   <button type="button" class="ch-prev"><small><i class="el-icon-caret-up"></i></small> Prev</button>                 </div>               </div>             </div>           </section>';return r},welcome:function(){var i="";"undefined"!=typeof this.options.welcomeImage&&(i='<div style="background-image: url('+this.options.welcomeImage+"); height: "+this.options.welcomeImageHeight+"; width: "+this.options.welcomeImageWidth+"; background-size: "+this.options.welcomeImageWidth+" "+this.options.welcomeImageHeight+';" class="welcome-image"></div>'),this.$elem.append('           <section class="welcome active">             <div class="section-padding">               '+i+"               <h2>"+this.options.welcomeText+"</h2>               <p>"+this.options.welcomeStrapline+'</p>               <div class="ch-next validated"><h4>'+this.options.startBtnText+"</h4></div>             </div>           </section>")}},append:{input:function(t,a){var e,n="",s,o;if("media"===a){var l=t.accepts;i.each(l,function(i,t){n=n+" data-"+t+'="true"'}),a="text",e="ch-media"}"date"===a&&(a="text",e="ch-datepicker");var c='<input type="'+a+'" name="'+t.inputName+'" placeholder="'+t.placeholder+'" class="'+e+'" autocomplete="off"'+n+">";this.$elem.append(this.scaffold.stage.call(this,c,t))},textarea:function(i){var t="",a="",n=function(i){return'<div class="limit-update invalid"><p><span class="limit-count">0</span>/'+i+"</p></div>"};i.charlimit!==e?(t='data-charlimit="'+i.charlimit+'"',a=n(i.charlimit)):i.wordlimit!==e&&(t='data-wordlimit="'+i.wordlimit+'"',a=n(i.wordlimit));var s='<textarea name="'+i.inputName+'" placeholder="'+i.placeholder+'"'+t+"></textarea>"+a;this.$elem.append(this.scaffold.stage.call(this,s,i))},checkboxradio:function(t){var a="";i.each(t.options,function(i,e){var n='             <label class="checkbox-radio">               <input type="'+t.type+'" name="'+t.inputName+'" value="'+e+'"/>               <span>                 <i class="el-icon-check-empty"></i>                 <i class="el-icon-edit"></i>                 <i class="el-icon-check"></i>                 '+e+"               </span>             </label>";a+=n}),a='<div class="checkbox-group">'+a+"</div>",this.$elem.append(this.scaffold.stage.call(this,a,t))},select:function(t,a){var e="";e="country"===a?this.utilities.arrays.country():t.options,i.each(e,function(i,t){var a="<option>"+t+"</option>";e+=a});var n='           <select type="text" name="'+t.inputName+'" placeholder="'+t.placeholder+'">             <option value="" disabled selected>'+t.placeholder+"</option>             "+e+"           </select>";this.$elem.append(this.scaffold.stage.call(this,n,t))},rating:function(i){var t='<input type="hidden" name="'+i.inputName+'">',a='<li><i class="star el-icon-star"></i></li>',e='<span class="star-count"></span>',n='<ul class="rating rating-'+i.inputName+'">'+a+a+a+a+a+e+t+"</ul>";this.$elem.append(this.scaffold.stage.call(this,n,i))}},links:{nextStage:function(i){if(i.hasClass("validated"))if(this.stage===this.stagesLength+1)this.send.call(this);else{this.$elem.find("section:nth-of-type("+this.stage+")").removeClass("active").addClass("after"),this.$elem.find("section:nth-of-type("+(this.stage+1)+")").addClass("active"),this.stage++,this.utilities.changeTitle.call(this);var t=this;this.utilities.isMobile()||setTimeout(function(){t.setup.focus.call(t)},500),this.validations.validate.call(this)}},previousStage:function(i){this.$elem.find("section:nth-of-type("+this.stage+")").removeClass("active"),this.$elem.find("section:nth-of-type("+(this.stage-1)+")").removeClass("after").addClass("active"),this.stage--,this.utilities.changeTitle.call(this);var t=this;this.utilities.isMobile()||setTimeout(function(){t.setup.focus.call(t)},500),this.validations.validate.call(this)},init:function(){var t=this;this.$elem.find(".ch-next").on("click",function(a){a.preventDefault(),t.links.nextStage.call(t,i(this))}),this.$elem.find(".ch-prev").on("click",function(a){a.preventDefault(),t.links.previousStage.call(t,i(this))})}},validations:{makeValid:function(i){i.hasClass("skip")?i.html("Next"):i.addClass("validated")},makeInvalid:function(i){i.hasClass("skip")?i.html("Skip"):i.removeClass("validated")},validate:function(){var t=this.$elem.find("section:nth-of-type("+this.stage+")"),a=t.find("input, textarea"),e=t.find("select"),n=t.find(".checkbox-group"),s=t.find(".rating"),o=t.find(".ch-datepicker"),l=t.find(".ch-next"),c=this;a.keyup(function(){var t=i(this),e=t.attr("name"),n=t.val(),s=a.filter(function(){return""===i.trim(this.value)});s.length?(c.validations.makeInvalid(l),(t.is("[data-charlimit]")||t.is("[data-wordlimit]"))&&c.validations.types.limit.call(c,n,t,l)):"email"===t.attr("type")?c.validations.types.email.call(c,n,l):t.hasClass("ch-datepicker")?c.validations.types.date(value):t.hasClass("ch-media")?c.validations.types.media.call(c,n,t,l):t.is("[data-charlimit]")||t.is("[data-wordlimit]")?c.validations.types.limit.call(c,n,t,l):c.validations.makeValid(l),c.store[e]=n,i("span.ch-"+e).html(n)}),e.each(function(){c.validations.types.select.call(c,i(this),l)}),n.on("click",function(){c.validations.types.checkboxradio.call(c,i(this),l)}),s.length>0&&this.plugins.rating.init.call(this),o.length>0&&this.plugins.date.init.call(this,o)},types:{email:function(i,t){var a=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;a.test(i)?this.validations.makeValid(t):this.validations.makeInvalid(t)},select:function(t,a){var e=this;t.change(function(){e.validations.makeValid(a);var t=i(this).attr("name"),n=i(this).val();e.store[t]=n,i("span.ch-"+t).html(n)})},checkboxradio:function(i,t){var a=i.find("input:checked");a.length>0?this.validations.makeValid(t):this.validations.makeInvalid(t)},media:function(i,t,a){if(t.is("[data-youtube]")||t.is("[data-soundcloud]")){var e=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,n=/^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/;e.test(i)||n.test(i)?this.validations.makeValid(a):this.validations.makeInvalid(a)}},limit:function(i,t,a){var n=t.attr("data-charlimit"),s=t.attr("data-wordlimit"),o=t.closest(".action-wrapper").find(".limit-update"),l=o.find(".limit-count"),c=i.length,d=i.split(" "),r=d.length-1;n!==e?l.html(c):s!==e&&l.html(r),c>0&&n>=c||r>0&&s>=r?(o.removeClass("invalid"),this.validations.makeValid(a)):(o.addClass("invalid"),this.validations.makeInvalid(a))}}},plugins:{rating:{init:function(){var t=this.$elem.find("section:nth-of-type("+this.stage+")"),a=t.find(".rating"),e=a.find("li"),n=t.find(".ch-next"),s=this;e.unbind("mouseenter mouseleave").bind("mouseenter",function(){if(!a.hasClass("valueSelected")){a.find("li").removeClass("hover");for(var t=i(this).index(),e=1;t+1>=e;e++)a.find("li:nth-child("+e+")").addClass("hover")}}),a.unbind("mouseenter mouseleave").bind("mouseleave",function(){a.find("li").removeClass("hover")}),e.on("click",function(){a.find("li").removeClass("selected"),a.addClass("valueSelected");for(var t=i(this).index()+1,e=1;t>=e;e++)a.find("li:nth-child("+e+")").addClass("selected");var o=a.find("input"),l=o.attr("name");o.val(t),n.addClass("validated").focus();var c=a.find("span");c.html(t+"/5"),s.store[l]=t,i("span.ch-"+l).html(t)})},reset:function(){var i=this.$elem.find(".rating");i.removeClass("valueSelected"),i.find("li").removeClass(),i.find("span").html("")}},date:{init:function(t){var a=this.stages["stage"+(this.stage-1)].datepicker,e=this;t.datepicker(a),t.on("change paste",function(){var t=i(this).val();e.plugins.date.validate.call(e,t)})},validate:function(i){var t=this.$elem.find("section:nth-of-type("+this.stage+")"),a=t.find(".ch-next"),e=/^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;e.test(i)?this.validations.makeValid(a):this.validations.makeInvalid(a)}}},send:function(){var t=this.$elem.find(".ch-sending"),a=this,e=function(i){t.addClass("show"),options.testMode&&setTimeout(function(){i()},2e3)},n=function(){var e;e=a.options.testMode?"Sent <i>(in test mode)</i>":"Sent",t.find("h2").html('<i class="el-icon-check"></i> '+e),setTimeout(function(){a.options.modal?(i(a.options.modalContainer).removeClass("open").addClass("close"),setTimeout(function(){i(a.options.modalContainer).removeClass("close"),resetForm()},400)):a.utilities.resetForm.call(a)},2e3)};return a.options.testMode?void e(function(){n()}):(e(),i.post(i("form[name="+a.options.formName+"]").attr("action"),i("form[name="+a.options.formName+"]").serialize(),function(i){"sent"===i?n():(t.removeClass("show"),setTimeout(function(){alert("Form sending timed out")},3e4))}),!1)},utilities:{init:function(){this.utilities.verticalAlign.call(this),this.utilities.responsive.call(this),this.utilities.changeTitle.call(this),this.utilities.initModal.call(this)},verticalAlign:function(){function a(a){function e(i){var t=i.height();i.css({"margin-top":"-"+t/2+"px"})}i(a).each(function(){e(i(this))}),i(t).resize(function(){i(a).each(function(){e(i(this))})})}var e=this.$elem.find(".section-padding");a(e)},responsive:function(){function a(){var t;t=e.options.modal?i(e.options.modalContainer):e.$elem,t.width()<=700?e.$elem.addClass("condensed"):e.$elem.removeClass("condensed")}var e=this;a(),i(t).resize(function(){a()})},changeTitle:function(){var i=this.$elem.find(".ch-title span"),t=this.$elem.find(".ch-counter span");1===this.stage?(i.html(this.options.welcomeTitle),t.html("-")):(i.html(this.stages["stage"+(this.stage-1)].title),t.html(this.stage-1+"/"+this.stagesLength))},initModal:function(){var t=this;t.options.modalFullScreen&&t.$elem.addClass("fullscreen"),i(a).on("click",t.options.modalOpenBtn,function(){i(t.options.modalContainer).addClass("open")}),t.$elem.find(".ch-close").on("click",function(){i(t.options.modalContainer).removeClass("open").addClass("close"),setTimeout(function(){i(t.options.modalContainer).removeClass("close"),t.utilities.resetForm.call(t)},400)})},resetForm:function(){i("form[name="+this.options.formName+"]")[0].reset(),this.$elem.find(".ch-next").each(function(){i(this).hasClass("skip")?i(this).html("Skip"):i(this).removeClass("validated")}),this.$elem.find("section").removeClass("after active"),this.$elem.find(".ch-sending").removeClass("show"),this.$elem.find("section:nth-of-type(1)").addClass("active"),this.$elem.find("section:nth-of-type(1) .ch-next").addClass("validated"),this.plugins.rating.reset.call(this),this.stage=1,this.utilities.changeTitle.call(this)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},arrays:{country:function(){return["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]}}}},n.options=Plugin.prototype.options,i.fn.newChattaaar=function(i,t){return this.each(function(){new n(this,i,t).init()})}}(jQuery,window,document);
//# sourceMappingURL=./chattaaar-min.map