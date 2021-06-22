class StartupsController < ApplicationController

    def index
    render json: Startups.all
    end
end

