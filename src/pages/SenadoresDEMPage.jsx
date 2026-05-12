import ElectionResultsPage from './ElectionResultsPage';
import { resultadosSenadoresDEM } from '@/data/mockData';

export default function SenadoresDEMPage() {
  return <ElectionResultsPage data={resultadosSenadoresDEM} />;
}
