Album albumDoQueen = new Album("A night at the Opera");

Banda queen = new Banda("Queen");

Musica musica1 = new Musica(queen, "Love of my life")
{
    Duracao = 156,
    Disponivel =  true
};

Musica musica2 = new Musica(queen, "Bohemian Rhapsody")
{
    Duracao = 256,
    Disponivel = true
};

Musica musica3 = new Musica(queen, "Renegades")
{
    Duracao = 456,
    Disponivel = false
};

musica1.ExibirNomes();
musica2.ExibirNomes();
musica3.ExibirNomes();

albumDoQueen.AdicionarMusica(musica1);
albumDoQueen.AdicionarMusica(musica2);
albumDoQueen.AdicionarMusica(musica3);

albumDoQueen.ExibirMusicas();

queen.AdicionarAlbum(albumDoQueen);
queen.ExibirDiscografia();
