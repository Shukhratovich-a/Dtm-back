export default {
  GET: `
    select
      s.*
    from
      sciences as s;
  `,

  GETFIRST: `
    select
      DISTINCT s.*
    from
      directions as d
    left join 
      sciences as s on 
      d.first_science_id = s.science_id
    group by
      s.science_id
    order by
      s.create_at;
  `,

  GETSECOND: `
    select
      DISTINCT s.*
    from
      directions as d
    left join 
      sciences as s on 
      d.second_science_id = s.science_id
    where
      d.first_science_id = $1
    group by
      s.science_id
    order by
      s.create_at;
  `,

  POST: `
    insert into
      sciences (science_name)
    values
      (
        $1
      )
    returning *;
  `,

  PUT: `
    update
      sciences
    set
      science_name = $1
    where
      science_id = $2
    returning *;
  `,

  DELETE: `
    delete from
      sciences
    where
      science_id = $1
    returning *;
  `,
};
