export async function fetchPosts() {

    console.log('Inside Fetch Function===>');

    const res = await fetch('https://666cac3449dbc5d7145ed1f8.mockapi.io/api/v1/get-user', { cache: 'force-cache' });   
    // const res = await fetch('https://666cac3449dbc5d7145ed1f8.mockapi.io/api/v1/get-user', { cache: 'no-store' });   
    // const res = await fetch('https://666cac3449dbc5d7145ed1f8.mockapi.io/api/v1/get-user', { next: { revalidate: 10 } });   
    // const res = await fetch('https://666cac3449dbc5d7145ed1f8.mockapi.io/api/v1/get-user', { next: { tag: ['user_data'] } });   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
export async function fetchCount() {

    console.log('Inside Fetch Function===>');

    // const res = await fetch('https://666cac3449dbc5d7145ed1f8.mockapi.io/api/v1/get-user', { cache: 'force-cache' });   
    // const res = await fetch('https://666cac3449dbc5d7145ed1f8.mockapi.io/api/v1/get-user', { cache: 'no-store' });   
    // const res = await fetch('https://666cac3449dbc5d7145ed1f8.mockapi.io/api/v1/get-user', { next: { revalidate: 10 } });   
    const res = await fetch('https://666cac3449dbc5d7145ed1f8.mockapi.io/api/v1/get-user', { next: { tag: ['user_data_count'] } });   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}