class Thing < ActiveHash::Base
  self.data = [
    # 個
    { id: 1, name: 'じゃがいも',spoon:"", unit: "個"},
    { id: 2, name: '玉ねぎ', spoon:"",unit: "個"},
    { id: 3, name: 'なすび', spoon:"",unit: "個" },
    { id: 4, name: 'ピーマン', spoon:"",unit: "個" },
    { id: 5, name: 'しいたけ', spoon:"",unit: "個" },
    { id: 6, name: 'お好みのルー', spoon:"",unit: "個" },

    # 本
    { id: 101, name: 'にんじん', unit: "本" },
    { id: 102, name: 'ねぎ', unit: "本" },
    { id: 103, name: '大根', unit: "本" },

    # 束
    { id: 201, name: 'ほうれん草' , unit: "束"},
    { id: 202, name: 'ニラ', unit: "束" },

    # ml
    { id: 301, name: '水', spoon:"", unit: "ml" },
    { id: 302, name: '醤油' , spoon:"大さじ", unit: "" },
    { id: 303, name: 'みりん', spoon:"大さじ", unit: "" },
    { id: 304, name: '酒', spoon:"大さじ", unit: "" },
    { id: 305, name: 'ごま油', spoon:"大さじ", unit: "" },

    # 袋
    { id: 401, name: 'もやし' },
    { id: 402, name: 'しらたき' },

    # g
    { id: 501, name: '砂糖' },
    { id: 502, name: '豚肉(細切れ)' },
    { id: 503, name: '鶏(胸肉)' },
    { id: 504, name: '鶏(もも肉)' },
  ]
end
