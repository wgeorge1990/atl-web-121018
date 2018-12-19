class Tweet
  attr_accessor :id, :message, :username

  def self.all
    hashes = DB[:conn].execute("SELECT * FROM tweets")
    hashes.map do |hash|
      Tweet.new(hash)
    end
  end

  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']
    self.save
  end

  def save
    return if self.id
    sql_code = <<-example
      INSERT INTO tweets (username, message)
        VALUES ('#{@username}', '#{@message}')
    example
    DB[:conn].execute(sql_code)
  end
end
