CREATE TABLE christmas_movies (
    id SERIAL PRIMARY KEY, 
    movieName TEXT, 
    genre TEXT, 
    duration INTEGER,
    rating INTEGER
);


-- INSER INTO christmas_movies VALUES (sjnjsnjnjsnsjn)

-- OR 

INSERT INTO christmas_movies (movieName, genre, duration, rating) VALUES('Elf', 'Comedy', 120, 4.5)

INSERT INTO christmas_movies (movieName, genre, duration, rating) VALUES('Home Alone', 'Action Comedy', 100, 4.5)
INSERT INTO christmas_movies (movieName, genre, duration, rating) VALUES('Grinch', 'Dramady', 110, 4.0);
INSERT INTO christmas_movies (movieName, genre, duration, rating) VALUES('Die Hard', 'Action', 120, 3.5);

