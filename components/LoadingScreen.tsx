// components/LoadingScreen.tsx
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent border-solid rounded-full animate-spin" />
    </div>
  );
};

export default LoadingScreen;
