# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Startup.destroy_all
User.destroy_all
Category.destroy_all

random = Random.new  # create a new instance of Random seeded with 42

startup1 = Startup.create(name: "Pottery Shed", goal: 20000, amount_funded: random.rand(5000..200000) )
startup2 = Startup.create(name: "ColdStone Funerals", goal: 50000, amount_funded: random.rand(5000..200000) )
startup3 = Startup.create(name: "McTexas", goal: 90000, amount_funded: random.rand(5000..200000) )

user1 = User.create(username: "Celeste", funds: 100000)

category = Category.create(name: "LongHorn")