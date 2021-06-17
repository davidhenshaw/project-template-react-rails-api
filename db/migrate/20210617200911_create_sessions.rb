class CreateSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :sessions do |t|
      t.string :username
      t.string :password
      t.timestamps
    end
  end
end
