import PaymentPage from '@/components/PaymentPage'
import React from 'react'


// const username = ({ params }) => {
//   return (
//     <>
//       <PaymentPage username={params.username} />
//     </>
//   )
// }

// export default username



export default async function Page({ params }) {
  const { username } = await params;
  return (
    <>
      <PaymentPage username={username} />
    </>
  );
}
