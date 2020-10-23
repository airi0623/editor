// 親の中に入っている子要素全てに再定義を行う

function material() {
  
  const add = document.getElementById("add-btn");
  const imageElementNum = document.querySelectorAll('#image-box').length
  const btnEvent = document.getElementById("btn-event")
  

  // この書き方でボタン全体に適用できる
    $("#btn-event").on('click','.select-box',function(){
      const materialSelect = document.getElementById("thing-select");
      const unit = document.getElementById("unit-auto");
      materialSelect.addEventListener("change",function(){
        const materialId = materialSelect.value
        if (materialId >= 1 && materialId <= 100){
          unit.innerHTML = "個";
        } else if (materialId >= 101 && materialId <= 200){ 
          unit.innerHTML = "本";
        } else if (materialId >= 201 && materialId <= 300){ 
          unit.innerHTML = "束";
        } else if (materialId >= 301 && materialId <= 400){ 
          unit.innerHTML = "ml";
        } else if (materialId >= 401 && materialId <= 500){ 
          unit.innerHTML = "袋";
        } else if (materialId >= 501 && materialId <= 600){ 
          unit.innerHTML = "g";
        } else {
          unit.innerHTML = "--";
        }
      });
    });
};

window.addEventListener("load", material); 
// if (window.location.pathname === '/items/new') {