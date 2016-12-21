class PlayerGame < ActiveRecord::Base
  belongs_to :player
  belongs_to :game  # Remember to create a migration!
end
