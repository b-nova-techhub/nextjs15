import {headers} from "next/headers";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const headerValues = headers();
    console.log(headerValues);
    return (
        <div>My Post: {id}</div>)
}