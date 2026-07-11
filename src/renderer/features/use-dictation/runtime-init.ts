// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// @ts-nocheck
// Runtime initializer for the current use-dictation aggregator bindings.
import { initMicrophoneInputChunk } from "../../shared/lib/microphone-input";
import {
  initDictationStreamingTranscriberRuntimeChunk,
  initDictationStreamingUploadHeaderChunk,
  initDictationTranscriptCleanupChunk,
  initTranscribeAudioMultipartChunk,
} from "../../shared/lib/transcribe-audio";
import { initUseRecordingWaveformChunk } from "../../shared/lib/use-recording-waveform";
import { useDictation, useDictationCore } from "./use-dictation";

export function initUseDictationRuntimeChunk(): void {
  initDictationStreamingUploadHeaderChunk();
  initDictationStreamingTranscriberRuntimeChunk();
  initMicrophoneInputChunk();
  initDictationTranscriptCleanupChunk();
  initTranscribeAudioMultipartChunk();
  initUseRecordingWaveformChunk();
  void useDictation;
  void useDictationCore;
}
