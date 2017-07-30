require "spec_helper"

describe "/products" do
  # TODO use factory to create products
  let( :product1) { Product.create(:product, name: "ABC", price: "9823", category: "Fashion")}
  let( :product2) { Product.create(:product, name: "XYZ", price: "98131", category: "Fashion")}

  @javascript
  context " products_controller" do
    it "should list all products", js: true do

      visit '/products'

      expect(page).to have_content('ABC')
      expect(page).to have_content('XYZ')
    end
  end
end