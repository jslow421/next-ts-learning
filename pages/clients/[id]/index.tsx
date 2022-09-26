import {useRouter} from "next/router";

export default function ClientProjectsPage() {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>Projects of a given client</h1>
        </div>
    );
}