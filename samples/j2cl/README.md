# Elemento J2CL Sample

[TodoMVC](http://todomvc.com/) implementation based on J2CL.

## Get Started

### Development Mode

- `mvn clean j2cl:watch`
- start tomcat in another terminal: `mvn tomcat7:run`
- open http://localhost:8080/sample-j2cl

### Production mode

- `mvn package -P prod`
- Find the compiled web app in `target/sample-j2cl`

All samples are also available online at https://hal.github.io/elemento/
