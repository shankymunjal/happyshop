class CategoriesController < ApplicationController
	def index
		@categories = Product.pluck('category').uniq
	end

end
