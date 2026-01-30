// src/app/programming/page.tsx
import { List } from "@/components/list/list"; 
import navigationData from "@/data/navigation.json";
import { Title } from "@/components/title/title";
import { Paragraph } from "@/components/paragraph/paragraph";

export default function Programming() {

  const programmingData = navigationData.categories.find(
    (cat) => cat.id === "programming"
  );

  if (!programmingData) {
    return (
      <div className="p-8 text-center text-slate-500">
        Categoria não encontrada ou dados indisponíveis.
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <section>
        <Title text={programmingData.title} />
        <Paragraph text="Guias, documentação e anotações sobre desenvolvimento de software." />
      </section>

      <section>
        <List 
          variant="primary"
          listTitle="Tópicos Disponíveis"
          items={programmingData.items} 
        />
      </section>
    </main>
  );
}