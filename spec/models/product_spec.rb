require "spec_helper"

describe Product do

  let (:product) { Product.new }

  context "attributes" do
    [:name, :sold_out, :category, :under_sale, :price, :sale_price, :sale_text].each do |_attr|
      it "should respond to attributes: #{_attr}" do
        project.should respond_to(_attr)
      end
    end
  end


end