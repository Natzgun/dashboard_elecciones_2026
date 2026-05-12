import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="text-center space-y-4">
        <p className="text-6xl font-bold text-surface-200/20">404</p>
        <h2 className="text-xl font-semibold text-surface-100">Página no encontrada</h2>
        <p className="text-sm text-surface-200/50">La página que buscas no existe.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-600/20 text-primary-300 text-sm font-medium
            hover:bg-primary-600/30 transition-colors border border-primary-500/20"
        >
          <Home size={16} />
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
}
