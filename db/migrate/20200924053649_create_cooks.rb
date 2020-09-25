class CreateCooks < ActiveRecord::Migration[6.0]
  def change
    create_table :cooks do |t|
      t.references :recipe,  foreign_key: true  
      t.text :body,             null: false
      
      t.timestamps
    end
  end
end
