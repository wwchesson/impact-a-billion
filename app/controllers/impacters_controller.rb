class ImpactersController < ApplicationController

    def events
        impacter = Impacter.find(params[:id])
        render json: impacter, serializer: ImpacterWithEventsSerializer
    end

end
