-- Active: 1731535021677@@127.0.0.1@5432@postgres
CREATE TABLE genre (
    genre_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genre_name VARCHAR(255) NOT NULL
);
CREATE TABLE movie (  
    movie_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    year int,
    genre_id int,
    FOREIGN KEY (genre_id) REFERENCES genre(genre_id)
  
);

CREATE TABLE customer (  
    customer_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birth_year int
  
);

CREATE TABLE review (  
    review_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    stars VARCHAR(255) NOT NULL,
    text VARCHAR(255),
    customer_id int,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    movie_id int,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id)
  
);

CREATE TABLE favorite (  
    favorite_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    customer_id int,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    movie_id int,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id)
  
);