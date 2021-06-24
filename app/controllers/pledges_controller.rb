class PledgesController < ApplicationController
    def index
        render json: Pledge.all
    end

    def show
        pledge = Pledge.find(params[:id])
        render json: pledge
    end

    def destroy
        pledge = Pledge.find(params[:id])
        pledge.destroy

        head :no_content
    end

    def create
        pledge = Pledge.create!(user_id: params[:user_id], startup_id: params[:startup_id], amount: params[:amount])

        render json: pledge, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: invalid.record.errors, status: :unprocessable_entity
    end
end
