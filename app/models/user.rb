class User < ApplicationRecord
    has_many :pledges
    has_many :startups, through: :pledges
end
