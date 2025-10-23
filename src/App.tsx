function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .spotlight {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.8),
                       0 0 40px rgba(59, 130, 246, 0.5),
                       0 0 60px rgba(59, 130, 246, 0.3);
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.6));
        }
      `}</style>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-400 mb-4 animate-fade-in-up spotlight">
          Ready to Build Something Amazing!
        </h1>
        <p className="text-blue-500 text-lg animate-pulse-glow spotlight">
          React + TypeScript + Tailwind CSS
        </p>
      </div>
    </div>
  )
}

export default App