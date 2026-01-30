// src/app/page.tsx
import { Paragraph } from "@/components/paragraph/paragraph";
import { List } from "@/components/list/list";
import navigationData from "@/data/navigation.json"; // Importando o mock

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <header className="mb-12 border-b border-slate-200 pb-6">
        <Paragraph 
          text="Central de anotações: Organização de conhecimentos sobre diversos campos da tecnologia." 
        />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {navigationData.categories.map((category) => (
          <div 
            key={category.id} 
            className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
          >
            <List 
              variant="primary" 
              listTitle={category.title} 
              items={category.items} 
            />
          </div>
        ))}
      </div>
    </main>
  );
}