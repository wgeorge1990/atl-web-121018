class CreatePokemon < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemon do |t|
      t.string :name
      t.integer :level
      t.string :kind # didn't say type!!!
      t.integer :trainer_id
    end
  end
end
