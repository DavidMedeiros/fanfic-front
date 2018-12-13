export function getCategories() {
  const categories = [
    {key: "movies", text: "Movies", value: "movies"},
    {key: "books", text: "Books", value: "books"},
    {key: "anime / manga", text: "Anime / Manga", value: "anime / manga"},
    {key: "cartoon", text: "Cartoon", value: "cartoon"},
    {key: "games", text: "Games", value: "games"},
    {key: "originals", text: "Originals", value: "originals"},
    {key: "tv", text: "TV", value: "tv"},
    {key: "mythology", text: "Mythology", value: "mythology"},
    {key: "digital influencers", text: "Digital Influencers", value: "digital influencers"},
    {key: "hqs", text: "HQs", value: "hqs"}
  ]

  return categories.sort();
}

export function getGenres() {
  const genres = [
    {key: "romance", text: "Romance", value: "romance"},
    {key: "horror", text: "Horror", value: "horror"},
    {key: "action", text: "Action", value: "action"},
    {key: "adventure", text: "Adventure", value: "adventure"},
    {key: "comedy", text: "Comedy", value: "comedy"},
    {key: "drama", text: "Drama", value: "drama"},
    {key: "sports", text: "Sports", value: "sports"},
    {key: "fantasy", text: "Fantasy", value: "fantasy"},
    {key: "sci-fi", text: "Sci-Fi", value: "sci-fi"},
    {key: "teen", text: "Teen", value: "teen"},
    {key: "crime", text: "Crime", value: "crime"},
    {key: "hentai", text: "Hentai", value: "hentai"},
    {key: "yaoi gay", text: "Yaoi (Gay)", value: "yaoi gay"},
    {key: "yaoi lesbian", text: "Yaoi (Lesbian)", value: "yaoi lesbian"},
    {key: "lgbt", text: "LGBT", value: "lgbt"},
    {key: "supernatural", text: "Supernatural", value: "supernatural"},
    {key: "thriller", text: "Thriller", value: "thriller"}
  ]

  return genres.sort();
}