// src/components/file-upload.tsx
export default function FileUpload({ onFileUpload }) {
  return (
    <div>
      <h2>ファイルをアップロード</h2>
      <button onClick={onFileUpload}>次へ</button>
    </div>
  );
}
