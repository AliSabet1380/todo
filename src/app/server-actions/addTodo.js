'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function addTodo(formData) {
  const model = formData.get('model');
  const brand = formData.get('brand');
  const refrenceNumber = formData.get('refrenceNumber');

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) return console.error('user is not authenticated');

  const { data, error } = await supabase.from('list').insert([
    {
      model,
      brand,
      refrece_number: refrenceNumber,
      user_id: user.id,
    },
  ]);

  if (error) return console.error('can not add todo', error);

  revalidatePath('/dashboard');

  return { message: 'successfully add new todo' };
}
