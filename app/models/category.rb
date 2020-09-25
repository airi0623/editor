class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '選択してください' },
    { id: 2, name: '主菜' },
    { id: 3, name: '副菜' },
    { id: 4, name: 'ご飯' },
    { id: 5, name: '汁物' },
    { id: 6, name: 'その他' },
  ]
end
