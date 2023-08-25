import static org.jboss.elemento.Elements.circle;
import static org.jboss.elemento.Elements.svg;

@SuppressWarnings("unused")
public class SvgDemo {

    public void svgDemo() {
        // @start region = svg
        svg().css("spinner", "large")
                .aria("label", "Loading...")
                .attr("role", "progressbar")
                .attr("viewBox", "0 0 100 100")
                .add(circle().css("spinner", "path")
                        .attr("cx", 50)
                        .attr("cy", 50)
                        .attr("r", 45)
                        .attr("fill", "none"));
        // @end region = svg
    }
}
