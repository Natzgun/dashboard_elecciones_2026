import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import HomePage from '@/pages/HomePage';
import PresidencialPage from '@/pages/PresidencialPage';
import SenadoresDEUPage from '@/pages/SenadoresDEUPage';
import SenadoresDEMPage from '@/pages/SenadoresDEMPage';
import DiputadosPage from '@/pages/DiputadosPage';
import ParlamentoAndinoPage from '@/pages/ParlamentoAndinoPage';
import RegionalPage from '@/pages/RegionalPage';
import ConsultaActas from '@/pages/ConsultaActas';
import MapaPage from '@/pages/MapaPage';
import PipelinePage from '@/pages/PipelinePage';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/presidencial" element={<PresidencialPage />} />
          <Route path="/senadores-deu" element={<SenadoresDEUPage />} />
          <Route path="/senadores-dem" element={<SenadoresDEMPage />} />
          <Route path="/diputados" element={<DiputadosPage />} />
          <Route path="/parlamento-andino" element={<ParlamentoAndinoPage />} />
          <Route path="/regional" element={<RegionalPage />} />
          <Route path="/consulta/actas" element={<ConsultaActas />} />
          <Route path="/mapa" element={<MapaPage />} />
          <Route path="/pipeline" element={<PipelinePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
