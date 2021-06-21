class SessionsController < ApplicationController
    def create
        user = User.find_by(name: params[:username])
        session[:user_id] = user.id

        render json: user
    end
end
