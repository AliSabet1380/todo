import { addTodo } from '@/app/server-actions/addTodo';

const TodoList = props => {
  return (
    <form
      action={addTodo}
      className="bg-white dark:bg-cyan-900 p-4 rounded-lg shadow-lg"
    >
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="brand"
          className="text-gray-800 dark:text-gray-100 text-sm font-medium"
        >
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          required
          className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 text-gray-800 dark:text-gray-100 px-3 py-2 rounded-md shadow-sm"
        />
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <label
          htmlFor="model"
          className="text-gray-800 dark:text-gray-100 text-sm font-medium"
        >
          Model
        </label>
        <input
          type="text"
          id="model"
          name="model"
          required
          className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 text-gray-800 dark:text-gray-100 px-3 py-2 rounded-md shadow-sm"
        />
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <label
          htmlFor="refrenceNumber"
          className="text-gray-800 dark:text-gray-100 text-sm font-medium"
        >
          Refrence Number
        </label>
        <input
          type="text"
          id="refrenceNumber"
          name="refrenceNumber"
          required
          className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 text-gray-800 dark:text-gray-100 px-3 py-2 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md mt-4"
      >
        Add New+
      </button>
    </form>
  );
};

export default TodoList;
