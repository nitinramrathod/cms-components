import styles from "./page.module.css";
import { fetchPosts } from "@/utils/services";
import PostCard from "@/components/homepage/PostCard";
import { Wrapper } from "@/components/homepage/StyledComponents";
import { Button, Container } from "react-bootstrap";
import { revalidatePath, revalidateTag } from "next/cache";

export const revalidate = 0;

export default async function Home() {
  let data;

  try {
    data = await fetchPosts();
  } catch (error) {
    console.log(error);
  }

  const handleRevalidate = async () => {
    'use server'
    console.log('Inside Server Action===>')

    // revalidateTag('user_data');

    // revalidateTag('user_data_count');

    // revalidatePath('/about')
  }

  // throw Error("Error creating")

  return (
    <main className={styles.main}>
      <Container>
        <form >
          <Button type="submit" formAction={handleRevalidate}>Purge Caching</Button>
        </form>
        <Wrapper>
          {data?.map(item => {
            return <PostCard key={item.id} card={item} />
          })}
        </Wrapper>
      </Container>

    </main>
  );
}
