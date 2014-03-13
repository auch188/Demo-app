# Node-Neo4j Passport Template

This is a template [Node.js][] + [Neo4j][] app, using the
**[node-neo4j][]** library (available on npm as `neo4j`).

A demo tries to integrate node.sj with Neo4j as well as Passport.js

Code is partially working at the moment

## Installation

```
git clone {}
cd node-neo4j-passport
npm install
```

You'll also need a local Neo4j 2.0 instance.
Install it via **[neo4j.org/download](http://neo4j.org/download)**,
or if you're on a Mac, `brew install neo4j`.


## Usage

Start your local Neo4j instance (e.g. `neo4j start`), then:

```
npm start
```

The app will now be accessible at
[http://localhost:3000/](http://localhost:3000/).





## Miscellany

- MIT license.
- Questions/comments/etc. are welcome.
- As an exercise, I built this without using [CoffeeScript][coffeescript] or
  [Streamline][streamline]. What a gigantic pain! Never again. =P


[Node.js]: http://nodejs.org/
[Neo4j]: http://www.neo4j.org/
[node-neo4j]: https://github.com/thingdom/node-neo4j

[coffeescript]: http://www.coffeescript.org/
[streamline]: https://github.com/Sage/streamlinejs
