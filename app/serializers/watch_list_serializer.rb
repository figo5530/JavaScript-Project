class WatchListSerializer < ActiveModel::Serializer
  attributes :name
  has_many :movies
end
