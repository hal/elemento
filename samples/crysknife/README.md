# Elemento Crysknife Sample

[TodoMVC](http://todomvc.com/) implementation based on J2CL, Elemento, Crysknife CDI and Crysknife templates.

## Get Started

### Development Mode

- `mvn clean j2cl:watch`
- wait until you see a line similar to `done with pool work ...` in the console
- open one more terminal and start a tomcat7 `mvn tomcat7:run`
- open http://127.0.0.1:8080/sample-crysknife

### Production mode

- `mvn package -P prod`
- Find the compiled web app in `target/classes/META-INF/resources`

All samples are also available online at https://hal.github.io/elemento/
