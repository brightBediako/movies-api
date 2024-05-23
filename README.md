# movieLens


## Description
movieLens project provides a Node.js API for movies with CRUD functionalities (Create, Read, Update, Delete) and leverages OpenAI to generate movie recommendations based on existing entries.

## Why movieLens
Users are overwhelmed with countless movie choices across various streaming platforms. This project aims to simplify the decision-making process by offering smart, AI-driven movie recommendations, enhancing the user experience by providing curated suggestions tailored to individual preferences.


## Quick start
1. Clone the repository

```bash
git clone https://github.com/your-username/movies-api.git
```

2. Installation
```bash
cd movies-api

npm install or (yarn install)
```

3. Set up environment variables
* Configure database connection: (refer to MongoDB documentation for details on creating a connection string)
* Create a file named .env in the project root directory.
* Add a line MONGODB_URI=your_connection_string to the .env file, replacing your_connection_string with your actual MongoDB connection string.
* Add a line OPENAI_API_KEY=your_openai_api_key to the .env file, replacing your_openai_api_key with your actual OPENAI API KEY.

```plaintext
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

4. Start the server
```bash
npm start
```

## Usage
1. Create a Movie
```http

  {
    "movie_name": "Whispers of the Bayou",
    "description": "A suspenseful thriller set in the Louisiana bayou, where a park ranger investigating a series of disappearances uncovers a dark secret hidden within the swamp.",
    "genre": "Thriller, Mystery",
    "year": 2023,
    "rating": 4.0
  }
```

2. Get all movies:

```http
 localhost:5000/api/movies
```

3. Get a single movie

```http
 localhost:5000/api/movies/:movie_id
```

4. Update a movie

```http
 {
    "movie_id": "66474c6aad1c2f0202",
    "movie_name": "Lover",
    "info": "The heartwarming tale of a simple man with a unique perspective on life, love, and history.",
    "rating": 8.8,
    "description": "description"
}

```

5. Delete a movie

```http
 localhost:5000/api/movies/:movie_id
```

6. Get movie recommendations

```http
 localhost:5000/api/movies/openai/movieRecommendation
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

* Fork the repository.
* Create a new branch (git checkout -b feature/your-feature-name).
* Commit your changes (git commit -m 'Add some feature').
* Push to the branch (git push origin feature/your-feature-name).
* Open a pull request.

Your contributions can include bug fixes, feature requests, documentation improvements, and more. Together, we can build a more robust and user-friendly movie recommendation system.

## License

[MIT](https://choosealicense.com/licenses/mit/)

