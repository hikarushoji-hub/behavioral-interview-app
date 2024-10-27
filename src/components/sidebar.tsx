// src/components/sidebar.tsx
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
// import { FiFileText } from 'react-icons/fi'; // 代替アイコン

export default function Sidebar({ sessions, onSessionSelect }) {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">過去のセッション</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        {sessions.map((session) => (
          <Button
            key={session.id}
            variant="ghost"
            className="w-full justify-start mb-2"
            onClick={() => onSessionSelect(session.id)}
          >
            <FileText className="mr-2 h-4 w-4" />
            {new Date(session.id).toLocaleDateString()}
          </Button>
        ))}
      </ScrollArea>
    </div>
  );
}
