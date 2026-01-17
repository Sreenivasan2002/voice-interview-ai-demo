// vad.js - Silero VAD wrapper (client-side)
export async function loadVadModel() {
    const { pipeline } = await import('@xenova/transformers');
  
    const vad = await pipeline('audio-classification', 'Xenova/silero-vad', {
      quantized: true,
      device: 'webgpu'
    });
  
    return vad;
  }
  
  export async function detectVoiceActivity(vad, audioBuffer) {
    // audioBuffer is Float32Array of audio data
    const result = await vad(audioBuffer, { return_dict: true });
    const probability = result[0].score; // probability of speech
    return probability > 0.5; // true if speaking
  }