class MovieSerializer < ActiveModel::Serializer
  attributes :title, :id, :watch_list_id
  belongs_to :watch_list
end
