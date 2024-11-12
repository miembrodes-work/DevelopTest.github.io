$(document).ready(function(){
  $("#thisB").on("click", function(e){
    //alert("hello");

    var cliptest = "adsfasdfasdf";
    e.clipboardData.setData("text/plain", cliptest);
    e.preventDefault();
    
  });
});



