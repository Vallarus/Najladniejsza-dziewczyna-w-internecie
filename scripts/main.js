$(document).ready(function(){
        $("#noweFotki").click(function()
        {$.getJSON("api/przykladowefoty").done(function(data){
            for(var i=0;i<data.length;i++){
                var ramka=document.createElement("div");
                ramka.setAttribute("class","ramka");
                var image=document.createElement("img");
                image.setAttribute("src",data[i]);
                image.setAttribute("class","fotka");
                ramka.appendChild(image);
                data[i]=ramka;
            }
            $("#obrazki").append(data);
            $( ".ramka").draggable(); })
            .fail(function( jqxhr, textStatus, error ) {alert( "Natąpił bład: " + error );});});
        $( ".ramka").draggable();
        $( "#kosz").draggable();
        $( "#kosz" ).droppable({drop: function( event, ui ){
                ui.draggable.animate({width:"0px",height:"0px",opacity:"0"},1500,function(){ui.draggable.hide();});
                }});});

