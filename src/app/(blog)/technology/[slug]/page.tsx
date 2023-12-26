import DiscussionSection from "@/ui/discussion/discussion";
import RelatedPostsComponent from "@/ui/post/relatedPosts";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Failed");
  }

  // Return the parsed JSON data
  return await res.json();
};

const getRelatedPosts = async (categoryId: string) => {
  try {
    // Fetch posts with the same category
    const response = await fetch(
      `${process.env.BASE_URL}/api/posts/related?category=${categoryId}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      console.error("Error fetching related posts:", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error fetching related posts:", error);
    // Handle error or return a default value
    return [];
  }
};

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

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

  const data = await fetchData();

  if (!data) {
    return <div>Error fetching data</div>;
  }

  const post = data;

  // Fetch related posts based on the category
  const relatedPosts = await getRelatedPosts(post.categoryId || "");

  // Find the index of the current post in the related posts array
  const currentIndex = relatedPosts.findIndex(
    (p: { slug: string }) => p.slug === slug
  );

  // Get the previous and next post slugs
  const previousPostSlug =
    currentIndex > 0 ? relatedPosts[currentIndex - 1].slug : null;
  const nextPostSlug =
    currentIndex < relatedPosts.length - 1
      ? relatedPosts[currentIndex + 1].slug
      : null;

  return (
    <div className={`mx-auto py-4`}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content} />
      </Head>

      <div className={`flex flex-col lg:flex-row justify-between gap-4`}>
        <section className={`w-full lg:w-2/3 p-4 text-justify`}>
          <article className={`mb-8`}>
            <h1
              className={`text-4xl font-bold mb-4 text-zinc-700 dark:text-zinc-300`}
            >
              {post.title}
            </h1>
            <p
              className={`font-medium text-zinc-600 dark:text-zinc-400 mb-4 text-sm`}
            >
              By <span className="text-lime-400">{post.author?.name}</span> on{" "}
              {new Date(post.createdAt).toDateString()}
            </p>
            <div className={`mb-4`}>
              <Image
                alt={post.title}
                className={`object-cover w-full h-80 rounded-lg`}
                src={post.image}
                width={400}
                height={400}
              />
            </div>
            <div className={`leading-6 text-zinc-600 dark:text-zinc-400`}>
              {post.body}
            </div>

            {/* Horizontal Divider */}
            <hr className="my-8 border-t border-zinc-300 dark:border-zinc-700" />

            {/* Author Information */}
            {post.author && (
              <div className="mt-8">
                <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
                  About the Author
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {post.author.bio || "No bio available"}
                </p>
              </div>
            )}
          </article>

          {/* Post Navigation */}
          <div className="mt-8 flex justify-between">
            <div>
              {previousPostSlug && (
                <Link
                  className="text-zinc-600 dark:text-zinc-400"
                  href={`/technology/${previousPostSlug}`}
                >
                  &lt; Previous Post
                </Link>
              )}
            </div>
            <div>
              {nextPostSlug && (
                <Link
                  className="text-zinc-600 dark:text-zinc-400"
                  href={`/technology/${nextPostSlug}`}
                >
                  Next Post &gt;
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Right column */}
        <section className={`w-full lg:w-1/3 lg:p-4`}>
          <DiscussionSection postSlug={slug} />

          {/* Related Posts Section */}
          <div className="mt-8 p-4">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-4">
              Related Posts
            </h2>
            {/* Display at most two related posts */}
            {relatedPosts.slice(0, 2).map((relatedPost: { slug: string; title: string; body: string; image: string; }) => (
              <RelatedPostsComponent
                key={relatedPost.slug}
                post={relatedPost}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SinglePostPage;
