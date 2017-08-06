class ProductsController < ApplicationController
	def index
		if params[:category]
			@products = Product.where(category: params[:category])
		end
		if params[:price]
			@products = Product.filterByPrice(params[:price])
		end
		if params[:pageNo]
			@products = Product.paginate([params[:pageNo].to_i, 1].max)
		end
	end

	def show
		@product = Product.find(params[:id])
	end

	def pricerange
		@price_ranges = Product.get_price_ranges
	end
end
