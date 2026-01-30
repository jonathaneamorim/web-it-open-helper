import { List } from "../list/list";

type props = {
    listTitle?: string;
    items?: string[];
};

export function SectionListing(props: props){
    return(
       <section>
            <h2>{props.listTitle}</h2>
       </section>
    );
}