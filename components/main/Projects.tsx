import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projetos"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/painel.png"
          title="Painel do Aluno"
          description="Painel do Aluno com integração com o Moodle, salvando progresso dos alunos, certificados e dashboard administrativo."
        />
        <ProjectCard
          src="/backend-painel.png"
          title="Backend Painel"
          description="Responsável por armazenar e tratar dados provenientes do Moodle, utilizando Express, MongoDB e Mongoose."
        />
        <ProjectCard
          src="/portfolio.png"
          title="Portfolio"
          description="Meu portfolio pessoal, feito com Next.js, TailwindCSS, Typescript e Frame Motion."
        />
      </div>
    </div>
  );
};

export default Projects;
