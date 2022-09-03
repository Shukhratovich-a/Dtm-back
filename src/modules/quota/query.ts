export default {
  GET: `
    select
      q.quota_id,
      q.quota_contract,
      q.quota_grand,
      q.quota_contract_bal,
      q.quota_grand_bal,
      q.quota_year,
      q.create_at,
      to_json(d) as direction
    from
      quotas as q
      left join directions as d on q.direction_id = d.direction_id
    where
      case
        when $1 > 0 then q.quota_year = $1
        else true
      end;
  `,

  POST: `
    insert into
      quotas(
        quota_contract,
        quota_grand,
        quota_contract_bal,
        quota_grand_bal,
        quota_year,
        direction_id
      )
    values
      ($1, $2, $3, $4, $5, $6)
    returning *;
  `,

  PUT: `
    update
      quotas
    set
      quota_contract = coalesce($1, quota_contract),
      quota_grand = coalesce($2, quota_grand),
      quota_contract_bal = coalesce($3, quota_contract_bal),
      quota_grand_bal = coalesce($4, quota_grand_bal),
      quota_year = coalesce($5, quota_year),
      direction_id = coalesce($6, direction_id)
    where
      quota_id = $7
    returning *;
  `,

  DELETE: `
    delete from
      quotas
    where
      quota_id = $1
    returning *;
  `,
};
