# Competitive Landscape and Defensible Moats for a Colombian AI Safety Lab

Research date: 2026-10-31. Every fact below carries the date of the event or source where one was available. Sources marked "(secondary)", "(vendor)" or "(self-published)" are weaker and need checking before anyone quotes them.

---

## Q1. Competitive landscape: who already does AI safety / evaluation / sovereign AI in LatAm and the Global South?

### Takeaway
LatAm sovereign-AI work is about **capability and cultural representation**: LatamGPT, ALIA, Brazil's PBIA, Mexico's Coatlicue. It is not about safety. As of 2026 there is **no operating AISI in Latin America, no LatAm member of the International Network of AI Safety Institutes, and no permanent university-based technical alignment lab in the region**. Safety work there consists of volunteer, hackathon and student communities: BAISH in Argentina, AI Safety Colombia, LANAIS, iaS, AI Safety Brazil, and AKCIT/UFG in Brazil. The open niche is an institutional, professional-grade safety evaluator. The serious competitors are not local labs. They are (a) global data/red-teaming vendors that already sell Spanish-speaking labor, (b) Spanish and Brazilian academic groups, and (c) frontier labs' own in-house multilingual evaluations.

### Cited Findings

**LatamGPT / CENIA (Chile)**
- LatamGPT was presented on **10 Feb 2026** by Chile's CENIA with CAF, the Government of Chile, AWS and Data Observatory. President Boric attended. AFP reports that contributors include universities, foundations, libraries, government bodies and NGOs in Argentina, Brazil, Chile, **Colombia**, Ecuador, Mexico, Peru and Uruguay. — [France24/AFP, 10 Feb 2026](https://www.france24.com/en/live-news/20260210-latam-gpt-a-latin-american-ai-to-combat-us-centric-bias)
- Technical and financial details: built on **Meta Llama 3.1, 70B parameters**. Data is 8 TB from 2.6M documents across 20 LatAm countries plus Spain. The project counts 15 countries, 200+ collaborators and 33 institutional alliances. Universidad de Tarapacá invested ~$10M in a supercomputing center, CENIA ~$300K, and CAF committed $250K. It is **not a public chatbot**; it is open infrastructure that others adapt. Critics point to the small budget, political instability, and the risk that "well-funded companies could quickly adapt their own models for Spanish and Portuguese." The article does not discuss safety testing or red-teaming. — [Tech Policy Press, 2 Mar 2026](https://www.techpolicy.press/latamgpt-navigates-the-gap-between-regional-aspiration-and-market-realities/)
- Model-size figures conflict. The Feb 2025 announcement said ~50B parameters; launch-era reporting says Llama 3.1 70B. — [InfoQ, Feb 2025](https://www.infoq.com/news/2025/02/latam-gpt/); [Tech Policy Press, Mar 2026](https://www.techpolicy.press/latamgpt-navigates-the-gap-between-regional-aspiration-and-market-realities/)
- A Spanish-language report, as relayed by a search summary, says Panama, the Dominican Republic, Ecuador and Colombia each have more than 10% of culture-related data hosted in LatamGPT. **I could not verify this directly.** — [elCaribe](https://www.elcaribe.com.do/panorama/pais/cenia-lanza-latam-gpt-modelo-de-ia-entrenado-con-datos-de-la/)
- LatamGPT's resources page lists **cultural-knowledge benchmarks**: CHOCLO, and Trueque (500 questions from 20 countries). Neither is a safety benchmark. — [LatamGPT resources](https://www.latamgpt.org/en/resources)
- A June 2026 mapping of LatAm AI safety found **"no systematic safety evaluations, dangerous-capability evals, or red-teaming results"** for LatamGPT. — [EA Forum, "Latin America in search of its stake in AI safety: A Map," 18 Jun 2026](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)

**Brazil**
- The PBIA (Plano Brasileiro de IA) was launched with a projected **R$23 billion**. — [Movimento Econômico, Feb 2025](https://movimentoeconomico.com.br/tecnologia/2025/02/06/feito-no-piaui-projeto-de-ia-100-em-portugues-vai-ajudar-soberania-do-pais/)
- As of Feb 2025 the federal Portuguese-native LLM was still at the planning stage and tied to a planned supercomputer purchase. — [TecMundo](https://www.tecmundo.com.br/mercado/402970-governo-tem-meta-de-criar-grande-modelo-de-linguagem-llm-para-ia-brasileira.htm). Convergência Digital, around early 2025, reported that the PBIA's LLM goal had not moved forward. — [Convergência Digital](https://convergenciadigital.com.br/governo/portugal-sai-na-frente-e-lanca-amalia-uma-ia-em-portugues/)
- Piauí state's **SoberanIA 1** was set to be commercialized from 29 Apr 2026 with Serpro. — [Baguete, Mar 2026](https://www.baguete.com.br/noticias/piaui-vai-lancar-seu-proprio-llm). WideLabs' **Amazônia IA** is a private Brazilian-Portuguese LLM. — [Canaltech](https://canaltech.com.br/inteligencia-artificial/amazonia-ia-fala-em-portugues-e-foi-criada-por-pesquisadores-brasileiros/)
- Brazilian safety actors as of Jun 2026:
  - **AKCIT / Federal University of Goiás** built **MiJaBench**, a bilingual EN–PT adversarial benchmark on prompts that target minority groups. It found a "Selective Safety Trap": refusal rates vary depending on which group is targeted.
  - **AI Safety Brazil** and **CEGIA** do field-building.
  - **CEBRI / ITS-Rio** proposed an "AI Safety and Opportunities Institute" (AISO), which has no mandate or budget.
  - Brazil announced a local AISI focused on **environmental applications** at the Paris Summit (Feb 2025); news on it was expected in 2026.
  - [EA Forum map, 18 Jun 2026](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- Microsoft's External Red Team Alliance (EXTRA, **27 Jul 2026**) gave unrestricted gifts to 18 university labs. The **University of São Paulo's Center for AI** is the only Latin American institution named. — [Microsoft Security Blog, 27 Jul 2026](https://www.microsoft.com/en-us/security/blog/2026/07/27/enhancing-ai-security-through-global-ai-red-teaming/)

**Mexico**
- The **Coatlicue** public supercomputer (target 314 petaflops) was announced in Nov 2025. Construction was to start in 2026 and the site was to be chosen in Jan 2026. Mexico also signed a cooperation agreement with the Barcelona Supercomputing Center. — [Interesting Engineering](https://interestingengineering.com/innovation/314-petaflop-mexico-powerful-supercomputer); [Riviera Maya News](https://riviera-maya-news.com/mexico-to-begin-construction-of-6-billion-peso-coatlicue-supercomputer-in-2026/2025.html) (investment ~6 billion pesos)
- I found no confirmed Mexican sovereign LLM release. A critical blog argues that "no national models have been announced" and that no data strategy exists. — [Tecnetone (blog, opinion)](https://blog.tecnetone.com/en-us/coatlicue-supercomputer-without-digital-foundations-in-mexico)
- **AI Safety Mexico** maintains a curated Spanish-language resource directory. — [aismx.org](https://www.aismx.org/en/resources/). The ITAM "AI Futures Fellowship" in Mexico City has wound down. — [EA Forum map, Jun 2026](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)

**Spain (ALIA / BSC)**
- **ALIA** was launched in Jan 2025 by Pedro Sánchez and is coordinated by the BSC. **ALIA-40B** was trained from scratch on MareNostrum 5 on 35 European languages plus code, under Apache 2.0. **Salamandra** is the name of the smaller 2B and 7B models. "ALIA 40B Instruido" was released on **17 Dec 2025**. There are government pilots, including a chatbot for the Tax Agency. — [BSC](https://bsc.es/news/bsc-news/alia-europes-first-public-open-and-multilingual-ai-infrastructure); [Spanish government press release, 17 Dec 2025](https://digital.gob.es/comunicacion/notas-prensa/secretaria-digitalizacion-e-inteligencia-artificial/2025/12/17-12-2025)
- A manual red-teaming study (Mar 2025) tested o3-mini, DeepSeek R1 and ALIA Salamandra with 10 participants over 670 conversations (590 Spanish, 80 Basque). Results: **37.9% of conversations showed inappropriate behaviour**, ranging from 29.5% for o3-mini to **50.6% for ALIA Salamandra**. — [Romero-Arjona et al., arXiv 2503.10192, Mar 2025](https://arxiv.org/abs/2503.10192); [ar5iv](https://ar5iv.labs.arxiv.org/html/2503.10192)
- The Observatorio de Riesgos Catastróficos Globales (ORCG) is based in Spain, works in Spanish and studies LatAm. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)

**Colombia**
- **AI Safety Colombia** (Bogotá) describes itself as founded in 2024 and as the first Colombian organization focused on AI safety. It runs reading groups, mentorship and Apart Research hackathons, including Jun 19–21, 2026 and an AI incident-response sprint on Sep 11–13, 2026. It lists three publications:
  - an Oxford Martin AIGI working paper on AI benefit-sharing (Dec 2025);
  - an arXiv paper on multi-judge preference approximation, accepted at NeurIPS 2025 workshops (Oct 2025);
  - a peer-reviewed article on the securitization of AI in *Revista de Estudios Sociales* (Uniandes, Jul 2025).
  - Source: [AI Safety Colombia, Investigación (self-published)](https://aisafetycolombia.org/investigacion); [About](https://aisafetycolombia.org/en)
- Colombian projects from the Jun 2026 Global South hackathon:
  - **JusticIA**: a counterfactual bias benchmark for LLMs in Colombian transitional justice.
  - **ColDron**: a Spanish dataset of 42 documented armed-group drone attacks.
  - **Confía-CO**: a reliability evaluation of a customer-service assistant in Colombian Spanish.
  - Probing Colombian-identity inferences in Qwen2.5-7B.
  - Colombian regional-slang handling.
  - "Beyond English": structural jailbreaks in Spanish.
  - A citizen "contestability" index for Colombian state algorithms.
  - An agrifood governance platform from Pasto.
  - Source: [Apart Research hackathon page](https://apartresearch.com/sprints/global-south-ais-hackathon-2026-06-19-to-2026-06-21); [AI Safety Colombia](https://aisafetycolombia.org/investigacion)
- **LANAIS** (Latin American Network for AI Safety) is a regional community network that plans a map/database of organizations and a career-resource hub. Its board includes Colombia-based members. **Seguridad de la IA (iaS)** aims to build Spanish-language safety infrastructure. — [lanais.org](https://lanais.org/about/); [aisafety.com communities](https://aisafety.com/communities)
- The Jun 2026 EA Forum map **mentions no Colombian AI safety group**; its only Colombia reference is bill PL 043/2025. This is a sign of low visibility for Colombian work. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- **CONPES 4144** (national AI policy, approved Feb 2025) has 106 actions and **COP 479,273 million (~US$116M) through 2030**. — [DPL News](https://dplnews.com/?p=268804); [BBVA Research](https://www.bbvaresearch.com/publicaciones/colombia-innovar-o-quedar-atras-inteligencia-artificial-como-clave-del-desarrollo/)
- MinCiencias' **ColombIA Inteligente 2026** call (COP 24 billion, up to COP 2 billion per project, opened 13 Mar 2026) was **terminated as "terminación anormal"** because of failures in the selection process (Resolución 0736-2026, effective 6 Aug 2026). — [El Espectador](https://www.elespectador.com/ciencia/minciencias-acabo-la-convocatoria-colombia-inteligente-2026-por-fallas-en-el-proceso/); [MinCiencias](https://minciencias.gov.co/convocatorias/convocatoria-colombia-inteligente-2026)
- **No Colombian sovereign LLM** turned up in searches of MinCiencias and press. Colombian AI startup deals are small: Hunty raised US$1M led by Cometa (Aug 2025), and Innovaitors reports US$1M in 2026 revenue (company figures). Colombia's whole ecosystem raised a record **US$857M in 131 deals in 2025**, according to the Colombia Tech Report 2026; another source says US$668M. — [Ecosistema Startup](https://ecosistemastartup.com/?p=94023); [Blu Radio](https://www.bluradio.com/economia/innovaitors-la-startup-colombiana-de-inteligencia-artificial-que-ya-factura-us-1-millon-en-2026-so35); [Cuántico VP](https://reports.cuanticovp.com/colombias-top-startups-to-watch-for-2026-according-to-cuantico-vp/)

**Rest of LatAm safety community**
- **BAISH** (Buenos Aires AI Safety Hub, UBA) has a couple hundred members. Its members have published on CoT monitorability, debate, CBRN-eval robustification and related topics. **AISAR** offers 6-month scholarships. **Condor Camp** (Brazil-founded) has wound down. **Open Philanthropy (now Coefficient Giving)** is the main funder of regional safety capacity, at roughly **$800K** across a handful of grants (the author's estimate). National science councils fund no identifiable safety-specific lines. — [EA Forum map, Jun 2026](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- The author's conclusions on gaps: **no permanent university-based technical alignment lab in LatAm**; the pipeline lacks senior researchers; there is "no Spanish-language safety benchmark at MiJaBench's scale"; there is "no indigenous-language jailbreak or hate-speech benchmark"; LatAm statutes copy the EU AI Act; and dependence on foreign EA philanthropy is fragile. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)

**Global South comparators**
- **AISI network:** no LatAm government runs an AISI or is a member or observer of the network; Kenya is the only Global South member (EA Forum, Jun 2026). The network's multilingual joint test (report Jan 2026) involved Singapore, Japan, Australia, Canada, the EU, France, Kenya, South Korea and the UK. The network has since been renamed the International Network for Advanced AI Measurement, Evaluation and Science. — [arXiv 2601.15706](https://arxiv.org/abs/2601.15706)
- **Sarvam (India):** selected in Apr 2025 under the IndiaAI Mission to build India's first sovereign LLM. It showed 30B and 105B models at the AI Impact Summit in Feb 2026. — [YourStory, Apr 2025](https://yourstory.com/2025/04/india-taps-sarvam-build-sovereign-large-languag); [YourStory, Feb 2026](https://yourstory.com/2026/02/sarvam-ai-unveils-two-new-large-language-models)
- **AI Singapore** released **SEA-LION Guard v2**, a Southeast Asian safety/moderation model family fine-tuned from Gemma. — [LLM Reference (secondary)](https://www.llmreference.com/model/sea-lion-guard-v2-31b). This is the closest analogue to a "regional safety classifier" product.
- **Singapore IMDA's AI Safety Red Teaming Challenge:** 350+ participants across 9 Asia-Pacific countries tested 4 LLMs for bias in English and regional languages. — [Singapore AISI](https://sgaisi.sg/resources/improving-methodologies-for-llm-evaluations-across-global-languages-evaluation-report/)
- **Lelapa AI (South Africa):** **InkubaLM-0.4B** covers 5 African languages on 2.4B tokens, using Microsoft AI for Good compute credits. — [arXiv 2408.17024](https://arxiv.org/html/2408.17024v2). Funding figures conflict: a $2.5M seed in 2023 vs "$41.3M total" in a Mozilla Ventures blog. — [MIT Tech Review, Nov 2023](https://www.technologyreview.com/2023/11/17/1083637/lelapa-ai-african-languages-vulavula/); [Mozilla Ventures](https://mozilla.vc/?p=520)
- **Masakhane:** a grassroots community of 2,000+ African NLP researchers. Its **African Languages Hub** launched in Apr 2025 and issued a Jan 2026 RFP to scale AI for 50 African languages, open only to Africa-based organizations. — [HapaKenya, 12 Jan 2026](https://hapakenya.com/2026/01/12/masakhane-hub-launches-landmark-funding-initiative-to-scale-ai-for-50-african-languages/)
- **Cohere Labs Aya:** the Aya Red-teaming dataset is described under Q2.
- **Participatory localized red-teaming** in Indian cities (FAccT '26) surfaced culturally specific text-to-image harms. — [arXiv 2605.19190](https://arxiv.org/html/2605.19190)

**Commercial competitors (often overlooked)**
- **Appen** published a professional es-MX vs en-US jailbreak study in May 2026 (see Q2). **Lilt** is recruiting freelance "AI Red Team Engineers – Spanish, Latin America." **Mercor** is recruiting Spanish AI-safety red-teamers (see Q4). — [arXiv 2605.23157](https://www.emergentmind.com/papers/2605.23157); [Lilt posting](https://www.remoterocketship.com/company/lilt/jobs/ai-red-team-engineer-spanish-latin-america-argentina-remote)

### Inferences
- The competitive space for a **professional, institutional LatAm safety evaluator** is nearly empty. What exists is either (a) volunteer/hackathon communities with no continuity, which are potential talent pipelines and partners rather than competitors, or (b) labor marketplaces that sell individual Spanish-speaking red-teamers by the hour without methodology, IP or institutional standing.
- The likeliest direct competitors are **CENIA** (if it adds a safety track to LatamGPT), **AKCIT/UFG and USP** in Brazil (Portuguese, with Microsoft money), **Spanish academic groups** around ALIA/BSC (Peninsular Spanish), and **Appen/Lilt/Mercor/Scale** (commercial Spanish red-teaming). None is Colombia-based or focused on Colombian or Andean contexts.
- AI Safety Colombia is the closest local actor. A new lab should treat it as a **partner and recruiting funnel, not a rival**, or should consider whether the "lab" is in effect a professionalization of that community.
- Colombian public funding is real (CONPES ~US$116M through 2030) but unreliable in execution (the cancelled ColombIA Inteligente call, the archived AI bill). Public contracts should be treated as upside, not the base business.

### Gaps
- I could not confirm the exact list of Colombian institutions that contributed to LatamGPT, or whether CENIA plans a safety or red-teaming workstream for future LatamGPT versions.
- I did not find recent independent reporting on Cohere Labs, Masakhane, AI4Bharat or Lelapa doing **safety** evaluation (as opposed to capability or NLP work) in 2026.
- I found no evidence that Brazil's announced environmental AISI is operating as of Oct 2026.
- I could not verify the Mexico Business News "national LLM" headline.

---

## Q2. Evidence on the multilingual safety gap (non-English, Spanish/LatAm dialects, Portuguese, indigenous languages)

### Takeaway
The gap is **large and well documented for low-resource languages**, including the South American indigenous language **Guarani**. It is **small, mixed or attack-dependent for Spanish**, a high-resource language. In 2026 professional testing, text jailbreaks such as role-play were *less* effective in Mexican Spanish than in English, while image-based attacks were *more* effective. The defensible Spanish story is therefore not "Spanish guardrails are broken." It is "**culturally local harms, dialect/slang, multimodal and agentic settings, and local threat scenarios are untested**," and safety rankings do not transfer across languages. Indigenous-language safety is essentially unstudied apart from one language in one 2023 paper.

### Cited Findings

**Foundational multilingual-jailbreak evidence**
- **Yong, Menghini & Bach, "Low-Resource Languages Jailbreak GPT-4"** (arXiv, 3 Oct 2023; rev. Jan 2024) translated AdvBench prompts and measured GPT-4 bypass rates:

  | Group | Language | Bypass rate |
  |---|---|---|
  | Low-resource | Zulu | 53.08% |
  | Low-resource | Scots Gaelic | 43.08% |
  | Low-resource | Hmong | 28.85% |
  | Low-resource | **Guarani** | **15.96%** |
  | Low-resource | Combined ("any of the four") | **79.04%** |
  | Mid-resource | Combined | 21.92% |
  | High-resource | Combined | 10.96% |
  | High-resource | Italian | 0.58% |
  | Baseline | English | 0.96% |

  Source: [arXiv 2310.02446 (HTML v2)](https://arxiv.org/html/2310.02446v2). Guarani is the only Latin American indigenous language in this canonical paper.
- **XSafety** (Wang et al., "All Languages Matter," arXiv Oct 2023, ACL 2024 Findings) covers 10 languages: "all LLMs produce significantly more unsafe responses for non-English queries than English ones." Its prompting method cut ChatGPT's non-English unsafe rate from 19.1% to 9.7%. — [arXiv 2310.00905](https://arxiv.org/abs/2310.00905). SafetyPrompts.com lists XSafety and AyaRedTeaming as including Spanish (per search snippet; I did not verify the XSafety language list directly). — [SafetyPrompts](https://safetyprompts.com/)
- **MultiJail** (Deng et al., ICLR 2024) covers zh, it, vi (high-resource), ar, ko, th (medium) and bn, sw, jv (low). It includes **no Spanish or Portuguese**. — [GitHub DAMO-NLP-SG](https://github.com/DAMO-NLP-SG/multilingual-safety-for-LLMs)
- **PolygloToxicityPrompts** (Jain et al., COLM 2024) has 425K prompts in 17 languages and benchmarked 60+ LLMs. It found that **toxicity increases as language resources decrease** and as model size increases. It "does not extend to low-resource languages due to the lack of toxicity detection tools." — [arXiv 2405.09373](https://arxiv.org/pdf/2405.09373)
- **Aya Red-teaming** (Cohere, "Multilingual Alignment Prism," Jun 2024) has 7,419 prompts written by **compensated native speakers** in 8 languages. **Spanish has 782 prompts, 65% "global" and 35% "local" harms.** Overall, 34% of prompts are local harms, which shows that a large share of harm is culture-specific. — [arXiv 2406.18682 (HTML)](https://arxiv.org/html/2406.18682v2)
- **M-ALERT** translates English red-teaming prompts into 5 languages including Spanish, at 15K prompts per language. It is translation-based and European-leaning, and its category labels have no per-language cultural validation. — [Pith summary of arXiv 2412.15035 (secondary)](https://pith.science/paper/2412.15035)
- The **AISI network's joint multilingual test** (report Jan 2026) used 6,000+ translated prompts in 10 languages: Cantonese, English, Farsi, French, Japanese, Korean, Kiswahili, Malay, Mandarin and Telugu. It found that "safeguard robustness differs across languages and harm types" and that **LLM-judge reliability differs from humans**. It recommended culturally contextualized translations. **Spanish and Portuguese were not included.** — [arXiv 2601.15706, 22 Jan 2026](https://arxiv.org/abs/2601.15706)

**Spanish- and LatAm-specific evidence (the nuance)**
- **Appen, "Same Model, Different Weakness"** (arXiv 2605.23157, May 2026):
  - Tested Claude Sonnet 4.5, GPT-5, Pixtral Large and Qwen Omni in **en-US vs es-MX**, with professionally translated prompts and 9 native-speaker annotators per language.
  - **All five linguistic attack techniques were *less* effective in es-MX.** Role-play showed the largest drop (OR 0.45).
  - **Toxic-image attacks were *more* effective in es-MX** (OR 1.58).
  - **Safety rankings were not preserved across languages**: Qwen Omni became the most vulnerable model for es-MX.
  - Source: [Emergent Mind summary](https://www.emergentmind.com/papers/2605.23157); [Moonlight review](https://www.themoonlight.io/en/review/same-model-different-weakness-how-language-and-modality-reshape-the-jailbreak-attack-surface-in-frontier-mllms)
- **Regional Spanish slang:** a small project adapted 20 HarmBench prompts into six Spanish variants (Guadalajara Mexican, Rioplatense, Uruguayan, Chilean, etc.) and reports that slang sometimes got past safety judges. The sample is small and the source informal. — [PDF](https://pys8vc40ox3z7qxp.public.blob.vercel-storage.com/files/38b4e6bc47b89b86-M-Safety-Across-Intra-Language-Variations_-A-Study-of-Regional-Spanish-Slang.pdf). Related Apart hackathon projects in Jun 2026: "Slang Bypass" (Mexican slang jailbreaks, Mérida), "Los peajes de los de abajo" (Colombian slang, Bogotá), and "¿Por qué los agentes obedecen? La dirección de rechazo se debilita en formato agéntico" (the refusal direction weakens in agentic format). — [Apart](https://apartresearch.com/sprints/global-south-ais-hackathon-2026-06-19-to-2026-06-21); [AI Safety Colombia](https://aisafetycolombia.org/investigacion)
- **SESGO** (arXiv 2509.03329, 2025) has 4,156 prompts built from Latin American sayings to measure stereotype bias. Models answer more incorrectly in Spanish. It is a bias benchmark, not a harmful-request benchmark. — [Pith summary](https://pith.science/paper/2509.03329)
- **XL-SafetyBench** covers 10 country–language pairs with locally generated adversarial prompts. It includes Spain but apparently no LatAm country, and its ablation found local-language and English prompts gave near-identical results. — [arXiv 2605.05662](https://arxiv.org/pdf/2605.05662)
- **ALIA red-teaming:** 37.9% of 670 Spanish/Basque conversations were inappropriate. Basque produced almost as many failures as Spanish despite far fewer conversations. — [ar5iv 2503.10192](https://ar5iv.labs.arxiv.org/html/2503.10192)
- **Portuguese:** MiJaBench (AKCIT/UFG) found that refusals depend on which group is targeted. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map). A 2026 EAMT paper compares the safety of 5 models in EN vs PT via red-teaming. — [ACL Anthology 2026.eamt-1.46](https://aclanthology.org/2026.eamt-1.46/)
- 2026 literature is growing fast. Examples: a systematic review of low-resource-language safety alignment ([arXiv 2608.14626](https://arxiv.org/pdf/2608.14626)), "Minionese," a multilingual safety benchmark with a mechanistic study that reports fine-tuning attacks transfer across languages ([arXiv 2607.10112](https://arxiv.org/pdf/2607.10112)), and TukaBench for African languages ([arXiv 2606.01322](https://arxiv.org/pdf/2606.01322)). None centers on LatAm.

**Indigenous and Creole languages (Colombia and the Americas)**
- Colombia has **68 native languages: 65 indigenous, 2 Creoles (Palenquero of San Basilio; San Andrés–Providencia Creole) and Romani**, according to the Ministry of Culture as cited by Radio Nacional. Another count gives 69 including sign language. These languages are protected by **Ley 1381 de 2010**. A UNESCO-atlas-based study rates Palenquero "endangered" and San Andrés Creole "vulnerable." — [Radio Nacional](https://radionacional.co/cultura/colombia-lenguas-12-de-octubre); [Cambio, Aug 2025](https://cambiocolombia.com/cultura/articulo/2025/8/cuantas-lenguas-se-hablan-en-colombia-y-que-se-debe-nuestra-diversidad-linguistica); [Ley 1381 text](https://normograma.mintic.gov.co/docs/pdf/ley_1381_2010.pdf); [Dialnet](https://dialnet.unirioja.es/descarga/articulo/8071819.pdf)
- **AmericasNLP 2025** (5th workshop, NAACL, 4 May 2025) ran an MT shared task between Spanish and 13 indigenous languages, adding **Awajún and Wayuunaiki** (Wayuunaiki is spoken in La Guajira, Colombia/Venezuela). In total it covered 14 languages, with 11 teams and 26 systems. Its topics explicitly include "language activism, revitalization, and **sovereignty**." — [AmericasNLP 2025 Call](https://turing.iimas.unam.mx/americasnlp/AmericasNLP_Call_2025.pdf); [workshop page](https://turing.iimas.unam.mx/americasnlp/2025_workshop.html)
- An EACL 2026 paper measures LLM linguistic competence on 13 indigenous LatAm languages. Quechua, Guarani, Aymara, Nahuatl and Wayuu were the most reliably identified. — [ACL Anthology 2026.eacl-short.21](https://aclanthology.org/2026.eacl-short.21.pdf). A NAACL 2024 survey finds research concentrated on Quechua over Nahuatl, Aymara and Guarani. — [arXiv 2404.05365](https://arxiv.org/pdf/2404.05365)
- The Jun 2026 EA Forum map states there is **"no indigenous-language jailbreak or hate-speech benchmark."** — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map). I found no published jailbreak study in Quechua, Nahuatl, Wayuunaiki or any Colombian indigenous language or Creole beyond Yong et al.'s Guarani results. The only indigenous project in the Jun 2026 hackathon was an ethics framework for Guna (Panama).

**Frontier lab system cards**
- Anthropic's **Claude Sonnet 4.6 system card** is described as the first to include multilingual evaluations, measuring the accuracy gap between English and several low-resource languages. — [Anthropic system card PDF](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf) (identified via search; I did not read the full section)
- A third-party summary of the **Mythos Preview** card reports harmlessness tested in **7 languages: Arabic, English, French, Hindi, Korean, Mandarin and Russian**, with minimal differences between them. **Spanish and Portuguese are absent from that list.** — [hugobowne.github.io summary (secondary)](https://hugobowne.github.io/mythos-preview-model-card/sources/08-appendix)
- The Claude 2 model card (2023) said training data was ~10% non-English and that performance was weaker on low-resource languages. — [Claude 2 model card](https://www-cdn.anthropic.com/5c49cc247484cecf107c699baf29250302e5da70/claude-2-model-card.pdf)
- **MLCommons AILuminate** safety benchmark covers **English, French and Chinese** text-to-text, with Hindi and Chinese attacks in development. Its Mar 2026 roadmap names no Spanish or Portuguese. — [MLCommons AILuminate](https://mlcommons.org/benchmarks/ailuminate/); [MLCommons, Mar 2026](https://mlcommons.org/2026/03/airr-multilingual-apac)

### Inferences
- **Spanish is a high-resource language for frontier models.** A naive "Spanish jailbreak rates are higher" pitch is weak and partly contradicted by the 2026 Appen data. The defensible claims are:
  1. **ranking instability**: a model that is safe in English is not necessarily safe in es-CO;
  2. **local harms**: about 35% of Spanish Aya red-team prompts were local;
  3. **multimodal and agentic surfaces**, where the Spanish gap appears to be larger;
  4. **LLM-as-judge unreliability** in non-English, which creates demand for native human evaluation;
  5. **the absence of Spanish/Portuguese from every flagship institutional exercise**: the AISI network test, AILuminate and the Mythos 7-language harmlessness set.
- The **strongest** empirical gap is in indigenous and low-resource languages (Guarani 16% alone; combined low-resource 79% in 2023). But these numbers are on GPT-4 from 2023, and newer models have likely improved. A fresh measurement on 2026 frontier models in Wayuunaiki, Nasa Yuwe, Embera, Palenquero, Creole, Quechua/Inga and Guarani would itself be a publishable, first-of-its-kind result.
- **Colombian Spanish specifically** (paisa, costeño, rolo and Pacific varieties; conflict and narco slang such as "vacuna," "boleteo" and "falso positivo") is untested in any published benchmark I found.

### Gaps
- I did not find Spanish-specific numbers in official OpenAI or Google system cards, and I did not read the full multilingual sections of Anthropic's official cards.
- I could not confirm whether Aya's Spanish prompts were written by Spain-based or LatAm-based speakers.
- I found no 2025–2026 replication of Yong et al. on current frontier models with LatAm indigenous languages.
- There is no data on how many Colombian indigenous-language speakers actually use LLMs, which is the misuse-risk base rate.

---

## Q3. Candidate moats: evidence for and against, who could copy them, and how fast

### Takeaway
No single moat is strong alone. The most defensible combination is **(3) local misuse/threat evaluations (elections, extortion, voice-clone fraud, armed-group dual-use, transitional justice)**, built on **(2) trust-gated indigenous and Creole partnerships** as a long-term research flagship, and sold through **(1) Spanish/LatAm eval products**, with **(4) a government technical-partner role** as the distribution channel. Moat (5), cost and time zone, is an enabler that anyone can copy. Moat (6), biodiversity, is a distraction for a safety brand. Moat (7), interpretability on small Spanish models, is a credibility and talent magnet but not defensible.

### Cited Findings (evidence relevant to each moat)

**Moat 1 – Spanish and LatAm safety evals, red-teaming and alignment data**
- Demand exists at the labor level. Mercor posted a "Bilingual Spanish Generalist Expert – AI Safety" red-team contract at **$43–47/hr (4 Sep 2026)**. Lilt is recruiting "AI Red Team Engineers – Spanish, Latin America." A Dice posting pays **$26/hr** for an EN/ES red-teamer. — [Remowork/Mercor](https://remowork.life/jobs/6a9b13b896fca3a67e925140/bilingual-spanish-generalist-expert-ai-safety); [Lilt](https://www.remoterocketship.com/company/lilt/jobs/ai-red-team-engineer-spanish-latin-america-argentina-remote); [Dice](https://www.dice.com/job-detail/55e78b5c-a831-4b46-b44c-de84d19594c9)
- Commercial vendors already produce research-grade Spanish red-teaming (Appen's es-MX study, May 2026). — [arXiv 2605.23157](https://www.emergentmind.com/papers/2605.23157)
- Benchmark gap: there is "no Spanish-language safety benchmark at MiJaBench's scale." — [EA Forum map, Jun 2026](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map). Spanish is absent from AILuminate ([MLCommons](https://mlcommons.org/benchmarks/ailuminate/)) and from the AISI network's multilingual test ([arXiv 2601.15706](https://arxiv.org/abs/2601.15706)).
- **Who could copy it:** Appen, Lilt, Mercor, Scale/Outlier and Surge (in months, since they already have Spanish rater pools); Spanish academic groups (ALIA red-teamers); MLCommons (if it adds Spanish); frontier labs' in-house teams (Anthropic already added multilingual evals in the Sonnet 4.6 card).

**Moat 2 – Indigenous and low-resource language safety through community partnerships**
- This has the largest documented gap (Yong et al.: Guarani 15.96%, low-resource combined 79.04% vs English 0.96%). — [arXiv 2310.02446v2](https://arxiv.org/html/2310.02446v2)
- No indigenous-language jailbreak or hate-speech benchmark exists. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- Legal protection of 65 indigenous languages and 2 Creoles comes from Ley 1381/2010. — [Radio Nacional](https://radionacional.co/cultura/colombia-lenguas-12-de-octubre); [Ley 1381](https://normograma.mintic.gov.co/docs/pdf/ley_1381_2010.pdf)
- The AmericasNLP community (UNAM, PUCP, Universidad de la República) treats language **sovereignty** as an explicit research theme and added Wayuunaiki in 2025. — [AmericasNLP 2025](https://turing.iimas.unam.mx/americasnlp/AmericasNLP_Call_2025.pdf). The Humboldt Institute's AI-for-biodiversity paper proposes FAIR and CARE principles for Colombian data (per a secondary review). — [arXiv 2503.14543](https://arxiv.org/pdf/2503.14543)
- Masakhane shows a model for this: a community-owned NLP network with 2,000+ researchers whose funding hub restricts eligibility to Africa-based organizations (Jan 2026). — [HapaKenya](https://hapakenya.com/2026/01/12/masakhane-hub-launches-landmark-funding-initiative-to-scale-ai-for-50-african-languages/)
- **Who could copy it:** AmericasNLP academic groups (UNAM in Mexico, PUCP in Peru), CENIA/LatamGPT, and Cohere Labs (Aya community). Trust takes years to build. Frontier labs could machine-translate prompts within weeks, but would lack consent, community validation and cultural harm taxonomies.

**Moat 3 – Conflict, peacebuilding, elections, disinformation and organized-crime misuse**
- **2026 Colombian elections:**
  - Kaspersky warned of fake WhatsApp polls, AI-manipulated videos and cloned audio before the first round. — [Vanguardia, 26 May 2026](https://www.vanguardia.com/politica/elecciones/2026/05/26/elecciones-en-colombia-2026-como-evitar-fraudes-y-estafas-digitales-segun-expertos/)
  - A post-31 May review identified false fraud claims against the Registraduría, fabricated attacks and fake polls. It cites Kaspersky data that 50% of Colombians have received false content via WhatsApp or Telegram. — [ImpactoTIC](https://impactotic.co/micrositios-tic/soy-digital/desinformacion-electoral-colombia-ia-campanas/)
  - Lupa documented AI-generated or manipulated content in the second round, including suspected voice cloning. — [Lupa](https://lupa.com.ec/verificaciones/elecciones-colombia-2026/)
  - An international observation mission alleged a coordinated AI/bots/deepfakes operation ("Proyecto Júpiter"). This is unverified. — [PSI](https://publicservices.international/resources/news/colombia-misin-de-observacin-y-acompaamiento-internacional-de-las-elecciones-presenta-informe-tcnico-?id=16655&lang=es)
  - Colombia lacks a Brazil-style rule requiring candidates to label AI content. — [UNIMINUTO Radio](https://www.uniminutoradio.com.co/elecciones-en-la-era-de-los-deepfakes-como-la-desinformacion-con-inteligencia-artificial-amenaza-la-democracia-en-colombia/)
- **Extortion and fraud:**
  - Colombia's **Ley 2502 de 2025** added an aggravating factor for AI-enabled impersonation. — [Colombia One, May 2026](https://m.colombiaone.com/wordpress/c/0/i/227042/scam-sounds-your-family-how-ai-voice-cloning-works-and-how-stop-it); [Diario del Sur](https://www.diariodelsur.com.co/?p=467856). Diario del Sur's headline says voice-clone scams "grew 30% in 2025."
  - Mexico dismantled an extortion network using AI clones of judges' and governors' voices (AFP, Oct 2026). — [Jamaica Observer/AFP, 9 Oct 2026](https://www.jamaicaobserver.com/2026/10/09/mexico-busts-extortion-network-used-ai-clone-vip-voices/)
  - Peru had 55 audio-deepfake fraud/extortion cases. — [InSight Crime](https://insightcrime.org/news/fraud-groups-use-deepfakes-to-enhance-imitation-scams-in-peru/)
  - The OECD AI incident monitor records LatAm organized crime using deepfakes, voice cloning and automated phishing. — [OECD.AI](https://oecd.ai/en/incidents/2024-10-04-de25)
  - Digital identity theft across LatAm reportedly rose 84% from 2024 to early 2026 (Finnovista, via a secondary source). — [Latin Times](https://www.latintimes.com/ai-deepfake-scams-are-draining-remittances-latino-families-send-home-heres-how-fight-back-598845)
- **Conflict and peace data assets:**
  - The Truth Commission handed ~**15,000 testimonies and 1,195 reports** to the JEP and the Archivo General de la Nación on **26 May 2023**. — [Cambio](https://cambiocolombia.com/pais/articulo/2023/5/la-comision-de-la-verdad-entrega-su-archivo-documental-la-jep-y-al-archivo-nacional)
  - Javeriana built "Ventana a la Verdad," a chatbot based on Truth Commission work. — [Javeriana](https://www.javeriana.edu.co/pesquisa/inteligencia-artificial-conflicto-2/)
  - Hackathon prototypes already exist: JusticIA (transitional-justice bias benchmark) and ColDron (42 armed-group drone attacks). — [Apart](https://apartresearch.com/sprints/global-south-ais-hackathon-2026-06-19-to-2026-06-21)
- **Who could copy it:** frontier lab threat-intelligence teams (they monitor influence operations globally but lack local ground truth); regional fact-checkers (Chequeado, Colombiacheck, Lupa) who could add AI evaluation; InSight Crime; Brazilian groups for Portuguese election integrity (the "vigilAI" and "PixTrap" hackathon projects). Replicating local incident data and relationships with fact-checkers and justice institutions would take 1–3 years.

**Moat 4 – Governance and regulatory technical partner for LatAm governments**
- **No LatAm AISI exists.** Bills are EU-style deployment-harm frameworks without AISIs or compute thresholds. — [EA Forum map, Jun 2026](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- **Colombia:**
  - PL 043/2025 was **archived on 19 Jun 2026**, with no debate or vote. — [Uniandes Sistemas de Algoritmos Públicos](https://algoritmos.uniandes.edu.co/proyecto-de-ley-por-medio-del-cual-se-regula-la-inteligencia-artificial-en-colombia-para-garantizar-su-desarrollo-etico-responsable-competitivo-e-innovador-y-se-dictan-otras-disposiciones/); [Contexto](https://contextomedia.com/pagara-colombia-el-precio-de-no-tener-una-ley-para-la-inteligencia-artificial/)
  - New bills are pending, with no AI law in force as of late Oct 2026: PL 025/2026 Cámara (filed 21 Jul 2026), PL 065/2026 Senado, a health-sector AI bill (PL 216/2026), and a defense-sector bill (PL 364/2026, Gaceta Oct 2026). — [Cámara PDF](https://www.camara.gov.co/wp-content/uploads/2026/07/proyectos-ley/documentos/proyecto-36127/P.L.025-2026SC-INTELIGENCIA-ARTIFICIAL.pdf); [Porcontar](https://porcontar.com/blog/ley-inteligencia-artificial-colombia/); [vLex](https://vlex.com.co/vid/proyecto-ley-numero-364-1135848221)
- **Brazil PL 2338/2023:** passed the Senate in Dec 2024 and sits with a Câmara special committee. The vote was postponed to 2026. Câmara president Hugo Motta said in May 2026 that the report was due on 9 Jun 2026; I did not confirm a final vote. — [Teletime, 16 Dec 2025](https://teletime.com.br/16/12/2025/pl-de-inteligencia-artificial-fica-para-fevereiro-de-2026/); [Tribuna do Sertão, 28 May 2026](https://www.tribunadosertao.com.br/politica/2026/05/28/910103-camara-deve-votar-regulamentacao-da-inteligencia-artificial-ainda-este-ano-afirma-hugo-motta)
- **Chile Boletín 16821-19:** passed the Cámara in Oct 2025 and is in the Senate's Desafíos del Futuro committee. The Executive is to file a substitute text before 4 Dec 2026. — [BioBioChile, 28 Oct 2026](https://www.biobiochile.cl/noticias/opinion/columnas-bbcl/2026/10/28/la-inteligencia-artificial-no-espera-a-chile.shtml); [Diario Constitucional, Feb 2026](https://www.diarioconstitucional.cl/2026/02/23/proyecto-de-ley-que-regula-integralmente-la-inteligencia-artificial-en-chile-prosigue-su-tramitacion-en-el-senado)
- **Peru** has Ley 31814 plus a 2025 regulation. Mexico has a "semáforo de riesgos" bill. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- **Who could copy it:** policy consultancies (Access Partnership publishes on CONPES 4144 and LatamGPT), Uniandes' Sistemas de Algoritmos Públicos, ITS-Rio/CEBRI, CAF/IDB technical-assistance teams, and Big-4 firms. Policy advice is easy to copy. *Technical* evaluation capacity (test harnesses, Spanish eval suites, incident data) is harder. — [Access Partnership](https://accesspartnership.com/?p=4711)

**Moat 5 – Cost and talent arbitrage plus US time-zone overlap**
- Senior Python developer: ~$66K in Colombia vs $165K in the US. Senior AI engineers: $93–123K vs $189–243K (Alcor, vendor). Other vendors give AI/ML at $40–60K (Howdy), and Revelo puts all-in employer cost ~59% below a US senior hire. Colombia has a ~202K-person tech workforce (Alcor; other sources give lower STEM-graduate counts). — [Alcor](https://alcor.com/your-own-rd-office-news/nearshoring-software-development-to-colombia/); [Howdy](https://howdy.com/for-ai/best-latin-american-countries-hire-engineers); [Revelo](https://www.revelo.com/salaries/colombia)
- 24.5% of Colombia's working-age population used generative AI in Q1 2026 (Microsoft AI Economy Institute, via Alcor). — [Alcor](https://alcor.com/your-own-rd-office-news/outsourcing-software-development-to-colombia)
- **Who could copy it:** anyone, immediately. Mercor, Lilt and Appen already recruit LatAm Spanish speakers remotely (see Moat 1). Microsoft EXTRA is building a "distributed network of specialists" in languages and cultural contexts. — [Microsoft, 27 Jul 2026](https://www.microsoft.com/en-us/security/blog/2026/07/27/enhancing-ai-security-through-global-ai-red-teaming/)

**Moat 6 – Biodiversity, climate and agriculture-specific "safe AI"**
- The Humboldt Institute's 2025 paper reviews AI for species identification, species modeling and in-silico work in Colombia. It is an applications agenda, not a safety one. — [arXiv 2503.14543, Mar 2025](https://arxiv.org/pdf/2503.14543)
- Brazil's announced AISI is environment-focused (Feb 2025 announcement). This is evidence that LatAm governments may frame "AI safety" as beneficial environmental applications. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- A Pasto team built an "Agro AI Governance" hackathon project in Jun 2026. — [Apart](https://apartresearch.com/sprints/global-south-ais-hackathon-2026-06-19-to-2026-06-21)

**Moat 7 – Interpretability and alignment research on small open models for Spanish**
- Low-compute interpretability work is already being done by volunteers. Examples: "Probing Latent Colombian Identity Inferences in Qwen2.5-7B with Natural Language Autoencoders" (prize winner), "Thought Anchors for Social Bias" in LatAm scenarios (prize winner), and work on the refusal direction weakening in agentic format (Jun 2026). — [AI Safety Colombia](https://aisafetycolombia.org/investigacion)
- Mechanistic multilingual-safety work is growing internationally. "Minionese" (2026) reports that fine-tuning attacks transfer across languages, and LASA (2026) proposes semantic-bottleneck alignment for multilingual safety. — [arXiv 2607.10112](https://arxiv.org/pdf/2607.10112); [arXiv 2604.12710](https://arxiv.org/pdf/2604.12710)
- BAISH members already publish on CoT monitorability and related topics. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- **Who could copy it:** any MATS, Apart or BAISH researcher, in weeks. There is no data or relationship barrier.

### Inferences: moat-by-moat scorecard

| # | Moat | Evidence of need | Evidence of willingness to pay | Copyable by | Time to copy | Defensibility |
|---|---|---|---|---|---|---|
| 1 | Spanish/LatAm safety evals | Medium (high-resource language; rankings unstable; local harms ~35% of Spanish Aya prompts; Spanish absent from AISI/AILuminate) | **Proven at labor level** ($26–47/hr contracts) | Appen, Lilt, Mercor, Scale, Surge; MLCommons; frontier in-house | 3–9 months | **Low alone.** Medium if tied to Colombian/Andean dialects + local threat data + published, maintained benchmark |
| 2 | Indigenous & Creole safety | **Highest** (Guarani 16%; LRL 79% in 2023; zero benchmarks) | Weak/unproven (grants, not contracts) | AmericasNLP groups, CENIA, Cohere Aya community | **2–5 years** (trust, consent, Ley 1381, community validation) | **High**, but small market and ethical risk |
| 3 | Conflict / elections / crime misuse evals | High (2026 election deepfakes; voice-clone extortion; Ley 2502/2025; armed-group drones) | Medium (frontier trust-and-safety and threat-intel teams, platforms, election bodies, banks) | Frontier threat-intel teams; fact-checkers; InSight Crime; Brazilian groups | 1–3 years for local incident data and institutional relationships | **Medium–High** (data network effects plus local trust) |
| 4 | Government technical partner | High need (no AISI, bills pending) | **Weak/fragile** (archived bill; cancelled ColombIA Inteligente call) | Consultancies, Uniandes, ITS-Rio, CAF/IDB | 6–18 months for advisory; longer for technical capacity | Medium; first-mover regulatory positioning if a Colombian law creates an evaluator role |
| 5 | Cost/time-zone arbitrage | n/a | Yes (nearshore market) | Everyone | Immediate | **None** (an enabler, not a moat) |
| 6 | Biodiversity/agri safe AI | Low for *safety* | Some (conservation/climate grants) | Any applied-AI group | Months | **Distraction** for a safety brand; possible grant hook only |
| 7 | Interp on small Spanish models | Medium (research value) | Low (grants/fellowships) | Any MATS/Apart researcher | Weeks | **Low** (credibility and talent magnet, not a moat) |

- **Strongest combination:** "**The Andean/Colombian safety evaluator**." This joins a maintained Colombian-Spanish plus indigenous/Creole harm benchmark (1+2) with a **living local misuse/incident dataset** covering elections, extortion, voice cloning and armed-group dual use (3), sold to frontier labs' safety teams and platforms, and offered to the Colombian state as its de facto technical evaluator once a law passes (4). The pieces reinforce each other:
  - incident data feeds benchmark realism;
  - community trust unlocks indigenous data;
  - government standing raises credibility with labs;
  - lab contracts fund the community work.
- **Which pieces frontier labs could absorb:** labs can easily add Spanish to their internal harmlessness suites (Anthropic already added multilingual evals) and hire Spanish raters through Mercor. They **cannot quickly obtain** consented indigenous-language data, Colombian incident ground truth, relationships with the JEP, fact-checkers or the Registraduría, or legal standing as a national evaluator.
- **Main risk to the thesis:** the measured Spanish gap may keep shrinking as frontier multilingual training improves, which commoditizes Moat 1. The lab's durable value must therefore rest on *local context and data access*, not on "Spanish is under-tested."
- **Ethical caution for Moat 2:** publishing jailbreak datasets in endangered languages could expose communities to harm or misuse. Under CARE-style governance, communities must have authority to control the data. That is part of the moat: it is costly to do right, and frontier labs will not want to do it themselves.
- **Moat 7 is best positioned as** the lab's research credibility layer, for example mechanistic studies of why refusal transfers or fails across Spanish dialects and indigenous languages. It is a recruiting magnet, not a revenue line.

### Gaps
- I found no public contract value for a frontier lab buying a *regional* safety eval from a third-party institution, as opposed to hourly rater labor.
- I found no evidence of Colombian state bodies (Registraduría, CNE, Fiscalía, MinTIC) procuring AI-misuse evaluations.
- I did not research consent and benefit-sharing precedents with specific Colombian indigenous authorities (ONIC, Wayuu organizations) for language data.

---

## Q4. Demand signals: have frontier labs or governments paid for multilingual or regional safety evaluation?

### Takeaway
There is **clear evidence of paid demand for Spanish-language safety labor**: contractor red-teaming at $26–47/hr in 2026, OpenAI's compensated Red Teaming Network, and Microsoft's EXTRA academic gifts. Philanthropic funders have paid for Global South safety field-building (Schmidt Sciences, Open Philanthropy at ~$800K in LatAm). But **no flagship institutional multilingual safety exercise has yet included Spanish or Portuguese**, and **no LatAm government has bought safety evaluations**. The market gap and the purchasing gap are the same thing: buyers exist for labor, not yet for institutional LatAm evaluation products.

### Cited Findings
- **OpenAI Red Teaming Network** (announced Sep 2023): members are **compensated** per project; focus areas include "Languages and Linguistics"; work is under NDA. The application window closed on 1 Dec 2023. — [OpenAI](https://openai.com/index/red-teaming-network/)
- **Microsoft EXTRA (27 Jul 2026):** unrestricted gifts to 18 university labs on 6 continents, plus a distributed specialist network covering "languages, cultural contexts." USP is the only LatAm lab named. — [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/07/27/enhancing-ai-security-through-global-ai-red-teaming/)
- **Spanish safety contractor market (2026):** Mercor at $43–47/hr (4 Sep 2026); Lilt "AI Red Team Engineer – Spanish, Latin America"; Dice at $26/hr. — [Mercor posting](https://remowork.life/jobs/6a9b13b896fca3a67e925140/bilingual-spanish-generalist-expert-ai-safety); [Lilt](https://www.remoterocketship.com/company/lilt/jobs/ai-red-team-engineer-spanish-latin-america-argentina-remote); [Dice](https://www.dice.com/job-detail/55e78b5c-a831-4b46-b44c-de84d19594c9)
- **Appen** self-funded and published an es-MX frontier-model jailbreak study (May 2026), presumably as marketing for its evaluation services. — [Emergent Mind](https://www.emergentmind.com/papers/2605.23157)
- **AISI network joint testing:**
  - Nov 2024 (first exercise);
  - Feb 2025 (Paris), led by Singapore, Japan and the UK, with Mistral Large and Gemma 2 27B and ~6,000 translated prompts;
  - Jun 2025 / Jan 2026 report covering 10 Asian, European and African languages, **no Spanish or Portuguese**;
  - a third, agentic exercise (date unconfirmed), reportedly with low agent pass rates and no consistent cross-language pattern (secondary summary).
  - Sources: [Japan AISI PDF](https://aisi.go.jp/assets/pdf/International-Network-of-AI-Safety-Institutes-Joint-Testing-Exercise-Improving-Methodologies-for-AI-Model-Evaluations-Across-Global-Languages.pdf); [arXiv 2601.15706](https://arxiv.org/abs/2601.15706); [Moonlight review of agentic report (secondary)](https://www.themoonlight.io/review/improving-methodologies-for-agentic-evaluations-across-domains-leakage-of-sensitive-information-fraud-and-cybersecurity-threats)
- **Singapore IMDA** red-teaming challenge: 350+ participants, 9 APAC countries, 4 LLMs, bias in regional languages. — [SG AISI](https://sgaisi.sg/resources/improving-methodologies-for-llm-evaluations-across-global-languages-evaluation-report/)
- **MLCommons AILuminate:** English, French and Chinese, with Hindi in development. Prompts are "adapted, not merely translated" per region. There is no Spanish or Portuguese on the Mar 2026 roadmap. — [MLCommons](https://mlcommons.org/benchmarks/ailuminate/); [MLCommons Mar 2026](https://mlcommons.org/2026/03/airr-multilingual-apac)
- **Philanthropy:**
  - The Apart "Global South AI Safety Hackathon" (19–21 Jun 2026) was supported by **Schmidt Sciences**, with 1,547 sign-ups, 216 projects, a dedicated **Latin America track**, and a hackathon-to-fellowship-to-placement pipeline. — [Apart](https://apartresearch.com/sprints/global-south-ais-hackathon-2026-06-19-to-2026-06-21)
  - Open Philanthropy's LatAm safety grants total ~$800K (estimate). — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map)
- **Public money in the region goes to capability and sovereignty, not safety.** CAF and AWS funded LatamGPT. — [EA Forum map](https://ea.greaterwrong.com/posts/3sL6iB6WzKHJciwta/latin-america-in-search-of-its-stake-in-ai-safety-a-map). Brazil's PBIA is R$23bn. — [Movimento Econômico](https://movimentoeconomico.com.br/tecnologia/2025/02/06/feito-no-piaui-projeto-de-ia-100-em-portugues-vai-ajudar-soberania-do-pais/). Colombia's CONPES is ~US$116M through 2030. — [DPL News](https://dplnews.com/?p=268804)

### Inferences
- **Near-term revenue** for a no-resources lab most plausibly comes from:
  1. subcontracted or direct Spanish and Colombian red-teaming for frontier labs and vendors, at labor rates;
  2. philanthropic grants (Schmidt Sciences, Coefficient Giving / Open Phil, Microsoft-style academic gifts);
  3. later, government technical-assistance contracts funded by CAF or IDB.
- **The pitch to the AISI network / NAAIMES and MLCommons is concrete:** "you have no Spanish or Portuguese, and here is a validated, culturally adapted Spanish (es-CO and Andean) plus indigenous test set with native human annotators." This fills a gap that is documented in their own reports.
- **Labor-rate work alone builds no moat.** It must be structured so the lab keeps methodology and benchmark IP, or at least publishes it, rather than acting as a staffing agency.

### Gaps
- I found no disclosed dollar amounts for frontier-lab contracts with institutional multilingual evaluators.
- I found no information on whether Anthropic, Google DeepMind or OpenAI currently run Spanish-specific external red-teaming cohorts.
- I could not confirm the participants or dates of the AISI network's agentic exercise from the primary source.

---

## Q5. What Anthropic's moat actually is, and what transfers to a tiny lab

### Takeaway
Anthropic's moat combines **enterprise trust** (it led enterprise LLM usage share in mid-2025), **mission-driven talent density and retention** (80% two-year retention), and a **research-to-product loop** in which safety work (system cards, evals) is itself a public trust signal. A tiny Colombian lab cannot copy the compute or the product. It can copy the **mission-as-retention strategy**, **publishing rigorous evaluations as brand-building**, and **becoming the trusted name in one narrow domain**.

### Cited Findings
- Menlo Ventures (mid-2025) put Anthropic at **32% of enterprise LLM usage** vs OpenAI 25% and Google 20%, and **42% in coding**. Caveats: the survey covered ~150 technical decision-makers, and Menlo is an Anthropic investor. Later 2026 figures (~40%) circulating in blogs are unverified. — [Dataconomy, Aug 2025](https://dataconomy.com/2025/08/04/anthropic-leads-enterprise-llms-with-32-market-share/); [Konabayev](https://konabayev.com/blog/llm-market-share/)
- SignalFire's 2025 State of Talent report: **Anthropic 80%** two-year retention vs DeepMind 78%, OpenAI 67% and Meta 64%. SignalFire credits mission alignment ("not just a hiring filter; it's a retention strategy"). — [SignalFire](https://signalfire.com/blog/anthropic-talent-retention). Engineers were reported to be ~8x more likely to move from OpenAI to Anthropic than the reverse. — [Business Insider](https://www.businessinsider.nl/openai-engineers-are-8-times-as-likely-to-join-anthropic-than-the-reverse-a-report-says-heres-why); [Fortune, Jun 2025](https://www.fortune.com/2025/06/03/openai-deepmind-anthropic-loosing-engineers-ai-talent-war)
- Anthropic publishes detailed system cards. Sonnet 4.6 added multilingual evaluations, which shows that the frontier lab both values and internalizes multilingual safety measurement. — [Anthropic system card PDF](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)

### Inferences
- **What transfers to a tiny lab:**
  1. **Mission as a talent moat.** Colombian and LatAm researchers who currently emigrate or join hourly-rate marketplaces could stay for a mission-driven local institution, as the AI Safety Colombia and BAISH communities show. This is an inference from SignalFire's retention thesis.
  2. **Publication as trust.** Anthropic's credibility comes partly from transparent evals. A small lab's equivalent is a public, maintained benchmark with leaderboard results on frontier models, which makes the lab the reference that labs and governments cite.
  3. **Narrow trusted brand.** Anthropic won enterprise trust in a specific use case (coding). The lab should aim to be *the* name for "Colombian/Andean and indigenous-language AI safety and local misuse," not a generalist.
- **What does not transfer:** the compute, frontier model ownership, the product revenue loop and API distribution.
- **Strategic risk:** a frontier lab's own multilingual evals are both a customer signal and a substitute. The lab's offering must be something labs prefer to *buy or cite* rather than build: consented community data, local incident ground truth, and institutional standing in Colombia.

### Gaps
- I did not find 2026 primary data on Anthropic revenue, enterprise share or buyers' stated reasons for choosing it on safety grounds.
- I found no case studies of small Global South safety organizations that became paid evaluation vendors to frontier labs. Lelapa and Masakhane are capability and NLP actors, not safety vendors.
