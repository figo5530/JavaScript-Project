class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :watchlist
end
