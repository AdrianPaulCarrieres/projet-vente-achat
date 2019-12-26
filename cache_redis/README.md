# CacheRedis

## Installation

Installer Erlang et Elixir :
<https://elixir-lang.org/install.html>

Installer Redis

Installer PostGresSQL

Pour installer les dépendances

```bash
mix deps.get```

## Lancement

Pour lancer le projet :
Lancer le serveur Redis

Lancer le programme elixir

```bash
iex -S mix```

Il est possible de configurer le scheduler pour que la cache soit mise à jour plus ou moins rapidement, dans le fichier config/config.exs


```elixir
config :cache_redis, CacheRedis.Scheduler,
  jobs: [
    # Every minute
    {"* * * * *",              fn -> CacheRedis.Cacheur.cycle() end}
  ]
```
