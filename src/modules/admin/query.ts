export default {
  LOGIN: `
    select
      a.admin_id,
      a.admin_name,
      a.create_at
    from
      admins as a
    where
      lower(a.admin_name) = lower($1) 
      and a.admin_password = crypt($2, a.admin_password);
  `,
};
