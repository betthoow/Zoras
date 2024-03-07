var myInterval, objDiv , objscrollHeight; 

$(document).ready(function() {
	myInterval = setInterval( myPageScroll, 10 );
  	getWidthHeader('table_fixed','table_scroll');
});

function restoreScroll(){
	document.getElementById("contain").scrollTop = 0;
	setTimeout( ()=>{
		myInterval = setInterval( myPageScroll, 10 );
	} , 1000);
}

function myPageScroll(){
	objDiv = document.getElementById("contain").scrollTop;
	objscrollHeight = document.getElementById("contain").scrollHeight;

	if ((objDiv + window.innerHeight + 1 ) >= objscrollHeight) {
		clearInterval(myInterval);
		setTimeout( restoreScroll , 1500 );
	}else {
		document.getElementById("contain").scrollTop = objDiv + 1;
	}

	//document.getElementById("h1").innerHTML =  "Window height: " + window.innerHeight +  " - Obj.Div STop: " + objDiv +  " - objDiv.scrollHeight " + objscrollHeight;
}


function getWidthHeader(id_header, id_scroll) {
  var colCount = 0;
  $('#' + id_scroll + ' tr:nth-child(1) td').each(function () {
    if ($(this).attr('colspan')) {
      colCount += +$(this).attr('colspan');
    } else {
      colCount++;
    }
  });
  
  for(var i = 1; i <= colCount; i++) {
    var th_width = $('#' + id_scroll + ' > tbody > tr:first-child > td:nth-child(' + i + ')').width();
    $('#' + id_header + ' > thead th:nth-child(' + i + ')').css('width',th_width + 'px');
  }
}

