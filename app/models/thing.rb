class Thing < ActiveHash::Base
  self.data = [
    # 個
    { id: 1, name: 'じゃがいも',spoon:"", unit: "個"},
    { id: 2, name: '玉ねぎ', spoon:"大さじ",unit: "test"},
    { id: 3, name: 'なすび', spoon:"大さじ",unit: "ml" },
    { id: 4, name: 'ピーマン', spoon:"大さじ",unit: "枚" },
    { id: 5, name: 'しいたけ', spoon:"大さじ",unit: "個" },
    { id: 6, name: 'お好みのルー', spoon:"大さじ",unit: "個" },

    # 本
    { id: 101, name: 'にんじん', unit: "本" },
    { id: 102, name: 'ねぎ', unit: "本" },
    { id: 103, name: '大根', unit: "本" },

    # 束
    { id: 201, name: 'ほうれん草' , unit: "束"},
    { id: 202, name: 'ニラ', unit: "束" },

    # ml
    { id: 301, name: '水' },
    { id: 302, name: '醤油' },
    { id: 303, name: 'みりん' },
    { id: 304, name: '酒' },
    { id: 305, name: 'ごま油' },

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
