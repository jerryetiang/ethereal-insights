import DiscussionSection from '@/ui/discussion/discussion';
import RelatedPostsComponent from '@/ui/post/relatedPosts';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Failed");
  }

  // Return the parsed JSON data
  return await res.json();
};


const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
 
  const fetchData = async () => {
    try {
      const data = await getData(slug);
      // Use the fetched data instead of the static post
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error or return a default value
      return null;
    }
  };

  const data = await fetchData()

  if (!data) {
    return <div>Error fetching data</div>;
  }

  const post = data

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
              By {post.author?.name} on {new Date(post.createdAt).toDateString()}
            </p>
            <div className={`mb-4`}>
              <Image alt={post.title} className={`object-cover w-full h-80 rounded-lg`} src={post.image} width={400} height={400} />
            </div>
            <div
              className={`leading-6 text-zinc-600 dark:text-zinc-400`}
            >
              {post.body}
            </div>

            {/* Horizontal Divider */}
            <hr className="my-8 border-t border-zinc-300 dark:border-zinc-700" />

              {/* Author Information */}
          {post.author && (
            <div className="mt-8">
              <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-2">About the Author</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{post.author.bio || 'No bio available'}</p>
            </div>
          )}
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
        <section className={`w-full lg:w-1/3 lg:p-4`}>
          <DiscussionSection postSlug={slug} />

          {/* Related Posts Section */}
          <div className="mt-8 p-4">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-4">Related Posts</h2>
            <RelatedPostsComponent />
            <RelatedPostsComponent />

          </div>

        </section>
      </div>
    </div>
  );
};

export default SinglePostPage;
