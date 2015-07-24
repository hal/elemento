/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.gwt.elemento.core;

/**
 * Known input types used in {@link Elements.Builder#input(InputType)}. If not otherwise specified the created element
 * is a simple element and cannot contain nested elements.
 */
public enum InputType {
    /**
     * Starts a button element (must be closed using {@link Elements.Builder#end()})
     */
    button,
    checkbox,
    color,
    date,
    datetime,
    email,
    file,
    hidden,
    image,
    month,
    number,
    password,
    radio,
    range,
    reset,
    search,
    /**
     * Starts a select element (must be closed using {@link Elements.Builder#end()})
     */
    select,
    tel,
    text,
    /**
     * Starts a textarea element (must be closed using {@link Elements.Builder#end()})
     */
    textarea,
    time,
    url,
    week
}
