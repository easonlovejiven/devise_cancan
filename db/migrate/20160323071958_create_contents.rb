class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.integer :content_id
      t.integer :impression_count
      t.integer :click_count
      t.integer :comment_count
      t.integer :praise_count
      t.integer :channel_count
      t.integer :genre

      t.timestamps null: false
    end
  end
end
