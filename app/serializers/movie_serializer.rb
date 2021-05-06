class MovieSerializer < ActiveModel::Serializer
  attributes :title
  belongs_to :watch_list
end
