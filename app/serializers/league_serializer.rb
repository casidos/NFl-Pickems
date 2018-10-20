class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :name, :owner_id, :current_season
  has_many :users, through: :user_leagues
  has_many :league_seasons
end
