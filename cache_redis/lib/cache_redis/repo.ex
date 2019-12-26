defmodule CacheRedis.Repo do
  use Ecto.Repo,
    otp_app: :cache_redis,
    adapter: Ecto.Adapters.Postgres
end
