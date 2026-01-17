// whisper.js - tiny English speech-to-text
export async function loadWhisper() {
    const { pipeline } = await import('@xenova/transformers');
  
    const transcriber = await pipeline(
      'automatic-speech-recognition',
      'Xenova/whisper-tiny.en',
      { quantized: true, device: 'webgpu' }
    );
  
    return transcriber;
  }
  
  export async function transcribeChunk(transcriber, audioFloat32Array) {
    const result = await transcriber(audioFloat32Array, {
      chunk_length_s: 30,
      stride_length_s: 5,
      return_timestamps: false,
      language: 'english'
    });
    return result.text.trim();
  }