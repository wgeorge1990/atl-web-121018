require 'rest-client'
require 'pry'
# built into ruby
require 'json'
require_relative './books.rb'

puts "Enter Books Search Term: "
search_term = gets.chomp
puts "You searched for: #{search_term}"
puts "Here are your results: "
search_books(search_term)
