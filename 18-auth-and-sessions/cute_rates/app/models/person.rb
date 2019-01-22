class Person < ApplicationRecord
  has_many :pets
  accepts_nested_attributes_for :pets

  has_secure_password
end
