export default {
    GET: `
    select
      t.test_id,
      t.test_heading,
      t.test_description,
      t.create_at,
      to_json(s) as science,
      json_agg(v.*) as test_variants
    from
      tests as t
    left join 
      sciences as s on 
      t.science_id = s.science_id
    left join 
      test_variants as v on 
      t.test_id = v.test_id
    group by
      s.science_id, t.test_id;
  `,
    POST: `
    insert into
      tests (test_heading, science_id)
    values
      ($1, $2)
    returning *;
  `,
    PUT: `
    update
      tests
    set
      test_heading = coalesce($1, test_heading),
      science_id = coalesce($2, science_id)
    where
      test_id = $3
    returning *;
  `,
    DELETE: `
    delete from
      tests
    where
      test_id = $1
    returning *;
  `,
};
