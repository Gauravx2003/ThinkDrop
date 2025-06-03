import React from 'react'
import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';
import UserStartups from '@/components/UserStartups';
import { Skeleton } from '@/components/ui/skeleton';
import { StartupCardSkeleton } from '@/components/StartupCard';

const page = async ({params}:{params: {id: string}}) => {
  
    const id = (await params).id;
    const session = auth();

    const user = await client.fetch(AUTHOR_BY_ID, { id});
    if(!user) return notFound();

     return (
    <>
      <section className="profile_container">
        <div className="profile_card shadow-100 bg-primary">
          <div className="profile_title shadow-100">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {user.name}
            </h3>
          </div>

          <Image
            src={user.image}
            alt={user.name}
            width={220}
            height={220}
            className="profile_image"
          />

          <p className="text-30-extrabold mt-7 text-center">
            @{user?.username}
          </p>
          <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
        </div>

        <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
          <p className="text-30-bold">
            {session?.id === id ? "Your" : "All"} Startups
          </p>
          <ul className="card_grid-sm">
            <Suspense fallback={<StartupCardSkeleton />}>
              <UserStartups id={id} />
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
}

export default page