class User < ApplicationRecord
  validates :first_name, :last_name, :email, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :image, default_url: "default_user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews,
    class_name: :Review,
    foreign_key: :author_id

  has_many :spots,
    class_name: :Spot,
    foreign_key: :host_id

  has_many :bookings,
    class_name: :Booking,
    foreign_key: :booker_id

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
