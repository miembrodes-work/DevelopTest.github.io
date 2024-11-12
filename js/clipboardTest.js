$(document).ready(function(){
  $("#thisB").on("click", function(e){
    
    //alert("hello");
    var cliptest = "adsfasdfasdf";
    cliptest = $(".target").text(); 
    
    navigator.clipboard.writeText(cliptest).then(
    () => {
      alert("Done")
    },
    () => {
      alert("Fail")
    },
  );
  });
});



