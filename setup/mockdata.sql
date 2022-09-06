
-- admins
insert into
  admins (admin_name, admin_password)
values
  (
    'Ermantraud',
    crypt('12345678', gen_salt('bf'))
  );

-- regions
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

-- users
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

-- sciences
insert into
  sciences(science_name)
values
  ('matematika'),
  ('ona tili va adabiyot'),
  ('tarix'),
  ('biologiya'),
  ('fizika'),
  ('ingliz tili'),
  ('kimyo'),
  ('gerografiya');

-- tests
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
    'x=10842, y = 5,49*10^4, z=306198',
    1
  ),
  (
    'n raqamining qanday qiymatlarida 6134n soni 3 ga qoldiqsiz bo''linadi?',
    null,
    1
  ),
  (
    '752 sonining o''ng tomoniga qanday raqam yozilsa, hosil bo''lgan son 36 ga qoldiqsiz bo''linadi?',
    null,
    1
  ),
  (
    'Quyidagi sonli ketma - ketliklardan qaysilari tub sonlardan iborat?',
    '1)0; 3; 5; 7; 11;
2)1; 3; 5; 7; 13;
3)3; 5; 7; 9; 11;
4)2; 3; 5; 7; 17;
5)3; 5; 17; 19; 381;',
    1
  ),
  (
    'Berilgan p = 1018978560, q = 8976119441 va r = 987610734 sonlardan qaysilari 16 ga qoldiqsiz bo''linadi?',
    null,
    1
  ),
  (
    'Natural sonlar uchun quyidagi mulohazalardan qaysi biri noto''g''ri?',
    null,
    1
  ),
  (
    'Ifodaning eng kichik qiymatini toping:',
    '(2a - 1)(2a + 1) + 3b(3b - 4a)',
    1
  ),
  (
    'Tenglamani yeching.',
    '2.8x - 3(2x - 1) = 2.8 - 3.19x',
    1
  ),
  (
    'Agar 3a + 4b = 16 va 2c - b = 1 bo''lsa, 3a + 8c ning qiymatini toping.',
    null,
    1
  );

-- variants
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
  ('4', false, 3),

  ('2', false, 4),
  ('7', false, 4),
  ('4', true, 4),
  ('6', false, 4),

  ('3', false, 5),
  ('5', false, 5),
  ('4', true, 5),
  ('2; 4', false, 5),

  ('q', true, 6),
  ('p', false, 6),
  ('r', false, 6),
  ('p va q', false, 6),

  ('3 ga bo''lingan son 9 ga ham bo''linadi', true, 7),
  ('Agar ikki qo''shiluvchidan biri 11 ga bo''linib, ikkinchisi 11 ga bo''linmasa, ularning yig''indisi 11 ga bo''linmaydi', false, 7),
  ('3 ga va 5 ga bo''linadigan son 15 ga bo''linadi', false, 7),
  ('Berilgan sonlar bo''linadigan sonlarning eng kattasi ularning eng katta umumiy bo''luvchisi bo''ladi', false, 7),
  
  ('0', false, 8),
  ('-1', true, 8),
  ('1', false, 8),
  ('-2', false, 8),
  
  ('-20', false, 9),
  ('-2', false, 9),
  ('200', false, 9),
  ('20', true, 9),
  
  ('23', false, 10),
  ('18', false, 10),
  ('4', false, 10),
  ('20', true, 10);

  
-- tests
insert into
  tests(test_heading, test_description, science_id)
values
  (
    '246*013579 soni 9 ga bo''linishi uchun yulduzchaning o''rniga qanday raqam qo''yilishi kerak?',
    null,
    5
  ),
  (
    'Quyidagi sonlardan qaysilari 18 ga qoldiqsiz bo''linadi?',
    'x=10842, y = 5,49*10^4, z=306198',
    5
  ),
  (
    'n raqamining qanday qiymatlarida 6134n soni 3 ga qoldiqsiz bo''linadi?',
    null,
    5
  ),
  (
    '752 sonining o''ng tomoniga qanday raqam yozilsa, hosil bo''lgan son 36 ga qoldiqsiz bo''linadi?',
    null,
    5
  ),
  (
    'Quyidagi sonli ketma - ketliklardan qaysilari tub sonlardan iborat?',
    '1)0; 3; 5; 7; 11;
2)1; 3; 5; 7; 13;
3)3; 5; 7; 9; 11;
4)2; 3; 5; 7; 17;
5)3; 5; 17; 19; 381;',
    5
  ),
  (
    'Berilgan p = 1018978560, q = 8976119441 va r = 987610734 sonlardan qaysilari 16 ga qoldiqsiz bo''linadi?',
    null,
    5
  ),
  (
    'Natural sonlar uchun quyidagi mulohazalardan qaysi biri noto''g''ri?',
    null,
    5
  ),
  (
    'Ifodaning eng kichik qiymatini toping:',
    '(2a - 1)(2a + 1) + 3b(3b - 4a)',
    5
  ),
  (
    'Tenglamani yeching.',
    '2.8x - 3(2x - 1) = 2.8 - 3.19x',
    5
  ),
  (
    'Agar 3a + 4b = 16 va 2c - b = 1 bo''lsa, 3a + 8c ning qiymatini toping.',
    null,
    5
  );

-- variants
insert into
  test_variants(
    test_variant_body,
    test_variant_istrue,
    test_id
  )
values
  ('4', false, 11),
  ('7', false, 11),
  ('0', false, 11),
  ('8', true, 11),

  ('y va z', true, 12),
  ('faqat y', false, 12),
  ('faqat z', false, 12),
  ('x va y', false, 12),

  ('1; 4; 7', true, 13),
  ('4; 2', false, 13),
  ('2', false, 13),
  ('4', false, 13),

  ('2', false, 14),
  ('7', false, 14),
  ('4', true, 14),
  ('6', false, 14),

  ('3', false, 15),
  ('5', false, 15),
  ('4', true, 15),
  ('2; 4', false, 15),

  ('q', true, 16),
  ('p', false, 16),
  ('r', false, 16),
  ('p va q', false, 16),

  ('3 ga bo''lingan son 9 ga ham bo''linadi', true, 17),
  ('Agar ikki qo''shiluvchidan biri 11 ga bo''linib, ikkinchisi 11 ga bo''linmasa, ularning yig''indisi 11 ga bo''linmaydi', false, 17),
  ('3 ga va 5 ga bo''linadigan son 15 ga bo''linadi', false, 17),
  ('Berilgan sonlar bo''linadigan sonlarning eng kattasi ularning eng katta umumiy bo''luvchisi bo''ladi', false, 17),
  
  ('0', false, 18),
  ('-1', true, 18),
  ('1', false, 18),
  ('-2', false, 18),
  
  ('-20', false, 19),
  ('-2', false, 19),
  ('200', false, 19),
  ('20', true, 19),
  
  ('23', false, 20),
  ('18', false, 20),
  ('4', false, 20),
  ('20', true, 20);

-- directions
insert into
  directions(
    direction_name,
    first_science_id,
    second_science_id,
    region_id
  )
values
  ('Sotsiologiya', 1, 2, 14),
  ('Amaliy matematika va informatika', 1, 5, 14),
  (
    'Avtomobil transporti, yo`l-qurilish mashinalari va jihozlarining ekspluatatsiyasi',
    1,
    5,
    14
  ),
  ('Avtomobil yo`llari va aerodromlar', 1, 5, 14),
  (
    'Avtomobil yo`llari, ko`priklar, tonnellar, yo`l o`tkazgichlar va aerodromlarni loyihalash va qurish',
    1,
    5,
    14
  ),
  (
    'Avtomobil yo`llarini obodonlashtirish va arxitektura-landshaft loyihalash',
    1,
    5,
    14
  ),
  (
    'Bino va inshootlar qurilishi (turlari bo`yicha)',
    1,
    5,
    14
  ),
  ('Daryo va suv omborlari gidrologiyasi', 1, 5, 14),
  (
    'Gaz jihozlaridan foydalanish va ularga xizmat ko`rsatish',
    1,
    5,
    14
  ),
  (
    'Telekommunikatsiya texnologiyalari (&quot;Telekommunikatsiyalar&quot;)',
    1,
    5,
    14
  ),
  (
    'Axborot-kommunikatsiya texnologiyalari sohasida kasb ta''limi',
    1,
    5,
    14
  ),
  ('Dasturiy injiniring', 1, 5, 14),
  ('Kompyuter injiniringi: AT-Servis', 1, 5, 14),
  (
    'Kompyuter injiniringi: kompyuter injiniringi',
    1,
    5,
    14
  ),
  (
    'Kompyuter injiniringi: multimedia texnologiyalari',
    1,
    5,
    14
  ),
  ('Pochta aloqasi texnologiyasi', 1, 5, 14),
  (
    'Televizion texnologiyalar: audiovizual texnologiyalar',
    1,
    5,
    14
  ),
  (
    'Televizion texnologiyalar: telestudiya tizimlari va ilovalari',
    1,
    5,
    14
  ),
  ('Agrobiznes va investitsion faoliyat', 1, 6, 14),
  ('Bank ishi', 1, 6, 14),
  ('Biznes-informatika', 1, 6, 14),
  (
    'Buxgalteriya hisobi va audit (tarmoqlar bo`yicha)',
    1,
    6,
    14
  ),
  ('Davlat budjetining g`azna ijrosi', 1, 6, 14),
  ('Ekonometrika', 1, 6, 14),
  (
    'Investitsion loyihalarni moliyalashtirish',
    1,
    6,
    14
  ),
  (
    'Iqtisodiy bilim asoslarini o`qitish metodikasi',
    1,
    6,
    14
  ),
  ('Iqtisodiy xavfsizlik', 1, 6, 14),
  (
    'Iqtisodiyot (tarmoqlar va sohalar bo`yicha)',
    1,
    6,
    14
  ),
  (
    'Boshlang`ich ta''lim va sport-tarbiyaviy ish',
    2,
    1,
    14
  ),
  (
    'Boshlang`ich ta''lim va sport-tarbiyaviy ish',
    2,
    3,
    14
  ),
  ('O''zbek tili va adabiyoti', 2, 6, 14),
  (
    'Yurisprudensiya (faoliyat turlari bo`yicha)',
    2,
    6,
    14
  ),
  ('Arxivshunoslik', 3, 1, 14),
  ('Arxeologiya', 3, 2, 14),
  ('Falsafa', 3, 2, 14),
  (
    'Milliy g`oya, ma''naviyat asoslari va huquq ta''limi',
    3,
    2,
    14
  ),
  (
    'Psixologiya (din sotsiopsixologiyasi)',
    3,
    2,
    14
  ),
  ('Sharq falsafasi va madaniyati', 3, 2, 14),
  ('Jahon siyosati (mintaqalar bo`yicha)', 3, 6, 14);

-- quotas
insert into
  quotas(
    quota_contract,
    quota_grand,
    quota_contract_bal,
    quota_grand_bal,
    direction_id
  )
values
  (80, 40, 162.3, 174.4, 1),
  (70, 32, 140.4, 172.2, 2),
  (82, 23, 153.7, 175.5, 3),
  (23, 12, 120.2, 156.6, 4),
  (42, 23, 169.7, 187.7, 5),
  (67, 32, 187.3, 189.0, 6),
  (73, 32, 176.3, 189.0, 7),
  (53, 32, 148.8, 178.5, 8),
  (85, 24, 153.3, 174.1, 9),
  (35, 24, 173.7, 188.4, 10),
  (60, 23, 127.4, 145.4, 11),
  (62, 23, 143.8, 176.4, 12),
  (93, 43, 158.5, 173.5, 13),
  (53, 23, 166.2, 184.4, 14),
  (75, 64, 173.4, 186.2, 15),
  (76, 23, 156.6, 172.4, 16),
  (43, 54, 146.7, 155.6, 17),
  (98, 67, 163.1, 176.2, 18),
  (34, 23, 176.6, 182.6, 19),
  (45, 23, 135.8, 164.3, 20),
  (34, 12, 118.0, 143.7, 21),
  (78, 32, 135.2, 152.2, 22),
  (34, 7, 159.3, 184.4, 23),
  (94, 32, 146.2, 165.8, 24),
  (84, 54, 125.6, 142.3, 25),
  (23, 8, 116.1, 135.6, 26),
  (76, 32, 128.5, 152.4, 27),
  (87, 35, 146.3, 166.2, 28),
  (45, 34, 164.6, 172.5, 29),
  (68, 34, 182.1, 185.0, 30),
  (45, 32, 144.3, 156.0, 31),
  (76, 43, 126.3, 142.4, 32),
  (45, 21, 154.1, 189.0, 33),
  (34, 9, 162.6, 175.2, 34),
  (76, 34, 124.2, 157.6, 35),
  (34, 13, 144.1, 182.4, 36),
  (76, 40, 152.4, 174.3, 37),
  (23, 5, 125.4, 163.7, 38),
  (54, 20, 124.7, 145.3, 39);

-- exams
insert into
  exams(
    user_id,
    direction_id,
    first_science_count,
    second_science_count,
    exam_time
  )
values
  (1, 1, 28, 27, 130);