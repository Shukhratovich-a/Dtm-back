drop database if exists dtm;
create database dtm;

-- Open
\ c dtm;

-- Extensions
create extension pgcrypto;

-- Types
create type sex as enum ('male', 'female');
create type type as enum ('grand', 'contract', 'not');

-- Admins
drop table if exists admins;
create table admins(
  admin_id serial primary key not null,
  admin_name varchar(32) unique not null,
  admin_password varchar(64) not null,
  create_at timestamp default current_timestamp
);

-- Regions
drop table if exists regions;
create table regions(
  region_id serial primary key not null,
  region_name varchar(64) not null,
  create_at timestamp default current_timestamp
);

-- Users
drop table if exists users;
create table users(
  user_id serial primary key not null,
  user_full_name varchar(128) not null,
  user_contact varchar(64) unique not null,
  user_name varchar(32) unique not null,
  region_id int references regions(region_id) not null,
  user_password varchar(64) not null,
  user_sex sex not null,
  create_at timestamp default current_timestamp
);

-- Sciences
drop table if exists sciences;
create table sciences(
  science_id serial primary key not null,
  science_name varchar(64) not null,
  create_at timestamp default current_timestamp
);

-- Tests
drop table if exists tests;
create table tests(
  test_id serial primary key not null,
  test_heading varchar(512) not null,
  test_description varchar(256),
  science_id int references sciences(science_id),
  create_at timestamp default current_timestamp
);

-- Test variants
drop table if exists test_variants;
create table test_variants(
  test_variant_id serial primary key not null,
  test_variant_body varchar(1024) not null,
  test_variant_istrue boolean not null,
  test_id int references tests(test_id) not null,
  create_at timestamp default current_timestamp
);

-- Index
create unique index on test_variants (test_variant_istrue, test_id)
where
  test_variant_istrue;


-- -- Universities
-- drop table if exists universities;
-- create table universities(
--   university_id serial primary key not null,
--   university_name varchar(64) not null,
--   region_id int references regions(region_id) not null,
--   create_at timestamp default current_timestamp
-- );

-- Directions
drop table if exists directions;
create table directions(
  direction_id serial primary key not null,
  direction_name varchar(256) not null,
  first_science_id int references sciences(science_id),
  second_science_id int check (first_science_id != second_science_id) references sciences(science_id),
  region_id int references regions(region_id) not null,
  create_at timestamp default current_timestamp
);

-- Quotas
drop table if exists quotas;
create table quotas(
  quota_id serial primary key not null,
  quota_contract int not null,
  quota_grand int,
  quota_contract_bal decimal(4, 1) not null,
  quota_grand_bal decimal(4, 1) check (quota_contract_bal < quota_grand_bal),
  direction_id int references directions(direction_id) not null,
  create_at timestamp default current_timestamp
);

-- Exams
drop table if exists exams;
create table exams(
  exam_id serial primary key not null,
  user_id int references users (user_id) not null,
  first_science_count int not null,
  second_science_count int not null,
  direction_id int references directions(direction_id),
  type type not null,
  create_at timestamp default current_timestamp
);