class CreateLivestreams < ActiveRecord::Migration[6.1]
  def change
    create_table :livestreams do |t|
      t.string :url
      t.string :title

      t.timestamps
    end
  end
end
