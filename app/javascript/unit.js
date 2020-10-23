// 自動で単位取得
function material() {
  
  const add = document.getElementById("add-btn"); //追加ボタン
  
  // 最初の一つの選択
  const materialSelect = document.getElementById("thing-select"); //選択ボックス
    const unit = document.getElementById("unit-auto");
    materialSelect.addEventListener("change",function(e){  //選択ボックスにイベントが起こったら
      const id = materialSelect.value
      console.log(id)
      const thingSelect = document.getElementById(id);
      const select2 = materialSelect.options[ materialSelect.selectedIndex].getAttribute('data-unit');
      select = $("#thing-select option:selected").data("unit");
      // var select = document.getElementById("thing-select");
      // select.options.selected.data("unit") = true
      // const materialData = thingSelect.getAttribute('data-unit');
      console.log(select2)
      // console.log(thingSelect.getAttribute('data-unit'));
      // const materialData = String(e.target.getAttribute('data-unit'))
      // console.log(materialData)
      console.log("a")
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