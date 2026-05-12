import { create } from 'zustand';

/**
 * Filter store for election data queries
 */
const useFilterStore = create((set) => ({
  // Active filters
  categoriaEleccion: 'presidencial',
  departamento: null,
  provincia: null,
  partido: null,
  estadoActa: 'todas',

  // Actions
  setCategoriaEleccion: (cat) => set({ categoriaEleccion: cat }),
  setDepartamento: (dept) => set({ departamento: dept, provincia: null }),
  setProvincia: (prov) => set({ provincia: prov }),
  setPartido: (partido) => set({ partido }),
  setEstadoActa: (estado) => set({ estadoActa: estado }),
  resetFilters: () => set({
    categoriaEleccion: 'presidencial',
    departamento: null,
    provincia: null,
    partido: null,
    estadoActa: 'todas',
  }),
}));

export default useFilterStore;
