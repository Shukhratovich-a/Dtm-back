export default {
    GET: `
    select
      r.*
    from
      regions as r;
  `,
    POST: `
    insert into
      regions (region_name)
    values
      (
        $1
      )
    returning *;
  `,
    PUT: `
    update
      regions
    set
      region_name = $1
    where
      region_id = $2
    returning *;
  `,
    DELETE: `
    delete from
      regions
    where
      region_id = $1
    returning *;
  `,
};
