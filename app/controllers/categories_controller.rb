class CategoriesController < ApplicationController
    
    def show
        category = Categories.find(params[:id])
    end
end
