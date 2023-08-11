# Write your MySQL query statement below
with cte as (
select *, 
     count(*) over( order by id range between current row and 2 following ) following_cnt,
     count(*) over( order by id range between 2 preceding and current row ) preceding_cnt,
     count(*) over( order by id range between 1 preceding and 1 following ) current_cnt
from stadium
where people > 99
)
select id,
       visit_date,
       people
  from cte
 where cte.following_cnt = 3
    or cte.preceding_cnt = 3
    or cte.current_cnt = 3
order by visit_date