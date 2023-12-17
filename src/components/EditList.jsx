'use client';

import { editTodo } from '@/app/server-actions/editTodo';
import { useState } from 'react';

const EditList = ({ item: todo }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: todo.brand,
    model: todo.model,
    referenceNumber: todo.refrece_number,
  });

  const submitHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(todo.id);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md"
      >
        Edit
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
            <span
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 cursor-pointer text-gray-800 dark:text-gray-100"
            >
              close &times;
            </span>
            <form
              action={editTodo}
              method="post"
              onSubmit={() => setShowModal(false)}
            >
              <input type="hidden" name="id" value={todo.id} />
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="brand"
                  className="text-gray-800 dark:text-gray-100 text-sm font-medium"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={formData.brand}
                  onChange={submitHandler}
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
                  name="model"
                  id="model"
                  value={formData.model}
                  onChange={submitHandler}
                  className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 text-gray-800 dark:text-gray-100 px-3 py-2 rounded-md shadow-sm"
                />
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <label
                  htmlFor="referenceNumber"
                  className="text-gray-800 dark:text-gray-100 text-sm font-medium"
                >
                  Reference Number
                </label>
                <input
                  type="text"
                  name="referenceNumber"
                  id="referenceNumber"
                  value={formData.referenceNumber}
                  onChange={submitHandler}
                  className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 text-gray-800 dark:text-gray-100 px-3 py-2 rounded-md shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md mt-4"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditList;
