defmodule CacheRedis.Cacheur do

  def cycle() do
    recupererTout()
    |> enumerer
  end

  def recupererTout() do
    CacheRedis.Personnalisation |> CacheRedis.Repo.all
  end

  def enumerer(liste) do
    Enum.each(liste, fn (personnalisation) -> cacher(personnalisation) end)
  end

  def cacher(personnalisation) do
    {:ok, conn} = Redix.start_link(host: "localhost", port: 6379)
    Redix.command(conn, ["HSET", ["personnalisation", personnalisation.id] |> Enum.join(""),
      "id", personnalisation.id,
      "nom", personnalisation.nom,
      "description", personnalisation.description,
      "fichier", personnalisation.fichier])
  end
end
