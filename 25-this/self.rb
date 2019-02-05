class Person
  self.attr_accessor(:name)

  def initialize(name)
    @name = name
  end

  def self.say_something
    puts "I am a class method defined on the #{self} class."
  end

  def greet
    puts "I'm #{self.name}. Nice to meet you."
  end
end

Person.say_something # => self will be Person class
# self in ruby is the receiver of a method

blair = Person.new('blair')
blair.greet # => self will be the instance
# blair (instance) is receiving the method call
