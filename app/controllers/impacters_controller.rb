class ImpactersController < ApplicationController

    def events
        impacter = Impacter.find(params[:id])
        render json: impacter, serializer: ImpacterWithEventsSerializer
    end

    def activities
        impacter = Impacter.find(params[:id])
        render json: impacter, serializer: ImpacterWithActivitiesSerializer
    end
end
