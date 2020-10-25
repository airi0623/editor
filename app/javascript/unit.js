// 自動で単位取得
// 直下以下にイベントきく
function material() {
  
  const add = document.getElementById("add-btn"); //追加ボタン
  
  // 最初の一つの選択
  const selectBox = document.getElementById("thing-select"); 
    
    selectBox.addEventListener("change",function(e){
      const selectBox = document.getElementById("thing-select"); //選択ボックス
      //data-unit
      const dataUnit = selectBox.options[ selectBox.selectedIndex].getAttribute('data-unit');
      const unit = document.getElementById("unit-auto");
        // Jquery・・・select = $("#thing-select option:selected").data("unit");

      //data-spoon
      const dataSpoon = selectBox.options[ selectBox.selectedIndex].getAttribute('data-spoon');
      const spoon = document.getElementById("spoon-auto");
      //取得したデータを格納
      spoon.innerHTML = dataSpoon;
      unit.innerHTML = dataUnit;
    });
    // それ以降
    
  add.addEventListener("click",function(e){
    const selectBox = document.getElementById("thing-select"); 
    const unit = document.getElementById("unit-auto");

    selectBox.addEventListener("change",function (){
      const dataUnit = selectBox.options[ selectBox.selectedIndex].getAttribute('data-unit');
      unit.innerHTML = dataUnit;
      $("#thing-select").on('change',function(){
        //select = $("#thing-select option:selected").data("unit");
        console.log('cok');
      });
    });
  });
};

window.addEventListener("load", material); 
// if (window.location.pathname === '/items/new') {