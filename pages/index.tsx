import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  heroPost: Post;
  morePosts: Post[];
};

const Index = ({ heroPost, morePosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Joe Matune | Fullstack TS Baller</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const heroPost = allPosts.find(({ slug }) => slug === "about-me");
  const morePosts = allPosts.filter(({ slug }) => slug !== "about-me");

  return {
    props: {
      heroPost,
      morePosts,
    },
  };
};
