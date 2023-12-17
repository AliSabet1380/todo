'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function deleteTodo(formData) {
  const id = formData.get('id');

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) return console.error('User is not authenticated');

  const { error } = await supabase
    .from('list')
    .delete()
    .match({ id, user_id: user.id });

  if (error) return console.error('error deleting data', error);

  revalidatePath('/dashboard');

  return { message: 'succesfully delete the todo' };
}
