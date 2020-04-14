CREATE TABLE todos (id SERIAL PRIMARY KEY NOT NULL,
                                          name varchar(255) NOT NULL);


INSERT INTO todos (id, name)
VALUES (1,
        'Take trash off.'), (2,
                             'Clean garage.'), (3,
                                                'Kiss dog on forehead.');