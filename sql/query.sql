-- database: ../utils/tests_US.db
select
    a.shortTitle,
    a.titlePart1,
    a.titlePart2,
    a.description,
    d.shortTitle,
    b.questionPhrase
from
    step a
    inner join test b on b.stepId = a.id
    inner join test_name c on b.id = c.t_id
    inner join test_names d on d.id = c.n_id
order by
    a.num,
    b.orderIndex;
