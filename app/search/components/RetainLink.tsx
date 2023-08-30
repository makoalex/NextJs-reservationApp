import Link, { LinkProps } from 'next/link';
import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { useRouter,  } from 'next/navigation';
import { Cuisine } from '@prisma/client';

export default function RetainLink(
  { href }: any,
  cuisine:Cuisine,
  
) {
  const router = useRouter()
  
  const pathname = typeof href === 'object' ? href.pathname : href;
  const query =
    typeof href === 'object' && typeof href.query === 'object'
      ? href.query
      : href;
  return (
    <Link
      href={{

        pathname: pathname,
        query: {
          cuisine:cuisine.name
        },
      }}
    />
  );
}
