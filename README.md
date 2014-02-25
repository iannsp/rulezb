rulez
=====

A Business Rule Engine for rule them all

version: 0.0.1

Business Rules Engine is a kind of software developed to support environments where the rules changes in a regular base like risk evaluation, text analysis, data mining and others softwares designed to decision making.

This kind of job need support this changes without high costs per change.

So, BRE - Business Rule Engines are effective designs to this problem. 

This BRE are under develop to support rules in string format, functions and methods. This will provide the use of external datasources to validation.

how to test:

    node rulez.js -r test1 -f '{"sexo":"masculino","idade":30}' // return 1  

    node rulez.js -r test1 -f '{"sexo":"masculino","idade":5}' // return 0 