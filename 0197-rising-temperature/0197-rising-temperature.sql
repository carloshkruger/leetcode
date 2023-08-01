# Write your MySQL query statement below

select id
  from (
  SELECT id, recordDate, temperature,
       (select temperature
          from weather w2
         where w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 DAY)) as yesterdays_temperature
  from weather w1
  ) as w3
  where w3.yesterdays_temperature is not null
    and w3.temperature > w3.yesterdays_temperature