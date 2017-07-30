namespace :product do
	desc "Creating 10 proudcts"
	task :create_beauty_products => :environment do
		['Urban Decay Naked 3', 'Urban Decay Brush', 'Forever Aloe Vera', 'Lotus Combo kit', 'Urban Decay Brush', 'Ustraa Beard Oil Wax', 'Lotus whiteglow kit', 'Lotus Natural facial', 'Luxury Grooming Collection', 'Trigodon Shaving Soap', 'Oriflame face care'].each_with_index do |product_name, index|
			Product.create(name: product_name, sold_out: false, category:"Beauty", under_sale: false, price: (index + 1)*100)
		end
	end
	task :create_electronics_products => :environment do
		['Nova Trimmer For Men', 'Four Star Trimmer For Men', 'Panasonic Hair Dryer', 'Morepen Bp Monitor', 'V-Guard Stabilizer', 'Kemei Hair Straightener', 'Cordless Landline Phone', 'Omron Nebulizer', 'LED Rechargable Lights', 'Omron Bp Monitor', 'Kemei Trimmer'].each_with_index do |product_name, index|
			Product.create(name: product_name, sold_out: false, category:"Electronics", under_sale: false, price: (index + 1)*100)
		end
	end	
end