# == Schema Information
#
# Table name: users
#
#  id                           :integer          not null, primary key
#  username                     :string           not null
#  email                        :string           not null
#  password_digest              :string           not null
#  session_token                :string           not null
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  bio                          :text
#  header_image_url             :string
#  profile_picture_file_name    :string
#  profile_picture_content_type :string
#  profile_picture_file_size    :integer
#  profile_picture_updated_at   :datetime
#  header_image_file_name       :string
#  header_image_content_type    :string
#  header_image_file_size       :integer
#  header_image_updated_at      :datetime
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_attached_file :profile_picture, default_url: "default_user.jpg"
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\Z/

  has_attached_file :header_image
  validates_attachment_content_type :header_image, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :songs,
    class_name: "Song",
    foreign_key: :artist_id,
    primary_key: :id

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return @user if @user && @user.is_password?(password)
    nil
  end

  def self.generate_session_token!
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token!
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token!
  end
end
