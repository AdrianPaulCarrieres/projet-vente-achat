defmodule CacheRedisTest do
  use ExUnit.Case
  doctest CacheRedis

  test "greets the world" do
    assert CacheRedis.hello() == :world
  end
end
