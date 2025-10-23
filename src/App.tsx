function App() {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
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
        @keyframes spotlight-move {
          0%, 100% {
            text-shadow: 0 0 30px rgba(59, 130, 246, 1),
                         0 0 60px rgba(59, 130, 246, 0.7),
                         0 0 90px rgba(59, 130, 246, 0.4);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.8),
                         0 0 50px rgba(59, 130, 246, 0.5),
                         0 0 80px rgba(59, 130, 246, 0.2);
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
        .spotlight-text {
          animation: spotlight-move 3s ease-in-out infinite;
          filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8));
        }
      `}</style>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-300 mb-6 animate-fade-in-up spotlight-text">
          SPOTLIGHT
        </h1>
        <p className="text-gray-400 text-xl animate-pulse-glow">
          Ready to Build Something Amazing!
        </p>
      </div>
    </div>
  )
}

export default App