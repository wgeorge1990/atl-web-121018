class Student
  def initialize(name, age, height)
    @name = name
    @age = age
    @height = height
  end

  def ask_question
    puts "How the hell do objects store things?"
  end

  def greet(friend)
    puts "Hi there, #{friend.name}. How's your day going?"
  end

  def name
    @name
  end

  def age
    @age
  end

  def height
    "#{@name} is #{@height} tall."
  end
end
