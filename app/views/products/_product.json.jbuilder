json.extract! product, :id, :name, :category, :under_sale, :price, :sale_price, :sale_text, :created_at, :updated_at
json.url products_url(product, format: :json)