'use client';

import Image from 'next/image';
import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-teal-500 text-white py-1 px-3 w-max rounded-lg">
      {pending ? (
        <div className="flex gap-2 items-center">
          <Image
            width={20}
            height={20}
            objectFit="cover"
            src={'/loading.svg'}
            alt="loading"
          />
          <span>Submitting</span>
        </div>
      ) : (
        'Submit'
      )}
    </button>
  );
}
