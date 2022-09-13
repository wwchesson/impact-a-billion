class ImpacterEventsController < ApplicationController
    before_action :set_impacterevent, only: %i[ show update destroy ]
    skip_before_action :authorize, only: :create

    def index
        @impacterEvents = ImpacterEvent.all
        render json: @impacterEvents
    end

    def show
        render json: @impacterEvent
    end

    def create
        @impacterEvent = ImpacterEvent.new(impacterevent_params)

        if @impacterEvent.save
            render json: @impacterEvent, status: :created
        else
            render json: @impacterEvent.errors, status: :unprocessable_entity
        end
    end

    def update
        if @impacterEvent.update(impacterevent_params)
            render json: @impacterEvent
        else
            render json: @impacterEvent.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @impacterEvent.destroy
    end

    private
    def set_impacterevent
        @impacterEvent = ImpacterEvent.find(params[:id])
    end

    def impacterevent_params
        params.permit(:event_id, :impacter_id)
    end


end
