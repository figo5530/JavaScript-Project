# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
watch_lists = WatchList.create([{name: "2021", movies: [
    Movie.create(title: 'The Lord of the Rings: The Fellowship of the Ring'), 
    Movie.create(title: 'The Lord of the Rings: The Two Towers'), 
    Movie.create(title: 'The Lord of the Rings: The Return of the King')]}, 
    {name: "2020", movies: [
        Movie.create(title: 'Harry Potter and the Sorcerer\'s Stone'), 
        Movie.create(title: 'Harry Potter and the Chamber of Secrets'), 
        Movie.create(title: 'Harry Potter and the Prisoner of Azkaban'), 
        Movie.create(title: 'Harry Potter and the Goblet of Fire'), 
        Movie.create(title: 'Harry Potter and the Order of the Phoenix'), 
        Movie.create(title: 'Harry Potter and the Half-Blood Prince'), 
        Movie.create(title: 'Harry Potter and the Deathly Hallows')]}])
