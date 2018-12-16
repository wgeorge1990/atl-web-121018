### Trainer

## Data
## * name
## * team
## * type?

## Actions
## * catch
## * fight
## * train
## * pokemon

class Trainer
  attr_reader(:name, :team, :pokemon)

  def initialize(name, team)
    @name = name
    @team = team
    @pokemon = []
  end

  ## attr_reader is taking care of this for us
  # def name
  #   @name
  # end
  # def team
  #   @team
  # end
  # def pokemon
  #   @pokemon
  # end

  def catch(pokemon)
    @pokemon << pokemon
    pokemon.trainer = self
  end

  ## Problem: We don't have a Single Source of Truth!
  def fight(enemy)
    if self.pokemon.first.level > enemy.pokemon.first.level
      @pokemon << enemy.pokemon.first
      puts "So long, smell ya later! lulz"
    end
  end
end
