defmodule CacheRedis.Repo.Migrations.CreatePersonnalisation do
  use Ecto.Migration

  def change do
    create table(:personnalisation) do
      add :nom, :string
      add :description, :string
      add :fichier, :string
    end
  end
end
