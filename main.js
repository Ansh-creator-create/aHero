var canvas = new fabric.Canvas("myCanvas");
 var biw = 30;
 var bih = 30;
 var px = 10;
 var py = 10;
 var plj = "";
 var block_image_object = "";
function player_update(e_obj){
     fabric.Image.fromURL("18820.jpg",function(Img){
     plj = Img;
     plj.scaleToHeight(140);
plj.scaleToWidth(140);
plj.set({top:py,left:px});
canvas.add(plj);
 });
 }
