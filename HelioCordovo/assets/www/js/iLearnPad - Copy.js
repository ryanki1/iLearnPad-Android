var Item = Backbone.Model.extend({
  defaults: {
  	pathMenu: "images/doggy100.png",
    pathPortrait: "images/doggy180.png",
    pathLandscape: "images/doggy320.png",
    title: "Doggy"
  }
});

var Cart = Backbone.Collection.extend({
  model: Item
});

var items = [
  { pathMenu: "images/doggy100.png", 		pathLandscape: "images/content/doggy180.png", 		pathPortrait: "images/content/doggy320.png", 		usemapLandscape: "doggy180",		usemapPortrait: "doggy320",			words: ["Doggy","Guitar","Window","Door","Girl"],		pathSound:"/android_asset/",		soundType:".mp3", 	soundBites:["areaDoggyDoggy","areaDoggyGuitar","areaDoggyWindow","areaDoggyDoor","areaDoggyGirl"],							coords: ["161,207,162,191,186,174,213,187,251,215,287,273,276,303,249,300,240,294,207,290,221,286,216,264,194,283,174,290,193,238,189,210,186,205,176,216,160,211","52,164,44,142,51,123,71,116,91,119,99,115,107,119,102,124,162,112,182,108,197,119,178,122,174,118,124,131,124,146,116,151,100,152,91,159,81,167,68,169,54,165,52,160","2,41,46,71,48,20,23,1,1,2,2,44","119,2,119,69,126,73,128,79,127,89,126,95,123,99,119,105,119,109,133,117,185,108,199,118,179,124,175,119,170,122,167,128,199,125,200,126,209,125,212,108,212,103,207,102,203,91,203,82,202,80,207,77,215,71,225,76,232,83,230,0","202,158,219,164,249,151,248,146,242,138,239,127,238,119,240,107,237,101,235,87,231,83,226,77,219,73,215,73,213,73,210,76,209,78,203,82,203,89,205,95,209,101,214,104,213,109,211,118,208,127,207,130,200,130,191,128,185,137,185,145,190,150,196,153,203,159"],																																																																																																																																																title: "Doggy" },
  { pathMenu: "images/beach100.png", 		pathLandscape: "images/content/beach180.png", 		pathPortrait: "images/content/beach320.png", 		usemapLandscape: "beach180",		usemapPortrait: "beach320",			words: ["Hammock","Beach","Sea","Palm Tree","Cloud"],	pathSound:"/android_asset/",		soundType:".mp3", 	soundBites:["areaBeachHammock","areaBeachBeach","areaBeachSea","areaBeachPalmTree","areaBeachCloud"],						coords: ["136,72,142,86,135,173,228,223,243,225,255,224,277,217,306,208,319,199,330,198,308,197,289,188,267,163,261,150,267,146,147,85,139,64","3,313,2,265,21,249,34,253,50,254,69,252,78,247,88,243,105,242,115,241,126,240,140,241,150,243,163,244,173,245,179,244,169,242,165,243,156,244,145,246,136,246,122,246,119,245,112,245,105,245,96,247,93,250,93,253,101,253,110,253,132,254,147,255,154,258,158,261,167,266,168,271,168,275,167,279,157,275,149,273,142,267,136,270,130,274,119,278,113,279,106,286,107,294,113,295,124,293,133,292,147,292,155,295,160,301,168,305,178,306,184,308,195,311,205,311,215,311,223,311,223,308,223,306,224,302,244,297,250,295,255,290,264,288,310,295,317,295,328,295,336,295,355,297,391,304,407,314,4,314","289,243,286,249,281,259,277,269,271,275,264,280,268,288,313,295,331,295,360,298,383,300,403,304,409,311,420,313,420,242,289,244","2,265,28,243,53,209,77,184,99,156,115,123,131,83,144,39,150,16,116,0,108,20,96,46,79,91,60,108,43,129,25,152,1,176","309,172,320,178,327,179,335,178,335,167,341,165,349,160,363,160,378,160,399,157,410,157,419,159,419,169,418,171,414,171,411,171,413,175,413,181,409,180,404,180,400,180,401,182,407,184,413,182,417,181,420,183,418,193,411,198,406,198,398,197,391,195,381,192,388,189,394,186,395,185,390,183,388,182,388,184,387,187,382,190,375,193,365,197,360,198,356,197,350,189,345,192,334,193,324,192,316,191,312,189,311,186,309,185,305,185,308,176"],		title: "Beach" },
  { pathMenu: "images/playground100.png", 	pathLandscape: "images/content/playground180.png", 	pathPortrait: "images/content/playground320.png", 	usemapLandscape: "playground180",	usemapPortrait: "playground320",	words: ["Girl","Slide","Window","Door","Hedge"],		pathSound:"/android_asset/",		soundType:".mp3", 	soundBites:["areaPlaygroundGirl","areaPlaygroundSlide","areaPlaygroundWindow","areaPlaygroundDoor","areaPlaygroundHedge"],	coords: ["120,248,127,256,132,260,141,262,144,260,147,248,150,239,153,234,158,234,159,238,165,247,165,257,166,265,158,267,156,268,155,272,161,274,166,274,171,272,178,264,180,254,178,244,174,237,171,232,170,229,179,225,179,217,175,211,168,195,160,175,163,164,162,158,156,143,152,136,145,135,137,135,134,141,133,144,129,155,130,159,136,164,141,175,138,183,136,198,133,214,130,225,132,237,134,239,129,251,126,249,123,247,123,246","18,189,42,68,52,69,61,75,65,78,67,86,68,94,71,100,77,101,83,102,84,97,83,82,84,76,90,75,91,85,95,91,105,102,116,114,124,120,134,133,137,138,131,147,130,154,135,163,138,173,138,185,132,195,133,213,131,222,117,202,111,188,96,157,82,139,71,124,65,128,63,149,55,173,53,190,21,189","184,137,205,141,208,108,184,106,183,137","226,107,264,110,261,206,230,212,229,197,224,196,226,107","88,35,96,28,105,17,122,13,138,21,146,29,159,32,166,30,176,27,184,35,196,32,208,32,215,35,218,40,212,41,149,90,152,94,168,99,170,148,160,148,158,143,152,137,146,136,139,137,134,128,129,123,117,114,105,103,95,87,91,72,89,62,85,59,84,52,86,45,95,50,99,42,89,37"],																																																																																									title: "Playground" },
  { pathMenu: "images/nannas100.png", 		pathLandscape: "images/content/nannas180.png", 		pathPortrait: "images/content/nannas320.png", 		usemapLandscape: "nannas180",		usemapPortrait: "nannas320",		words: ["Oven","Clock","Counter","Light","Dolly"],		pathSound:"/android_asset/",		soundType:".mp3", 	soundBites:["areaNannasOven","areaNannasClock","areaNannasCounter","areaNannasLight","areaNannasDolly"], 					coords: ["244,237,243,172,316,175,315,248,245,237","164,89,158,93,159,104,169,107,173,100,170,93,167,90","2,213,66,186,244,206,239,216,238,304,102,305,102,289,45,269,14,280,1,215","117,3,116,22,114,27,109,37,104,45,106,52,113,54,126,51,130,49,134,47,134,38,132,34,125,29,123,23,122,11,121,1,119,1","127,53,129,56,135,57,135,68,137,72,141,73,142,72,140,69,140,67,142,62,147,66,152,65,147,61,146,61,150,58,149,55,146,51,145,47,142,42,140,42,138,40,141,37,139,34,137,30,135,29,134,30,133,34,134,36,134,39,135,46,134,48,131,49,127,51,127,55,134,57,135,67"],																																																																																																																																																																																																																									title: "Nannas" }
];

var cartCollection = new Cart(items);

var ItemMenuView = Backbone.View.extend({
  template: $("#cartTemplate").html(),

  render: function() {
    var templ = _.template(this.template);
    this.$el.html(templ(this.model.toJSON()));
    return this;
  }
});

var ItemView = Backbone.View.extend({
  template: $("#itemTemplate").html(),
  render: function() {
    var templ = _.template(this.template);
    this.$el.html(templ(this.model.toJSON()));
    return this;
  }
});


var CartCollectionView = Backbone.View.extend({
  elMenu: $("#menuContent"),
  el: $("#pages"),
  initialize: function() {
    this.collection = cartCollection;
    this.renderMenu();
    this.render();
  },
  renderMenu: function() {
    this.collection.each(function(item) {
      this.renderMenuItem(item);
    }, this);
  },
  render: function() {
    this.collection.each(function(item) {
      this.renderItem(item);
    }, this);
  },
  renderMenuItem: function(item) {
    var itemMenuView = new ItemMenuView({ model: item, tagName: 'li', attributes: {"data-icon": "arrow-r","data-iconpos":"right","data-wrapperels":"a", "data-theme":"c", "class":"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-top ui-btn-up-c"} });
    this.elMenu.append(itemMenuView.render().el); 
  },
  renderItem: function(item) {
    var itemView = new ItemView({ model: item, id: "content" + item.attributes.title, attributes: {"data-role": "page"}});
    this.$el.append(itemView.render().el); 
    $( "#content" + item.attributes.title ).bind( 'pageinit',function(event){
    	//debugger;
    	
	    $('[id^="area'+item.attributes.title+'"]').bind("tap", function () {
	    	//debugger;
	        twangIt(this, item);
		});
    });
    $( "#content" + item.attributes.title ).bind( 'pageshow',function(event){
  		//alert( 'Following page initialised: ' +  "content" + item.attributes.title);
  		$('#img' + item.attributes.title).attr('src', (window.orientation == 90 || window.orientation == -90) ? item.attributes.pathLandscape : item.attributes.pathPortrait);
		$('#img' + item.attributes.title).attr('usemap', (window.orientation == 90 || window.orientation == -90) ? "#"+item.attributes.usemapLandscape : "#"+item.attributes.usemapPortrait);
		alert( 'Orientation: ' +  window.orientation + "window.orientation==90:" + (window.orientation==90));
		});
	}
});

		function onSuccess() {
		    //console.log("playAudio():Audio Success");
		}
		
		// onError Callback 
		//
		function onError() {
			//console.log("playAudio():Audio Error");
		    alert('code: '    + error.code    + '\n' + 
		          'message: ' + error.message + '\n');
		}

        function playAudio(media) {
        	
			//alert('Get ready to get Media object for mp3: ' + src);
            //my_media = new Media(src, onSuccess, onError);
            //alert('Get ready to play Media object');
            // Play audio
            media.play();
            
		}
        // Cordova is ready
        //
        /*function onDeviceReady(area, item) {
        	debugger;
        	alert('Device ready for: ' + item.attributes.pathSound + $(area).attr('id') + item.attributes.soundType);
            playAudio(item.attributes.pathSound + $(area).attr('id') + item.attributes.soundType, onSuccess, onError);
        }*/

        // Play audio
        //


function twangIt(area, item) {
        // Audio played - needs to be expanded to accomodate other content
        //debugger;
        //var audio = new Audio(item.attributes.pathSound + $(area).attr('id') + item.attributes.soundType);
        //if (audio) {
        //    audio.play();
        //}
        alert("Playing from " + item.attributes.pathSound + $(area).attr('id') + item.attributes.soundType);
        var media = new Media(item.attributes.pathSound + $(area).attr('id') + item.attributes.soundType, onSuccess, onError);
        media.setOnPreparedListener(playAudio(media));
        /*if (!playing){
        	media.play();
        }*/
        // KR 20120717 Android Audio Fix - Wait for Cordova to load
        //
        //alert('Adding listener in twangIt');
        //document.addEventListener("deviceready", onDeviceReady(area, item), false);
 
		// Play audio
		//media.play();
    }


$(function() {
  var cart = new CartCollectionView();
  //alert('$.mobile.orientationChangeEnabled='+$.mobile.orientationChangeEnabled);
  /*$(document).bind('orientationchange', function(orientation){
  	alert('Orientation:' + orientation);
  	});*/
  
});	