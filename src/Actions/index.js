//=----------- action ------//
import {RESTAUTANTS} from './types';

//=----------- actions ------//
export const restaurantsList = () => ({
  type: RESTAUTANTS,
  data: restaurants,
});
