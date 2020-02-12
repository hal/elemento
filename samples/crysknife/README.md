# Elemento Crysknife Sample

[TodoMVC](http://todomvc.com/) implementation based on J2CL, Crysknife CDI and Crysknife templates.

## Get Started

### Development Mode

- `mvn clean j2cl:watch`
- start tomcat in another terminal: `mvn tomcat7:run`
- open http://localhost:8080/sample-crysknife

### Production mode

- `mvn package -P prod`
- Find the compiled web app in `target/sample-crysknife`

All samples are also available online at https://hal.github.io/elemento/
