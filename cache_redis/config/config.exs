import Config

config :cache_redis, CacheRedis.Repo,
  database: "cache_redis_repo",
  username: "postgres",
  password: "mission",
  hostname: "localhost",
  port: 5432

config :cache_redis, ecto_repos: [CacheRedis.Repo]

config :cache_redis, CacheRedis.Scheduler,
  jobs: [
     # Runs every minute:
    {"* * * * *",              fn -> CacheRedis.Cacheur.cycle() end}
  ]
