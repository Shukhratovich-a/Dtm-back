insert into
  admins (admin_name, admin_password)
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
insert into
  tests(test_heading, test_description, science_id)
values
  (
    '246*013579 soni 9 ga bo''linishi uchun yulduzchaning o''rniga qanday raqam qo''yilishi kerak?',
    null,
    1
  ),
  (
    'Quyidagi sonlardan qaysilari 18 ga qoldiqsiz bo''linadi?',
    'x=10842, y = 5,49⋅10^{4}, z=306198',
    1
  ),
  (
    'n raqamining qanday qiymatlarida 6134n soni 3 ga qoldiqsiz bo''linadi?',
    null,
    1
  );
insert into
  test_variants(
    test_variant_body,
    test_variant_istrue,
    test_id
  )
values
  ('4', false, 1),
  ('7', false, 1),
  ('0', false, 1),
  ('8', true, 1),
  ('y va z', true, 2),
  ('faqat y', false, 2),
  ('faqat z', false, 2),
  ('x va y', false, 2),
  ('1; 4; 7', true, 3),
  ('4; 2', false, 3),
  ('2', false, 3),
  ('4', false, 3);
insert into
  quotas(
    quota_contract,
    quota_grand,
    quota_contract_bal,
    quota_grand_bal,
    direction_id,
    quota_year
  )
values
  (80, 20, 152.1, 176.4, 1, 2021);