insert into
  admins (
    admin_name,
    admin_password
  )
values
  (
    'Ermantraud',
    crypt('12345678', gen_salt('bf'))
  );

insert into
  regions (region_name)
values
  ('Andijon viloyati'),
  ('Buxoro viloyati'),
  ('Farg''ona viloyati'),
  ('Jizzax viloyati'),
  ('Xorazm viloyati'),
  ('Namangan viloyati'),
  ('Navoiy viloyati'),
  ('Qashqadaryo viloyati'),
  ('Qoraqalpog''iston Respublikasi'),
  ('Samarqand viloyati'),
  ('Sirdaryo viloyati'),
  ('Surxondaryo viloyati'),
  ('Toshkent viloyati'),
  ('Toshkent shahri');

insert into
  users (
    user_full_name,
    user_contact,
    user_name,
    region_id,
    user_password,
    user_sex
  )
values
  (
    'Abdulaziz Abdunabiyev',
    '998908050447',
    'shukhratovich',
    13,
    crypt('12345678', gen_salt('bf')),
    'male'
  );