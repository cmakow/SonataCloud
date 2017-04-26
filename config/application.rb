require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SonataCloud
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    # config.paperclip_defaults = {
    #   :storage => :s3,
    #   :s3_host_name => ENV["s3_host_name"]
    #   :s3_credentials => {
    #     :bucket => ENV["s3_bucket"],
    #     :access_key_id => ENV["s3_access_key_id"],
    #     :secret_access_key => ENV["s3_secret_access_key"],
    #     :s3_region => ENV["s3_region"],
    #   }
    # }

    Paperclip.options[:content_type_mappings] = {
      :mp3 => "application/octet-stream"
    }

    config.paperclip_defaults = {
    storage: :s3,
    url: ':s3_domain_url',
    path: ':class/:attachment/:id_partition/:style/:filename',
    s3_region: 'us-east-2',
    s3_credentials: {
        bucket: ENV['s3_bucket'],
        access_key_id: ENV['s3_access_key_id'],
        secret_access_key: ENV['s3_secret_access_key'],
        s3_host_name: 's3.amazonaws.com'
    }
}
  end
end
