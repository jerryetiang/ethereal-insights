'use client'
import { Card } from 'flowbite-react';
import Link from 'next/link';
import React from 'react'

interface ItemProps {
    data: {
        id: number;
        title: string;
        url: string
    }
}

export const Item: React.FC<ItemProps> = ({ data }) => {
    return (
        <Link href={data.url}>
            <Card className="max-w-sm bg-zinc-100 dark:bg-zinc-900 border-none my-2 shadow-transparent">
                <span className="text-sm tracking-tight text-zinc-900 dark:text-white">
                    {data.title}
                </span>
            </Card>
        </Link>
    )
}
