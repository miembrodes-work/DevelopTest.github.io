$(document).ready(function(){
  $("#thisB").on("click", function(e){
    
    //alert("hello");
    var cliptest = "adsfasdfasdf";
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



