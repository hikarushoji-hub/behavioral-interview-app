"use client";

import React, { useState } from 'react';
import { extractTextFromPDF } from '../../services/pdfService';
import { summarizeText } from '../../services/openaiService';

const ProfileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pdfText, setPdfText] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);
      
      // PDFをテキストに変換し整形
      const text = await extractTextFromPDF(selectedFile);
      setPdfText(text);

      // OpenAI APIで要約を取得
      const summaryText = await summarizeText(text);
      console.log(summaryText);
      setSummary(summaryText);

    } catch (error) {
      console.error("エラー:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>プロフィールアップロード</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile || loading}>
        {loading ? 'アップロード中...' : 'アップロード'}
      </button>
      <div>
        <h3>PDFの内容:</h3>
        <pre>{pdfText}</pre>
      </div>
      <div>
        <h3>要約:</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default ProfileUploadPage;
