import Card from '@/components/products/Card'
import { Wrapper } from '@/components/products/StyledComponents'
import { getProducts } from '@/lib/ProductDatabase'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const page = async () => {
    const data = await getProducts();
    console.log(data);
    return (
        <Container className='pt-4'>
            <Link href={'/dashboard'}>{`<-`}Add Product</Link>
            <h2>Products List</h2>
            <Wrapper>
                {data?.map(item => {
                    return <Card key={item.id} card={item} />

                })}
            </Wrapper>
        </Container>
    )
}

export default page