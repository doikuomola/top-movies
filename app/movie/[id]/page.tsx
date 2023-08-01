import { prisma } from '@/app/db';
import { Submit } from '@/components';
import { revalidatePath } from 'next/cache';
import React from 'react';

type MoviePageProps = { params: { id: string }; searchParams: {} };

async function getComments(id: string) {
  const data = await prisma.comment.findMany({
    where: {
      movieId: id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

async function submitComment(formData: FormData) {
  'use server';

  await prisma.comment.create({
    data: {
      comment: formData.get('comment') as string,
      movieId: formData.get('id') as string,
    },
  });

  formData.delete('*');

  revalidatePath('movie/[id]');
}

export default async function Page({ params: { id } }: MoviePageProps) {
  const comments = await getComments(id);

  return (
    <div className="shadow-lg shadow-neutral-500 p-5">
      <h2 className="text-center font-bold text-xl mb-3">Comments</h2>
      <form
        action={submitComment}
        method="post"
        className="w-full flex flex-col gap-3"
      >
        <textarea
          name="comment"
          id="comment"
          placeholder="Write you comment here..."
          className="resize-none w-full h-40 p-2 outline-none rounded-md bg-[#514f5a]"
        />
        <input type="hidden" name="id" value={id} />
        <Submit />
      </form>

      <div className="flex flex-col gap-3 mt-4">
        {comments.map((comment) => (
          <div className="" key={comment.id}>
            <p className="text-xs italic">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
