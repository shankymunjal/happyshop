class ProductsController < ApplicationController
	def index
		@products = Product.paginate(params[:pageNo].to_i)
	end

	def show
		@product = Product.find(params[:id])
	end
end
