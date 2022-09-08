class CarescapesController < ApplicationController
  before_action :set_carescape, only: %i[ show update destroy ]

  # GET /carescapes
  def index
    @carescapes = Carescape.all

    render json: @carescapes
  end

  # GET /carescapes/1
  def show
    render json: @carescape
  end

  # POST /carescapes
  def create
    @carescape = Carescape.new(carescape_params)

    if @carescape.save
      render json: @carescape, status: :created, location: @carescape
    else
      render json: @carescape.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /carescapes/1
  def update
    if @carescape.update(carescape_params)
      render json: @carescape
    else
      render json: @carescape.errors, status: :unprocessable_entity
    end
  end

  # DELETE /carescapes/1
  def destroy
    @carescape.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_carescape
      @carescape = Carescape.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def carescape_params
      params.require(:carescape).permit(:api_address, :image, :comments, :likes)
    end
end
