# Write your MySQL query statement below

select w1.id
  from weather w1
left join weather w2
    on w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 DAY)
where w2.temperature is not null
  and w1.temperature > w2.temperature