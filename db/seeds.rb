# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Car.create(
  vin: "ZACCJBBB7JPH40001",
  year: 2018,
  make: "JEEP",
  model: "Renegade",
  trim: "Latitude",
  engine_displacement: 2.4,
  num_cylinders: 4,
  drive_type: "4WD",
  transmission: "Automatic"
)
