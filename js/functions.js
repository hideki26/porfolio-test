//*--------------------------------------------------------------
// CREATE ELEMENTS IN CARDS
// --------------------------------------------------------------*/

function createViewBtn(){
	var html_view_btn = '<p class="view-more"><span class="view-more-content"><span class="view-more-text">View</span></span></p>';
	$(".card").append(html_view_btn);
}

function createTags(){
	var html_tag_container = '<div class="tag-container"></div>';
	
	//create tag container in cards
	$(".card .information").prepend(html_tag_container);
	
	
	//for each card, get data-tags and print the tags
	$(".card .information").each(function(){
		
		//if data-tags has info
		if ( $(this).attr("data-tags") ){
			var thisElement = $(this);
			var getTagArray = thisElement.attr("data-tags");
			var separateTagsArray = getTagArray.trim().split(",");
			
			//get array, separate by commas, for each element, print a tag with class
			$.each(separateTagsArray, function (index, value){
				
				var html_tag = '<span class="tag '+value+'">'+ value +'</span>';
				
				// console.log('Index & val de separateTagsArray[' + index + '] is: ' + value);
				
				thisElement.children(".tag-container").append(html_tag);
				
			});
			
		}else{
			//When there are no tags, put a debugging class
			$(this).parents(".project-container").addClass("need-tags");
		}
		
	});
	
}

//*--------------------------------------------------------------
// SIDEBAR
// --------------------------------------------------------------*/

function mobileSidebar(){

	var sidebarBreackpoint = 768;
	var screenWidth = $(window).width();
	
	var sidebar = $("#sidebar");
	var sidebarBtn = $("#sidebar .sidebar-button");
	var htmlSidebarButton = '<div class="sidebar-button open">O</div>';
	
	//add btn with default settings and class to sidebar
	sidebar.prepend(htmlSidebarButton);
	sidebar.addClass("sidebar-close");
	
	//check screen size by default and set default classes
	if (screenWidth < sidebarBreackpoint) { 
		sidebar.addClass("mobile sidebar-close");
	}else{
		sidebar.removeClass("mobile sidebar-close sidebar-open");
	}
	
	//check screen resize, when bigger reset to default by size
	$(window).on('resize', function(){

		var ResizingScreenWidth = $(window).width();

		//on resize, adjust button & close sidebar
		$("#sidebar .sidebar-button").removeClass("close");
		$("#sidebar .sidebar-button").addClass("open");
		
		if (ResizingScreenWidth < sidebarBreackpoint) { 
			sidebar.addClass("mobile sidebar-close");
			sidebar.removeClass("sidebar-open");
			// sidebar.addClass("");
		}else{
			sidebar.removeClass("mobile sidebar-close sidebar-open");
		}
	});
	
	
	//button open/close in sidebar
	$("#sidebar .sidebar-button").click(function(){
		$(this).toggleClass("open close");
		
		if( $(this).hasClass("close") ){ 
			$(this).parent().addClass("sidebar-open");
			$(this).parent().removeClass("sidebar-close");
			
		}else if ( $(this).hasClass("open") ){
			$(this).parent().addClass("sidebar-close");
			$(this).parent().removeClass("sidebar-open");
		}		
	});
}


//*--------------------------------------------------------------
// WIP
// --------------------------------------------------------------*/
function topMessage(){
	var topMessageClosebtn = '<span class="top-msg-close">X</span>';
	
	if ( $("#top_message").attr("data-message") == "active" ){
		
		//console.warn("Don't forget to call the button and his action! ò_ó")
		$("#top_message").append(topMessageClosebtn);

	}else{
		console.log("no message :(");
	}


	$(".top-msg-close").click(function(){

		$(this).parents("#top_message").slideToggle("slow");

		console.log("clock msg")
	});

}

function filters(){
	// For each item, take data tags
	// empty string
	 var ultimatestring= [];


	$("#content .project-container").each(function(index,value){
		var getTagsFromItems = $(this).find(".information").attr("data-tags") + ",";
		var getTagsFromItemsTrimmed = getTagsFromItems.replace( /(?!\s+$)\s+/g, "" ).trim();


		$(this).find(".information").attr("data-tags");
		
		// $("#sidebar").find(".filter-list").append(getTagsFromItemsTrimmed);


		// ADD the loop val to string
		console.log(ultimatestring += getTagsFromItemsTrimmed)
	});

	//delete doubles from string and delte last comma
	// ultimatestring = Array.from(new Set(ultimatestring.split(','))).toString().slice(0,-1);


	ultimatestring = Array.from(new Set(ultimatestring.split(',')));

	console.log("THIS POINT: "+ultimatestring)

	ultimatestring.forEach((item) => console.log(item))

}




//*--------------------------------------------------------------
// START FUNCTIONS
// --------------------------------------------------------------*/
//DOCUMENT READY ----> parece que no hace falta, best practice? search info

// $( document ).ready(function() {
topMessage();
mobileSidebar();
createTags();
createViewBtn();
filters();
// });

