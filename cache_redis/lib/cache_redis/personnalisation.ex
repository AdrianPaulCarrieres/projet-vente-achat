defmodule CacheRedis.Personnalisation do
  use Ecto.Schema

  schema "personnalisation" do
    field :nom, :string
    field :description, :string
    field :fichier, :string
  end
end
