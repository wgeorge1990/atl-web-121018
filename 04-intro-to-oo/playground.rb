require 'pry'
require_relative './student.rb'

## Let's represent some students using arrays? What data should we track?
## - name
## - age
## - height

# brit = ['brit', 32, "5'6\""]
# emily = ['emily', 38, "6'4\""]
#
# brit = {
#   name: 'brit',
#   age: 32,
#   height: "5'7\""
# }

def make_student(name, age, height)
  { name: name, age: age, height: height }
end

def add(x, y)
  x + y
end

# emily = make_student('emily', 28, "6'4\"")
emily = Student.new("Emily", 28, "6'4\"")
brit = Student.new("Brit", 32, "5'7\"")
emily.greet(brit)

## Method calls look like: object.method
numbers = [1,2,3,4]
numbers.reverse
## ^^ numbers is the receiving object
## and reverse is the message


binding.pry
