class AddHpColumnToPokemon < ActiveRecord::Migration[5.2]
  def change
    add_column :pokemon, :hp, :integer, default: 30
  end
end
