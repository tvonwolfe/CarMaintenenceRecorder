# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_06_221414) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cars", force: :cascade do |t|
    t.string "vin", null: false
    t.string "make", null: false
    t.string "model", null: false
    t.float "engine_displacement", null: false
    t.integer "num_cyl", null: false
    t.string "drive_type", null: false
    t.string "transmission", null: false
    t.integer "year", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["vin"], name: "index_cars_on_vin", unique: true
  end

  create_table "maintenance_records", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "title"
    t.text "description"
    t.date "date_performed"
    t.integer "mileage"
    t.decimal "cost"
    t.bigint "cars_id"
    t.index ["cars_id"], name: "index_maintenance_records_on_cars_id"
  end

  add_foreign_key "maintenance_records", "cars", column: "cars_id"
end
