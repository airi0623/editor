// データベースにアクセスするつもり

document.addEventListener('DOMContentLoaded', function(){

  const selectField = document.getElementById("nested")
  const selectBox = document.getElementById("thing-select")
  console.log("OK")

  selectBox.addEventListener("change",function(e){
    console.log(e)
    
    let index = Number(e.target.getAttribute('data-thing-path'))
    console.log(index)
    

    const thingPath = document.getElementById("thing-select").options;
    for(var i=0;i<thingPath.length;i++){
    console.log(thingPath[i].getAttribute("data-thing-path"));

    
    }
  });

});

