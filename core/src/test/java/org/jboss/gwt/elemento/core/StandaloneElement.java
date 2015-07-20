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

import elemental.css.CSSStyleDeclaration;
import elemental.dom.Attr;
import elemental.dom.DOMTokenList;
import elemental.dom.Document;
import elemental.dom.Element;
import elemental.dom.NamedNodeMap;
import elemental.dom.Node;
import elemental.dom.NodeList;
import elemental.events.Event;
import elemental.events.EventListener;
import elemental.events.EventRemover;
import elemental.html.AnchorElement;
import elemental.html.ClientRect;
import elemental.html.ClientRectList;
import elemental.html.DivElement;
import elemental.html.FormElement;
import elemental.html.HTMLCollection;
import elemental.html.LabelElement;
import elemental.html.OListElement;
import elemental.html.ParagraphElement;
import elemental.html.SpanElement;
import elemental.html.UListElement;
import elemental.util.Mappable;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Harald Pehl
 */
public class StandaloneElement implements AnchorElement,
        DivElement,
        FormElement,
        LabelElement,
        OListElement,
        ParagraphElement,
        SpanElement,
        UListElement {

    private final String name;
    private final List<StandaloneElement> children;
    private final Map<String, String> attributes;
    private String innerText;

    public StandaloneElement(final String name) {
        this.name = name;
        this.children = new ArrayList<>();
        this.attributes = new LinkedHashMap<>();
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("<").append(name);
        attributes.forEach((name1, value) -> printAttributes(builder, name1, value));
        if (innerText != null) {
            builder.append(">").append(innerText).append("</").append(name).append(">");
        } else if (!children.isEmpty()) {
            builder.append(">");
            for (StandaloneElement child : children) {
                builder.append(child.toString());
            }
            builder.append("</").append(name).append(">");
        } else {
            builder.append("/>");
        }
        return builder.toString();
    }

    protected void printAttributes(StringBuilder builder, String name, String value) {
        if (value != null) {
            builder.append(String.format(" %s=\"%s\"", name, value));
        }
    }


    // ------------------------------------------------------ implemented

    @Override
    public String getTagName() {
        return name;
    }

    @Override
    public String getId() {
        return getAttribute("id");
    }

    @Override
    public void setId(final String id) {
        setAttribute("id", id);
    }

    @Override
    public String getClassName() {
        return getAttribute("class");
    }

    @Override
    public void setClassName(final String className) {
        setAttribute("class", className);
    }

    @Override
    public String getTitle() {
        return getAttribute("title");
    }

    @Override
    public void setTitle(final String title) {
        setAttribute("title", title);
    }

    @Override
    public String getInnerText() {
        return innerText;
    }

    @Override
    public void setInnerText(final String innerText) {
        this.innerText = innerText;
    }

    @Override
    public String getAttribute(final String s) {
        return attributes.get(s);
    }

    @Override
    public void setAttribute(final String s, final String s1) {
        attributes.put(s, s1);
    }

    @Override
    public Node appendChild(final Node node) {
        if (node instanceof StandaloneElement) {
            children.add((StandaloneElement) node);
        }
        return null;
    }


    // ------------------------------------------------------ empty

    @Override
    public String getInnerHTML() {
        return null;
    }

    @Override
    public void setInnerHTML(final String s) {

    }

    @Override
    public String getAccessKey() {
        return null;
    }

    @Override
    public void setAccessKey(final String s) {

    }

    @Override
    public int getChildElementCount() {
        return 0;
    }

    @Override
    public HTMLCollection getChildren() {
        return null;
    }

    @Override
    public DOMTokenList getClassList() {
        return null;
    }

    @Override
    public int getClientHeight() {
        return 0;
    }

    @Override
    public int getClientLeft() {
        return 0;
    }

    @Override
    public int getClientTop() {
        return 0;
    }

    @Override
    public int getClientWidth() {
        return 0;
    }

    @Override
    public String getContentEditable() {
        return null;
    }

    @Override
    public void setContentEditable(final String s) {

    }

    @Override
    public Mappable getDataset() {
        return null;
    }

    @Override
    public String getDir() {
        return null;
    }

    @Override
    public void setDir(final String s) {

    }

    @Override
    public boolean isDraggable() {
        return false;
    }

    @Override
    public void setDraggable(final boolean b) {

    }

    @Override
    public Element getFirstElementChild() {
        return null;
    }

    @Override
    public boolean isHidden() {
        return false;
    }

    @Override
    public void setHidden(final boolean b) {

    }

    @Override
    public boolean isTranslate() {
        return false;
    }

    @Override
    public void setTranslate(final boolean b) {

    }

    @Override
    public String getWebkitRegionOverflow() {
        return null;
    }

    @Override
    public String getWebkitdropzone() {
        return null;
    }

    @Override
    public void setWebkitdropzone(final String s) {

    }

    @Override
    public void blur() {

    }

    @Override
    public void focus() {

    }

    @Override
    public String getAttributeNS(final String s, final String s1) {
        return null;
    }

    @Override
    public Attr getAttributeNode(final String s) {
        return null;
    }

    @Override
    public Attr getAttributeNodeNS(final String s, final String s1) {
        return null;
    }

    @Override
    public ClientRect getBoundingClientRect() {
        return null;
    }

    @Override
    public ClientRectList getClientRects() {
        return null;
    }

    @Override
    public NodeList getElementsByClassName(final String s) {
        return null;
    }

    @Override
    public NodeList getElementsByTagName(final String s) {
        return null;
    }

    @Override
    public NodeList getElementsByTagNameNS(final String s, final String s1) {
        return null;
    }

    @Override
    public boolean hasAttribute(final String s) {
        return false;
    }

    @Override
    public boolean hasAttributeNS(final String s, final String s1) {
        return false;
    }

    @Override
    public Element querySelector(final String s) {
        return null;
    }

    @Override
    public NodeList querySelectorAll(final String s) {
        return null;
    }

    @Override
    public void removeAttribute(final String s) {

    }

    @Override
    public void removeAttributeNS(final String s, final String s1) {

    }

    @Override
    public Attr removeAttributeNode(final Attr attr) {
        return null;
    }

    @Override
    public void scrollByLines(final int i) {

    }

    @Override
    public void scrollByPages(final int i) {

    }

    @Override
    public void scrollIntoView() {

    }

    @Override
    public void scrollIntoView(final boolean b) {

    }

    @Override
    public void scrollIntoViewIfNeeded() {

    }

    @Override
    public void scrollIntoViewIfNeeded(final boolean b) {

    }

    @Override
    public void setAttributeNS(final String s, final String s1, final String s2) {

    }

    @Override
    public Attr setAttributeNode(final Attr attr) {
        return null;
    }

    @Override
    public Attr setAttributeNodeNS(final Attr attr) {
        return null;
    }

    @Override
    public boolean webkitMatchesSelector(final String s) {
        return false;
    }

    @Override
    public void webkitRequestFullScreen(final int i) {

    }

    @Override
    public void webkitRequestFullscreen() {

    }

    @Override
    public void click() {

    }

    @Override
    public Element insertAdjacentElement(final String s, final Element element) {
        return null;
    }

    @Override
    public void insertAdjacentHTML(final String s, final String s1) {

    }

    @Override
    public void insertAdjacentText(final String s, final String s1) {

    }

    @Override
    public String getCharset() {
        return null;
    }

    @Override
    public void setCharset(final String s) {

    }

    @Override
    public String getCoords() {
        return null;
    }

    @Override
    public void setCoords(final String s) {

    }

    @Override
    public String getDownload() {
        return null;
    }

    @Override
    public void setDownload(final String s) {

    }

    @Override
    public String getHash() {
        return null;
    }

    @Override
    public void setHash(final String s) {

    }

    @Override
    public String getHost() {
        return null;
    }

    @Override
    public void setHost(final String s) {

    }

    @Override
    public String getHostname() {
        return null;
    }

    @Override
    public void setHostname(final String s) {

    }

    @Override
    public String getHref() {
        return null;
    }

    @Override
    public void setHref(final String s) {

    }

    @Override
    public String getHreflang() {
        return null;
    }

    @Override
    public void setHreflang(final String s) {

    }

    @Override
    public String getAcceptCharset() {
        return null;
    }

    @Override
    public void setAcceptCharset(final String s) {

    }

    @Override
    public String getAction() {
        return null;
    }

    @Override
    public void setAction(final String s) {

    }

    @Override
    public String getAutocomplete() {
        return null;
    }

    @Override
    public void setAutocomplete(final String s) {

    }

    @Override
    public HTMLCollection getElements() {
        return null;
    }

    @Override
    public String getEncoding() {
        return null;
    }

    @Override
    public void setEncoding(final String s) {

    }

    @Override
    public String getEnctype() {
        return null;
    }

    @Override
    public void setEnctype(final String s) {

    }

    @Override
    public int getLength() {
        return 0;
    }

    @Override
    public String getMethod() {
        return null;
    }

    @Override
    public void setMethod(final String s) {

    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public void setName(final String s) {

    }

    @Override
    public boolean isNoValidate() {
        return false;
    }

    @Override
    public void setNoValidate(final boolean b) {

    }

    @Override
    public String getOrigin() {
        return null;
    }

    @Override
    public String getPathname() {
        return null;
    }

    @Override
    public void setPathname(final String s) {

    }

    @Override
    public String getPing() {
        return null;
    }

    @Override
    public void setPing(final String s) {

    }

    @Override
    public String getPort() {
        return null;
    }

    @Override
    public void setPort(final String s) {

    }

    @Override
    public String getProtocol() {
        return null;
    }

    @Override
    public void setProtocol(final String s) {

    }

    @Override
    public String getRel() {
        return null;
    }

    @Override
    public void setRel(final String s) {

    }

    @Override
    public String getRev() {
        return null;
    }

    @Override
    public void setRev(final String s) {

    }

    @Override
    public String getSearch() {
        return null;
    }

    @Override
    public void setSearch(final String s) {

    }

    @Override
    public String getShape() {
        return null;
    }

    @Override
    public void setShape(final String s) {

    }

    @Override
    public String getTarget() {
        return null;
    }

    @Override
    public void setTarget(final String s) {

    }

    @Override
    public boolean checkValidity() {
        return false;
    }

    @Override
    public void reset() {

    }

    @Override
    public void submit() {

    }

    @Override
    public String getText() {
        return null;
    }

    @Override
    public String getType() {
        return null;
    }

    @Override
    public void setType(final String s) {

    }

    @Override
    public boolean isCompact() {
        return false;
    }

    @Override
    public void setCompact(final boolean b) {

    }

    @Override
    public boolean isReversed() {
        return false;
    }

    @Override
    public void setReversed(final boolean b) {

    }

    @Override
    public int getStart() {
        return 0;
    }

    @Override
    public void setStart(final int i) {

    }

    @Override
    public boolean isContentEditable() {
        return false;
    }

    @Override
    public String getLang() {
        return null;
    }

    @Override
    public void setLang(final String s) {

    }

    @Override
    public Element getLastElementChild() {
        return null;
    }

    @Override
    public Element getNextElementSibling() {
        return null;
    }

    @Override
    public int getOffsetHeight() {
        return 0;
    }

    @Override
    public int getOffsetLeft() {
        return 0;
    }

    @Override
    public Element getOffsetParent() {
        return null;
    }

    @Override
    public int getOffsetTop() {
        return 0;
    }

    @Override
    public int getOffsetWidth() {
        return 0;
    }

    @Override
    public EventListener getOnabort() {
        return null;
    }

    @Override
    public void setOnabort(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnbeforecopy() {
        return null;
    }

    @Override
    public void setOnbeforecopy(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnbeforecut() {
        return null;
    }

    @Override
    public void setOnbeforecut(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnbeforepaste() {
        return null;
    }

    @Override
    public void setOnbeforepaste(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnblur() {
        return null;
    }

    @Override
    public void setOnblur(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnchange() {
        return null;
    }

    @Override
    public void setOnchange(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnclick() {
        return null;
    }

    @Override
    public void setOnclick(final EventListener eventListener) {

    }

    @Override
    public EventListener getOncontextmenu() {
        return null;
    }

    @Override
    public void setOncontextmenu(final EventListener eventListener) {

    }

    @Override
    public EventListener getOncopy() {
        return null;
    }

    @Override
    public void setOncopy(final EventListener eventListener) {

    }

    @Override
    public EventListener getOncut() {
        return null;
    }

    @Override
    public void setOncut(final EventListener eventListener) {

    }

    @Override
    public EventListener getOndblclick() {
        return null;
    }

    @Override
    public void setOndblclick(final EventListener eventListener) {

    }

    @Override
    public EventListener getOndrag() {
        return null;
    }

    @Override
    public void setOndrag(final EventListener eventListener) {

    }

    @Override
    public EventListener getOndragend() {
        return null;
    }

    @Override
    public void setOndragend(final EventListener eventListener) {

    }

    @Override
    public EventListener getOndragenter() {
        return null;
    }

    @Override
    public void setOndragenter(final EventListener eventListener) {

    }

    @Override
    public EventListener getOndragleave() {
        return null;
    }

    @Override
    public void setOndragleave(final EventListener eventListener) {

    }

    @Override
    public EventListener getOndragover() {
        return null;
    }

    @Override
    public void setOndragover(final EventListener eventListener) {

    }

    @Override
    public EventListener getOndragstart() {
        return null;
    }

    @Override
    public void setOndragstart(final EventListener eventListener) {

    }

    @Override
    public EventListener getOndrop() {
        return null;
    }

    @Override
    public void setOndrop(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnerror() {
        return null;
    }

    @Override
    public void setOnerror(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnfocus() {
        return null;
    }

    @Override
    public void setOnfocus(final EventListener eventListener) {

    }

    @Override
    public EventListener getOninput() {
        return null;
    }

    @Override
    public void setOninput(final EventListener eventListener) {

    }

    @Override
    public EventListener getOninvalid() {
        return null;
    }

    @Override
    public void setOninvalid(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnkeydown() {
        return null;
    }

    @Override
    public void setOnkeydown(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnkeypress() {
        return null;
    }

    @Override
    public void setOnkeypress(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnkeyup() {
        return null;
    }

    @Override
    public void setOnkeyup(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnload() {
        return null;
    }

    @Override
    public void setOnload(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnmousedown() {
        return null;
    }

    @Override
    public void setOnmousedown(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnmousemove() {
        return null;
    }

    @Override
    public void setOnmousemove(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnmouseout() {
        return null;
    }

    @Override
    public void setOnmouseout(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnmouseover() {
        return null;
    }

    @Override
    public void setOnmouseover(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnmouseup() {
        return null;
    }

    @Override
    public void setOnmouseup(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnmousewheel() {
        return null;
    }

    @Override
    public void setOnmousewheel(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnpaste() {
        return null;
    }

    @Override
    public void setOnpaste(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnreset() {
        return null;
    }

    @Override
    public void setOnreset(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnscroll() {
        return null;
    }

    @Override
    public void setOnscroll(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnsearch() {
        return null;
    }

    @Override
    public void setOnsearch(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnselect() {
        return null;
    }

    @Override
    public void setOnselect(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnselectstart() {
        return null;
    }

    @Override
    public void setOnselectstart(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnsubmit() {
        return null;
    }

    @Override
    public void setOnsubmit(final EventListener eventListener) {

    }

    @Override
    public EventListener getOntouchcancel() {
        return null;
    }

    @Override
    public void setOntouchcancel(final EventListener eventListener) {

    }

    @Override
    public EventListener getOntouchend() {
        return null;
    }

    @Override
    public void setOntouchend(final EventListener eventListener) {

    }

    @Override
    public EventListener getOntouchmove() {
        return null;
    }

    @Override
    public void setOntouchmove(final EventListener eventListener) {

    }

    @Override
    public EventListener getOntouchstart() {
        return null;
    }

    @Override
    public void setOntouchstart(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnwebkitfullscreenchange() {
        return null;
    }

    @Override
    public void setOnwebkitfullscreenchange(final EventListener eventListener) {

    }

    @Override
    public EventListener getOnwebkitfullscreenerror() {
        return null;
    }

    @Override
    public void setOnwebkitfullscreenerror(final EventListener eventListener) {

    }

    @Override
    public String getOuterHTML() {
        return null;
    }

    @Override
    public void setOuterHTML(final String s) {

    }

    @Override
    public String getOuterText() {
        return null;
    }

    @Override
    public void setOuterText(final String s) {

    }

    @Override
    public Element getPreviousElementSibling() {
        return null;
    }

    @Override
    public int getScrollHeight() {
        return 0;
    }

    @Override
    public int getScrollLeft() {
        return 0;
    }

    @Override
    public void setScrollLeft(final int i) {

    }

    @Override
    public int getScrollTop() {
        return 0;
    }

    @Override
    public void setScrollTop(final int i) {

    }

    @Override
    public int getScrollWidth() {
        return 0;
    }

    @Override
    public boolean isSpellcheck() {
        return false;
    }

    @Override
    public void setSpellcheck(final boolean b) {

    }

    @Override
    public CSSStyleDeclaration getStyle() {
        return null;
    }

    @Override
    public int getTabIndex() {
        return 0;
    }

    @Override
    public void setTabIndex(final int i) {

    }

    @Override
    public NamedNodeMap getAttributes() {
        return null;
    }

    @Override
    public String getBaseURI() {
        return null;
    }

    @Override
    public NodeList getChildNodes() {
        return null;
    }

    @Override
    public Node getFirstChild() {
        return null;
    }

    @Override
    public Node getLastChild() {
        return null;
    }

    @Override
    public String getLocalName() {
        return null;
    }

    @Override
    public String getNamespaceURI() {
        return null;
    }

    @Override
    public Node getNextSibling() {
        return null;
    }

    @Override
    public String getNodeName() {
        return null;
    }

    @Override
    public int getNodeType() {
        return 0;
    }

    @Override
    public String getNodeValue() {
        return null;
    }

    @Override
    public void setNodeValue(final String s) {

    }

    @Override
    public Document getOwnerDocument() {
        return null;
    }

    @Override
    public Element getParentElement() {
        return null;
    }

    @Override
    public Node getParentNode() {
        return null;
    }

    @Override
    public String getPrefix() {
        return null;
    }

    @Override
    public void setPrefix(final String s) {

    }

    @Override
    public Node getPreviousSibling() {
        return null;
    }

    @Override
    public String getTextContent() {
        return null;
    }

    @Override
    public void setTextContent(final String s) {

    }

    @Override
    public EventRemover addEventListener(final String s, final EventListener eventListener) {
        return null;
    }

    @Override
    public EventRemover addEventListener(final String s, final EventListener eventListener, final boolean b) {
        return null;
    }

    @Override
    public Node cloneNode(final boolean b) {
        return null;
    }

    @Override
    public int compareDocumentPosition(final Node node) {
        return 0;
    }

    @Override
    public boolean contains(final Node node) {
        return false;
    }

    @Override
    public boolean dispatchEvent(final Event event) {
        return false;
    }

    @Override
    public boolean hasAttributes() {
        return false;
    }

    @Override
    public boolean hasChildNodes() {
        return false;
    }

    @Override
    public Node insertBefore(final Node node, final Node node1) {
        return null;
    }

    @Override
    public boolean isDefaultNamespace(final String s) {
        return false;
    }

    @Override
    public boolean isEqualNode(final Node node) {
        return false;
    }

    @Override
    public boolean isSameNode(final Node node) {
        return false;
    }

    @Override
    public boolean isSupported(final String s, final String s1) {
        return false;
    }

    @Override
    public String lookupNamespaceURI(final String s) {
        return null;
    }

    @Override
    public String lookupPrefix(final String s) {
        return null;
    }

    @Override
    public void normalize() {

    }

    @Override
    public Node removeChild(final Node node) {
        return null;
    }

    @Override
    public void removeEventListener(final String s, final EventListener eventListener) {

    }

    @Override
    public void removeEventListener(final String s, final EventListener eventListener, final boolean b) {

    }

    @Override
    public Node replaceChild(final Node node, final Node node1) {
        return null;
    }

    @Override
    public String getAlign() {
        return null;
    }

    @Override
    public void setAlign(final String s) {

    }

    @Override
    public Element getControl() {
        return null;
    }

    @Override
    public FormElement getForm() {
        return null;
    }

    @Override
    public String getHtmlFor() {
        return null;
    }

    @Override
    public void setHtmlFor(final String s) {

    }
}
