const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'getData': return { ...state, data: [...payload] }
    case 'sortData': return { ...state, data: [...state.data].sort((a,b)=>{return (payload =='asc'?a.price-b.price:b.price-a.price)}) }
    default:
      return state
  }
  
};
export { reducer };
