import ElectionResultsPage from './ElectionResultsPage';
import { resultadosDiputados } from '@/data/mockData';

export default function DiputadosPage() {
  return <ElectionResultsPage data={resultadosDiputados} />;
}
