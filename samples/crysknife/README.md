# Elemento Crysknife Sample

[TodoMVC](http://todomvc.com/) implementation based on J2CL, Elemento, Crysknife CDI and Crysknife templates.

## Get Started

### Development Mode

- `mvn j2cl:watch`
- wait until you see `` in the console
- start a local web server in `target/classes/META-INF/resources` (e.g. python3 -m http.server)
- open http://localhost:8000/todo/index.html

### Production mode

- `mvn package -P prod`

All samples are also available online at https://hal.github.io/elemento/
