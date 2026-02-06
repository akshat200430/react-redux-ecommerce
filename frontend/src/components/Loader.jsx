const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      <div className="relative w-72 rounded-2xl bg-white/10 border border-white/20 p-6 shadow-xl">
        <p className="text-white text-center mb-4 tracking-wide">
          Loading, please wait…
        </p>

        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full w-1/3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
            style={{
              animation: "loader-slide 1.2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>
        {`
          @keyframes loader-slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
