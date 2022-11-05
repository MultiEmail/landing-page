import {Contributors} from "../../../components/pages/(landing)/Contributors";
import {Input} from "../../../components/ui/Input";

export default async function ContributorsPage() {
    
    // Fetch all the team members of all the and contributor's from the Github API.
    // And do this in the following format;
    // DEMO: Currently just fetching the backend team members repo.

    const backendRes = await fetch("https://api.github.com/repos/MultiEmail/backend/contributors", {
        next: {
            revalidate: 60 * 60 * 24,
        }
    });
    let team;

    if (backendRes.status === 200) {
        let jsonRes = await backendRes.json();
        team = jsonRes
            .filter((member: any) => member.type === "User")
            .map((member: any) => {
                return {
                    name: member.login,
                    profilePicture: member.avatar_url,
                    role: "Backend Developer",
                    github: member.html_url,
                };
            });
    }

    const teamMembers: Array<{
        name: string;
        profilePicture: string;
        role: string;
        github: string;
    }> = [];

    return <Contributors team={team} />;
}
