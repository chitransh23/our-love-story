import { createBrowserRouter } from "react-router-dom";
import Timeline from "./pages/Timeline";
import LoveLetter from "./pages/LoveLetter";
import Proposal from "./pages/Proposal";

export const router = createBrowserRouter([
  { path: "/", element: <Timeline /> },
  { path: "/proposal", element: <Proposal /> },
  { path: "/love-letter", element: <LoveLetter /> },
]);