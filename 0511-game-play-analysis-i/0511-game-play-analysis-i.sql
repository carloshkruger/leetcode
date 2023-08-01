# Write your MySQL query statement below

# select player_id,
#        (select a2.event_date
#           from activity a2
#          where a2.player_id = a1.player_id
#       order by a2.event_date
#          limit 1) as first_login
#   from activity a1
     
select player_id,
       min(event_date) as first_login
  from activity
group by player_id