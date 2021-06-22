class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        user = User.find(session[:user_id])
        if user
            render json: user, include: :funds, status: 200
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(username: params[:username], funds: params[:funds])
        render json: user, status: :created

    rescue ActiveRecord::RecordInvalid => invalid 
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def destroy
        user = User.find(params[:id])
        user.destroy!
        head :no_content
    end
end
