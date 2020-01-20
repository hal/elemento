# Elemento J2CL Sample

[TodoMVC](http://todomvc.com/) implementation based on J2CL and Elemento.

## Get Started

### Development Mode

- `mvn package`
- start a local web server in `target/classes/META-INF/resources` (e.g. `python3 -m http.server` or `npm i -g serve && serve`)
- `mvn j2cl:watch`
- wait until you see a line similar to `done with pool work ...` in the console
- open http://localhost:8000/todo/index.html

### Production mode

- `mvn package -P prod`
- Find the compiled web app in `target/classes/META-INF/resources`

All samples are also available online at https://hal.github.io/elemento/
