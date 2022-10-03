class EventsController < ApplicationController
  before_action :set_event, only: %i[ show update destroy ]
  skip_before_action :authorize, only: :create

  # GET /events
  def index
    @events = Event.all

    render json: @events
  end

  # GET /events/1
  def show
    render json: @event
  end

  # POST /events
  def create
    @event = Event.new(event_params)

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      past_event_params = {name: @event.name, description: @event.description, category: @event.category, image: @event.image, organizer_id: @event.organizer_id, date: @event.date}
      new_past_event = PastEvent.create(past_event_params)
      
      new_carescape = Carescape.create(api_address: "www.aiart.org", past_event_id: new_past_event.id, image: Carescape.find(rand(1..5)).image)
      
      new_past_event.carescape = Carescape.find(new_carescape.id)
  
      new_past_event.save
      render json: new_past_event, status: :created
      
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # params.permit(:name, :description, :location, :category, :date, :organizer_id, :image)

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.permit(:name, :description, :location, :category, :completed, :organizer_id, :date)
    end
end
