export default {
    GET: `
    select
      d.direction_id,
      d.direction_name,
      d.create_at,
      to_json(f) as first_science,
      to_json(s) as second_science
    from
      directions as d
    left join 
      sciences as f on 
      d.first_science_id = f.science_id
    left join 
      sciences as s on 
      d.second_science_id = s.science_id;
  `,
    GETBYSCIENCES: `
    select
      d.direction_id,
      d.direction_name,
      d.create_at,
      to_json(f) as first_science,
      to_json(s) as second_science
    from
      directions as d
    left join 
      sciences as f on 
      d.first_science_id = f.science_id
    left join 
      sciences as s on 
      d.second_science_id = s.science_id
    where
      d.first_science_id = $1 and d.second_science_id = $2;
  `,
    POST: `
    insert into
      directions (direction_name, first_science_id, second_science_id)
    values
      (
        $1,
        $2,
        $3
      )
    returning *;
  `,
    PUT: `
    update
      directions
    set
      direction_name = coalesce($1, direction_name),
      first_science_id = coalesce($2, first_science_id),
      second_science_id = coalesce($3, second_science_id)
    where
      direction_id = $4
    returning *;
  `,
    DELETE: `
    delete from
      directions
    where
      direction_id = $1
    returning *;
  `,
};
