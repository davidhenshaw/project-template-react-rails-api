require 'pry'
class Pledge < ApplicationRecord
    belongs_to :user
    belongs_to :startup

    validate :user_must_have_sufficient_funds


    def user_must_have_sufficient_funds
        amounts = user.pledges.collect do |pledge|
            pledge.amount
        end

        #add the amount we're currently trying to pledge
        sum = amounts.sum + amount

        unless sum < user.funds 
            errors.add(:amount, "User has insufficient funds to make this pledge!")
        end
    end
end
