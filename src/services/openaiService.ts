// src/services/openaiService.ts
import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export const summarizeText = async (text: string): Promise<string> => {
  const messages = [
    { role: 'system', content: 'You are a helpful assistant that summarizes text.' },
    { role: 'user', content: `Summarize the following text in a concise manner:\n\n${text}` },
  ];

  const response = await axios.post(
    API_ENDPOINT,
    {
      model: 'gpt-4o-mini',
      messages: messages,
      max_tokens: 100, // 要約を短くするためのトークン制限
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.choices[0].message.content.trim();
};
