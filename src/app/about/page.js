import { fetchCount} from '@/utils/services';
import React from 'react'
import { Container } from 'react-bootstrap';

// export const revalidate = 0;

const  page = async () => {
  let data;

  try {
    data = await fetchCount();
  } catch (error) {
    console.log(error);
  }

  return (
    <Container>

    <h1>Count is : {data?.length}</h1>
    </Container>
  )
}

export default page