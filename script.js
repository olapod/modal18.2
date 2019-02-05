
  var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      imgUrl: 'https://www.filmweb.pl/Harry.Potter.I.Kamien.Filozoficzny/posters#prev'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      imgUrl: 'https://www.filmweb.pl/Krol.Lew/posters#next'
    },
    {
        id: 3,
        title: 'Bohemian Rhapsody',
        desc: 'Film o zespole Queen',
        imgUrl: 'https://ssl-gfx.filmweb.pl/po/92/01/619201/7863181.3.jpg'
    },
    {
        id: 4,
        title: 'Skazani na Shawshank',
        desc: 'Film o bankierze w więzieniu',
        imgUrl: 'https://www.filmweb.pl/Skazani.Na.Shawshank/posters#prev'
    },
    {
        id: 5,
        title: 'Zielona mila',
        desc: 'Film o skazanym za zabójstwo dwóch dziewczynek',
        imgUrl: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.3.jpg'
    },
    
  ];

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
  );

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.imgUrl})
      );
  });


ReactDOM.render(element, document.getElementById('app'));