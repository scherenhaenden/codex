import type {
  ChatCompletion,
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionChunk,
} from 'openai/resources/chat/completions';

/**
 * Defines the standard interface that all LLM providers must implement.
 * This ensures that the application can interact with any provider in a consistent way.
 */
export interface LLMProvider {
  /**
   * Fetches a list of available model names from the provider.
   * @returns A promise that resolves to an array of model strings (e.g., ['gpt-4', 'gpt-3.5-turbo']).
   */
  getModels(): Promise<Array<string>>;

  /**
   * Creates a non-streaming chat completion.
   * @param request The request payload, conforming to a standard structure.
   * @returns A promise that resolves to the full chat completion response.
   */
  createChatCompletion(
    request: ChatCompletionCreateParamsNonStreaming,
  ): Promise<ChatCompletion>;

  /**
   * Creates a streaming chat completion.
   * @param request The request payload.
   * @returns An async generator that yields chunks of the response as they arrive.
   */
  streamChatCompletion(
    request: ChatCompletionCreateParamsNonStreaming,
  ): AsyncGenerator<ChatCompletionChunk>;
}
