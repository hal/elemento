package javax.enterprise.event;

import io.crysknife.client.internal.AbstractEventFactory;

public class Event_Factory extends AbstractEventFactory {

    public static Event_Factory get() {
        if (instance == null)
            instance = new Event_Factory();
        return instance;
    }

    private static javax.enterprise.event.Event_Factory instance;
}

