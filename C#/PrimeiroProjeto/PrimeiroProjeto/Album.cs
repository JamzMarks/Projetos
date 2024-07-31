class Album
{
    private List<Musica> musicas = new List<Musica>();

    public Album(string nome)
    {
        Nome = nome;
    }

    public string Nome { get; }
    public int DuracaoTotal => musicas.Sum(m => m.Duracao);

    public void AdicionarMusica(Musica musica)
    {
        musicas.Add(musica);
    }
    public void ExibirMusicas()
    {
        Console.WriteLine($"Lista de musicas do Album {Nome}");
        foreach(var musica in musicas)
        {
            Console.WriteLine($"Musica: {musica.Nome}" );
        }
        Console.WriteLine($"\n Para ouvir este album sera necessario {DuracaoTotal}s");
    }
}