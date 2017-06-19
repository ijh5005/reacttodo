export const ADJUST_TODO = "ITEM_DELETED";

export function adjustTodo(index, todoList, add){

  if(add === undefined){

    const obj = {
      delete: {
        todo: todoList.slice(0, index)
                      .concat(todoList.slice(index+1, todoList.length)),
        lastComplete: todoList[index],
      },
    };

    return {
      type: ADJUST_TODO,
      payload: obj.delete.todo,
    }
  } else {

    const obj = {
      add: [index].concat(todoList),
    };

    return {
      type: ADJUST_TODO,
      payload: obj.add,
    }
  }

}
