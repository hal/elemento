/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento.intl;

public enum NumberingSystem {

    adlm("adlm"),
    ahom("ahom"),
    arab("arab"),
    arabext("arabext"),
    bali("bali"),
    beng("beng"),
    bhks("bhks"),
    brah("brah"),
    cakm("cakm"),
    cham("cham"),
    deva("deva"),
    diak("diak"),
    fullwide("fullwide"),
    gara("gara"),
    gong("gong"),
    gonm("gonm"),
    gujr("gujr"),
    gukh("gukh"),
    guru("guru"),
    hanidec("hanidec"),
    hmng("hmng"),
    hmnp("hmnp"),
    java("java"),
    kali("kali"),
    kawi("kawi"),
    khmr("khmr"),
    knda("knda"),
    krai("krai"),
    lana("lana"),
    lanatham("lanatham"),
    laoo("laoo"),
    latn("latn"),
    lepc("lepc"),
    limb("limb"),
    mathbold("mathbold"),
    mathdbl("mathdbl"),
    mathmono("mathmono"),
    mathsanb("mathsanb"),
    mathsans("mathsans"),
    mlym("mlym"),
    modi("modi"),
    mong("mong"),
    mroo("mroo"),
    mtei("mtei"),
    mymr("mymr"),
    mymrepka("mymrepka"),
    mymrpao("mymrpao"),
    mymrshan("mymrshan"),
    mymrtlng("mymrtlng"),
    nagm("nagm"),
    newa("newa"),
    nkoo("nkoo"),
    olck("olck"),
    onao("onao"),
    orya("orya"),
    osma("osma"),
    outlined("outlined"),
    rohg("rohg"),
    saur("saur"),
    segment("segment"),
    shrd("shrd"),
    sind("sind"),
    sinh("sinh"),
    sora("sora"),
    sund("sund"),
    sunu("sunu"),
    takr("takr"),
    talu("talu"),
    tamldec("tamldec"),
    telu("telu"),
    thai("thai"),
    tibt("tibt"),
    tirh("tirh"),
    tnsa("tnsa"),
    vaii("vaii"),
    wara("wara"),
    wcho("wcho"),
    ;

    public final String value;

    NumberingSystem(String value) {
        this.value = value;
    }
}
