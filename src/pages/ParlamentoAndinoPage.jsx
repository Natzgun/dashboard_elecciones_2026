import ElectionResultsPage from './ElectionResultsPage';
import { resultadosParlamentoAndino } from '@/data/mockData';

export default function ParlamentoAndinoPage() {
  return <ElectionResultsPage data={resultadosParlamentoAndino} />;
}
