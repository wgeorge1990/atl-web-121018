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
  attr_reader(:name, :team)

  def initialize(name, team)
    @name = name
    @team = team
  end

  def catch(pokemon)
    pokemon.trainer = self
  end

  def pokemon
    Pokemon.all.select do |poke|
      poke.trainer == self
    end
  end

  def gyms_beaten
    badges = Badge.all.select do |badge|
      badge.trainer == self
    end
    badges.map { |badge| badge.gym }
  end

  ## Problem: We don't have a Single Source of Truth!
  def fight(enemy)
    if self.pokemon.first.level > enemy.pokemon.first.level
      enemy.pokemon.first.trainer = self
      puts "So long, smell ya later! lulz"
    end
  end
end
