# Write your MySQL query statement below

    SELECT person.firstName,
           person.lastName,
           address.city,
           address.state
      FROM person
 LEFT JOIN address
        ON address.personId = person.personId