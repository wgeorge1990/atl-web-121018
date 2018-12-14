require 'pry'
require_relative './trainer.rb'
require_relative './pokemon.rb'

puts "Good morning!"

tez = Trainer.new('tez', 'instinct')
psyduck = Pokemon.new('psyduck', 'psychic', 12)
tez.catch(psyduck)

emily = Trainer.new('emily', 'rocket')
pikachu = Pokemon.new('pikachu', 'electric', 7)
emily.catch(pikachu)

tez.fight(emily)

binding.pry
