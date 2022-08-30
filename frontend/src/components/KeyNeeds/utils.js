import calories from '../../assets/calories.png';
import carbs from '../../assets/carbs.png';
import proteins from '../../assets/proteins.png';
import fat from '../../assets/cheeseburger.png';

/**
 * Store user keyneeds in an array ready to be mapped
 * @param {{
 *    calorieCount: number,
 *    proteinCount: number,
 *    carbohydrateCount: number,
 *    lipidCount: number
 * }} data
 * @returns
 */
export const formatData = (data) => [
	{
		image: calories,
		background: 'rgba(255, 0, 0, 0.07)',
		value: data?.calorieCount,
		name: 'Calories',
	},
	{
		image: proteins,
		background: 'rgba(74, 184, 255, 0.1)',
		value: data?.proteinCount,
		name: 'Protéines',
	},
	{
		image: carbs,
		background: 'rgba(249, 206, 35, 0.1)',
		value: data?.carbohydrateCount,
		name: 'Glucides',
	},
	{
		image: fat,
		background: 'rgba(253, 81, 129, 0.1)',
		value: data?.lipidCount,
		name: 'Lipides',
	},
];
