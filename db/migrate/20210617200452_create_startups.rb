class CreateStartups < ActiveRecord::Migration[6.1]
  def change
    create_table :startups do |t|
      t.string :name
      t.integer :goal
      t.integer :amount_funded
      
      t.timestamps
    end
  end
end
