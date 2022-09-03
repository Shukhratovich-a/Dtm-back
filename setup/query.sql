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
  ($1, $2, $3, $4, $5, $6);