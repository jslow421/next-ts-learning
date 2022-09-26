import {useRouter} from "next/router";

export default function ClientProjectsPage() {
    const router = useRouter();
    console.log(router.query);
    console.log(router.query.id);
    console.log(router.query.clientProjectId);

    function loadProjectHandler() {
        // load data...
        // Can also use router replace - no back available after navigating
        router.push({
            pathname: "/clients/[id]/[clientProjectId]",
            query: {
                id: router.query.id,
                clientProjectId: "test"
            }
        });
    }

    return (
        <div>
            <h1>Projects of a given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}