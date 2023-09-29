import sourceMapSupport from 'source-map-support';
import { lookUp } from './types/search';
sourceMapSupport.install();


export const lookup =  lookUp;