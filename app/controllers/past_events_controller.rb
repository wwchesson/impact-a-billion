class PastEventsController < ApplicationController
  before_action :set_past_event, only: %i[ show update destroy ]

  # GET /past_events
  def index
    @past_events = PastEvent.all

    render json: @past_events
  end

  # GET /past_events/1
  def show
    render json: @past_event
  end

  # POST /past_events
  def create
    @past_event = PastEvent.new(past_event_params)

    if @past_event.save
      render json: @past_event, status: :created, location: @past_event
    else
      render json: @past_event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /past_events/1
  def update
    if @past_event.update(past_event_params)
      render json: @past_event
    else
      render json: @past_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /past_events/1
  def destroy
    @past_event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_past_event
      @past_event = PastEvent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def past_event_params
      params.require(:past_event).permit(:name, :description, :location, :category, :date, :organizer_id, :image)
    end
end
