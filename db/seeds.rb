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


category1 = Category.create(name: "LongHorn")
category2 = Category.create(name: "Lonestar")

startup1 = Startup.create(name: "Pottery Shed", goal: 20000, amount_funded: 10000, category_id: category1.id)
startup2 = Startup.create(name: "ColdStone Funerals", goal: 50000, amount_funded: 25000, category_id: category1.id)
startup3 = Startup.create(name: "McTexas", goal: 90000, amount_funded: 45000, category_id: category2.id )

user1 = User.create(username: "Celeste", funds: 100000)
user2 = User.create(username: "David", funds: 50000)


