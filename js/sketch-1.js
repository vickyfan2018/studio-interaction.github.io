$(function() {
        $("#draggable").draggable();
        $("#droppable").droppable({
        	
            drop: function(event, ui) {
                $("#droppable").fadeOut();
                $("#draggable").fadeOut();
                 setTimeout(function () {
       window.location.href = "well-done-middle.html";
    }, 500); 
            }
        });
    });

    