import Image from "next/image";
import { SiteHeader } from "./components/site-header";

const indicadores = [
  { valor: "120+", rotulo: "projetos conduzidos" },
  { valor: "18%", rotulo: "ganho médio de margem mapeado" },
  { valor: "30 dias", rotulo: "para organizar a visão de caixa" },
];

const diferenciais = [
  {
    titulo: "Visão executiva",
    texto: "Números organizados para decisão, não para burocracia.",
  },
  {
    titulo: "Atuação sênior",
    texto: "Diagnóstico, priorização e acompanhamento com leitura experiente.",
  },
  {
    titulo: "Rotina de gestão",
    texto: "Caixa, metas e revisão financeira com cadência clara.",
  },
];

const servicos = [
  "Fluxo de caixa",
  "Planejamento financeiro",
  "Reporte gerencial",
  "Suporte à decisão",
];

const metodo = [
  {
    etapa: "01",
    titulo: "Diagnóstico",
    texto: "Leitura rápida da estrutura atual.",
  },
  {
    etapa: "02",
    titulo: "Prioridades",
    texto: "Definição do que corrige valor primeiro.",
  },
  {
    etapa: "03",
    titulo: "Implantação",
    texto: "Rotina, indicadores e revisão.",
  },
  {
    etapa: "04",
    titulo: "Acompanhamento",
    texto: "Ajuste contínuo com a liderança.",
  },
];

const ganhos = [
  "Mais clareza sobre caixa e margem",
  "Menos ruído nas decisões da liderança",
  "Crescimento com base financeira mais segura",
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

function Intro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[0.96] text-[var(--ink-strong)] sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 max-w-xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <div className="page-shell">
        <header className="mx-auto w-full max-w-7xl px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />
        </header>

        <section
          id="hero"
          className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-18 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24 lg:pt-14"
        >
          <div className="flex flex-col justify-center">
            <p className="section-eyebrow">
              Consultoria financeira e empresarial
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.92] text-[var(--ink-strong)] sm:text-6xl lg:text-[5.6rem]">
              Menos ruído. Mais controle. Melhor decisão.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
              Estruturamos caixa, reporte e rotina financeira para empresas que
              precisam de uma base mais profissional para crescer.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a className="button-primary" href="#contato">
                Solicitar diagnóstico
              </a>
              <a className="button-secondary" href="#servicos">
                Ver escopo
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {indicadores.map((item) => (
                <div key={item.rotulo} className="stat-card">
                  <p className="font-display text-4xl leading-none text-[var(--ink-strong)]">
                    {item.valor}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {item.rotulo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="image-panel image-panel-hero">
              <Image
                src="/images/vanturel-hero.png"
                alt="Materiais de planejamento financeiro sobre uma mesa executiva."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <div className="insight-card">
              <p className="insight-label">Foco imediato</p>
              <div className="mt-4 space-y-4">
                <div className="insight-row">
                  <span>Caixa</span>
                  <strong>Controle semanal</strong>
                </div>
                <div className="insight-row">
                  <span>Margem</span>
                  <strong>Leitura por prioridade</strong>
                </div>
                <div className="insight-row border-none pb-0">
                  <span>Gestão</span>
                  <strong>Ritmo mensal limpo</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cred-strip">
          <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 py-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <p className="text-sm leading-7 text-[var(--ink-soft)]">
              Indicada para empresas de serviços, operações B2B e negócios em
              fase de estruturação.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="trust-chip">Serviços</div>
              <div className="trust-chip">B2B</div>
              <div className="trust-chip">Operação em crescimento</div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-18 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24">
          <Intro
            eyebrow="Proposta"
            title="Consultoria criada para organizar a base financeira sem excesso de complexidade."
            copy="A entrega é objetiva: visibilidade, prioridade e rotina. O suficiente para a liderança operar melhor."
          />

          <div className="grid gap-4">
            {diferenciais.map((item) => (
              <article key={item.titulo} className="content-card">
                <p className="mini-label">{item.titulo}</p>
                <p className="mt-2 text-xl leading-7 text-[var(--ink-strong)] sm:mt-3 sm:text-2xl sm:leading-8">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="servicos"
          className="mx-auto w-full max-w-7xl px-5 pb-18 sm:px-8 lg:px-10 lg:pb-24"
        >
          <div className="services-panel">
            <Intro
              eyebrow="Serviços"
              title="Escopo enxuto, foco alto."
              copy="Atuamos nos pontos que mais afetam qualidade de gestão e previsibilidade financeira."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {servicos.map((item) => (
                <article
                  key={item}
                  className="service-card service-card-compact"
                >
                  <h3 className="font-display text-2xl leading-tight text-[var(--ink-strong)] sm:text-3xl">
                    {item}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="metodo"
          className="mx-auto w-full max-w-7xl px-5 pb-18 sm:px-8 lg:px-10 lg:pb-24"
        >
          <Intro
            eyebrow="Método"
            title="Quatro movimentos para colocar a operação em ordem."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {metodo.map((item) => (
              <article key={item.etapa} className="process-card">
                <p className="font-display text-4xl leading-none text-[var(--accent)] sm:text-5xl">
                  {item.etapa}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--ink-strong)] sm:mt-6 sm:text-2xl">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)] sm:mt-3 sm:text-base sm:leading-7">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="resultados"
          className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-18 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pb-24"
        >
          <div className="image-panel image-panel-results">
            <Image
              src="/images/vanturel-results.png"
              alt="Reunião de revisão financeira estratégica."
              fill
              loading="eager"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div>
            <Intro
              eyebrow="Resultados"
              title="O ganho principal é uma liderança mais segura para decidir."
              copy="Quando caixa, margem e prioridades ficam visíveis, o negócio responde melhor."
            />

            <div className="mt-8 grid gap-4">
              {ganhos.map((item) => (
                <article key={item} className="result-card">
                  <p className="text-lg leading-7 text-[var(--ink-strong)]">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-18 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-24">
          <div>
            <Intro
              eyebrow="Sobre"
              title="Leitura financeira sênior para empresas que ainda não precisam de uma estrutura interna completa."
            />

            <div className="mt-8 grid gap-3">
              <div className="proof-item">
                <span className="proof-dot" aria-hidden="true" />
                <p>
                  Ideal para negócios que cresceram mais rápido do que sua
                  disciplina financeira.
                </p>
              </div>
              <div className="proof-item">
                <span className="proof-dot" aria-hidden="true" />
                <p>
                  Entrega direta, executiva e sem volume desnecessário de
                  material.
                </p>
              </div>
            </div>
          </div>

          <div className="image-panel image-panel-about">
            <Image
              src="/images/vanturel-advisor.png"
              alt="Consultor financeiro sênior em ambiente corporativo."
              fill
              loading="eager"
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </section>

        <section
          id="contato"
          className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24"
        >
          <div className="cta-panel">
            <Intro
              eyebrow="Contato"
              title="Se a base financeira está abaixo do ritmo do negócio, é hora de corrigir."
              copy="Agende um diagnóstico inicial e entenda o que precisa ser reorganizado primeiro."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a className="button-primary" href="mailto:webluma.dev@gmail.com">
                webluma.dev@gmail.com
              </a>
              <a className="button-secondary" href="tel:+554100000000">
                +55 (41) 0000-0000
              </a>
            </div>
          </div>
        </section>

        <footer className="footer" id="legal">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:gap-6 lg:px-10 lg:py-14">
            <div className="footer-block footer-about">
              <p className="footer-brand">Vanturel Consultoria</p>
              <p>
                Consultoria financeira para empresas, com atuação sênior,
                acompanhamento próximo e foco em decisões com base executiva.
              </p>
            </div>

            <div className="footer-block">
              <p className="footer-title">Contato</p>
              <a
                className="footer-link focus-ring"
                href="mailto:webluma.dev@gmail.com"
              >
                webluma.dev@gmail.com
              </a>
              <a className="footer-link focus-ring" href="tel:+554100000000">
                +55 (41) 0000-0000
              </a>
              <p>
                Atendimento online para Brasil, Europa e empresas com operação
                internacional.
              </p>
            </div>

            <div className="footer-block">
              <p className="footer-title">Redes sociais</p>
              <div className="footer-link-list">
                {socialLinks.map((item) => (
                  <a
                    className="footer-link focus-ring"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-block">
              <p className="footer-title">Legal</p>
              <div className="footer-link-list">
                {legalLinks.map((item) => (
                  <a
                    className="footer-link focus-ring"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-[var(--line)] px-5 py-6 text-sm text-[var(--ink-soft)] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
            <p>
              © 2026 Criado e desenvolvido por{" "}
              <strong>WebLuma Tecnologia LTDA</strong>. Todos os direitos
              reservados.
            </p>
            <p>
              Consultoria financeira estratégica para empresas, ao vivo e
              online.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
