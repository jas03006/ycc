var myt =  document.getElementById("myt");
myt.style.position = "absolute";
var blossom = 
 document.getElementById("blossom");
var pond = 
 document.getElementById("pond");

var mytable =  document.getElementById("mytable");
var showpath = document.getElementById("showpath");
var cherry = document.getElementById("cherry");
var duck = document.getElementById("duck");
var state=0;
showpath.onclick = function(){
  for(var i=1; i<mytable.rows.length; i++){   
        if(mytable.rows[i].style.display == "")
               mytable.rows[i].style.display = "none";
      else
          mytable.rows[i].style.display = "";
            }
  if(state == 1){
  showpath.innerHTML = '<th class="row0"><h2>Recommended Path</th> <th class="row0" id="iic"><i class="fa fa-caret-down" aria-hidden="true" ></i></th>';
    pond.style.display="none";
     blossom.style.display="none";
    duck.style.backgroundColor = 'Gainsboro';
    cherry.style.backgroundColor = 'Gainsboro';
	state = 0;
}else {
	state = 1;
  showpath.innerHTML = '<th class="row0"><h2>Recommended Path</th> <th class="row0" id="iic"><i class="fa fa-times" aria-hidden="true" style="color:red"></i></th>';
}
}

duck.onclick = function(){
  blossom.style.display ="none";
   pond.style.display ="";
   this.style.backgroundColor = 'DarkGray';
   cherry.style.backgroundColor = 'Gainsboro';
}

cherry.onclick = function(){
  blossom.style.display ="";
  pond.style.display ="none";
  this.style.backgroundColor = 'DarkGray';
   duck.style.backgroundColor = 'Gainsboro';
}

cherry.onmouseover = function(){
  if(this.style.backgroundColor == "Gainsboro")
  this.style.backgroundColor = "DarkGray";
}
cherry.onmouseout = function(){
  if(this.style.backgroundColor == "DarkGray")
  this.style.backgroundColor = "Gainsboro";
}
duck.onmouseover = function(){
  if(this.style.backgroundColor == "Gainsboro")
  this.style.backgroundColor = "DarkGray";
}
duck.onmouseout = function(){
  if(this.style.backgroundColor == "DarkGray")
  this.style.backgroundColor = "Gainsboro";
}
var info = firebase.database().ref("info");



function popInformation(element){
  var ele = document.getElementById("hover");
if(ele!=null)
  ele.parentNode.removeChild(ele);
	
  element.style.opacity = 0.5;
  var iDiv = document.createElement('div');
// Create the inner div before appending to the body
var innerDiv = document.createElement('div');

  info.on("value",function (snap) {
    
    snap.forEach(function (child) {
      var buildingNumber = child.val().name;
      buildingNumber = buildingNumber.split("(")[1].split(")")[0];
      if(buildingNumber == element.id){
        
iDiv.id = "hover";
iDiv.className = 'block';


iDiv.style.borderRadius = "25px";
iDiv.style.zIndex=11; 
innerDiv.style.zIndex=11;
innerDiv.style.padding="10px";
innerDiv.style.backgroundColor= "Gainsboro";
innerDiv.style.border = "solid DarkGray";
innerDiv.style.borderRadius = "25px";     
innerDiv.className = 'block-2';
        innerDiv.innerHTML = "<b>Name: </b>" + child.val().name + "<br/><b>Category: </b>" + child.val().category + "<br/><b>Open Time: </b>" + child.val().time + "<br/><b>It has: </b>" + child.val().located;
      }
 });
});
  // The variable iDiv is still good... Just append to it.
iDiv.appendChild(innerDiv);
  iDiv.style.backgroundColor = "#ffffff";
iDiv.style.position = "absolute";
iDiv.style.top = parseInt(element.style.top, 10) + parseInt("-40px", 10) + "px";
  iDiv.style.left = parseInt(element.style.left, 10) + parseInt("150px", 10) + "px";
// Then append the whole thing onto the body
document.getElementsByTagName('body')[0].appendChild(iDiv);
}

function deleteInformation(element){
  if(state1 == 0){element.style.opacity = 0.0;}
  var ele = document.getElementById("hover");
 if(ele != null)
  return ele.parentNode.removeChild(ele);
}
function helpme(){
  
  var helpText = document.getElementById("helpText");
   var clickme = document.getElementById("clickme");
  if(helpText.style.display == "none"){
    helpText.style.display = "";
    clickme.style.display = "none";
  }
  else{
    helpText.style.display = "none";
    clickme.style.display = "";
  }
}

function popAccessibilty(element){
  element.style.opacity = 0.5;
}
function deleteAccessibilty(element){
  
  if(state1 == 0){element.style.opacity = 0.0;}
}

var state1 = 0;
function seeAll(){
  var x = document.getElementsByClassName("boxes");
  var y = document.getElementsByClassName("boxes0");
  
  if(state1 == 0){
    for(var i = 0; i < x.length; i++){
    x[i].style.opacity = 0.5;
  }
  for(var j = 0; j < y.length; j++){
    y[j].style.opacity = 0.5;
  }
    state1 = 1;
  }
  else if(state1 == 1){
    for(var k = 0; k < x.length; k++){
    x[k].style.opacity = 0.0;
  }
  for(var l = 0; l < y.length; l++){
    y[l].style.opacity = 0.0;
  }
    state1 = 0;
  }
  
  
}
