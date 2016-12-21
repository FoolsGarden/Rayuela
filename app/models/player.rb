class Player < ActiveRecord::Base
  validates_uniqueness_of :name, :message => "already exists"
  validates_presence_of :name, :message => "can't be empty"
  # validates :username_cannot_be_duplicated
  has_many :player_games
  has_many :games, through: :player_games

 
  def username_cannot_be_duplicated
    if name.nil? 
      errors.add(:name, "Username already exist")
    end
  end
end

