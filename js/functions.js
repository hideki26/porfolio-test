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

				console.log('Index & val de separateTagsArray[' + index + '] is: ' + value);
				
				thisElement.children(".tag-container").append(html_tag);
				
			});

		}else{
		//When there are no tags, put a debugging class
		$(this).parents(".project-container").addClass("need-tags");
	}

});

}

//*--------------------------------------------------------------
// WIP
// --------------------------------------------------------------*/






//*--------------------------------------------------------------
// START FUNCTIONS
// --------------------------------------------------------------*/
//DOCUMENT READY ----> parece que no hace falta, best practice? search info

// $( document ).ready(function() {
	createTags();
	createViewBtn();
// });

