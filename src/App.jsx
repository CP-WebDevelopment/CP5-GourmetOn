import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroImg from "./assets/hero.jpg";
import Swal from "sweetalert2";

export default function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const r = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const j = await r.json();
        const all = (j?.meals || []).slice(0, 24);
        const shuffled = [...all].sort(() => Math.random() - 0.5).slice(0, 6);
        setCards(
          shuffled.map(m => ({
            id: m.idMeal,
            title: m.strMeal,
            thumb: m.strMealThumb,
            area: m.strArea,
            category: m.strCategory,
          }))
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <div className="scroll-smooth antialiased text-[#262525] bg-gradient-to-b from-[#E6DDBC]/55 via-white to-[#E6DDBC]/25">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative mx-2 sm:mx-6 mt-[64px] mb-4 sm:mb-8 overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,.12)] min-h-[420px] md:min-h-[520px] ring-1 ring-[#E6DDBC] scroll-mt-[64px]"
      >
        <img
          src={HeroImg}
          alt="Delivery gourmet"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-12 text-center">
          <p className="text-xs tracking-widest uppercase text-white/90">Sobre o app</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,.35)]">
            O Delivery <span className="text-[#E6DDBC]">GourmetOn</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Receba pratos incríveis direto na sua casa. Escolha, peça e aproveite refeições deliciosas com apenas alguns cliques.
          </p>
          <a
            href="#apresentacao"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#822626] px-6 py-3 font-semibold text-white ring-1 ring-[#690202]/40 transition hover:bg-[#690202]"
          >
            Download <span aria-hidden>↓</span>
          </a>
        </div>
      </section>

      {/* Apresentação */}
      <section id="apresentacao" className="mx-2 sm:mx-6 my-6 sm:my-10 scroll-mt-[64px]">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white/95 p-6 sm:p-10 shadow-[0_16px_48px_rgba(0,0,0,.08)] ring-1 ring-[#E6DDBC] backdrop-blur">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-[#262525]">
            Por que escolher o GourmetOn?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[#525252]">
            Entregamos pratos de qualidade, rápido e com total transparência sobre ingredientes e preparo.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Variedade", "Escolha entre diferentes tipos de cozinha e pratos."],
              ["Entrega rápida", "Acompanhe seu pedido em tempo real até a sua porta."],
              ["Promoções exclusivas", "Descontos e ofertas especiais direto no app."],
              ["Favoritos", "Salve seus pratos preferidos para pedir novamente facilmente."],
              ["Pedidos offline", "Adicione ao carrinho mesmo sem internet e finalize depois."],
              ["Avaliações reais", "Veja avaliações de outros clientes antes de pedir."],
            ].map(([t, d]) => (
              <div key={t} className="group rounded-xl border border-[#E6DDBC] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#262525]">{t}</h3>
                  <span className="rounded-full bg-[#E6DDBC] px-2 py-1 text-[10px] font-bold text-[#525252]">PRO</span>
                </div>
                <p className="mt-2 text-[#525252]">{d}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#E6DDBC] to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="mx-2 sm:mx-6 my-6 sm:my-10 scroll-mt-[64px]">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Rastreamento do pedido", "Saiba exatamente onde seu prato está."],
            ["Menu personalizado", "Sugestões com base no seu histórico e preferências."],
            ["Pagamentos rápidos", "Cartão, Pix ou dinheiro na entrega, escolha você."],
          ].map(([t, d], i) => (
            <div key={t} className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_14px_36px_rgba(0,0,0,.06)] ring-1 ring-[#E6DDBC]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#822626] text-white font-bold">{i + 1}</span>
                <h4 className="text-xl font-bold text-[#262525]">{t}</h4>
              </div>
              <p className="mt-3 text-[#525252]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destaques */}
      <section className="mx-2 sm:mx-6 my-6 sm:my-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-end justify-between">
            <h3 className="text-2xl font-extrabold tracking-tight text-[#262525]">Pratos em destaque</h3>
            <span className="text-sm text-[#525252]">{loading ? "carregando..." : `${cards.length} pratos`}</span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article key={c.id} className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_36px_rgba(0,0,0,.06)] ring-1 ring-[#E6DDBC] transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="relative">
                  <img src={c.thumb} alt={c.title} className="h-52 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#E6DDBC]/95 px-3 py-1 text-xs font-semibold text-[#262525] ring-1 ring-[#E6DDBC]/60">
                    {c.category} • {c.area}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="line-clamp-1 text-lg font-semibold text-[#262525]">{c.title}</h4>
                  <p className="mt-1 text-sm text-[#525252]">Perfeito para pedir hoje à noite. Toque e descubra mais no app.</p>
                  <button className="mt-4 inline-flex items-center rounded-full bg-[#822626] px-4 py-2 text-sm font-semibold text-white ring-1 ring-[#690202]/40 transition hover:bg-[#690202]">
                    Pedir agora
                  </button>
                </div>
              </article>
            ))}
            {!loading && cards.length === 0 && (
              <div className="rounded-2xl bg-white p-8 text-center text-[#525252] ring-1 ring-[#E6DDBC]">
                Não conseguimos carregar os pratos agora. Tente novamente em instantes.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="mx-2 sm:mx-6 my-6 sm:my-10 scroll-mt-[64px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Camila R.", "“Entrega rápida e pratos incríveis. Virou meu app preferido!”"],
            ["João P.", "“Acompanhar o pedido em tempo real salvou minha noite.”"],
            ["Marina L.", "“Menu variado e interface clara, simplesmente perfeito.”"],
          ].map(([nome, depo]) => (
            <div key={nome} className="rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(0,0,0,.06)] ring-1 ring-[#E6DDBC]">
              <p className="text-[#262525]">{depo}</p>
              <div className="mt-4 h-px w-full bg-[#E6DDBC]" />
              <div className="mt-3 text-sm font-semibold text-[#525252]">{nome}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contato / newsletter */}
      <section id="contato" className="mx-2 sm:mx-6 my-8 sm:my-14 scroll-mt-[64px]">
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl p-1 shadow-[0_24px_70px_rgba(0,0,0,.12)] ring-1 ring-[#E6DDBC]"
          style={{ background: "linear-gradient(90deg, #E6DDBC, #ffffff, #E6DDBC)" }}
        >
          <div className="grid grid-cols-1 gap-0 bg-white/90 p-8 sm:p-12 md:grid-cols-2 backdrop-blur rounded-[calc(theme(borderRadius.3xl)-1px)]">
            <div className="pr-0 md:pr-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#262525]">Receba novidades e promoções</h3>
              <p className="mt-2 text-[#525252]">Cadastre seu e-mail e receba ofertas exclusivas do GourmetOn.</p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row"
                    onSubmit={(e) => {
                      e.preventDefault();
                      Swal.fire({
                        icon: "success",
                        title: "Obrigado!",
                        text: "Você receberá novidades e promoções em breve.",
                        confirmButtonColor: "#822626",
                      });
                      e.currentTarget.reset();
                    }}
                  >
                    <input type="email" required placeholder="seuemail@exemplo.com" className="w-full flex-1 rounded-full border border-[#E6DDBC] bg-white px-5 py-3 text-[#262525] outline-none focus:border-[#525252]" />
                    <button className="rounded-full bg-[#822626] px-6 py-3 font-semibold text-white ring-1 ring-[#690202]/40 transition hover:bg-[#690202]">
                      Quero receber
                    </button>
                  </form>
              <p className="mt-2 text-xs text-[#525252]">Sem spam. Cancelar quando quiser.</p>
            </div>

            <div className="mt-8 md:mt-0">
              <ul className="grid grid-cols-2 gap-4 text-sm text-[#262525]">
                {[
                  ["Tempo médio de entrega", "20–40 min"],
                  ["Pratos entregues", "+10.000"],
                  ["Avaliação média", "4.9★"],
                  ["Economia de tempo", "-35%"],
                ].map(([k, v]) => (
                  <li key={k} className="rounded-2xl border border-[#E6DDBC] bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-extrabold tracking-tight text-[#262525]">{v}</div>
                    <div className="mt-1 uppercase tracking-widest text-[#525252]">{k}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
