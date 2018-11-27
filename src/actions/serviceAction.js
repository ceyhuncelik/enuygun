
export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}

export function denemeAction(key, value) {
  return {
    type: 'DENEME_ACTION',
    key,
    value,
  };
}

export function toggleTodo(index) {
  return { type: 'TOGGLE_TODO', index };
}

// ikinci randımanlı calısmıyor cok enteresan arkadas
// bir klasorde bir tane olabilir diye bi sart falan mı var anlayamadım
// burada dispatch den kurtarmamız gerek ama bilemedim neden olmadı acaba
//


// dispatch yaptırmamız gerek
