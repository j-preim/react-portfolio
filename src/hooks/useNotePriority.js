import { useState } from "react"
import Cookie from "js-cookie";

/* 

  Writing your own React hook:

  React hooks are just one or more functions that can be imported to any component
  that needs them. Think of a hook as a function which exports out other functions 
  that it wants to share with other components.

  We know that we may have several parts of our web site that need to verify if 
  the user is logged in. So let's create a hood for that!

*/

export default function useNotePriority(){

  function getPriorityValue(priorityNumber){
    const values = [ "Low", "Medium", "High" ]
    return values[parseInt(priorityNumber)-1]
  }

  return {
    getPriorityValue
  }

}