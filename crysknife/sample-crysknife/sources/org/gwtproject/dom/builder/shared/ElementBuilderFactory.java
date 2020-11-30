/*
 * Copyright © 2019 The GWT Project Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.gwtproject.dom.builder.shared;

import org.gwtproject.dom.builder.client.DomBuilderFactory;

/**
 * Factory for creating element builders.
 *
 * <p>Use {@link ElementBuilderFactory#get()} to fetch the builder factory optimized for the browser
 * platform.
 *
 * <p>If you are using the builder on a server, use {@link HtmlBuilderFactory#get()} instead. {@link
 * HtmlBuilderFactory} can construct a {@link org.gwtproject.safehtml.shared.SafeHtml} string and
 * will work on the server. Other implementations may only work on a browser client.
 *
 * <p>Element builder methods can be chained together as with a traditional builder:
 *
 * <pre>
 * //
 * // Create a builder for the outermost element. The initial state of the
 * // builder is a started element ready for attributes (eg. "&lt;div").
 * //
 * DivBuilder divBuilder = ElementBuilderFactory.get().createDivBuilder();
 *
 * //
 * // Build the element.
 * //
 * // First, we set the element's id to "myId", then set its title to
 * // "This is a div". Next, we set the background-color style property to
 * // "red". Finally, we set some inner text to "Hello World!". When we are
 * // finished, we end the div.
 * //
 * // When building elements, the order of methods matters. Attributes and
 * // style properties must be added before setting inner html/text or
 * // appending children. This is because the string implementation cannot
 * // concatenate an attribute after child content has been added.
 * //
 * // Note that endStyle() takes the builder type that we want to return, which
 * // must be the "parent" builder. endDiv() does not need the optional
 * // argument because we are finished building the element.
 * //
 * divBuilder.id("myId").title("This is a div");
 * divBuilder.style().trustedBackgroundColor("red").endStyle();
 * divBuilder.text("Hello World!").endDiv();
 *
 * // Get the element out of the builder.
 * Element div = divBuilder.finish();
 *
 * // Attach the element to the page.
 * Document.get().getBody().appendChild(div);
 * </pre>
 *
 * <p>Alternatively, builders can be used as separate objects and operated on individually. This may
 * be the preferred method if you are creating a complex or dynamic element. The code below produces
 * the same output as the code above.
 *
 * <pre>
 * //
 * // Create a builder for the outermost element. The initial state of the
 * // builder is a started element ready for attributes (eg. "&lt;div").
 * //
 * DivBuilder divBuilder = ElementBuilderFactory.get().createDivBuilder();
 *
 * // Add attributes to the div.
 * divBuilder.id("myId");
 * divBuilder.title("This is a div");
 *
 * // Add style properties to the div.
 * StylesBuilder divStyle = divBuilder.style();
 * divStyle.trustedBackgroundColor("red");
 * divStyle.endStyle();
 *
 * // Append a child select element to the div.
 * SelectBuilder selectBuilder = divBuilder.startSelect();
 *
 * // Append three options to the select element.
 * for (int i = 0; i &lt; 3; i++) {
 * OptionBuilder optionBuilder = selectBuilder.startOption();
 * optionBuilder.value("value" + i);
 * optionBuilder.text("Option " + i);
 * optionBuilder.endOption();
 * }
 *
 * //
 * // End the select and div elements. Note that ending the remaining elements
 * // before calling asElement() below is optional, but a good practice. If we
 * // did not call endOption() above, we would append each option element to
 * // the preceding option element, which is not what we want.
 * //
 * // In general, you must pay close attention to ensure that you close
 * // elements correctly.
 * //
 * selectBuilder.endSelect();
 * divBuilder.endDiv();
 *
 * // Get the element out of the builder.
 * Element div = divBuilder.finish();
 *
 * // Attach the element to the page.
 * Document.get().getBody().appendChild(div);
 * </pre>
 *
 * <p>You can also mix chaining and non-chaining methods when appropriate. For example, you can add
 * attributes to an element by chaining methods, but use a separate builder object for each separate
 * element.
 *
 * <p>NOTE: Builders always operate on the current element. For example, in the code below, we
 * create two divBuilders, one a child of the other. However, they are actually the same builder
 * instance! Implementations of ElementBuilderFactory use a single instance of each builder type to
 * improve performance. The implication is that all element builders operate on the current element,
 * so the call to <code>divBuilder0.id("div1")</code> will set the "id" of the child div, and is
 * functionally equivalent to <code>divBuilder1.id("div1")</code>. Its important to always call
 * end() before resuming work on the previous element builder.
 *
 * <pre>
 * DivBuilder divBuilder0 = ElementBuilderFactory.get().createDivBuilder();
 * DivBuilder divBuilder1 = divBuilder0.startDiv();
 * divBuilder0.id("div1"); // Operates on the first element!
 * </pre>
 */
public abstract class ElementBuilderFactory {

  private static ElementBuilderFactory instance;

  /**
   * Get the instance of the {@link ElementBuilderFactory}.
   *
   * @return the {@link ElementBuilderFactory}
   */
  public static ElementBuilderFactory get() {
    if (instance == null) {
      if ("safari".equals(System.getProperty("user.agent"))) {
        // The old GWT module was configured to only allow "safari" user agent to manipulate the dom
        // directly
        instance = DomBuilderFactory.get();
      } else {
        // All other browsers (and the JVM itself) get the string-based implementation
        instance = HtmlBuilderFactory.get();
      }
    }
    return instance;
  }

  /** Created from static factory method. */
  protected ElementBuilderFactory() {}

  public abstract AnchorBuilder createAnchorBuilder();

  public abstract AreaBuilder createAreaBuilder();

  public abstract AudioBuilder createAudioBuilder();

  public abstract BaseBuilder createBaseBuilder();

  public abstract QuoteBuilder createBlockQuoteBuilder();

  public abstract BodyBuilder createBodyBuilder();

  public abstract BRBuilder createBRBuilder();

  public abstract InputBuilder createButtonInputBuilder();

  public abstract CanvasBuilder createCanvasBuilder();

  public abstract InputBuilder createCheckboxInputBuilder();

  public abstract TableColBuilder createColBuilder();

  public abstract TableColBuilder createColGroupBuilder();

  public abstract DivBuilder createDivBuilder();

  public abstract DListBuilder createDListBuilder();

  public abstract FieldSetBuilder createFieldSetBuilder();

  public abstract InputBuilder createFileInputBuilder();

  public abstract FormBuilder createFormBuilder();

  public abstract FrameBuilder createFrameBuilder();

  public abstract FrameSetBuilder createFrameSetBuilder();

  public abstract HeadingBuilder createH1Builder();

  public abstract HeadingBuilder createH2Builder();

  public abstract HeadingBuilder createH3Builder();

  public abstract HeadingBuilder createH4Builder();

  public abstract HeadingBuilder createH5Builder();

  public abstract HeadingBuilder createH6Builder();

  public abstract HeadBuilder createHeadBuilder();

  public abstract InputBuilder createHiddenInputBuilder();

  public abstract HRBuilder createHRBuilder();

  public abstract IFrameBuilder createIFrameBuilder();

  public abstract ImageBuilder createImageBuilder();

  public abstract InputBuilder createImageInputBuilder();

  public abstract LabelBuilder createLabelBuilder();

  public abstract LegendBuilder createLegendBuilder();

  public abstract LIBuilder createLIBuilder();

  public abstract LinkBuilder createLinkBuilder();

  public abstract MapBuilder createMapBuilder();

  public abstract MetaBuilder createMetaBuilder();

  public abstract OListBuilder createOListBuilder();

  public abstract OptGroupBuilder createOptGroupBuilder();

  public abstract OptionBuilder createOptionBuilder();

  public abstract ParagraphBuilder createParagraphBuilder();

  public abstract ParamBuilder createParamBuilder();

  public abstract InputBuilder createPasswordInputBuilder();

  public abstract PreBuilder createPreBuilder();

  public abstract ButtonBuilder createPushButtonBuilder();

  public abstract QuoteBuilder createQuoteBuilder();

  /**
   * Create a builder for an &lt;input type='radio'&gt; element.
   *
   * @param name name the name of the radio input (used for grouping)
   * @return the builder for the new element
   */
  public abstract InputBuilder createRadioInputBuilder(String name);

  public abstract ButtonBuilder createResetButtonBuilder();

  public abstract InputBuilder createResetInputBuilder();

  public abstract ScriptBuilder createScriptBuilder();

  public abstract SelectBuilder createSelectBuilder();

  public abstract SourceBuilder createSourceBuilder();

  public abstract SpanBuilder createSpanBuilder();

  public abstract StyleBuilder createStyleBuilder();

  public abstract ButtonBuilder createSubmitButtonBuilder();

  public abstract InputBuilder createSubmitInputBuilder();

  public abstract TableBuilder createTableBuilder();

  public abstract TableCaptionBuilder createTableCaptionBuilder();

  public abstract TableSectionBuilder createTBodyBuilder();

  public abstract TableCellBuilder createTDBuilder();

  public abstract TextAreaBuilder createTextAreaBuilder();

  public abstract InputBuilder createTextInputBuilder();

  public abstract TableSectionBuilder createTFootBuilder();

  public abstract TableCellBuilder createTHBuilder();

  public abstract TableSectionBuilder createTHeadBuilder();

  public abstract TableRowBuilder createTRBuilder();

  public abstract UListBuilder createUListBuilder();

  public abstract VideoBuilder createVideoBuilder();

  /**
   * Create an {@link ElementBuilder} for an arbitrary tag name. The tag name will will not be
   * checked or escaped. The calling code should be carefully reviewed to ensure that the provided
   * tag name will not cause a security issue if including in an HTML document. In general, this
   * means limiting the code to HTML tagName constants supported by the HTML specification.
   *
   * @param tagName the tag name of the new element
   * @return an {@link ElementBuilder} used to build the element
   */
  public abstract ElementBuilder trustedCreate(String tagName);
}

