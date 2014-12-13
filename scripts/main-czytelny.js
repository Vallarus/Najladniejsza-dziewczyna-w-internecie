jQuery(document).ready(onLoadPage);
function onLoadPage()
{
    jQuery("#noweFotki").click(zaciagnijFotki);
    jQuery( ".ramka").draggable();
    jQuery( "#kosz").draggable();
    var opcje ={drop :onDropItem};
    jQuery( "#kosz" ).droppable(opcje);

}
function onDropItem( event, ui )
{
    var wybraneZdjecie=ui.draggable;
    wybraneZdjecie.animate(
        {
            width:"0px",
            height:"0px",
            opacity:"0"
        },1500,
        function(){
            wybraneZdjecie.hide();
        }
    );
}
function zaciagnijFotki()
{
    jQuery.getJSON("api/przykladowefoty").done(dodajFotki).fail(function( jqxhr, textStatus, error ) {
        alert( "Natąpił bład: " + error );
    });
}
function dodajFotki(tablicaSrc)
{
    for(var i=0;i<tablicaSrc.length;i++)
    {
        var ramka=document.createElement("div");
        ramka.setAttribute("class","ramka");
        var image=document.createElement("img");
        image.setAttribute("src",tablicaSrc[i]);
        image.setAttribute("class","fotka");
        ramka.appendChild(image);
        tablicaSrc[i]=ramka;
    }
    jQuery("#obrazki").append(tablicaSrc);
    jQuery( ".ramka").draggable();
}