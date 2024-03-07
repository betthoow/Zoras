var myInterval, objDiv , objscrollHeight; 

$(document).ready(function() {
	restoreScroll();
	console.log("Page ready!");
  	getWidthHeader('table_fixed','table_scroll');
});

function restoreScroll(){
	document.getElementById("contain").scrollTop = 0;
	setTimeout( ()=>{
		console.log("Inicia el descenso!");
		myInterval = setInterval( myPageScroll, 10 );
	} , 1000);
}

function myPageScroll(){
	objDiv = document.getElementById("contain").scrollTop;
	objscrollHeight = document.getElementById("contain").scrollHeight;
	console.log("PAra abajo - scrollpage");
	if ((objDiv + window.innerHeight - 60 ) >= objscrollHeight) {
		clearInterval(myInterval);
		console.log("Hepaleeeee, hasta aqui!");
		setTimeout( restoreScroll , 1500 );
	}else {
		document.getElementById("contain").scrollTop = objDiv + 1;
	}

	document.getElementById("h1").innerHTML =  "Window height: " + window.innerHeight +  " - Obj.Div STop: " + objDiv +  " - objDiv.scrollHeight " + objscrollHeight;
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

