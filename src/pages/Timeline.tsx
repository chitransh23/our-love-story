import ReactFlow, {
  MarkerType,
  useReactFlow,
  PanOnScrollMode,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import StoryNode from "../components/StoryNode";
import { useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";

const nodeTypes = { story: StoryNode };

export default function TimelineWrapper() {
  return (
    <ReactFlowProvider>
      <Timeline />
    </ReactFlowProvider>
  );
}

function Timeline() {
  const navigate = useNavigate();
  const { setCenter } = useReactFlow();

  const [visibleCount, setVisibleCount] = useState(1);

  // Layout constants
  const NODE_WIDTH = 300;
  const CENTER_X = -NODE_WIDTH / 2;
  const VERTICAL_GAP = 220;

  const allNodes = [
    {
      title: "JAB WE MEET 🚆",
      date: "25 December 2025",
      description: "That train ride where destiny decided to sit us together.",
    },
    {
      title: "OUR FIRST DATE ☕",
      date: "29 December 2025",
      description: "Nervous smiles, endless talks, unforgettable moments.",
    },
    {
      title: "THE YES DAY ❤️",
      date: "14 January 2026",
      description: "You said yes… and my world changed forever.",
    },
    {
      title: "COMING FLIGHT ✈️",
      date: "23 January 2026",
      description: "When you are coming to meet me.",
    },
    {
      title: "GOING BACK FLIGHT ✈️",
      date: "26 January 2026",
      description: "I wish you could stay with me a little longer.",
    },
    {
      title: "US 💑",
      date: "Forever",
      description: "Tap to read my heart.",
    },
  ];

  // Initial center
  useEffect(() => {
    setCenter(0, 0, { zoom: 1, duration: 0 });
  }, [setCenter]);

  const nodes = useMemo(() => {
    return allNodes.slice(0, visibleCount).map((node, index) => ({
      id: `${index + 1}`,
      type: "story",
      position: {
        x: CENTER_X,
        y: index * VERTICAL_GAP,
      },
      data: {
        ...node,
        onClick: () => {
          if (index + 1 < allNodes.length) {
            const nextIndex = index + 1;
            setVisibleCount((v) => v + 1);

            setTimeout(() => {
              setCenter(0, nextIndex * VERTICAL_GAP, {
                zoom: 1,
                duration: 800,
              });
            }, 120);
          } else {
            navigate("/proposal");
          }
        },
      },
    }));
  }, [visibleCount, navigate, setCenter]);

  const edges = useMemo(() => {
    return nodes.slice(1).map((_, i) => ({
      id: `e${i}`,
      source: `${i + 1}`,
      target: `${i + 2}`,
      animated: true,
      style: {
        stroke: "#e63946",
        strokeWidth: 2,
        strokeDasharray: "6 6",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#e63946",
      },
    }));
  }, [nodes]);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-gradient-to-b from-pink-50 via-pink-200 to-red-200">
      {/* soft background blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-red-300/30 rounded-full blur-3xl" />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView={false}
        nodesDraggable={false}
        nodesConnectable={false}
        panOnScroll={true}
        panOnScrollMode={PanOnScrollMode.Vertical}
        panOnDrag={false}
        zoomOnScroll={false}
      />
    </div>
  );
}