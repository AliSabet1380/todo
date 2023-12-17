'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function editTodo(formData) {
  const id = formData.get('id');
  const brand = formData.get('brand');
  const model = formData.get('model');
  const refrenceNumber = formData.get('referenceNumber');

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) return console.error('Not authenticated');

  const { data, error } = await supabase
    .from('list')
    .update([
      {
        model,
        brand,
        refrece_number: refrenceNumber,
      },
    ])
    .match({ id, user_id: user.id });

  if (error) return console.error('error updating data', error);

  revalidatePath('/dashboard');

  return { message: 'successfully updated' };
}
