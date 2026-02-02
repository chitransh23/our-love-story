import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Proposal() {
  const navigate = useNavigate();
  const [noStyle, setNoStyle] = useState({});

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-red-200 p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 text-center animate-fade-in">
        <h1 className="text-2xl font-bold text-love mb-6">
          This is not a casual question 💖
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg space-y-4">
          <span className="block">
            ‘Will you be my Valentine’ is a question people ask when they’re unsure
          </span>

          <span className="block font-semibold text-love">
            I am not asking that.
          </span>

          <span className="block font-semibold text-love">
            I am asking you.!
          </span>

          <span className="block mt-4">
            Can you always be with me?
          </span>

          <span className="block">
            Can you support me in my highs and my lows?
          </span>

          <span className="block">
            Can you hold my hand when life feels heavy?
          </span>

          <span className="block">
            And can you let me do the same for you… always?
          </span>

          <span className="block mt-6 text-xl font-bold text-love">
            Will you marry me? 💍❤️
          </span>
        </p>

        <div className="flex justify-center gap-6 mt-10 relative">
          <button
            onClick={() => navigate("/love-letter")}
            className="px-8 py-3 rounded-full bg-love text-white text-lg font-semibold hover:bg-red-500 transition"
          >
            YES 💖
          </button>

          <button
            onMouseEnter={moveNoButton}
            style={noStyle}
            className="px-8 py-3 rounded-full bg-gray-300 text-gray-600 text-lg cursor-not-allowed transition"
          >
            NO 😜
          </button>
        </div>
      </div>
    </div>
  );
}