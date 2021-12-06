//styles
import "../styles/list.css"


/**
 * This callback is iterable data with odd or even.
 * @callback cbPairs
 * @return {component} // => <li>odd (or) even</li>
 */
export function cbPair(unit, i){
         if(i % 2  == 0){
          return(
           <li key={i} className="odd">odd: {unit}</li> 
          )
         }else{
          return(
           <li key={i} className="even">even: {unit}</li> 
          )
        } 
    }

    
/**
 * This callback is iterable.
 * @callback cbList
 * @return {items components} // => <li>items</li>
 */ 
export const cbList = ((unit, i) => <li key={i}>{unit}</li>);
