class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.order("created_at DESC")
  end


  def new
    @recipe = Recipe.new
    @material = @recipe.materials.build
    # undefined methodbuild' for nil:NilClass`
    # has_oneで繋がってるときは[インスタンス名.build_アソシエーション名]
    @cook = @recipe.build_cook
  end


  def create
    @recipe = Recipe.new(recipe_params)
    binding.pry
    if @recipe.save
      redirect_to root_path
      # format.html { redirect_to @recipe, notice: 'Post was successfully created.' }
      # format.json { render :index, status: :created, location: @recipe }
    else
      render :new
      # format.html { render :new }
      # format.json { render json: @recipe.errors, status: :unprocessable_entity }
    end
  end

  def show
    @recipe.find(params[:id])
  end



  private

  def recipe_params
    params.require(:recipe).permit(:image, :title ,:feature,:category_id, :date, :cook_time, 
      materials_attributes:[:id, :recipe_id, :thing_id, :amount, :_destroy],
      cook_attributes:[:id, :recipe_id ,:body, :_destroy])
  end
end
  # def get_unit
  #   @unit = Unit.all.to_json
  # end 


