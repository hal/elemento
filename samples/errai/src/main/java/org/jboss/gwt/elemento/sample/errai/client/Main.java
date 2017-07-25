package org.jboss.gwt.elemento.sample.errai.client;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import com.google.gwt.user.client.History;
import org.jboss.errai.ioc.client.api.EntryPoint;
import org.jboss.gwt.elemento.core.Elements;

@EntryPoint
@SuppressWarnings({"WeakerAccess", "CdiInjectionPointsInspection"})
public class Main {

    @Inject ApplicationElement application;
    @Inject FooterElement footer;

    @PostConstruct
    void init() {
        Elements.body().add(application).add(footer);
        History.addValueChangeHandler(event -> application.filter(event.getValue()));
        History.fireCurrentHistoryState();
    }
}
