!function($,e,i,a){var t=function(e,i,a){this.elem=e,this.$elem=$(e),this.options=i,this.stages=a,this.store={},this.preventClick=!1};t.prototype={init:function(){return this.options=$.extend({formName:"form-"+(1+Math.floor(1e3*Math.random())),yourName:"Us",theirName:"You",welcomeTitle:'<i class="el-icon-envelope"></i>',welcomeText:"Welcome",welcomeStrapline:"Please add a strapline",startBtnText:"Start",nextBtnText:"Next",sendBtnText:"Send",skipBtnText:"Skip",modal:!1,modalOpenBtn:".chattaaar-open",modalContainer:".chattaaar-modal",modalFullScreen:!1,testMode:!1},options),this.setup.main.call(this),this.scaffold.main.call(this),this.scaffold.welcome.call(this),this.setup.stages.call(this),this.links.init.call(this),this.utilities.init.call(this),this.options.modal!==!1&&this.utilities.initModal.call(this),this},setup:{main:function(){this.$elem.attr({name:options.formName,action:options.formAction}),"undefined"!=typeof options.theme&&this.$elem.addClass(options.theme)},stages:function(){for(this.stage=1,this.stages=stages,this.stagesLength=Object.keys(this.stages).length,this.sss=0,this.sss=1;this.sss<this.stagesLength+1;this.sss++){var e=this.stages["stage"+this.sss];"input"===e.type?this.append.input.call(this,e,e.type):"email"===e.type?this.append.input.call(this,e,e.type):"fullName"===e.type?this.append.fullName.call(this,e):"textarea"===e.type?this.append.textarea.call(this,e):"select"===e.type?this.append.select.call(this,e):"country"===e.type?this.append.select.call(this,e,"country"):"checkbox"===e.type||"radio"===e.type?this.append.checkboxradio.call(this,e):"scale"===e.type?this.append.scale.call(this,e):"date"===e.type?this.append.input.call(this,e,e.type):"rating"===e.type?this.append.rating.call(this,e):"media"===e.type?this.append.input.call(this,e,e.type):console.log("Error: Stage #"+this.sss+" has no valid 'type' set."),this.store[e.inputName]=""}this.$elem.append('<div class="ch-sending"><h2 class="alert-text"><i class="el-icon-envelope"></i> Sending...</h2></div>')},focus:function(){function e(){i=!1,setTimeout(function(){i=!0},1e3)}var i=!0,a=this.$elem.find("section:nth-of-type("+this.stage+")"),t=this,s=a.find("input"),n=a.find("textarea"),l=a.find("select"),o=a.find(".ch-next");n.length>0?s=n:l.length>0&&(s=l),s.length>0||n.length>0||l.length>0?(s[0].focus(),s.unbind("keydown").bind("keydown",function(a){i===!1&&a.preventDefault();var n=$(this).index()+1;9===a.keyCode?(a.preventDefault(),n<s.length?s[n].focus():o.hasClass("validated")?o.focus():s[0].focus()):13===a.keyCode&&i===!0&&(a.preventDefault(),t.links.nextStage.call(t,o),s.blur(),o.blur(),e())}),o.bind("keydown",function(e){9===e.which&&(e.preventDefault(),s[0].focus())})):(o.focus(),o.unbind("keydown").bind("keydown",function(a){i===!1&&a.preventDefault(),13===a.keyCode&&i&&(a.preventDefault(),t.links.nextStage.call(t,o),o.blur(),e())})),a.find(".checkbox-radio").on("click",function(){o.focus()})}},scaffold:{main:function(){var e='<div class="ch-title"><span>'+options.welcomeTitle+"</span></div>",i='<div class="ch-counter"><span>-</span></div>',a="",t="",s="",n="";this.options.modal&&(a='<div class="ch-close"><i class="el-icon-remove"></i></div>'),t='<div class="chattaaar-topbar">'+e+i+a+" </div>",this.$elem.append(t),this.options.modal&&(n=this.options.modalContainer,n=n.replace(/\./g,""),"undefined"!=typeof this.options.theme&&(s=" "+options.theme),this.$elem.wrap('<div class="chattaaar-modal '+n+s+'"></div>'))},stage:function(e,i){var a,t;this.stagesLength=Object.keys(this.stages).length,a=this.sss===this.stagesLength?this.options.sendBtnText:i.skippable===!0?this.options.skipBtnText:this.options.nextBtnText,t=i.skippable===!0?'<button type="button" class="ch-next skip validated">'+a+"</button>":'<button type="button" class="ch-next">'+a+"</button>";var s='<div class="default-icon"><i class="el-icon-child"></i></div>',n="",l=s,o="",c=s;"undefined"!=typeof i.useDifferentPerson?"undefined"!=typeof i.useDifferentPerson.avatar&&(l="",n=i.useDifferentPerson.avatar):"undefined"!=typeof this.options.yourAvatar&&(l="",n=this.options.yourAvatar),"undefined"!=typeof this.options.theirAvatar&&(c="",o=this.options.theirAvatar);var d;"undefined"!=typeof i.useDifferentPerson?"undefined"!=typeof i.useDifferentPerson.name&&(d=i.useDifferentPerson.name):d=this.options.yourName;var r='<section>             <div class="section-padding">               <div class="question-container">                 <div class="person-icon" style="background-image: url('+n+');">                   '+l+'                   <span class="name"><small>'+d+"</small></span>                 </div>                 <p>                   <span>"+i.question+'</span>                 </p>               </div>               <div class="action-container">                 <div class="person-icon" style="background-image: url('+this.options.theirAvatar+');">                   '+c+'                   <span class="name"><small>'+this.options.theirName+'</small></span>                 </div>                 <div class="action-wrapper">'+e+'</div>               </div>             </div>             <div class="ch-btns-container">               '+t+'               <button type="button" class="ch-prev"><small><i class="el-icon-caret-up"></i></small> Prev</button>             </div>           </section>';return r},welcome:function(){var e="";"undefined"!=typeof this.options.welcomeImage&&(e='<div style="background-image: url('+this.options.welcomeImage+"); height: "+this.options.welcomeImageHeight+"; width: "+this.options.welcomeImageWidth+"; background-size: "+this.options.welcomeImageWidth+" "+this.options.welcomeImageHeight+';" class="welcome-image"></div>'),this.$elem.append('           <section class="welcome active welcome-link validated">             <div class="section-padding">               '+e+"               <h2>"+this.options.welcomeText+"</h2>               <p>"+this.options.welcomeStrapline+"</p>             </div>           </section>")}},append:{input:function(e,i){var a,t="",s,n;if("media"===i){var l=e.accepts;$.each(l,function(e,i){t=t+" data-"+i+'="true"'}),i="text",a="ch-media"}"date"===i&&(i="text",a="ch-datepicker");var o='<input type="'+i+'" name="'+e.inputName+'" placeholder="'+e.placeholder+'" class="'+a+'" autocomplete="off"'+t+">";this.$elem.append(this.scaffold.stage.call(this,o,e))},fullName:function(e){var i=function(e,i){return'<input type="text" name="'+e+'" placeholder="'+i+'" autocomplete="off">'},t="First",s="Last";e.placeholders!==a&&(e.placeholders.firstName!==a&&(t=e.placeholders.firstName),e.placeholders.lastName!==a&&(s=e.placeholders.lastName));var n="first-name",l="last-name";e.inputNames!==a&&(e.inputNames.firstName!==a&&(n=e.inputNames.firstName),e.inputNames.lastName!==a&&(l=e.inputNames.lastName));var o=i(n,t),c=i(l,s),d=o+c,r='<div class="names">'+d+"</div>";this.$elem.append(this.scaffold.stage.call(this,r,e))},textarea:function(e){var i="",t="",s=function(e){return'<div class="limit-update invalid"><p><span class="limit-count">0</span>/'+e+"</p></div>"};e.charlimit!==a?(i='data-charlimit="'+e.charlimit+'"',t=s(e.charlimit)):e.wordlimit!==a&&(i='data-wordlimit="'+e.wordlimit+'"',t=s(e.wordlimit));var n='<textarea name="'+e.inputName+'" placeholder="'+e.placeholder+'"'+i+"></textarea>"+t;this.$elem.append(this.scaffold.stage.call(this,n,e))},checkboxradio:function(e){var i="";$.each(e.options,function(a,t){var s='             <label class="checkbox-radio">               <input type="'+e.type+'" name="'+e.inputName+'" value="'+t+'"/>               <span>                 <i class="el-icon-check-empty"></i>                 <i class="el-icon-edit"></i>                 <i class="el-icon-check"></i>                 '+t+"               </span>             </label>";i+=s}),i='<div class="checkbox-group">'+i+"</div>",this.$elem.append(this.scaffold.stage.call(this,i,e))},scale:function(e){for(var i="",a="",t=1;5>=t;t++){var s='             <label class="checkbox-radio">               <input type="radio" name="'+e.inputName+'" value="'+t+'"/>               <span>                 <i class="el-icon-check-empty"></i>                 <i class="el-icon-edit"></i>                 <i class="el-icon-check"></i>               </span>             </label>';i+=s}a='<div class="scale-header"><span class="low">'+e.placeholders.low+'</span><span class="high">'+e.placeholders.high+'</span><div class="notch"></div></span><div class="notch"></div></span><div class="notch"></div></span><div class="notch"></div></span><div class="notch"></div></div>',i=a+'<div class="checkbox-group scale-boxes">'+i+"</div>",this.$elem.append(this.scaffold.stage.call(this,i,e))},select:function(e,i){var a="";a="country"===i?this.utilities.arrays.country():e.options,$.each(a,function(e,i){var t="<option>"+i+"</option>";a+=t});var t='           <select type="text" name="'+e.inputName+'" placeholder="'+e.placeholder+'">             <option value="" disabled selected>'+e.placeholder+"</option>             "+a+"           </select>";this.$elem.append(this.scaffold.stage.call(this,t,e))},rating:function(e){var i='<input type="hidden" name="'+e.inputName+'">',a='<li><i class="star el-icon-star"></i></li>',t='<span class="star-count"></span>',s='<ul class="rating rating-'+e.inputName+'">'+a+a+a+a+a+t+i+"</ul>";this.$elem.append(this.scaffold.stage.call(this,s,e))}},links:{nextStage:function(e){if(e.hasClass("validated"))if(this.stage===this.stagesLength+1)this.send.call(this);else{this.$elem.find("section:nth-of-type("+this.stage+")").removeClass("active").addClass("after"),this.$elem.find("section:nth-of-type("+(this.stage+1)+")").addClass("active"),this.stage++,this.utilities.changeTitle.call(this);var i=this;this.utilities.isMobile()||setTimeout(function(){i.setup.focus.call(i)},500),this.validations.validate.call(this)}},previousStage:function(e){this.$elem.find("section:nth-of-type("+this.stage+")").removeClass("active"),this.$elem.find("section:nth-of-type("+(this.stage-1)+")").removeClass("after").addClass("active"),this.stage--,this.utilities.changeTitle.call(this);var i=this;this.utilities.isMobile()||setTimeout(function(){i.setup.focus.call(i)},500),this.validations.validate.call(this)},init:function(){var e=this;this.$elem.find(".ch-next").on("click",function(i){i.preventDefault(),e.links.nextStage.call(e,$(this))}),this.$elem.find(".ch-prev").on("click",function(i){i.preventDefault(),e.links.previousStage.call(e,$(this))}),this.$elem.find(".welcome-link").on("click",function(i){i.preventDefault(),e.preventClick===!1&&(e.links.nextStage.call(e,$(this)),e.preventClick=!0,setTimeout(function(){e.preventClick=!1},750))})}},validations:{makeValid:function(e){e.hasClass("skip")?e.html("Next"):e.addClass("validated")},makeInvalid:function(e){e.hasClass("skip")?e.html("Skip"):e.removeClass("validated")},validate:function(){var e=this.$elem.find("section:nth-of-type("+this.stage+")"),i=e.find("input, textarea"),a=e.find("select"),t=e.find(".checkbox-group"),s=e.find(".rating"),n=e.find(".ch-datepicker"),l=e.find(".ch-next"),o=this;i.keyup(function(){var e=$(this),a=e.attr("name"),t=e.val(),s=i.filter(function(){return""===$.trim(this.value)});s.length?(o.validations.makeInvalid(l),(e.is("[data-charlimit]")||e.is("[data-wordlimit]"))&&o.validations.types.limit.call(o,t,e,l)):"email"===e.attr("type")?o.validations.types.email.call(o,t,l):e.hasClass("ch-datepicker")?o.validations.types.date(value):e.hasClass("ch-media")?o.validations.types.media.call(o,t,e,l):e.is("[data-charlimit]")||e.is("[data-wordlimit]")?o.validations.types.limit.call(o,t,e,l):o.validations.makeValid(l),o.store[a]=t,$("span.ch-"+a).html(t)}),a.each(function(){o.validations.types.select.call(o,$(this),l)}),t.on("click",function(){o.validations.types.checkboxradio.call(o,$(this),l)}),s.length>0&&this.plugins.rating.init.call(this),n.length>0&&this.plugins.date.init.call(this,n)},types:{email:function(e,i){var a=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;a.test(e)?this.validations.makeValid(i):this.validations.makeInvalid(i)},select:function(e,i){var a=this;e.change(function(){a.validations.makeValid(i);var e=$(this).attr("name"),t=$(this).val();a.store[e]=t,$("span.ch-"+e).html(t)})},checkboxradio:function(e,i){var a=e.find("input:checked");a.length>0?this.validations.makeValid(i):this.validations.makeInvalid(i)},media:function(e,i,a){if(i.is("[data-youtube]")||i.is("[data-soundcloud]")){var t=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,s=/^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/;t.test(e)||s.test(e)?this.validations.makeValid(a):this.validations.makeInvalid(a)}},limit:function(e,i,t){var s=i.attr("data-charlimit"),n=i.attr("data-wordlimit"),l=i.closest(".action-wrapper").find(".limit-update"),o=l.find(".limit-count"),c=e.length,d=e.split(" "),r=d.length-1;s!==a?o.html(c):n!==a&&o.html(r),c>0&&s>=c||r>0&&n>=r?(l.removeClass("invalid"),this.validations.makeValid(t)):(l.addClass("invalid"),this.validations.makeInvalid(t))}}},plugins:{rating:{init:function(){var e=this.$elem.find("section:nth-of-type("+this.stage+")"),i=e.find(".rating"),a=i.find("li"),t=e.find(".ch-next"),s=this;a.unbind("mouseenter mouseleave").bind("mouseenter",function(){if(!i.hasClass("valueSelected")){i.find("li").removeClass("hover");for(var e=$(this).index(),a=1;e+1>=a;a++)i.find("li:nth-child("+a+")").addClass("hover")}}),i.unbind("mouseenter mouseleave").bind("mouseleave",function(){i.find("li").removeClass("hover")}),a.on("click",function(){i.find("li").removeClass("selected"),i.addClass("valueSelected");for(var e=$(this).index()+1,a=1;e>=a;a++)i.find("li:nth-child("+a+")").addClass("selected");var n=i.find("input"),l=n.attr("name");n.val(e),t.addClass("validated").focus();var o=i.find("span");o.html(e+"/5"),s.store[l]=e,$("span.ch-"+l).html(e)})},reset:function(){var e=this.$elem.find(".rating");e.removeClass("valueSelected"),e.find("li").removeClass(),e.find("span").html("")}},date:{init:function(e){var i=this,t={beforeShow:function(e,t){if(typeof i.options.theme!==a){var s=$("#ui-datepicker-div"),n=s.attr("data-theme");n!==i.options.theme&&(s.attr("data-theme",""),s.attr("data-theme",i.options.theme))}}};t=$.extend(i.stages["stage"+(i.stage-1)].datepicker,t),e.datepicker(t),e.on("change paste",function(){var e=$(this).val();i.plugins.date.validate.call(i,e)})},validate:function(e){var i=this.$elem.find("section:nth-of-type("+this.stage+")"),a=i.find(".ch-next"),t=/^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;t.test(e)?this.validations.makeValid(a):this.validations.makeInvalid(a)}}},send:function(){var e=this.$elem.find(".ch-sending"),i=this,a=function(i){e.addClass("show"),options.testMode&&setTimeout(function(){i()},2e3)},t=function(){var a;a=i.options.testMode?"Sent <i>(in test mode)</i>":"Sent",e.find("h2").html('<i class="el-icon-check"></i> '+a),setTimeout(function(){i.options.modal?($(i.options.modalContainer).removeClass("open").addClass("close"),setTimeout(function(){$(i.options.modalContainer).removeClass("close"),i.utilities.resetForm.call(i)},400)):i.utilities.resetForm.call(i)},2e3)};return i.options.testMode?void a(function(){t()}):(a(),$.post($("form[name="+i.options.formName+"]").attr("action"),$("form[name="+i.options.formName+"]").serialize(),function(i){"sent"===i?t():(e.removeClass("show"),setTimeout(function(){alert("Form sending timed out")},3e4))}),!1)},utilities:{init:function(){this.utilities.responsive.call(this),this.utilities.changeTitle.call(this),this.utilities.initModal.call(this)},responsive:function(){function i(){var e;e=a.options.modal?$(a.options.modalContainer):a.$elem,e.width()<=700?a.$elem.addClass("condensed"):a.$elem.removeClass("condensed")}var a=this;i(),$(e).resize(function(){i()})},changeTitle:function(){var e=this.$elem.find(".ch-title span"),i=this.$elem.find(".ch-counter span");1===this.stage?(e.html(this.options.welcomeTitle),i.html("-")):(e.html(this.stages["stage"+(this.stage-1)].title),i.html(this.stage-1+"/"+this.stagesLength))},initModal:function(){var e=this;e.options.modalFullScreen&&e.$elem.addClass("fullscreen"),$(i).on("click",e.options.modalOpenBtn,function(){$(e.options.modalContainer).addClass("open")}),e.$elem.find(".ch-close").on("click",function(){$(e.options.modalContainer).removeClass("open").addClass("close"),setTimeout(function(){$(e.options.modalContainer).removeClass("close"),e.utilities.resetForm.call(e)},400)})},resetForm:function(){$("form[name="+this.options.formName+"]")[0].reset(),this.$elem.find(".ch-next").each(function(){$(this).hasClass("skip")?$(this).html("Skip"):$(this).removeClass("validated")}),this.$elem.find("section").removeClass("after active"),this.$elem.find(".ch-sending").removeClass("show"),this.$elem.find("section:nth-of-type(1)").addClass("active"),this.$elem.find("section:nth-of-type(1) .ch-next").addClass("validated"),this.plugins.rating.reset.call(this),this.stage=1,this.utilities.changeTitle.call(this)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},arrays:{country:function(){return["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]}}}},t.options=Plugin.prototype.options,$.fn.newChattaaar=function(e,i){return this.each(function(){new t(this,e,i).init()})}}(jQuery,window,document);
//# sourceMappingURL=./chattaaar-min.map