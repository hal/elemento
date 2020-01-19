# Elemento J2CL Sample

[TodoMVC](http://todomvc.com/) implementation based on J2CL and pure Elemento.

## Get Started

### Development Mode

- `mvn j2cl:build`
- wait until you see a line similar to `done with pool work for org.elemento.samples:sample-j2cl:HEAD-SNAPSHOT AssembleOutput-f74f1ad31b0047979e1379bbde8857f87626d18a in 5883ms` in the console
- start a local web server in `target/classes/META-INF/resources` (e.g. `python3 -m http.server` or `npm i -g serve && serve`)
- `mvn j2cl:watch`
- open http://localhost:8000/todo/index.html

### Production mode

- `mvn package -P prod`

All samples are also available online at https://hal.github.io/elemento/
