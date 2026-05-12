import ElectionResultsPage from './ElectionResultsPage';
import { resultadosPresidencial } from '@/data/mockData';

export default function PresidencialPage() {
  return <ElectionResultsPage data={resultadosPresidencial} />;
}
