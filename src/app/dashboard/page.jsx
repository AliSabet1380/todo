import EditList from '@/components/EditList';
import TodoList from '@/components/TodoList';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { deleteTodo } from '../server-actions/deleteTodo';

const DashboardPage = async props => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  const { data: todo, error } = await supabase
    .from('list')
    .select('*')
    .eq('user_id', user.id)
    .order('brand', { ascending: true });

  if (error) alert('error fetching data');

  return (
    <div className="w-screen h-screen bg-gray-800">
      <div className="bg-white  dark:bg-gray-900 p-4  shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-gray-800 dark:text-gray-100 text-xl font-bold">
              To-Do List
            </h1>
          </div>
          <div>
            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-md shadow-md"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
        <TodoList />
        <div>
          {todo.map(item => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 mt-4 rounded-md shadow-md"
            >
              <h2 className="text-gray-800 dark:text-gray-100 text-lg font-medium">
                {item.brand} - {item.model}
              </h2>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={item.id} />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
                  >
                    Delete
                  </button>
                </form>
                <EditList item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
