import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Portfolio } from "@/pages/Portfolio";
import { InvestorRelations } from "@/pages/InvestorRelations";
import { Careers } from "@/pages/Careers";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/investors" element={<InvestorRelations />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
    </Routes>
  );
}
