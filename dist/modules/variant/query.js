export default {
    POST: `
    insert into
      test_variants (test_variant_body, test_variant_istrue, test_id)
    values
      ($1, $2, $3)
    returning *;
  `,
    PUT: `
    update
      test_variants
    set
      test_variant_body = coalesce($1, test_variant_body),
      test_variant_istrue = coalesce($2, test_variant_istrue)
    where
      test_id = $3
    returning *;
  `,
    DELETE: `
    delete from
      test_variants
    where
      test_variant_id = $1
    returning *;
  `,
};
