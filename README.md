## Tool to look up events in Helsinki

With this package you can look up events from Helsinki Linked Events API using your preferred keyword. It returns you a list of events which title or description match the keyword you provided.
This project is made for a school project only and I don't recommend using it in production.

Published package:
Source code:

## Source code
Contents of the package include ```lookup.ts``` file, which contains the code used for looking up events. ```Lookup.spec.ts``` file contains unit tests.

## How to use the package

To install this package in your project, use:
```
npm install @ellipiilonen/lookup-events
```

To use the package in your code, use:
```
import { lookupEvents } from '@ellipiilonen/lookup-events';

const events = await lookupEvents({ text: keyword });

console.log(JSON.stringify(events));
```
