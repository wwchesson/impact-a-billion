# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_17_220558) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carescapes", force: :cascade do |t|
    t.string "api_address"
    t.string "image"
    t.string "comments"
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "past_event_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "location"
    t.string "category"
    t.boolean "completed"
    t.string "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "organizer_id"
    t.string "image"
    t.integer "hours_needed"
    t.string "frequency"
  end

  create_table "impacter_events", force: :cascade do |t|
    t.integer "event_id"
    t.integer "impacter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "impacter_past_events", force: :cascade do |t|
    t.integer "past_event_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "impacters", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organizers", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "past_events", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "location"
    t.string "category"
    t.string "date"
    t.integer "organizer_id"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "image"
    t.integer "likes"
    t.string "comments"
    t.integer "user_id"
    t.integer "past_event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "caption"
  end

  create_table "requests", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.string "category"
    t.integer "hours_requested"
    t.integer "user_id"
    t.integer "organizer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location"
    t.integer "approved"
    t.string "frequency"
    t.integer "volunteers_needed"
    t.integer "denied"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "type"
    t.string "name"
    t.string "email"
    t.integer "zip"
    t.text "skills"
    t.string "availability"
    t.integer "travel_radius"
    t.integer "token_points"
    t.string "org_name"
    t.boolean "admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.string "birthdate"
  end

end
