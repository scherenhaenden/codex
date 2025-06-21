use async_trait::async_trait;
use crate::chat_completions::{ChatCompletionRequest, ChatCompletionResponse};
use crate::error::Result;
use crate::models::Model;

#[async_trait]
pub trait LlmProvider: Send + Sync {
    /// Fetches a list of available models from the provider.
    async fn get_models(&self) -> Result<Vec<Model>>;

    /// Creates a non-streaming chat completion.
    async fn create_chat_completion(
        &self,
        request: ChatCompletionRequest,
    ) -> Result<ChatCompletionResponse>;
}
