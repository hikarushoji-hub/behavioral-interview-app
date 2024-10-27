// src/components/interview-session.tsx
export default function InterviewSession({ onComplete }) {
  return (
    <div>
      <h2>面接セッション</h2>
      <p>質問: あなたの経験の中で、最も困難だった課題について教えてください。</p>
      <button onClick={onComplete}>完了</button>
    </div>
  );
}
