class Game < ActiveRecord::Base
  validates
  has_many :players
  has_many :players, through: :player_games
  # Remember to create a migration!
end
