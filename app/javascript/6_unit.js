// 自動で単位取得
function material() {
  
  const add = document.getElementById("add-btn"); //追加ボタン
  
  // 最初の一つの選択
  const selectBox = document.getElementById("thing-select"); 
    
    selectBox.addEventListener("change",function(e){
      const selectBox = document.getElementById("thing-select"); //選択ボックス
      const dataUnit = selectBox.options[ selectBox.selectedIndex].getAttribute('data-unit');
      const unit = document.getElementById("unit-auto");
      // Jquery・・・select = $("#thing-select option:selected").data("unit");
      unit.innerHTML = dataUnit;
    });
    // それ以降
    
    // const insertedItem = document.getElementById("nested"); 
    //document.getElementById("add-space").addEventListener('cocoon:after-insert', function(e, insertedItem) {
    //add.addEventListener("click",function(e){
    $("#add-space").on('cocoon:after-insert', function(){
      // const selectBox = document.getElementById("thing-select"); 
      // const unit = document.getElementById("unit-auto");

      // selectBox.addEventListener("change",function (e){
      //   const dataUnit = selectBox.options[ selectBox.selectedIndex].getAttribute('data-unit');
      //   unit.innerHTML = dataUnit;
      $("#thing-select").on('change',function(){
        //select = $("#thing-select option:selected").data("unit");
        console.log('cok');
      });

      
    });

};

window.addEventListener("load", material); 
// if (window.location.pathname === '/items/new') {