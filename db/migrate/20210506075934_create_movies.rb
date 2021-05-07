class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :watch_list_id
      # t.references :watch_list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
