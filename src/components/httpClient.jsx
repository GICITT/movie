const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmE5NmQwY2YzNGRjYzYxMWIyYTM3NzU2OWQ5M2MwOSIsInN1YiI6IjY1NTdjMGI0NTM4NjZlMDBhYmFjNTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PxfQADdSqAoRq0vnlIjt02k72ekHQvomoKXod3n7ytY",
      "Content-Type": "application/json",
    },
  }).then((result) => result.json());
}
