class Startup < ApplicationRecord
    belongs_to :category
    has_many :pledges
    has_many :startups, through: :pledges
end
