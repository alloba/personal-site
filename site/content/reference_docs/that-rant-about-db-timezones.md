# Oracle DB Timezone Clarification

Time and software development mix like oil and water, in my mind.
Or some other analogy or something. It's complicated and confusing. 
So here I write.

### Oracle's DATE column.
Be ye not fooled by the way `DATE` gets used in Oracle DB. It is easy to assume 
safeguards and considerations were there are none. Mentally replace the `DATE` column 
with what someone online claimed was the closest standard SQL equivalent:
`TIMESTAMP WITHOUT TIME ZONE`.

Meaning! While your database may have a timezone in mind, and you might expect everything 
to be stored in that timezone, if you push local times or 'timezone-less' information
to the database you will drift if your application/source is located somewhere that your database is not.

Think EST in the application because you live on east-coast, but then UTC in the database because it sounds like 
a good standard.

**Scenario**:  
The entirety of the company's tech stack lived in the eastern timezone. This is where the company was physically 
located, and this is where all the old tomcat servers told the runtimes they were located in. 
The database followed the default configuration of "database is in UTC because it's easier" 
(an assumption on my part).

Company migrates to AWS. Various technologies. All applications in EC2 explicitly set eastern time, but all ECS
applications set NOTHING, and therefore fall back to UTC. 

**Assumption**:  
This does not matter, because Java will 'preserve' timezone information (AKA always stores UTC internally
and makes it pretty to the end user via offset in the `toString`). We want to work in ISO timestamps, so 
in the end it's whatever.

**Reality**:  
This is actually true for most of the tech stack. 
Pure application-to-application communication tends to preserve timezone, and everything is hunky-dory.
This is also true for application-to-json.

**Caveat**:  
The database does NOT maintain the behavior seen in the pure Java context. There are column types (`DATE`)
that do not assume any timezone information at all (`TIMESTAMP WITHOUT TIME ZONE`).  
Feel free to quibble between 'assumes no timezone' and 
'assumes entering data is always a specific timezone already'. Meaning on the boundary between Java and Database, 
there is now room for error! 

| UTC APP                | UTC DB Write        | EST APP                | EST DB Write            |
|------------------------|---------------------|------------------------|-------------------------|
| 2000-01-01:00:00:00T+0 | 2000-01-01:00:00:00 | 1999-12-30:20:00:00T-5 | **1999-12-30:20:00:00** |


#### Dealing with multi-timezone environments
Uh.... don't. Assume the entire system lives in a single timezone, and grit your teeth and struggle to 
make it so. 
In my specific case, the entire physical presence of the company is in the eastern timezone. And historically, 
all of its data and technology has also lived in the eastern timezone (even if people thought differently).
UTC would be nice to use, but honestly at this point it isn't really welcome. Too much conversion effort, too 
many old applications to cycle through on testing and junk. 

To phrase it differently, the "UTC" of the company is "EST" at this point.

[This Link](https://stackoverflow.com/questions/42777187/why-does-jdbc-adjust-the-time-to-default-timezone-when-it-is-saving-a-date)
was very helpful in understanding this
