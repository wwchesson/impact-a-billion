class ImpactersController < ApplicationController

    def index
        impacters = Impacter.all
        render json: impacters
    end

    def events
        impacter = Impacter.find(params[:id])
        render json: impacter, serializer: ImpacterWithEventsSerializer
    end

end
