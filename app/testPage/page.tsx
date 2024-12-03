export default function Home({ params }: { params: { id: string } }) {
    const id = params.id;

    console.log(id);
}