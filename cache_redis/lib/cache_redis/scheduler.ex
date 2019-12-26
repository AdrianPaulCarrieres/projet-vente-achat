defmodule CacheRedis.Scheduler do
  use Quantum.Scheduler,
  otp_app: :cache_redis
end
