import Config

config :cache_redis, CacheRedis.Repo,
  database: "cache_redis_repo",
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  port: 5432

config :cache_redis, ecto_repos: [CacheRedis.Repo]
