class MovieSerializer < ActiveModel::Serializer
  attributes :title, :id
  belongs_to :watch_list
end
