class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title,                null: false
      t.string :feature,              null: false 
      t.integer :category_id,         null: false     
      t.string :date,                 null: false 
      t.string :cook_time,            null: false

      t.timestamps
    end
  end
end
