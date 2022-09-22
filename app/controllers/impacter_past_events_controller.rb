class ImpacterPastEventsController < ApplicationController
  before_action :set_impacter_past_event, only: %i[ show update destroy ]

  # GET /impacter_past_events
  def index
    @impacter_past_events = ImpacterPastEvent.all

    render json: @impacter_past_events
  end

  # GET /impacter_past_events/1
  def show
    render json: @impacter_past_event
  end

  # POST /impacter_past_events
  def create
    @impacter_past_event = ImpacterPastEvent.new(impacter_past_event_params)

    if @impacter_past_event.save
      render json: @impacter_past_event, status: :created, location: @impacter_past_event
    else
      render json: @impacter_past_event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /impacter_past_events/1
  def update
    if @impacter_past_event.update(impacter_past_event_params)
      render json: @impacter_past_event
    else
      render json: @impacter_past_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /impacter_past_events/1
  def destroy
    @impacter_past_event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_impacter_past_event
      @impacter_past_event = ImpacterPastEvent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def impacter_past_event_params
      params.require(:impacter_past_event).permit(:past_event_id, :user_id)
    end
end
