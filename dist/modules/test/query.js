export default {
    GET: `
    select
      t.test_id,
      t.test_heading,
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
};
