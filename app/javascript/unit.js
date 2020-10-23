// 自動で単位取得
function material() {
  
  const add = document.getElementById("add-btn"); //追加ボタン
  
  // 最初の一つの選択
  const materialSelect = document.getElementById("thing-select"); 
    
    materialSelect.addEventListener("change",function(e){  //選択ボックスにイベントが起こったら
      const materialSelect = document.getElementById("thing-select"); //選択ボックス
      const select = materialSelect.options[ materialSelect.selectedIndex].getAttribute('data-unit');
      const unit = document.getElementById("unit-auto");
      // Jquery・・・select = $("#thing-select option:selected").data("unit");
      unit.innerHTML = select;



      // var select = document.getElementById("thing-select");
      // select.options.selected.data("unit") = true
      // const materialData = thingSelect.getAttribute('data-unit');
      // console.log(thingSelect.getAttribute('data-unit'));
      // const materialData = String(e.target.getAttribute('data-unit'))
      // console.log(materialData)
    });





  for (let i = 0; i < 3; i++) {
    // それ以降
    add.addEventListener("click",function(e){
      const materialSelect = document.getElementById("thing-select");
      const unit = document.getElementById("unit-auto");
      materialSelect.addEventListener("change",function(e){
        const materialId = materialSelect.value
      });
    });
  }
};

window.addEventListener("load", material); 
// if (window.location.pathname === '/items/new') {