import { createContext, useState, useCallback } from "react"
import { v4 as uuidv4 } from 'uuid';
export const StateContext = createContext({})

export const StateContextProvider = props => {
  const { children } = props;
  const [todos, setTodos] = useState([]);

  const addNewTodo = useCallback((newTodo) => {
    const updatedTodos = [
      ...todos,
      Object.assign(newTodo, {id: uuidv4()})
    ];
    
    setTodos(updatedTodos);
  }, [todos])

  return (
    <StateContext.Provider value={{
      todos,
      addNewTodo
    }}>
      { children }
    </StateContext.Provider>
  )
}
