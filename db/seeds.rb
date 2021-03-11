# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Car.create(
  make: 'Volkswagen',
  model: 'Golf GTI',
  year: 2016,
  drive_type: Car::DRIVE_TYPE_FWD,
  transmission: Car::TRANSMISSION_TYPE_MANUAL,
  vin: '3VWYT7AU2GM021246'
)

Car.create(
  make: 'Jeep',
  model: 'Renegade',
  year: 2018,
  drive_type: Car::DRIVE_TYPE_4WD,
  transmission: Car::TRANSMISSION_TYPE_AUTO,
  vin: 'ZACCJBBB7JPH40001'
)
