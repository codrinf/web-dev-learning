// ******* Modules:

// import { 
//   sayHello,
//   MY_IMPORTANT_VAR, 
// } from '../libs/library.js';

import * as helloService from '../libs/library.js';
import { cloneDeep, assign  } from 'lodash';

import {secondHelloFunction, secondFunction} from '../libs/library2.js';


// console.log('MY_IMPORTANT_VAR ', helloService.MY_IMPORTANT_VAR);
// helloService.sayHello(); 


// console.log('MY_IMPORTANT_VAR ', MY_IMPORTANT_VAR);
// sayHello();

secondHelloFunction('please work!');
