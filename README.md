# Ultra-Lightweight Voice Interview AI Demo

**Fully client-side, offline browser-based AI** that listens to voice interviews/conversations, detects pauses using real microphone input, plays natural-sounding filler phrases via TTS, transcribes speech using Whisper-tiny.en, and generates real-time summaries using t5-small — all running on WebGPU/WASM with total model size ~250–350 MB quantized.

**Challenge goals achieved**:
- Model size: <300 MB quantized (t5-small + whisper-tiny.en)
- Filler latency: instant (<50 ms perceived) via browser SpeechSynthesis
- Real-time summaries during pauses
- 100% offline / no server / no data leaves device
- Pause detection using energy-based VAD (no extra heavy model)

Live demo (once GitHub Pages is enabled):  
https://sreenivasan2002.github.io/voice-interview-ai-demo/

## Features

- Real microphone access + energy-based Voice Activity Detection (VAD)
- Contextual filler phrases during long pauses (e.g. "Okay... let me process that.", "Hmm, interesting...")
- Spoken fillers using browser TTS — voice selection dropdown
- Real-time speech-to-text transcription (Whisper-tiny.en)
- Live abstractive summarization of spoken content (t5-small)
- UI metrics: model load time, transcription time, summarization time
- Start/stop mic controls, clear transcript button, test filler button



## Tech Stack

- Transformers.js (@xenova/transformers) — runs ONNX models in browser
- Models:
  - Summarization: `Xenova/t5-small` (~150 MB quantized)
  - Speech-to-Text: `Xenova/whisper-tiny.en` (~100 MB quantized)
- Web Audio API for microphone input + custom energy-based VAD
- Browser SpeechSynthesis API for TTS fillers
- Local static server: http-server / Python http.server / VS Code Live Server

## How to Run Locally

1. Clone the repo

```bash
git clone https://github.com/Sreenivasan2002/voice-interview-ai-demo.git
cd voice-interview-ai-demo
python -m http.server 8000
