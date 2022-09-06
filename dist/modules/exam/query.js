export default {
    GET: `
    select
      e.exam_id,
      e.first_science_count,
      e.second_science_count,
      e.type,
      e.create_at,
      to_json(u) as user,
      to_json(d) as direction
    from
      exams as e
      left join (
        select
          u.user_id,
          u.user_full_name,
          u.user_contact,
          u.user_name,
          u.user_sex,
          u.create_at,
          to_json(r) as region
        from
          users as u
          left join regions as r on r.region_id = u.region_id
      ) as u on e.user_id = u.user_id
      left join (
        select
          d.direction_id,
          d.direction_name,
          d.create_at,
          to_json(f) as first_science,
          to_json(s) as second_science
        from
          directions as d
          left join sciences as f on f.science_id = d.first_science_id
          left join sciences as s on s.science_id = d.second_science_id
      ) as d on e.direction_id = d.direction_id
    where
      case
        when $1 > 0 then e.user_id = $1
        when $2 > 0 then e.exam_id = $2
        else true
      end
    order by
      e.first_science_count * 3.1 + e.second_science_count * 2.1 desc;
  `,
    POST: `
    insert into
      exams(
        user_id,
        direction_id,
        first_science_count,
        second_science_count,
        type
      )
    values
      ($1, $2, $3, $4, $5)
    returning *;
  `,
    DELETE: `
    delete from
      exams
    where
      exam_id = $1
    returning *;
  `,
};
