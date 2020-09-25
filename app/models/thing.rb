class Thing < ActiveHash::Base
  self.data = [
    { id: 0, name: '材料を選択してください'},
    # 個
    { id: 1, name: 'じゃがいも'},
    { id: 2, name: '玉ねぎ'},
    { id: 3, name: 'なすび' },
    { id: 4, name: 'ピーマン' },
    { id: 5, name: 'しいたけ' },
    { id: 6, name: 'お好みのルー' },

    # 本
    { id: 101, name: 'にんじん' },
    { id: 102, name: 'ねぎ' },
    { id: 103, name: '大根' },

    # 束
    { id: 201, name: 'ほうれん草' },
    { id: 202, name: 'ニラ' },

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
