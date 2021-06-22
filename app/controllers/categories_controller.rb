class CategoriesController < ApplicationController
    def show
        user = Categories.find(params[:id])
    end
end
