class Pokemon < ActiveRecord::Base
  self.table_name = "pokemon"

  belongs_to :trainer
end
