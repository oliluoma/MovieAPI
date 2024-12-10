-- Active: 1731535021677@@127.0.0.1@5432@postgres
CREATE TABLE genre (
    genre_name TEXT PRIMARY KEY,
    genre_id int
);
CREATE TABLE movie (  
    movie_id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    year int,
    genre_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (genre_name) REFERENCES genre(genre_name)
  
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

INSERT INTO genre (genre_name) VALUES 
('drama'),('comedy'),('scifi'),('fantasy'),('action'),('triller');

INSERT INTO movie (title, year, genre_name) VALUES 
('Inception', 2010, 'action'),
('The Terminator', 1984, 'action'),
('Tropic Thunder', 2008, 'comedy'),
('Borat', 2006, 'comedy'),
('Interstellar', 2014, 'drama'),
('Joker', 2019, 'drama');

INSERT INTO customer (username, name, password, birth_year) VALUES
('reimarii', 'Reima Riihimäki', 'qwerty123', 1986),
('lizzy', 'Lisa Simpson', 'abcdef', 1991 ),
('boss', 'Ben Bossy', 'salasana', 1981 )