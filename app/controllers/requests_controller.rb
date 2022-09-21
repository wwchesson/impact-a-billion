class RequestsController < ApplicationController
  before_action :set_request, only: %i[ show update destroy userpatch ]

  # GET /requests
  def index
    @requests = Request.all

    render json: @requests
  end

  # GET /requests/1
  def show
    render json: @request
  end

  # POST /requests
  def create
    @request = Request.new(request_params)

    if @request.save
      render json: @request, status: :created, location: @request
    else
      render json: @request.errors, status: :unprocessable_entity
    end
  end

  # patch "/requestpatch/:id", to: "requests#userpatch"
  def userpatch
    if @request.update(request_params)
      render json: @request
    else 
      render json: @request.errors, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /requests/1
  def update
    if @request.update(request_params)
      event_params = {name: @request.name, description: @request.description, category: @request.category, completed: false, organizer_id: @request.organizer_id, image: @request.image }
      new_event = Event.create!(event_params)
      render json: new_event, status: :created
    else
      render json: @request.errors, status: :unprocessable_entity
    end
  end

  # DELETE /requests/1
  def destroy
    @request.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_request
      @request = Request.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def request_params
      params.require(:request).permit(:name, :description, :image, :approved, :location, :category, :hours_requested, :user_id, :organizer_id, :frequency, :volunteers_needed)
    end
end
