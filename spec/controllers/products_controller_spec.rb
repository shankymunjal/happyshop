require 'spec_helper'

describe ProductsController do
  before do
    current_user
    @product = mock_model(Product)
    @products = [@product]
    Product.stub!(:all).and_return(@products)
  end

  describe "GET #index" do

    it "should get all the products" do
      Product.should_receive(:all).and_return(@products)
      get :index
    end

    it "responds successfully with with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response.status).to be(200)
    end

    it "renders index template" do
      get :index
      expect(response).to render_template("index")
    end

  end

  describe "GET #show" do

    it "responds successfully with with an HTTP 200 status code" do
      get :show
      expect(response).to be_success
      expect(response.status).to be(200)
    end

    it "renders show template" do
      get :show
      expect(response).to render_template("show")
    end

  end  
end
