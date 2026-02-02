import { Handle, Position } from "reactflow";

export default function StoryNode({ data }: any) {
  return (
    <div
      onClick={data.onClick}
      className="
        relative w-[300px] cursor-pointer
        rounded-2xl p-5
        bg-white/85 backdrop-blur-lg
        border border-pink-200
        shadow-lg
        transition-all duration-500 ease-out
        hover:-translate-y-1
        hover:shadow-2xl hover:shadow-pink-300/60
        hover:border-pink-400
        group animate-fade-in
      "
    >
      {/* glow ring */}
      <div
        className="
          absolute -inset-[2px] rounded-2xl
          bg-gradient-to-br from-pink-300 via-red-300 to-pink-400
          opacity-0 blur-md
          transition-opacity duration-500
          group-hover:opacity-70
          -z-10
        "
      />

      <h3 className="text-love font-bold text-lg tracking-wide">
        {data.title}
      </h3>
      <p className="text-xs text-gray-500 mt-1">{data.date}</p>

      {data.description && (
        <p className="text-sm mt-3 text-gray-700 leading-relaxed">
          {data.description}
        </p>
      )}

      <Handle
        type="target"
        position={Position.Top}
        className="!bg-love !w-2 !h-2"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-love !w-2 !h-2"
      />
    </div>
  );
}