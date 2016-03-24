class DeviseCreateUsers < ActiveRecord::Migration
  def change
    create_table(:users) do |t|
      t.string   :username, limit: 180, :default => "",  :null => false#用户名
      t.integer :genre, :default => 4, :null => false#用户类型（1编辑，2值班编辑，3记者，4普通用户，5市场）

      t.string :face_pic , limit: 180#picture on qiniu
      t.string :background_image_pic , :limit => 180#picture on qiniu
      t.string :_alias , limit: 180#推送别名
      t.boolean :comments_push_switch , :default => true#true打开 false关闭
      t.boolean :praises_push_switch , :default => true#true打开 false关闭
      t.boolean :letter_push_switch , :default => true#true打开 false关闭
      t.string :phone , :limit => 180
      t.text :description
      t.string :private_token , :limit => 180
      t.string :weibo_uid , :limit => 180
      t.string :qq_uid , :limit => 180
      t.string :wechat_uid , :limit => 180
      t.string :twitter_uid , :limit => 180
      t.integer :message_count , :default => 0
      t.string :source , :limit => 180
      t.integer :letter_count , :default => 0
      t.string :phone_verify
      t.string :address , :limit => 180
      t.boolean :status , :default => true#用户激活状态
      t.boolean :state , :default => true#信息状态      
      ## Database authenticatable
      t.string :email,              :limit => 180, null: false, default: ""
      t.string :encrypted_password, :limit => 180, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token, :limit => 180
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip , :limit => 180
      t.string   :last_sign_in_ip , :limit => 180


      # Confirmable
      t.string   :confirmation_token , :limit => 180
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email , :limit => 180 # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at
      t.integer :old_id , :limit => 4

      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end
