
export default async function Page({params}) {
    let  lan= ['python' , 'cpp'];
    if (lan.includes(params.slug[0])){
        console.log(params.slug)
        return <p>this is a {params.slug[0]}</p>;
    }
    console.log(params.slug)
  return <p>Post: not found {params.slug} is not in lan </p>
}