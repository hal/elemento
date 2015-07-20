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

import elemental.dom.Element;
import elemental.dom.Node;
import elemental.dom.NodeList;
import elemental.events.EventListener;
import elemental.html.ButtonElement;
import elemental.html.FileList;
import elemental.html.FormElement;
import elemental.html.HTMLCollection;
import elemental.html.HTMLOptionsCollection;
import elemental.html.InputElement;
import elemental.html.OptionElement;
import elemental.html.SelectElement;
import elemental.html.TextAreaElement;
import elemental.html.ValidityState;

import java.util.Date;

/**
 * @author Harald Pehl
 */
public class StandaloneInputElement extends StandaloneElement implements ButtonElement,
        InputElement,
        OptionElement,
        SelectElement,
        TextAreaElement {

    public StandaloneInputElement(final String name) {
        super(name);
    }

    @Override
    public String getType() {
        return getAttribute("type");
    }

    @Override
    public void setType(final String type) {
        setAttribute("type", type);
    }


    @Override
    public String getAccept() {
        return null;
    }

    @Override
    public void setAccept(final String s) {

    }

    @Override
    public String getAlt() {
        return null;
    }

    @Override
    public void setAlt(final String s) {

    }

    @Override
    public String getAutocomplete() {
        return null;
    }

    @Override
    public void setAutocomplete(final String s) {

    }

    @Override
    public boolean isAutofocus() {
        return false;
    }

    @Override
    public void setAutofocus(final boolean b) {

    }

    @Override
    public int getCols() {
        return 0;
    }

    @Override
    public void setCols(final int i) {

    }

    @Override
    public boolean isChecked() {
        return false;
    }

    @Override
    public void setChecked(final boolean b) {

    }

    @Override
    public boolean isDefaultChecked() {
        return false;
    }

    @Override
    public void setDefaultChecked(final boolean b) {

    }

    @Override
    public String getDefaultValue() {
        return null;
    }

    @Override
    public void setDefaultValue(final String s) {

    }

    @Override
    public String getDirName() {
        return null;
    }

    @Override
    public void setDirName(final String s) {

    }

    @Override
    public boolean isDefaultSelected() {
        return false;
    }

    @Override
    public void setDefaultSelected(final boolean b) {

    }

    @Override
    public boolean isDisabled() {
        return false;
    }

    @Override
    public void setDisabled(final boolean b) {

    }

    @Override
    public FileList getFiles() {
        return null;
    }

    @Override
    public void setFiles(final FileList fileList) {

    }

    @Override
    public FormElement getForm() {
        return null;
    }

    @Override
    public int getIndex() {
        return 0;
    }

    @Override
    public String getLabel() {
        return null;
    }

    @Override
    public void setLabel(final String s) {

    }

    @Override
    public boolean isSelected() {
        return false;
    }

    @Override
    public void setSelected(final boolean b) {

    }

    @Override
    public void setText(final String s) {

    }

    @Override
    public String getFormAction() {
        return null;
    }

    @Override
    public void setFormAction(final String s) {

    }

    @Override
    public String getFormEnctype() {
        return null;
    }

    @Override
    public void setFormEnctype(final String s) {

    }

    @Override
    public String getFormMethod() {
        return null;
    }

    @Override
    public void setFormMethod(final String s) {

    }

    @Override
    public boolean isFormNoValidate() {
        return false;
    }

    @Override
    public void setFormNoValidate(final boolean b) {

    }

    @Override
    public String getFormTarget() {
        return null;
    }

    @Override
    public void setFormTarget(final String s) {

    }

    @Override
    public int getHeight() {
        return 0;
    }

    @Override
    public void setHeight(final int i) {

    }

    @Override
    public boolean isIncremental() {
        return false;
    }

    @Override
    public void setIncremental(final boolean b) {

    }

    @Override
    public boolean isIndeterminate() {
        return false;
    }

    @Override
    public void setIndeterminate(final boolean b) {

    }

    @Override
    public NodeList getLabels() {
        return null;
    }

    @Override
    public int getLength() {
        return 0;
    }

    @Override
    public void setLength(final int i) {

    }

    @Override
    public String getMax() {
        return null;
    }

    @Override
    public void setMax(final String s) {

    }

    @Override
    public int getMaxLength() {
        return 0;
    }

    @Override
    public void setMaxLength(final int i) {

    }

    @Override
    public String getMin() {
        return null;
    }

    @Override
    public void setMin(final String s) {

    }

    @Override
    public boolean isMultiple() {
        return false;
    }

    @Override
    public void setMultiple(final boolean b) {

    }

    @Override
    public HTMLOptionsCollection getOptions() {
        return null;
    }

    @Override
    public EventListener getOnwebkitspeechchange() {
        return null;
    }

    @Override
    public void setOnwebkitspeechchange(final EventListener eventListener) {

    }

    @Override
    public String getPattern() {
        return null;
    }

    @Override
    public void setPattern(final String s) {

    }

    @Override
    public String getPlaceholder() {
        return null;
    }

    @Override
    public void setPlaceholder(final String s) {

    }

    @Override
    public boolean isReadOnly() {
        return false;
    }

    @Override
    public void setReadOnly(final boolean b) {

    }

    @Override
    public boolean isRequired() {
        return false;
    }

    @Override
    public void setRequired(final boolean b) {

    }

    @Override
    public int getRows() {
        return 0;
    }

    @Override
    public void setRows(final int i) {

    }

    @Override
    public int getSelectedIndex() {
        return 0;
    }

    @Override
    public void setSelectedIndex(final int i) {

    }

    @Override
    public HTMLCollection getSelectedOptions() {
        return null;
    }

    @Override
    public String getSelectionDirection() {
        return null;
    }

    @Override
    public void setSelectionDirection(final String s) {

    }

    @Override
    public int getSelectionEnd() {
        return 0;
    }

    @Override
    public void setSelectionEnd(final int i) {

    }

    @Override
    public int getSelectionStart() {
        return 0;
    }

    @Override
    public void setSelectionStart(final int i) {

    }

    @Override
    public int getTextLength() {
        return 0;
    }

    @Override
    public int getSize() {
        return 0;
    }

    @Override
    public void setSize(final int i) {

    }

    @Override
    public String getSrc() {
        return null;
    }

    @Override
    public void setSrc(final String s) {

    }

    @Override
    public String getStep() {
        return null;
    }

    @Override
    public void setStep(final String s) {

    }

    @Override
    public String getUseMap() {
        return null;
    }

    @Override
    public void setUseMap(final String s) {

    }

    @Override
    public String getValidationMessage() {
        return null;
    }

    @Override
    public ValidityState getValidity() {
        return null;
    }

    @Override
    public String getValue() {
        return null;
    }

    @Override
    public void setValue(final String s) {

    }

    @Override
    public Date getValueAsDate() {
        return null;
    }

    @Override
    public void setValueAsDate(final Date date) {

    }

    @Override
    public double getValueAsNumber() {
        return 0;
    }

    @Override
    public void setValueAsNumber(final double v) {

    }

    @Override
    public boolean isWebkitGrammar() {
        return false;
    }

    @Override
    public void setWebkitGrammar(final boolean b) {

    }

    @Override
    public boolean isWebkitSpeech() {
        return false;
    }

    @Override
    public void setWebkitSpeech(final boolean b) {

    }

    @Override
    public boolean isWebkitdirectory() {
        return false;
    }

    @Override
    public void setWebkitdirectory(final boolean b) {

    }

    @Override
    public int getWidth() {
        return 0;
    }

    @Override
    public void setWidth(final int i) {

    }

    @Override
    public boolean isWillValidate() {
        return false;
    }

    @Override
    public String getWrap() {
        return null;
    }

    @Override
    public void setWrap(final String s) {

    }

    @Override
    public void add(final Element element, final Element element1) {

    }

    @Override
    public boolean checkValidity() {
        return false;
    }

    @Override
    public Node item(final int i) {
        return null;
    }

    @Override
    public Node namedItem(final String s) {
        return null;
    }

    @Override
    public void remove(final int i) {

    }

    @Override
    public void remove(final OptionElement optionElement) {

    }

    @Override
    public void select() {

    }

    @Override
    public void setCustomValidity(final String s) {

    }

    @Override
    public void setSelectionRange(final int i, final int i1) {

    }

    @Override
    public void setSelectionRange(final int i, final int i1, final String s) {

    }

    @Override
    public void stepDown() {

    }

    @Override
    public void stepDown(final int i) {

    }

    @Override
    public void stepUp() {

    }

    @Override
    public void stepUp(final int i) {

    }
}
