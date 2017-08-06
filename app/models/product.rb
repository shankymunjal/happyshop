class Product < ApplicationRecord
	LIMIT = 10
	NO_OF_PRICE_RANGES_REQUIRED = 4
	scope :paginate, -> (page_no) { limit(LIMIT).offset((page_no - 1) * LIMIT)}

	scope :all_by_category, -> (category) { where(category: category) if category}

	scope :all_within_price_range, -> (start_price, end_price) { where("price > :start_price and price < :end_price", start_price: start_price, end_price: end_price) if start_price}

	scope :max_min_price, -> {select("Max(price) as max_price, Min(price) as min_price")[0]}

	def self.filter(params)
		paginate(params[:pageNo].to_i)
		.all_by_category(params[:category])
		.all_within_price_range(params[:start_price], params[:end_price])
	end

	def self.get_price_ranges
		max_price, min_price = max_min_price.max_price, max_min_price.min_price
		split_price_range(max_price, min_price)
	end

	def self.split_price_range(max_price, min_price)
		price_ranges = []
		percents_split = (min_price..max_price).each_slice((min_price..max_price).last/(NO_OF_PRICE_RANGES_REQUIRED)).to_a
		(0..(NO_OF_PRICE_RANGES_REQUIRED-1)).each do |range|
			price_ranges.push("$#{percents_split[range].min} - $#{percents_split[range].max}" )
		end
		price_ranges
	end
end
