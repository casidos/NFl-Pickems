class League < ApplicationRecord
  has_many :user_leagues
  has_many :leagues, through: :user_leagues
  belongs_to :owner, :class_name => 'User', :foreign_key => 'owner_id'
end
