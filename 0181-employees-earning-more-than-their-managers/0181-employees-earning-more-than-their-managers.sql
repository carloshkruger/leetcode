# Write your MySQL query statement below

SELECT employee.name AS "Employee"
  FROM employee
  JOIN employee AS managers
    ON employee.managerId = managers.id
 WHERE employee.salary > managers.salary