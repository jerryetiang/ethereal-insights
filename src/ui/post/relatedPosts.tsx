'use client'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RelatedPostsComponent = () => {
    return (
        <Link href={"#"}>
            <Card className="max-w-sm bg-zinc-100 dark:bg-zinc-900 border-none my-4 shadow-transparent">
                <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                        <Image
                            alt="Neil image"
                            height="64"
                            src="/blog-samples/remote-work.png"
                            width="64"
                            className="rounded-full"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Travvelling to Africa</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">An indepth guide for your preparation</p>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default RelatedPostsComponent