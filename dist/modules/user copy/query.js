export default {
    LOGIN: `
    select
      u.user_id,
      u.user_full_name,
      u.user_contact,
      u.user_name,
      u.region_id,
      u.user_sex
    from
      users as u
    where
      (u.user_name = $1 or u.user_contact = $1) and u.user_password = crypt($2, u.user_password);
  `,
    REGISTER: `
    insert into
      users (
        user_full_name,
        user_contact,
        user_name,
        region_id,
        user_password,
        user_sex
      )
    values
      (
        $1,
        $2,
        lower($3),
        $4,
        crypt($5, gen_salt('bf')),
        $6
      )
    returning 
      user_full_name,
      user_contact,
      user_name,
      region_id,
      user_sex;
  `,
};
