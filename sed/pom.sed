/.*<version\.gwt\.event>.*<\/version\.gwt\.event>.*/ d
s/.*<version\.gwt\.safehtml>.*<\/version\.gwt\.safehtml>/        <version.gwt>2.9.0<\/version.gwt>/
/<dependencyManagement>/ {
    N;
    /<dependencies>/ {
        a\
            <dependency>\
                <groupId>com.google.gwt<\/groupId>\
                <artifactId>gwt<\/artifactId>\
                <version>${version.gwt}<\/version>\
                <type>pom<\/type>\
                <scope>import<\/scope>\
            <\/dependency>
    }
}
/<dependency>/ {
    N;
    /<groupId>org.gwtproject.event<\/groupId>/ {
        N;
        /<artifactId>gwt-event<\/artifactId>/ {
            N;
            /<version>${version.gwt.event}<\/version>/ {
                N;
                /<\/dependency>/ {
                    d
                }
            }
        }
    }
}
/<groupId>org.gwtproject.safehtml<\/groupId>/ {
    N;
    /<artifactId>gwt-safehtml<\/artifactId>/ {
        N;
        /<version>${version.gwt.safehtml}<\/version>/ {
            N;
            s/.*/        <dependency>\
            <groupId>com.google.gwt<\/groupId>\
            <artifactId>gwt-user<\/artifactId>\
        <\/dependency>/
        }
    }
}
/<plugin>/ {
    N;
    /<groupId>org.codehaus.mojo<\/groupId>/ {
        N;
        /<artifactId>build-helper-maven-plugin<\/artifactId>/ {
            N;
            /<executions>/ {
                N;
                N;
                N;
                N;
                N;
                N;
                N;
                N;
                N;
                N;
                N;
                N;
                N;
                N;
                d;
            }
        }
    }
}
