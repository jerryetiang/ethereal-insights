import DiscussionSection from '@/ui/discussion/discussion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const SinglePostPage = ({ }) => {
  const post = {
    title: 'Exploring the Wonders of Next.js',
    author: 'TechExplorer',
    createdAt: 'February 15, 2023',
    imageSrc: '/blog-samples/dna.png',
    content: `
      <p>Welcome to a journey through the wonders of Next.js!</p>
      <p>Next.js is a powerful React framework that simplifies the process of building modern web applications. With its robust features and ease of use, developers around the world are diving into the Next.js ecosystem to create fast, scalable, and maintainable applications.</p>
      <!-- ... (more content) ... -->
      <br />
      <p>As we continue our exploration of Next.js, we'll delve into advanced topics, optimization techniques, and best practices. Buckle up for an exciting adventure in the world of web development!</p>
    `,
    comments: [
      { text: 'Great post!', author: 'WebEnthusiast' },
      { text: 'I learned a lot, thanks!', author: 'CodeExplorer' },
    ],
  };

  return (
    <div className={`mx-auto py-4`}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content} />
      </Head>

      <div className={`flex flex-col lg:flex-row justify-between gap-4`}>
        <section className={`w-full lg:w-2/3 p-4 text-justify`}>
          <article className={`mb-8`}>
            <h1 className={`text-4xl font-bold mb-4 text-zinc-700 dark:text-zinc-300`}>{post.title}</h1>
            <p className={`text-zinc-600 dark:text-zinc-400 mb-4`}>
              By {post.author} on {new Date(post.createdAt).toDateString()}
            </p>
            <div className={`mb-4`}>
              <Image alt='DNA structure' className={`object-cover w-full h-80 rounded-lg`} src={post.imageSrc} width={400} height={400} />
            </div>
            <div
              className={`leading-6 text-zinc-600 dark:text-zinc-400`}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Horizontal Divider */}
            <hr className="my-8 border-t border-zinc-300 dark:border-zinc-700" />

            {/* Author Information */}
            <div className="mt-8">
              <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-2">About the Author</h2>
              <p className="text-zinc-600 dark:text-zinc-400">TechExplorer is a passionate developer exploring the latest in web technologies. Follow TechExplorer on Twitter for more insights.</p>
            </div>
          </article>

          {/* Post Navigation */}
          <div className="mt-8 flex justify-between">
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">&lt; Previous Post</p>
            </div>
            <div>
              <p className="text-zinc-600 dark:text-zinc-400">Next Post &gt;</p>
            </div>
          </div>
        </section>

        {/* Right column */}
        <section className={`w-full lg:w-1/3 p-4`}>
          <DiscussionSection />
         
            {/* Related Posts Section */}
            <div className="mt-8 p-4">
              <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-4">Related Posts</h2>
              <ul className="list-none">
                <li><Link href="/1"><span className="text-zinc-600 dark:text-zinc-400">Related Post 1</span ></Link></li>
                <li><Link href="/2"><span className="text-zinc-600 dark:text-zinc-400">Related Post 2</span ></Link></li>
                <li><Link href="/"><span className="text-zinc-600 dark:text-zinc-400">Related Post 3</span ></Link></li>
              </ul>
            </div>

            {/* Categories Section */}
            <div className="mt-8 p-4">
              <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-4">Categories</h2>
              <ul className="list-disc pl-4">
                <li><Link href="/category/development"><span className="text-zinc-600 dark:text-zinc-400">Development</span ></Link></li>
                <li><Link href="/category/react"><span className="text-zinc-600 dark:text-zinc-400">React</span ></Link></li>
                {/* Add more categories as needed */}
              </ul>
            </div>
          </section>
      </div>
    </div>
  );
};

export default SinglePostPage;
