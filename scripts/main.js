$(document).ready(function(){
        $("#noweLachony").click(function()
        {$.getJSON("api/przykladowefoty").done(function(data){
            for(var i=0;i<data.length;i++){
                var ramka=document.createElement("div");
                ramka.setAttribute("class","ramka");
                var image=document.createElement("img");
                image.setAttribute("src",data[i]);
                image.setAttribute("class","laska");
                ramka.appendChild(image);
                data[i]=ramka;
            }
            $("#obrazki").append(data);
            $( ".ramka").draggable(); })
            .fail(function( jqxhr, textStatus, error ) {alert( "Natąpił bład: " + error );});});
        $( ".ramka").draggable();
        $( "#pasztety").draggable();
        $( "#pasztety" ).droppable({drop: function( event, ui ){ var wybranyPasztet=ui.draggable;
                ui.draggable.animate({width:"0px",height:"0px",opacity:"0"},1500,function(){wybranyPasztet.hide();});
                }});});

