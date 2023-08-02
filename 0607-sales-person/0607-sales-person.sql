# Write your MySQL query statement below

select salesperson.name
  from salesperson
 where salesperson.sales_id not in (
    select sales_id
      from orders
      join company
        on company.com_id = orders.com_id
     where company.name = "RED"
  group by sales_id
 )