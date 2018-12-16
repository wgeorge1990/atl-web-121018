### Pokemon

## Data
# * name
# * type
# * level
# * hp

## Actions
# * fight
# * evolve
# * speak
# * level_up
# * trainer

class Pokemon
  attr_reader :name, :type, :trainer, :level
  attr_writer :trainer

  def initialize(name, type, level)
    @name = name
    @type = type
    @level = level
    @hp = level * 10
    @trainer = nil
  end

  def trainer=(new_trainer)
    @trainer = new_trainer
  end

  def trainer
    @trainer
  end
end
