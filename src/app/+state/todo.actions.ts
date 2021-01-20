import { createAction, props } from '@datorama/akita-ng-effects';
import { Todo }                from '../todo.model';

export namespace TodoActions {
  export const loadTodos = createAction('[Todo] Load Todo')

  export const addTodo = createAction("[Todo] Add Todo", props<{todo: Todo}>())
}
