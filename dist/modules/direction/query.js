export default {
    GET: `
    select
      d.direction_id,
      d.direction_name,
      d.create_at,
      to_json(f) as first_science,
      to_json(s) as second_science,
      to_json(r) as science_region,
      to_json(q) as direction_quota
    from
      directions as d
      left join sciences as f on d.first_science_id = f.science_id
      left join sciences as s on d.second_science_id = s.science_id
      left join regions as r on r.region_id = d.region_id
      left join quotas as q on d.direction_id = q.direction_id
    order by
      d.create_at;
  `,
    GETBYSCIENCES: `
    select
      d.direction_id,
      d.direction_name,
      d.create_at,
      to_json(f) as first_science,
      to_json(s) as second_science,
      to_json(r) as science_region,
      to_json(q) as direction_quota
    from
      directions as d
      left join sciences as f on d.first_science_id = f.science_id
      left join sciences as s on d.second_science_id = s.science_id
      left join regions as r on r.region_id = d.region_id
      left join quotas as q on d.direction_id = q.direction_id
    where
      d.first_science_id = $1 and d.second_science_id = $2
    order by
      d.create_at;
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
