# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_21_171220) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "cars", force: :cascade do |t|
    t.string "make", null: false
    t.string "model", null: false
    t.integer "year", null: false
    t.string "vin", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_cylinders"
    t.float "engine_displacement"
    t.string "transmission"
    t.string "drive_type"
    t.string "trim"
  end

  create_table "maintenance_records", force: :cascade do |t|
    t.string "summary"
    t.text "description"
    t.date "date_performed"
    t.decimal "cost"
    t.integer "mileage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "cars_id"
    t.index ["cars_id"], name: "index_maintenance_records_on_cars_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "maintenance_records", "cars", column: "cars_id"
end
