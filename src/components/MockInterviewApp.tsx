// src/components/MockInterviewApp.tsx
import { useState } from 'react';
import FileUpload from './file-upload';
import InterviewSession from './interview-session';
import Feedback from './feedback';

export default function MockInterviewApp() {
  const [activeScreen, setActiveScreen] = useState('upload');

  return (
    <div className="flex h-screen items-center justify-center">
      {activeScreen === 'upload' && (
        <FileUpload onFileUpload={() => setActiveScreen('interview')} />
      )}
      {activeScreen === 'interview' && (
        <InterviewSession onComplete={() => setActiveScreen('feedback')} />
      )}
      {activeScreen === 'feedback' && <Feedback />}
    </div>
  );
}
