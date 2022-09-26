import {useRouter} from "next/router";

export default function ClientsPage() {
    const router = useRouter();

    console.log(router.query);
    return (
        <div>
            <h1>Clients Page</h1>
        </div>
    )
}