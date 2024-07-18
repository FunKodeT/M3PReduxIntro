export const increment = (nr) => {
	// export const increment = (nr) => {
	// export const increment = (number) => {
	// export const increment = (multiply) => {
	// export const increment = () => {
	return {
		type: 'INCREMENT',
		payload: nr,
	};
};
export const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};
