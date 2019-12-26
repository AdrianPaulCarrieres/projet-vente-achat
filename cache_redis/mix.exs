defmodule CacheRedis.MixProject do
  use Mix.Project

  def project do
    [
      app: :cache_redis,
      version: "0.1.0",
      elixir: "~> 1.9",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger],
      mod: {CacheRedis.Application, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:ecto_sql, "~> 3.0"},
      {:postgrex, ">= 0.0.0"},
      {:redix, ">= 0.0.0"},
      {:castore, ">= 0.0.0"},
      {:quantum, "~> 2.3"},
      {:timex, "~> 3.0"}
    ]
  end
end
