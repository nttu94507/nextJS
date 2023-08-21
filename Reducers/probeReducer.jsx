const initialState = {
    numOfCoffee: 20,
    numOfCoffeeBean: 20,
    numOfCake: 20,
  }

export const probeReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_PROBE_BEGIN':
			return {
				...state,
				numOfCoffee: state.numOfCoffee +1			}
	}
}