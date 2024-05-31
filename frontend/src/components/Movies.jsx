import React from "react";

const Movies = () => {
  const movies = [
    {
      id: 1,
      Title: "Guardians of the Galaxy Vol. 2",
      Released: "05 May 2017",
      Year: "2017",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      Genre: "Action, Adventure, Comedy",
      Director: "James Gunn",
      Plot: "The Guardians struggle t…us celestial being Ego.",
    },
    {
      id: 2,
      Title: "The Dark Knight",
      Released: "18 Jul 2008",
      Year: "2008",
      Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Genre: 	"Action, Crime, Drama",
      Director: "Christopher Nolan",
      Plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." ,
    },
    {
      id: 3,
      Title: "The Dark Knight",
      Released: "18 Jul 2008",
      Year: "2008",
      Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Genre: 	"Action, Crime, Drama",
      Director: "Christopher Nolan",
      Plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." ,
    },

  ];

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Recommended Movies
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {movies.map((movie) => (
              <div key={movie.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={movie.Poster}
                    alt=""
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {movie.Title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{movie.Genre}</p>
                  </div>
                  {/* <p className="text-sm font-medium text-gray-900">
                    {movie.Genre}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
