/*
 * JBoss, Home of Professional Open Source Copyright 2010, Red Hat, Inc., and individual
 * contributors by the @authors tag. See the copyright.txt in the distribution for a full listing of
 * individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in
 * writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

package javax.enterprise.inject;

import java.lang.annotation.Annotation;
import javax.inject.Provider;

public interface Instance<T> extends Iterable<T>, Provider<T> {
  Instance<T> select(Annotation... var1);

  <U extends T> Instance<U> select(Class<U> var1, Annotation... var2);

  boolean isUnsatisfied();

  boolean isAmbiguous();

  void destroy(T var1);
}

