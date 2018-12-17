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
  attr_reader :name, :type, :level
  attr_accessor :trainer

  @@all_pokemon = []

  def initialize(name, type, level)
    @name = name
    @type = type
    @level = level
    @hp = level * 10
    @trainer = nil
    @@all_pokemon << self
  end

  def self.all
    @@all_pokemon
  end

end
