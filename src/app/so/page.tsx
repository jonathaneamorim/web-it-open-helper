import { List } from "@/components/list/list";

export default function SistemasOperacionais() {

    const listProgramming = [
        { 
            name: "Linux",
            url: "/so/linux"
        }
    ];
    return(
        <main>
            <List 
                variant="primary"
                items={listProgramming}  
            />
        </main>
    );
}