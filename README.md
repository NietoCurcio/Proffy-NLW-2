# Proffy

An app to connect professors with students.

> Node.js, React, React Native

Image

## Express, server side

The server is built with Express framework, in its routes we can get and create classes and connections, each class is created by a user where there is a form to fill name, avatar (photo), whatsapp, biography, subject (i.e, Math), cost and week day that the professor will teach. All these data is stored in four tables which are user, class, class_schedule (for week days) and connections (between students and professors) table.

Models and migrations are managed by knex, knex beyond "unify the SQL Language" among many database systems that have slight syntax variations like Postgres, MySQL, MariaDB, Oracle, etc, bring a lot of features to interact with the database, for example, the transaction which helps us to actually insert a sequence of data in different tables if everything goes okay, avoiding errors when the tables depend each other with the foreign key relationships. The client that we pass to knex is SQLite3

## React (web)

There are components (with props and children from a parent component) used for build the pages, client routes with react router and axios to make HTTP requests to connect with our server.

## React Native (mobile)

A React Native app runs on a device, there is the react-navigation and we have a nested navigation, because inside a stack navigator is a tabs navigator (to switch between Favorites and Search Proffys), our mobile is also connected to our server (api calls). We use the AsyncStorage from react native community to store information about who are the favorites professors of the user, in that way, with this data in localStorage we have an array of favorites teachers to display them.

Image

Image

I studied this project on Rocketseat Next Level Week second edition.
