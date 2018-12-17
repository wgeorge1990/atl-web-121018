class Gym
  attr_reader :gymleader, :kind, :location

  def initialize(gymleader, kind, location)
    @gymleader = gymleader
    @kind = kind
    @location = location
  end
end
