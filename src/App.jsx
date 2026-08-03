import { Routes, Route } from "react-router-dom";
import Header from "@/components/my_components/header"
import Home from "@/components/my_components/home"
import About from "@/components/my_components/about"
import Projects from "@/components/my_components/projects"

export default function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 min-h-screen">
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}