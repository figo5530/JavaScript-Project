class WatchListSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_many :movies
end
