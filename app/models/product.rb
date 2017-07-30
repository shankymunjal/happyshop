class Product < ApplicationRecord
	LIMIT = 10
	scope :paginate, -> (page_no) { limit(LIMIT).offset((page_no - 1) * LIMIT)}

	scope :all_by_category, -> (category) { where(category: category) if category}

	scope :all_within_price_range, -> (start_price, end_price) { where("price > :start_price and price < :end_price", start_price: start_price, end_price: end_price) if start_price}

	def self.filter(params)
		paginate(params[:pageNo].to_i)
		.all_by_category(params[:category])
		.all_within_price_range(params[:start_price], params[:end_price])
	end
end
