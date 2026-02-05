'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-300% animate-gradient mb-4 select-none">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Página não encontrada
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              O conteúdo que você tentou acessar não existe, foi movido ou talvez nunca tenha existido. Verifique a URL ou volte para a base de conhecimento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/" 
                className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Voltar ao Início
              </Link>
              
              <Link 
                href="/#Programação" 
                className="px-8 py-3 rounded-full bg-white text-slate-700 font-bold border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                Explorar Trilhas
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 text-center w-full text-slate-400 text-sm font-mono">
        IT Open Helper • Error 404
      </div>
    </div>
  );
}