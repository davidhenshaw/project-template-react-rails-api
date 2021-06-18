class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user, include: :funds
    end

    def create
        user = User.create!(name: params[:username], funds: params[:funds])
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
