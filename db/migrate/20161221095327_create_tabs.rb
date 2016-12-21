class CreateTabs < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.timestamps
    end

    create_table :games do |t|
      t.integer :winner, default: 0
      t.timestamps
    end

    create_table :player_games do |t|
      t.belongs_to :player, index: true
      t.belongs_to :game, index: true
      t.timestamps
    end
  end
end
