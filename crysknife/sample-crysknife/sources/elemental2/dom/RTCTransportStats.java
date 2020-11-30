/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCTransportStats extends RTCStats {
  @JsProperty
  double getBytesReceived();

  @JsProperty
  double getBytesSent();

  @JsProperty
  String getDtlsCipher();

  @JsProperty
  String getDtlsState();

  @JsProperty
  String getIceRole();

  @JsProperty
  String getLocalCertificateId();

  @JsProperty
  double getPacketsReceived();

  @JsProperty
  double getPacketsSent();

  @JsProperty
  String getRemoteCertificateId();

  @JsProperty
  String getRtcpTransportStatsId();

  @JsProperty
  int getSelectedCandidatePairChanges();

  @JsProperty
  String getSelectedCandidatePairId();

  @JsProperty
  String getSrtpCipher();

  @JsProperty
  String getTlsGroup();

  @JsProperty
  String getTlsVersion();

  @JsProperty
  void setBytesReceived(double bytesReceived);

  @JsProperty
  void setBytesSent(double bytesSent);

  @JsProperty
  void setDtlsCipher(String dtlsCipher);

  @JsProperty
  void setDtlsState(String dtlsState);

  @JsProperty
  void setIceRole(String iceRole);

  @JsProperty
  void setLocalCertificateId(String localCertificateId);

  @JsProperty
  void setPacketsReceived(double packetsReceived);

  @JsProperty
  void setPacketsSent(double packetsSent);

  @JsProperty
  void setRemoteCertificateId(String remoteCertificateId);

  @JsProperty
  void setRtcpTransportStatsId(String rtcpTransportStatsId);

  @JsProperty
  void setSelectedCandidatePairChanges(double selectedCandidatePairChanges);

  @JsProperty
  void setSelectedCandidatePairId(String selectedCandidatePairId);

  @JsProperty
  void setSrtpCipher(String srtpCipher);

  @JsProperty
  void setTlsGroup(String tlsGroup);

  @JsProperty
  void setTlsVersion(String tlsVersion);
}

