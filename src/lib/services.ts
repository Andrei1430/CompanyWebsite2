import type { Language } from './translations';

export type ServiceKey =
	| 'wooden-windows'
	| 'window-replacement'
	| 'wooden-doors'
	| 'home-renovation'
	| 'wooden-staircase'
	| 'wooden-kitchens';

export interface ProcessStep {
	name: string;
	text: string;
}

export interface ServiceFaq {
	question: string;
	answer: string;
}

export interface ServiceContent {
	slug: string;
	metaTitle: string;
	metaDescription: string;
	keywords: string;
	heading: string;
	subheading: string;
	intro: string;
	sections: { heading: string; body: string }[];
	features: string[];
	materials: string[];
	process: { title: string; steps: ProcessStep[] };
	faq: ServiceFaq[];
	cta: { title: string; body: string; button: string };
	gallery: { src: string; alt: string }[];
}

export interface Service {
	key: ServiceKey;
	parent: 'services';
	image: string;
	content: Record<Language, ServiceContent>;
}

const galleryFrontDoor = [
	{ src: '/projects/front-door-and-windows/Photo1.jpeg', altKey: 'frontdoor1' },
	{ src: '/projects/front-door-and-windows/Photo2.jpeg', altKey: 'frontdoor2' },
	{ src: '/projects/front-door-and-windows/Photo3.jpeg', altKey: 'frontdoor3' }
];

const galleryBalcony = [
	{ src: '/projects/balcony-window-and-door/Photo1.jpeg', altKey: 'balcony1' },
	{ src: '/projects/balcony-window-and-door/Photo2.jpeg', altKey: 'balcony2' }
];

const galleryStairs = [
	{ src: '/projects/staircase/Photo1.jpeg', altKey: 'stairs1' },
	{ src: '/projects/staircase/Photo3.jpeg', altKey: 'stairs2' }
];

function withAlts(
	gallery: { src: string; altKey: string }[],
	alts: Record<string, string>
): { src: string; alt: string }[] {
	return gallery.map((g) => ({ src: g.src, alt: alts[g.altKey] ?? '' }));
}

export const services: Service[] = [
	{
		key: 'wooden-windows',
		parent: 'services',
		image: '/Cover.jfif',
		content: {
			en: {
				slug: 'wooden-windows',
				metaTitle: 'Custom Wooden Window Frames on Measure — Made in Brussels | TonyGroupe',
				metaDescription:
					'Bespoke wooden window frames with HR++ and triple thermal glass. Crafted in our Brussels workshop, installed across Belgium and the Netherlands. 10-year warranty, ISDE & SVVE subsidy eligible.',
				keywords:
					'wooden window frames, custom wooden windows, kozijnen, châssis bois sur mesure, HR++ glass, triple glazing, made to measure windows, wooden frame manufacturer Brussels',
				heading: 'Custom Wooden Window Frames Made to Measure',
				subheading: 'Solid wood frames with HR++ or triple thermal glass — built in our Brussels workshop, fitted to your exact opening.',
				intro:
					'A well-made wooden window frame outlives PVC and aluminum by decades. We craft each frame to your opening from Nordic pine, spruce or oak, fit it with HR++ or triple-glazed insulating units, and finish it the way you want — natural oil, lacquered colour, or paint-grade primer. Every frame leaves our workshop with SKG3-certified hardware, factory-fitted seals and a 10-year warranty.',
				sections: [
					{
						heading: 'Why solid wood still beats PVC and aluminum',
						body: 'Wood has the lowest U-value per profile depth of any common frame material. It expands and contracts predictably, holds its seal for decades, and ages gracefully — three reasons heritage and characterful homes almost always specify it. With modern thermal-break joints, our wooden frames hit U-values that match or beat premium PVC and aluminum systems.'
					},
					{
						heading: 'Made in Belgium, installed across the Benelux',
						body: 'Our workshop is in Anderlecht (Brussels). We measure your openings on-site, manufacture the frames over 2–3 weeks, then install them in 1–2 days per opening. Installation teams travel anywhere in Belgium and the Netherlands — from Antwerp and Ghent to Amsterdam, Rotterdam and The Hague.'
					},
					{
						heading: 'Subsidy paperwork included',
						body: 'For Dutch clients we prepare the documentation needed for ISDE and SVVE subsidy claims. For Brussels and Walloon clients we provide the technical attestations for Renolution and Wallonie Énergie premium applications.'
					}
				],
				features: [
					'HR++ glass (U ≤ 1.2 W/m²K) or triple glass (U ≤ 0.7 W/m²K)',
					'Nordic pine, spruce or oak frames',
					'SKG3-certified security hardware as standard',
					'Tilt-and-turn, sash, fixed and arched profiles',
					'Factory-fitted weather seals and drainage',
					'10-year manufacturer warranty',
					'ISDE / SVVE / Renolution paperwork included',
					'Made-to-measure to the millimetre'
				],
				materials: [
					'Nordic pine — best price/durability balance',
					'Spruce — light, knot-free, paint-grade',
					'European oak — premium, naturally rot-resistant',
					'Optional thermal-break joints for triple glazing'
				],
				process: {
					title: 'How we install your wooden window frames',
					steps: [
						{
							name: 'Free on-site survey',
							text: 'We come to your home, measure each opening, discuss profile and glass options, and email you a no-obligation quote within 3 working days.'
						},
						{
							name: 'Design sign-off',
							text: 'You approve the shop drawings, glass spec and finish. We order the timber and glass units to your exact spec.'
						},
						{
							name: 'In-workshop manufacturing',
							text: 'Your frames are built in our Brussels workshop over 2–3 weeks. Mortise-and-tenon joinery, factory-applied seals, hardware pre-fitted.'
						},
						{
							name: 'Removal of old frames',
							text: 'On installation day, our team carefully removes the old frames and protects the surrounding wall and floor with covers.'
						},
						{
							name: 'Precision installation',
							text: 'New frames are fitted, levelled and sealed with vapour-tight tape and compressible foam. Most openings take less than a day.'
						},
						{
							name: 'Hand-over and aftercare',
							text: 'We clean the site, walk you through the hardware operation, and hand over the warranty and subsidy documentation.'
						}
					]
				},
				faq: [
					{
						question: 'How long does manufacturing take?',
						answer: 'Typically 2–3 weeks from design sign-off, plus 1–2 weeks lead time for measuring and quote. Large or arched profiles may add a week.'
					},
					{
						question: 'Can you match an existing heritage profile?',
						answer: 'Yes. We can replicate ovolo, lambs-tongue and other traditional mouldings on the new frames so they look identical to the originals — but with modern insulating glass inside.'
					},
					{
						question: 'Do you handle painted or stained finishes?',
						answer: 'Both. We supply primed (for site painting), factory-painted in any RAL colour, or stained and oiled for a natural wood look.'
					}
				],
				cta: {
					title: 'Get a free quote for your wooden window frames',
					body: 'Tell us how many openings, give us a rough size, and we will send you a detailed quote within 3 working days.',
					button: 'Request Free Quote'
				},
				gallery: withAlts(galleryFrontDoor, {
					frontdoor1: 'Custom wooden front door and matching wooden window frames installed in a Belgian townhouse',
					frontdoor2: 'Close-up of HR++ thermal insulating glass in a custom wooden window frame',
					frontdoor3: 'Wooden window frame with SKG3-certified security hardware — TonyGroupe installation'
				})
			},
			nl: {
				slug: 'houten-kozijnen',
				metaTitle: 'Houten Kozijnen op Maat — Gemaakt in Brussel | TonyGroupe',
				metaDescription:
					'Houten kozijnen op maat met HR++ en triple thermisch isolerend glas. Gemaakt in onze Brusselse werkplaats, geïnstalleerd in heel België en Nederland. 10 jaar garantie, ISDE & SVVE subsidie geschikt.',
				keywords:
					'houten kozijnen, kozijnen op maat, houten kozijnen Brussel, houten kozijnen Amsterdam, kozijnen vervangen, HR++ glas, triple glas, houten kozijnen fabrikant België',
				heading: 'Houten Kozijnen op Maat',
				subheading: 'Massief houten kozijnen met HR++ of triple thermisch isolerend glas — gemaakt in onze Brusselse werkplaats, op de millimeter pasgemaakt.',
				intro:
					'Een goed gemaakt houten kozijn gaat decennialang langer mee dan PVC of aluminium. Wij maken elk kozijn op maat van Noorse den, spar of eik, voorzien het van HR++ of triple isolerend glas, en werken het af zoals u wilt — natuurlijke olie, gelakte kleur of grondverf. Elk kozijn verlaat onze werkplaats met SKG3 gecertificeerd beslag, fabrieksmatig aangebrachte afdichtingen en 10 jaar garantie.',
				sections: [
					{
						heading: 'Waarom massief hout beter is dan PVC en aluminium',
						body: 'Hout heeft per profieldiepte de laagste U-waarde van alle gangbare kozijnmaterialen. Het werkt voorspelbaar, behoudt zijn afdichting tientallen jaren en veroudert mooi — drie redenen waarom monumentale en karakteristieke woningen er bijna altijd voor kiezen. Met moderne thermisch onderbroken verbindingen halen onze houten kozijnen U-waarden die premium PVC- en aluminiumsystemen evenaren of verslaan.'
					},
					{
						heading: 'Gemaakt in België, geplaatst in heel de Benelux',
						body: 'Onze werkplaats staat in Anderlecht (Brussel). Wij meten uw kozijnopeningen ter plaatse op, produceren de kozijnen in 2 à 3 weken, en plaatsen ze in 1 à 2 dagen per opening. Onze installatieteams werken in heel België en Nederland — van Antwerpen en Gent tot Amsterdam, Rotterdam en Den Haag.'
					},
					{
						heading: 'Subsidiepapieren inbegrepen',
						body: 'Voor Nederlandse klanten leveren wij alle documentatie aan voor de ISDE en SVVE subsidieaanvragen. Voor Brusselse en Waalse klanten verzorgen wij de technische attesten voor Renolution en Wallonie Énergie premieaanvragen.'
					}
				],
				features: [
					'HR++ glas (U ≤ 1,2 W/m²K) of triple glas (U ≤ 0,7 W/m²K)',
					'Noorse den, spar of eik',
					'SKG3 gecertificeerd veiligheidsbeslag standaard',
					'Draaikiep-, schuifraam-, vast en boogprofielen',
					'Fabrieksmatige weeromslagen en drainage',
					'10 jaar fabrieksgarantie',
					'ISDE / SVVE / Renolution papieren inbegrepen',
					'Op maat tot op de millimeter'
				],
				materials: [
					'Noorse den — beste prijs/duurzaamheid balans',
					'Spar — licht, kwastvrij, geschikt voor schilderen',
					'Europese eik — premium, natuurlijk rotbestendig',
					'Optionele thermisch onderbroken verbindingen voor triple glas'
				],
				process: {
					title: 'Hoe wij uw houten kozijnen plaatsen',
					steps: [
						{
							name: 'Gratis opmeting ter plaatse',
							text: 'Wij komen bij u thuis, meten elke opening op, bespreken profiel- en glasopties en sturen u binnen 3 werkdagen een vrijblijvende offerte.'
						},
						{
							name: 'Ontwerp goedkeuring',
							text: 'U keurt de werktekeningen, glasspecificatie en afwerking goed. Wij bestellen het hout en de glasunits op uw exacte specificatie.'
						},
						{
							name: 'Productie in eigen werkplaats',
							text: 'Uw kozijnen worden in 2 à 3 weken in onze Brusselse werkplaats gemaakt. Pen-en-gatverbindingen, fabrieksmatig aangebrachte afdichtingen, beslag voorgemonteerd.'
						},
						{
							name: 'Demontage oude kozijnen',
							text: 'Op de plaatsingsdag verwijdert ons team de oude kozijnen zorgvuldig en beschermt de omliggende muur en vloer met afdekzeil.'
						},
						{
							name: 'Precieze installatie',
							text: 'De nieuwe kozijnen worden geplaatst, gewaterpast en luchtdicht afgedicht met dampdichte tape en samendrukbaar schuim. De meeste openingen duren minder dan een dag.'
						},
						{
							name: 'Oplevering en nazorg',
							text: 'Wij maken het werk schoon, lopen de bediening van het beslag met u door en overhandigen de garantie- en subsidiedocumenten.'
						}
					]
				},
				faq: [
					{
						question: 'Hoe lang duurt de productie?',
						answer: 'Doorgaans 2 à 3 weken na ontwerpgoedkeuring, plus 1 à 2 weken voor opmeting en offerte. Grote of boogprofielen kunnen een week extra vragen.'
					},
					{
						question: 'Kunt u een bestaand monumentaal profiel kopiëren?',
						answer: 'Ja. Wij kunnen ovolo-, schuinkant- en andere traditionele profileringen overnemen op de nieuwe kozijnen, zodat ze identiek lijken aan de originelen — maar met modern isolerend glas erin.'
					},
					{
						question: 'Verzorgt u ook geschilderde of gebeitste afwerkingen?',
						answer: 'Beide. Wij leveren gegrond (om zelf te schilderen), fabrieksgeschilderd in elke RAL-kleur, of gebeitst en geolied voor een natuurlijke houtlook.'
					}
				],
				cta: {
					title: 'Vraag een gratis offerte aan voor uw houten kozijnen',
					body: 'Vertel ons hoeveel openingen en globale afmetingen, en u ontvangt binnen 3 werkdagen een gedetailleerde offerte.',
					button: 'Gratis Offerte Aanvragen'
				},
				gallery: withAlts(galleryFrontDoor, {
					frontdoor1: 'Op maat gemaakte houten voordeur en bijpassende houten kozijnen geplaatst in een Belgische rijwoning',
					frontdoor2: 'Detail van HR++ thermisch isolerend glas in een op maat gemaakt houten kozijn',
					frontdoor3: 'Houten kozijn met SKG3 gecertificeerd veiligheidsbeslag — TonyGroupe installatie'
				})
			},
			fr: {
				slug: 'chassis-bois-sur-mesure',
				metaTitle: 'Châssis Bois sur Mesure — Fabriqués à Bruxelles | TonyGroupe',
				metaDescription:
					'Châssis bois sur mesure avec double vitrage HR++ ou triple vitrage. Fabriqués dans notre atelier bruxellois, posés dans toute la Belgique et aux Pays-Bas. Garantie 10 ans, éligibles aux primes énergie.',
				keywords:
					'châssis bois sur mesure, châssis bois Bruxelles, châssis Liège, châssis sur mesure, remplacement châssis, vitrage HR++, triple vitrage, fabricant châssis bois Belgique, menuiserie Bruxelles',
				heading: 'Châssis Bois sur Mesure',
				subheading: 'Châssis en bois massif avec double vitrage HR++ ou triple vitrage — fabriqués dans notre atelier bruxellois, posés au millimètre.',
				intro:
					'Un châssis bois bien fabriqué dure plusieurs décennies de plus que le PVC ou l’aluminium. Nous fabriquons chaque châssis sur mesure en pin du Nord, épicéa ou chêne, l’équipons d’un double vitrage HR++ ou d’un triple vitrage isolant, et le finissons à votre goût — huile naturelle, laque colorée ou apprêt à peindre. Chaque châssis quitte notre atelier avec une quincaillerie certifiée SKG3, des joints posés en usine et une garantie de 10 ans.',
				sections: [
					{
						heading: 'Pourquoi le bois massif surpasse le PVC et l’aluminium',
						body: 'Le bois offre le plus faible coefficient U par profondeur de profilé parmi tous les matériaux courants. Il travaille de manière prévisible, conserve son étanchéité pendant des décennies et vieillit avec élégance — trois raisons pour lesquelles les maisons de caractère et les biens classés le choisissent presque toujours. Avec nos jonctions à rupture de pont thermique modernes, nos châssis bois atteignent des coefficients U qui égalent ou dépassent ceux des systèmes PVC et aluminium haut de gamme.'
					},
					{
						heading: 'Fabriqué en Belgique, posé partout en Benelux',
						body: 'Notre atelier est à Anderlecht (Bruxelles). Nous prenons les mesures chez vous, fabriquons les châssis en 2 à 3 semaines, puis les posons en 1 à 2 jours par ouverture. Nos équipes de pose se déplacent dans toute la Belgique et aux Pays-Bas — d’Anvers et Gand à Amsterdam, Rotterdam et La Haye.'
					},
					{
						heading: 'Démarches de prime incluses',
						body: 'Pour nos clients bruxellois et wallons, nous fournissons les attestations techniques nécessaires aux dossiers Renolution (Bruxelles Environnement) et primes Wallonie Énergie. Pour nos clients néerlandais, nous gérons les démarches ISDE et SVVE.'
					}
				],
				features: [
					'Double vitrage HR++ (U ≤ 1,2 W/m²K) ou triple vitrage (U ≤ 0,7 W/m²K)',
					'Pin du Nord, épicéa ou chêne',
					'Quincaillerie certifiée SKG3 en standard',
					'Profilés oscillo-battants, à guillotine, fixes et cintrés',
					'Joints d’étanchéité et drainage posés en usine',
					'Garantie fabricant 10 ans',
					'Démarches Renolution / Wallonie Énergie incluses',
					'Sur mesure au millimètre'
				],
				materials: [
					'Pin du Nord — meilleur compromis prix / durabilité',
					'Épicéa — léger, sans nœuds, adapté à la peinture',
					'Chêne européen — premium, naturellement résistant à la pourriture',
					'Jonctions à rupture de pont thermique optionnelles pour le triple vitrage'
				],
				process: {
					title: 'Comment nous posons vos châssis bois',
					steps: [
						{
							name: 'Métré gratuit chez vous',
							text: 'Nous venons chez vous, mesurons chaque ouverture, discutons des options de profilé et de vitrage, et vous envoyons un devis sans engagement sous 3 jours ouvrables.'
						},
						{
							name: 'Validation du design',
							text: 'Vous validez les plans d’atelier, la spécification de vitrage et la finition. Nous commandons le bois et les vitrages selon votre cahier des charges.'
						},
						{
							name: 'Fabrication en atelier',
							text: 'Vos châssis sont fabriqués dans notre atelier bruxellois en 2 à 3 semaines. Assemblages tenon-mortaise, joints posés en usine, quincaillerie pré-installée.'
						},
						{
							name: 'Dépose des anciens châssis',
							text: 'Le jour de la pose, notre équipe retire soigneusement les anciens châssis et protège le mur et le sol environnants avec des bâches.'
						},
						{
							name: 'Pose au millimètre',
							text: 'Les nouveaux châssis sont posés, mis à niveau et étanchés avec bandes pare-vapeur et mousse compressible. La plupart des ouvertures sont terminées en moins d’une journée.'
						},
						{
							name: 'Réception et suivi',
							text: 'Nous nettoyons le chantier, vous expliquons l’utilisation de la quincaillerie et vous remettons les documents de garantie et de prime.'
						}
					]
				},
				faq: [
					{
						question: 'Combien de temps prend la fabrication ?',
						answer: 'Généralement 2 à 3 semaines après validation du design, plus 1 à 2 semaines de délai pour le métré et le devis. Les grandes ouvertures ou profilés cintrés peuvent ajouter une semaine.'
					},
					{
						question: 'Pouvez-vous reproduire un profilé d’époque ?',
						answer: 'Oui. Nous reproduisons les moulures traditionnelles (ovolo, mouton, etc.) à l’identique, pour que vos nouveaux châssis soient indiscernables des originaux — avec un vitrage isolant moderne à l’intérieur.'
					},
					{
						question: 'Proposez-vous des finitions peintes ou lasurées ?',
						answer: 'Les deux. Nous livrons en apprêt (peinture sur chantier), peint en usine dans n’importe quel coloris RAL, ou lasuré et huilé pour un aspect bois naturel.'
					}
				],
				cta: {
					title: 'Demandez un devis gratuit pour vos châssis bois',
					body: 'Dites-nous combien d’ouvertures et leurs dimensions approximatives, et vous recevrez un devis détaillé sous 3 jours ouvrables.',
					button: 'Demander un Devis Gratuit'
				},
				gallery: withAlts(galleryFrontDoor, {
					frontdoor1: 'Porte d’entrée en bois sur mesure et châssis bois assortis posés dans une maison bruxelloise',
					frontdoor2: 'Détail du double vitrage HR++ dans un châssis bois sur mesure',
					frontdoor3: 'Châssis bois avec quincaillerie de sécurité certifiée SKG3 — réalisation TonyGroupe'
				})
			}
		}
	},
	{
		key: 'window-replacement',
		parent: 'services',
		image: '/projects/balcony-window-and-door/Photo1.jpeg',
		content: {
			en: {
				slug: 'window-frame-replacement',
				metaTitle: 'Window Frame Replacement — Wooden Frames in 4–6 Weeks | TonyGroupe',
				metaDescription:
					'Replace old wooden, PVC or aluminum window frames with custom wooden frames and HR++ thermal glass. 4–6 week turnaround, ISDE & SVVE subsidy eligible. Brussels & the Netherlands.',
				keywords:
					'window frame replacement, kozijnen vervangen, replace wooden windows, replace PVC windows, HR++ retrofit, thermal window upgrade, window upgrade Brussels',
				heading: 'Window Frame Replacement',
				subheading: 'Replace old, drafty frames with custom wooden frames and HR++ thermal glass in 4–6 weeks — one day per opening.',
				intro:
					'If your frames are more than 25 years old, you are losing money every winter. We replace single-glazed, PVC or aluminum window frames with new, custom-built wooden frames and HR++ or triple insulating glass. The result: 30–40% less heat loss, a noticeably quieter home and an ISDE/SVVE subsidy refund on top.',
				sections: [
					{
						heading: 'When to replace versus restore',
						body: 'If the timber is still sound but the seals are gone, we can often restore the original frame and retrofit modern double glazing. If the timber is rotten, the profile is loose, or the U-value is single-pane, replacement is almost always cheaper over a 10-year horizon than incremental repairs.'
					},
					{
						heading: 'Minimal disruption to your home',
						body: 'Most openings are out and the new frame is fitted within a single day. We protect the floor and walls, vacuum daily, and finish the interior trim so the room looks better than before. Heating is back on the same evening.'
					},
					{
						heading: 'What you save',
						body: 'A 4-bedroom Belgian terrace house typically saves €600–€1,200 per year on heating after a full replacement. ISDE/SVVE/Renolution subsidies can return up to 30% of the cost. Most clients break even on heating savings + subsidy within 7–10 years.'
					}
				],
				features: [
					'Direct replacement — no wall damage',
					'One day per opening, vacuumed daily',
					'HR++ or triple insulating glass',
					'Subsidy paperwork included',
					'Interior trim refinished',
					'10-year manufacturer warranty',
					'Free survey and quote',
					'Optional same-day painting'
				],
				materials: [
					'Nordic pine — most common replacement timber',
					'Oak — for heritage or coastal homes',
					'Spruce — for paint-grade replacements'
				],
				process: {
					title: 'How we replace your window frames',
					steps: [
						{
							name: 'Survey & quote',
							text: 'We visit, measure each opening and check the wall, lintel and sill condition. Quote within 3 working days.'
						},
						{
							name: 'Manufacturing',
							text: 'Your new frames are built in our Brussels workshop over 2–3 weeks, with hardware and seals factory-fitted.'
						},
						{
							name: 'Installation day',
							text: 'We protect the room, remove the old frame, fit the new frame, seal it, finish the interior trim. One day per opening.'
						},
						{
							name: 'Subsidy filing',
							text: 'We provide the technical attestations and U-value certificates for your ISDE / SVVE / Renolution claim.'
						}
					]
				},
				faq: [
					{
						question: 'Will the walls be damaged?',
						answer: 'No. We remove the old frame from inside the existing opening and fit the new one to the same dimensions. The wall stays untouched. We refinish the interior trim so it looks brand new.'
					},
					{
						question: 'Can you replace one frame at a time?',
						answer: 'Yes — we often do single-frame replacements (e.g., a kitchen window before a renovation, or a leaking bathroom frame). Subsidy applications still work for one frame.'
					},
					{
						question: 'How much does a single replacement cost?',
						answer: 'A standard 1.2 × 1.5 m wooden replacement with HR++ glass typically falls between €1,400 and €2,200 installed. We give a fixed quote per opening so there are no surprises.'
					}
				],
				cta: {
					title: 'Replace your old frames before next winter',
					body: 'Book a free survey now and we can have your new frames in by the end of October.',
					button: 'Book Free Survey'
				},
				gallery: withAlts(galleryBalcony, {
					balcony1: 'Balcony door and window frame replacement with HR++ thermal glass — Brussels apartment',
					balcony2: 'New thermal wooden window frames installed in a renovated balcony — TonyGroupe project'
				})
			},
			nl: {
				slug: 'kozijnen-vervangen',
				metaTitle: 'Kozijnen Vervangen — Houten Kozijnen op Maat in 4–6 Weken | TonyGroupe',
				metaDescription:
					'Vervang oude houten, PVC of aluminium kozijnen door op maat gemaakte houten kozijnen met HR++ glas. 4–6 weken doorlooptijd, ISDE & SVVE subsidie geschikt. Brussel, België en Nederland.',
				keywords:
					'kozijnen vervangen, kozijnen vervangen kosten, houten kozijnen vervangen, kozijnen vervangen Amsterdam, kozijnen vervangen Rotterdam, HR++ retrofit, isolerende kozijnen, energiezuinige kozijnen',
				heading: 'Kozijnen Vervangen',
				subheading: 'Vervang oude, tochtende kozijnen door op maat gemaakte houten kozijnen met HR++ glas — 4 à 6 weken doorlooptijd, één dag per opening.',
				intro:
					'Zijn uw kozijnen ouder dan 25 jaar? Dan verliest u elke winter geld. Wij vervangen enkelglas, PVC of aluminium kozijnen door nieuwe houten kozijnen op maat met HR++ of triple isolerend glas. Het resultaat: 30 tot 40% minder warmteverlies, een merkbaar stiller huis én een ISDE/SVVE subsidie terugbetaling bovenop.',
				sections: [
					{
						heading: 'Wanneer vervangen versus restaureren',
						body: 'Als het hout nog gezond is en alleen de afdichtingen versleten zijn, kunnen wij vaak het originele kozijn restaureren en modern dubbelglas inzetten. Als het hout rot is, het profiel los zit of het glas enkel is, is vervangen bijna altijd voordeliger over een termijn van 10 jaar dan stapsgewijze reparaties.'
					},
					{
						heading: 'Minimale overlast in uw woning',
						body: 'De meeste openingen worden binnen één dag uitgenomen en het nieuwe kozijn geplaatst. Wij beschermen de vloer en muren, stofzuigen dagelijks en werken de binnenafwerking af, zodat de kamer er beter uitziet dan voorheen. Diezelfde avond gaat de verwarming weer aan.'
					},
					{
						heading: 'Wat u bespaart',
						body: 'Een gemiddelde Nederlandse hoekwoning bespaart na een volledige vervanging €600 tot €1.200 per jaar op verwarming. De ISDE/SVVE subsidie kan tot 30% van de kostprijs terugbetalen. De meeste klanten verdienen de investering binnen 7 à 10 jaar terug via energiebesparing en subsidie.'
					}
				],
				features: [
					'Directe vervanging — geen muurschade',
					'Eén dag per opening, dagelijks stofzuigen',
					'HR++ of triple isolerend glas',
					'Subsidiepapieren inbegrepen',
					'Binnenafwerking opnieuw afgewerkt',
					'10 jaar fabrieksgarantie',
					'Gratis opmeting en offerte',
					'Optioneel schilderwerk op dezelfde dag'
				],
				materials: [
					'Noorse den — meest gebruikte vervangingshout',
					'Eik — voor monumentale of kustwoningen',
					'Spar — voor schilderen-gerede vervangingen'
				],
				process: {
					title: 'Hoe wij uw kozijnen vervangen',
					steps: [
						{
							name: 'Opmeting & offerte',
							text: 'Wij komen langs, meten elke opening en controleren de muur, latei en dorpel. Offerte binnen 3 werkdagen.'
						},
						{
							name: 'Productie',
							text: 'Uw nieuwe kozijnen worden in 2 à 3 weken in onze Brusselse werkplaats gemaakt, met fabrieksmatig gemonteerd beslag en afdichtingen.'
						},
						{
							name: 'Plaatsingsdag',
							text: 'Wij beschermen de kamer, verwijderen het oude kozijn, plaatsen het nieuwe, dichten het af en werken de binnenafwerking af. Eén dag per opening.'
						},
						{
							name: 'Subsidieaanvraag',
							text: 'Wij leveren de technische attesten en U-waarde certificaten aan voor uw ISDE / SVVE / Renolution aanvraag.'
						}
					]
				},
				faq: [
					{
						question: 'Wordt de muur beschadigd?',
						answer: 'Nee. Wij verwijderen het oude kozijn aan de binnenzijde van de bestaande opening en plaatsen het nieuwe in dezelfde afmetingen. De muur blijft onaangetast. Wij werken de binnenafwerking af zodat alles er weer nieuw uitziet.'
					},
					{
						question: 'Kunt u één kozijn tegelijk vervangen?',
						answer: 'Ja — wij vervangen vaak één enkel kozijn (bijvoorbeeld een keukenraam vóór een renovatie, of een lekkend badkamerkozijn). De subsidieaanvraag werkt ook voor één kozijn.'
					},
					{
						question: 'Wat kost één kozijn vervangen?',
						answer: 'Een standaard houten kozijn van 1,2 × 1,5 m met HR++ glas valt doorgaans tussen €1.400 en €2.200, inclusief plaatsing. Wij geven een vaste prijs per opening, dus geen verrassingen achteraf.'
					}
				],
				cta: {
					title: 'Vervang uw oude kozijnen voor de volgende winter',
					body: 'Boek nu een gratis opmeting en wij hebben uw nieuwe kozijnen vóór eind oktober geplaatst.',
					button: 'Boek Gratis Opmeting'
				},
				gallery: withAlts(galleryBalcony, {
					balcony1: 'Balkondeur en kozijn vervanging met HR++ thermisch glas — Brussels appartement',
					balcony2: 'Nieuwe thermische houten kozijnen geplaatst op een gerenoveerd balkon — TonyGroupe project'
				})
			},
			fr: {
				slug: 'remplacement-chassis',
				metaTitle: 'Remplacement de Châssis — Châssis Bois Sur Mesure en 4 à 6 Semaines | TonyGroupe',
				metaDescription:
					'Remplacement de châssis bois, PVC ou aluminium par des châssis bois sur mesure avec double vitrage HR++. Délai 4 à 6 semaines, éligibles aux primes Renolution et Wallonie Énergie.',
				keywords:
					'remplacement châssis, remplacement châssis bois, remplacer châssis, châssis bois Bruxelles, prime Renolution, prime énergie Wallonie, double vitrage retrofit, isolation fenêtres',
				heading: 'Remplacement de Châssis',
				subheading: 'Remplacez vos vieux châssis par des châssis bois sur mesure avec double vitrage HR++ — délai de 4 à 6 semaines, une journée par ouverture.',
				intro:
					'Si vos châssis ont plus de 25 ans, vous perdez de l’argent chaque hiver. Nous remplaçons les châssis en simple vitrage, PVC ou aluminium par de nouveaux châssis bois sur mesure équipés de double vitrage HR++ ou triple vitrage. Résultat : 30 à 40% de pertes de chaleur en moins, une maison nettement plus calme, et une prime énergie en bonus.',
				sections: [
					{
						heading: 'Remplacer ou restaurer ?',
						body: 'Si le bois est encore sain et que seuls les joints sont à refaire, nous pouvons souvent restaurer le châssis d’origine et y intégrer du double vitrage moderne. Si le bois est pourri, le profilé désolidarisé ou le vitrage est simple, le remplacement est presque toujours plus économique sur 10 ans que des réparations successives.'
					},
					{
						heading: 'Minimum de dérangement chez vous',
						body: 'La plupart des ouvertures sont déposées et le nouveau châssis est posé dans la même journée. Nous protégeons les sols et les murs, aspirons chaque jour et finissons les retours intérieurs pour que la pièce paraisse mieux qu’avant. Le chauffage est remis en marche le soir même.'
					},
					{
						heading: 'Vos économies',
						body: 'Une maison mitoyenne bruxelloise typique économise 600 à 1 200 € par an sur le chauffage après un remplacement complet. Les primes Renolution et Wallonie Énergie peuvent rembourser jusqu’à 30% du coût. La plupart des clients amortissent l’investissement en 7 à 10 ans entre économies et prime.'
					}
				],
				features: [
					'Remplacement direct — pas de dégâts au mur',
					'Une journée par ouverture, aspirateur quotidien',
					'Double vitrage HR++ ou triple vitrage',
					'Démarches de prime incluses',
					'Retours intérieurs refaits',
					'Garantie fabricant 10 ans',
					'Métré et devis gratuits',
					'Peinture le jour même en option'
				],
				materials: [
					'Pin du Nord — bois de remplacement le plus courant',
					'Chêne — pour maisons de caractère ou bord de mer',
					'Épicéa — pour remplacements à peindre'
				],
				process: {
					title: 'Comment nous remplaçons vos châssis',
					steps: [
						{
							name: 'Métré & devis',
							text: 'Nous nous déplaçons, mesurons chaque ouverture et vérifions l’état du mur, du linteau et du seuil. Devis sous 3 jours ouvrables.'
						},
						{
							name: 'Fabrication',
							text: 'Vos nouveaux châssis sont fabriqués dans notre atelier bruxellois en 2 à 3 semaines, avec quincaillerie et joints posés en usine.'
						},
						{
							name: 'Jour de pose',
							text: 'Nous protégeons la pièce, déposons l’ancien châssis, posons le nouveau, l’étanchéifions et refaisons les retours intérieurs. Une journée par ouverture.'
						},
						{
							name: 'Dossier de prime',
							text: 'Nous fournissons les attestations techniques et certificats de coefficient U pour votre dossier Renolution / Wallonie Énergie / ISDE / SVVE.'
						}
					]
				},
				faq: [
					{
						question: 'Les murs vont-ils être abîmés ?',
						answer: 'Non. Nous retirons l’ancien châssis depuis l’intérieur de l’ouverture existante et posons le nouveau aux mêmes dimensions. Le mur reste intact. Nous refaisons les retours intérieurs pour un rendu impeccable.'
					},
					{
						question: 'Pouvez-vous remplacer un seul châssis ?',
						answer: 'Oui — nous remplaçons souvent un seul châssis (par exemple une fenêtre de cuisine avant rénovation, ou un châssis de salle de bains qui fuit). La demande de prime fonctionne aussi pour un seul châssis.'
					},
					{
						question: 'Combien coûte le remplacement d’un châssis ?',
						answer: 'Un châssis bois standard de 1,2 × 1,5 m avec double vitrage HR++ coûte généralement entre 1 400 € et 2 200 € posé. Nous donnons un prix fixe par ouverture, sans mauvaise surprise.'
					}
				],
				cta: {
					title: 'Remplacez vos vieux châssis avant l’hiver',
					body: 'Réservez un métré gratuit maintenant et vos nouveaux châssis seront posés avant fin octobre.',
					button: 'Réserver un Métré Gratuit'
				},
				gallery: withAlts(galleryBalcony, {
					balcony1: 'Remplacement de porte-fenêtre de balcon et châssis avec double vitrage HR++ — appartement bruxellois',
					balcony2: 'Nouveaux châssis bois thermiques posés sur un balcon rénové — projet TonyGroupe'
				})
			}
		}
	},
	{
		key: 'wooden-doors',
		parent: 'services',
		image: '/projects/front-door-and-windows/Photo3.jpeg',
		content: {
			en: {
				slug: 'wooden-doors',
				metaTitle: 'Custom Wooden Doors — Front, Interior & Patio | TonyGroupe Brussels',
				metaDescription:
					'Bespoke wooden doors made to measure: front doors with Roto RC2/RC3 hardware, interior doors, patio doors. Made in Brussels, installed across Belgium and the Netherlands.',
				keywords:
					'wooden doors, custom wooden doors, wooden front door, wooden interior doors, Roto hardware, RC2 front door, RC3 front door, custom door manufacturer Brussels',
				heading: 'Custom Wooden Doors',
				subheading: 'Bespoke front doors, interior doors and patio doors — made in solid wood with the security hardware your home deserves.',
				intro:
					'A front door is the most visible piece of joinery in your house. We make ours in solid oak, pine or larch, fit them with Roto RC2/RC3 anti-burglary hardware as standard, and finish them in any colour or natural oil. Interior doors are matched to your stairs, floors and trim — so your whole interior reads as one consistent design.',
				sections: [
					{
						heading: 'Front doors built for security and beauty',
						body: 'Every front door we make ships with Roto auto-locking, three RC2/RC3 locking points, VdS-tested anti-burglary geometry and SKG3-certified hinges. The hardware delays a forced entry attempt long enough for any alarm or neighbour to react. Outside the door looks like a piece of furniture; inside, it is a vault.'
					},
					{
						heading: 'Interior doors that match the room',
						body: 'We build interior doors at any size, with concealed hinges, brushed brass or matte black hardware, glass panels, soft-close systems and any timber to match an existing floor or stair. Pre-hung in their own frame so installation takes hours, not days.'
					}
				],
				features: [
					'Solid oak, pine or larch',
					'Roto RC2 / RC3 hardware as standard',
					'SKG3 certified hinges',
					'Optional fingerprint or smart-lock',
					'Glass panels, viewer, letterbox to spec',
					'Pre-hung in matching frame',
					'10-year hardware warranty',
					'Any RAL colour or natural oil finish'
				],
				materials: [
					'European oak — premium, dent-resistant',
					'Larch — naturally weather-resistant for exterior',
					'Pine — most cost-effective paint-grade option'
				],
				process: {
					title: 'How we install your wooden door',
					steps: [
						{
							name: 'Design consultation',
							text: 'Choose style, timber, hardware and finish in a free 30-minute consultation at our showroom or your home.'
						},
						{
							name: 'Manufacturing',
							text: 'Door and matching frame are built in 2–3 weeks in our Brussels workshop, with hardware factory-fitted and tested.'
						},
						{
							name: 'Installation',
							text: 'Pre-hung door is installed in 4–6 hours per opening, including new threshold and weather seals.'
						}
					]
				},
				faq: [
					{
						question: 'Can I keep my current door frame?',
						answer: 'Often yes — we measure the existing frame and build a new door leaf to fit. If the frame is rotten or out of square, we replace it at the same time.'
					},
					{
						question: 'What about smart locks and fingerprint readers?',
						answer: 'We offer Roto electronic actuators (keyless entry), Yale/Nuki smart-lock retrofits, and fingerprint readers. All compatible with the RC2/RC3 hardware.'
					}
				],
				cta: {
					title: 'Design your custom wooden door',
					body: 'Book a free design consultation and we will sketch options for your entrance.',
					button: 'Book Free Consultation'
				},
				gallery: withAlts(galleryFrontDoor, {
					frontdoor1: 'Custom oak front door with RC2 Roto hardware — TonyGroupe Brussels',
					frontdoor2: 'Wooden front door with side window and brass hardware',
					frontdoor3: 'Detail of SKG3 security disc hinge on a wooden front door'
				})
			},
			nl: {
				slug: 'houten-deuren',
				metaTitle: 'Houten Deuren op Maat — Voordeur, Binnendeur & Tuindeur | TonyGroupe',
				metaDescription:
					'Houten deuren op maat: voordeuren met Roto RC2/RC3 beslag, binnendeuren, tuindeuren. Gemaakt in Brussel, geplaatst in heel België en Nederland.',
				keywords:
					'houten deuren, houten voordeur, houten binnendeur, voordeur op maat, Roto beslag, RC2 voordeur, RC3 voordeur, deurenfabrikant Brussel',
				heading: 'Houten Deuren op Maat',
				subheading: 'Op maat gemaakte voordeuren, binnendeuren en tuindeuren — in massief hout met het beslag dat uw woning verdient.',
				intro:
					'Een voordeur is het meest zichtbare stuk schrijnwerk van uw woning. Wij maken ze in massief eik, den of lariks, voorzien ze standaard van Roto RC2/RC3 inbraakwerend beslag en werken ze af in elke gewenste kleur of natuurlijke olie. Binnendeuren stemmen we af op uw trap, vloer en plinten — zodat uw interieur als één geheel oogt.',
				sections: [
					{
						heading: 'Voordeuren gebouwd voor veiligheid én schoonheid',
						body: 'Elke voordeur wordt geleverd met Roto automatische vergrendeling, drie RC2/RC3 sluitpunten, VdS geteste inbraakwerende geometrie en SKG3 gecertificeerde scharnieren. Het beslag vertraagt een inbraakpoging lang genoeg voor alarm of buren om te reageren. Buiten oogt de deur als meubilair; binnen werkt ze als een kluis.'
					},
					{
						heading: 'Binnendeuren die bij de kamer passen',
						body: 'Wij maken binnendeuren in elke maat, met onzichtbare scharnieren, geborsteld messing of mat zwart beslag, glaspanelen, soft-close systemen en in elk gewenst hout passend bij vloer of trap. Vooraf in kozijn gehangen, zodat de plaatsing uren in plaats van dagen duurt.'
					}
				],
				features: [
					'Massief eik, den of lariks',
					'Roto RC2 / RC3 beslag standaard',
					'SKG3 gecertificeerde scharnieren',
					'Optionele vingerafdruk- of slim slot',
					'Glaspanelen, kijkraampje, brievenbus op spec',
					'Vooraf gehangen in kozijn',
					'10 jaar garantie op beslag',
					'Elke RAL-kleur of natuurlijke olie'
				],
				materials: [
					'Europese eik — premium, krasbestendig',
					'Lariks — natuurlijk weerbestendig voor buiten',
					'Den — meest kostenefficiënt voor schilderen'
				],
				process: {
					title: 'Hoe wij uw houten deur plaatsen',
					steps: [
						{
							name: 'Ontwerpgesprek',
							text: 'Kies stijl, hout, beslag en afwerking in een gratis adviesgesprek van 30 minuten in onze showroom of bij u thuis.'
						},
						{
							name: 'Productie',
							text: 'Deur en bijpassend kozijn worden in 2 à 3 weken in onze Brusselse werkplaats gemaakt, met fabrieksmatig gemonteerd en getest beslag.'
						},
						{
							name: 'Installatie',
							text: 'Vooraf gehangen deur wordt in 4 à 6 uur per opening geplaatst, inclusief nieuwe drempel en weeromslagen.'
						}
					]
				},
				faq: [
					{
						question: 'Kan ik mijn huidige deurkozijn behouden?',
						answer: 'Vaak wel — wij meten het bestaande kozijn op en bouwen een nieuwe deurvleugel die past. Is het kozijn rot of niet recht, dan vervangen wij het tegelijkertijd.'
					},
					{
						question: 'Wat met slimme sloten en vingerafdrukscanners?',
						answer: 'Wij bieden Roto elektronische aandrijvingen (sleutelloze toegang), Yale/Nuki slim-slot retrofits en vingerafdrukscanners. Allemaal compatibel met het RC2/RC3 beslag.'
					}
				],
				cta: {
					title: 'Ontwerp uw houten deur op maat',
					body: 'Boek een gratis ontwerpgesprek en wij schetsen opties voor uw entree.',
					button: 'Boek Gratis Adviesgesprek'
				},
				gallery: withAlts(galleryFrontDoor, {
					frontdoor1: 'Op maat gemaakte eiken voordeur met RC2 Roto beslag — TonyGroupe Brussel',
					frontdoor2: 'Houten voordeur met zijraam en messing beslag',
					frontdoor3: 'Detail van SKG3 veiligheidsscharnier op een houten voordeur'
				})
			},
			fr: {
				slug: 'portes-bois',
				metaTitle: 'Portes en Bois sur Mesure — Entrée, Intérieure & Terrasse | TonyGroupe',
				metaDescription:
					'Portes en bois sur mesure : portes d’entrée avec ferrures Roto RC2/RC3, portes intérieures, portes-fenêtres. Fabriquées à Bruxelles, posées dans toute la Belgique.',
				keywords:
					'portes en bois, porte d’entrée bois, portes intérieures bois, porte sur mesure, ferrures Roto, porte RC2, porte RC3, fabricant porte Bruxelles',
				heading: 'Portes en Bois sur Mesure',
				subheading: 'Portes d’entrée, portes intérieures et portes-fenêtres sur mesure — en bois massif avec la quincaillerie de sécurité que votre maison mérite.',
				intro:
					'Une porte d’entrée est l’élément de menuiserie le plus visible de votre maison. Nous les fabriquons en chêne, pin ou mélèze massif, équipées en standard de ferrures anti-effraction Roto RC2/RC3, et finies dans n’importe quelle couleur ou huile naturelle. Les portes intérieures sont assorties à vos escaliers, sols et plinthes — pour un intérieur cohérent.',
				sections: [
					{
						heading: 'Des portes d’entrée pour la sécurité et l’esthétique',
						body: 'Chaque porte d’entrée est livrée avec verrouillage automatique Roto, trois points de verrouillage RC2/RC3, géométrie anti-effraction testée VdS et paumelles certifiées SKG3. La quincaillerie retarde toute tentative d’effraction assez longtemps pour qu’une alarme ou un voisin réagisse. Vue de l’extérieur c’est un meuble ; à l’intérieur c’est un coffre-fort.'
					},
					{
						heading: 'Portes intérieures assorties à la pièce',
						body: 'Nous fabriquons des portes intérieures dans toutes les dimensions, avec paumelles invisibles, quincaillerie en laiton brossé ou noir mat, panneaux vitrés, systèmes soft-close et tout bois correspondant à un sol ou escalier existant. Pré-suspendues dans leur propre cadre pour une pose en quelques heures, pas en jours.'
					}
				],
				features: [
					'Chêne, pin ou mélèze massif',
					'Ferrures Roto RC2 / RC3 en standard',
					'Paumelles certifiées SKG3',
					'Empreinte digitale ou serrure connectée en option',
					'Panneaux vitrés, judas, boîte aux lettres sur cahier des charges',
					'Pré-suspendue dans son cadre',
					'Garantie 10 ans sur la quincaillerie',
					'Toutes teintes RAL ou huile naturelle'
				],
				materials: [
					'Chêne européen — premium, résistant aux chocs',
					'Mélèze — naturellement résistant aux intempéries',
					'Pin — le plus économique pour finition peinte'
				],
				process: {
					title: 'Comment nous posons votre porte en bois',
					steps: [
						{
							name: 'Consultation design',
							text: 'Choisissez style, bois, quincaillerie et finition lors d’une consultation gratuite de 30 minutes à notre atelier ou chez vous.'
						},
						{
							name: 'Fabrication',
							text: 'Porte et cadre assorti fabriqués en 2 à 3 semaines dans notre atelier bruxellois, avec quincaillerie posée et testée en usine.'
						},
						{
							name: 'Pose',
							text: 'Porte pré-suspendue posée en 4 à 6 heures par ouverture, seuil neuf et joints inclus.'
						}
					]
				},
				faq: [
					{
						question: 'Puis-je garder mon cadre existant ?',
						answer: 'Souvent oui — nous mesurons le cadre existant et fabriquons un nouveau vantail aux dimensions. Si le cadre est pourri ou désaligné, nous le remplaçons en même temps.'
					},
					{
						question: 'Qu’en est-il des serrures connectées et lecteurs d’empreinte ?',
						answer: 'Nous proposons des actionneurs électroniques Roto (entrée sans clé), des serrures connectées Yale/Nuki en retrofit et des lecteurs d’empreinte. Tous compatibles avec la quincaillerie RC2/RC3.'
					}
				],
				cta: {
					title: 'Concevez votre porte en bois sur mesure',
					body: 'Réservez une consultation design gratuite et nous esquisserons des options pour votre entrée.',
					button: 'Réserver une Consultation'
				},
				gallery: withAlts(galleryFrontDoor, {
					frontdoor1: 'Porte d’entrée en chêne sur mesure avec ferrures Roto RC2 — TonyGroupe Bruxelles',
					frontdoor2: 'Porte d’entrée en bois avec imposte vitrée et quincaillerie laiton',
					frontdoor3: 'Détail de paumelle de sécurité SKG3 sur une porte d’entrée en bois'
				})
			}
		}
	},
	{
		key: 'home-renovation',
		parent: 'services',
		image: '/projects/balcony-window-and-door/Photo2.jpeg',
		content: {
			en: {
				slug: 'home-renovation',
				metaTitle: 'Full Home Renovation — Brussels & the Netherlands | TonyGroupe',
				metaDescription:
					'Complete home renovation: window frame replacement, doors, tiling, painting, kitchens, staircases and flooring. One team, one quote, one project manager. Brussels & the Netherlands.',
				keywords:
					'home renovation Brussels, full house renovation, renovation contractor Brussels, woningrenovatie, rénovation maison Bruxelles, complete renovation, end-to-end renovation',
				heading: 'Full Home Renovation',
				subheading: 'One team, one quote, one project manager — from window frame replacement to the last coat of paint.',
				intro:
					'Most of our customers come to us for a single replacement and ask us back for the whole house. Because we manufacture our own joinery and have in-house tilers, painters and flooring fitters, we can run a complete renovation end-to-end without subcontracting the critical work. You get one quote, one project manager and one accountable team.',
				sections: [
					{
						heading: 'What a full renovation typically includes',
						body: 'Replacement of all window frames and doors with HR++ wooden joinery; structural wood repairs; full re-tiling of bathrooms and kitchens; interior painting; new kitchen cabinetry; new staircases or balustrades; new parquet or wooden flooring; final clean.'
					},
					{
						heading: 'How long it takes',
						body: 'A 100 m² apartment typically takes 6–10 weeks. A 200 m² townhouse takes 10–16 weeks. We give you a fixed week-by-week schedule and stick to it — the same crew runs the project from start to finish.'
					},
					{
						heading: 'How we keep cost predictable',
						body: 'Every fixed-price quote is broken down per room and per trade. There are no surprise change-orders unless you change the scope. We share weekly progress photos and a single WhatsApp group so you always know what is happening.'
					}
				],
				features: [
					'Fixed-price, room-by-room quote',
					'In-house joinery, tiling, painting and flooring',
					'Weekly progress photos',
					'Single project manager',
					'Subsidy paperwork included',
					'Final professional clean',
					'Optional design-and-build service',
					'10-year warranty on joinery'
				],
				materials: [],
				process: {
					title: 'How a full renovation runs',
					steps: [
						{
							name: 'Site survey & design',
							text: 'We measure the property, discuss your wish-list, propose layouts and joinery options.'
						},
						{
							name: 'Fixed-price quote',
							text: 'Detailed quote per room and trade. You see exactly what each part of the work costs.'
						},
						{
							name: 'Schedule sign-off',
							text: 'We agree the start date and share a week-by-week schedule. You receive a project portal link.'
						},
						{
							name: 'Phased work',
							text: 'Strip-out → structural fixes → joinery → plumbing/electric → tiling → painting → kitchens & flooring → snag list.'
						},
						{
							name: 'Hand-over',
							text: 'Professional clean, walk-through, snag list closed within 7 days. Warranty documents handed over.'
						}
					]
				},
				faq: [
					{
						question: 'Can I live in the house during the renovation?',
						answer: 'For partial renovations (kitchen, bathroom, frames) yes. For full strip-outs we recommend moving out — we work much faster with an empty house and the result is cleaner.'
					},
					{
						question: 'Do you handle the permits?',
						answer: 'Yes for Brussels and Belgian projects. For Dutch projects we work with a local permit agent if the work requires one.'
					}
				],
				cta: {
					title: 'Get a fixed-price renovation quote',
					body: 'Book a site survey and you will have a room-by-room quote within 10 working days.',
					button: 'Book Site Survey'
				},
				gallery: withAlts(galleryBalcony, {
					balcony1: 'Apartment renovation in Brussels — new balcony door, wooden frames and interior refit',
					balcony2: 'Renovated balcony with thermal wooden window frames and matching trim'
				})
			},
			nl: {
				slug: 'woningrenovatie',
				metaTitle: 'Volledige Woningrenovatie — Brussel & Nederland | TonyGroupe',
				metaDescription:
					'Complete renovatie: kozijnen vervangen, deuren, tegelwerk, schilderwerk, keukens, trappen en vloeren. Eén team, één offerte, één projectleider. Brussel & Nederland.',
				keywords:
					'woningrenovatie, complete renovatie, renovatie Brussel, renovatie Amsterdam, renovatie aannemer, kozijnen vervangen complete renovatie, end-to-end renovatie',
				heading: 'Volledige Woningrenovatie',
				subheading: 'Eén team, één offerte, één projectleider — van het vervangen van kozijnen tot de laatste laag verf.',
				intro:
					'De meeste klanten komen bij ons voor één vervanging en vragen ons terug voor de hele woning. Omdat wij onze eigen schrijnwerk produceren en zelf tegelzetters, schilders en vloerleggers in dienst hebben, kunnen wij een complete renovatie van A tot Z uitvoeren zonder het kritische werk uit te besteden. U krijgt één offerte, één projectleider en één verantwoordelijk team.',
				sections: [
					{
						heading: 'Wat een complete renovatie meestal omvat',
						body: 'Vervanging van alle kozijnen en deuren door HR++ houten schrijnwerk; structurele houtreparaties; volledig opnieuw betegelen van badkamers en keukens; binnenschilderwerk; nieuwe keukenkasten; nieuwe trappen of leuningen; nieuwe parket- of houten vloeren; eindschoonmaak.'
					},
					{
						heading: 'Hoe lang het duurt',
						body: 'Een appartement van 100 m² duurt doorgaans 6 à 10 weken. Een rijwoning van 200 m² duurt 10 à 16 weken. Wij geven u een vaste week-voor-week planning en houden ons eraan — hetzelfde team voert het project van begin tot eind uit.'
					},
					{
						heading: 'Hoe wij de kostprijs voorspelbaar houden',
						body: 'Elke vaste-prijs offerte is opgesplitst per kamer en per vakgebied. Geen verrassingsmeerwerk tenzij u de scope wijzigt. Wij delen wekelijks voortgangsfoto’s en een WhatsApp-groep zodat u altijd weet wat er gebeurt.'
					}
				],
				features: [
					'Vaste prijs, opgesplitst per kamer',
					'Schrijnwerk, tegelwerk, schilderwerk en vloeren in eigen beheer',
					'Wekelijkse voortgangsfoto’s',
					'Eén projectleider',
					'Subsidiepapieren inbegrepen',
					'Professionele eindschoonmaak',
					'Optionele ontwerp-en-bouw service',
					'10 jaar garantie op schrijnwerk'
				],
				materials: [],
				process: {
					title: 'Hoe een complete renovatie verloopt',
					steps: [
						{
							name: 'Plaatsbezoek & ontwerp',
							text: 'Wij meten de woning op, bespreken uw wensenlijst, stellen indelingen en schrijnwerkopties voor.'
						},
						{
							name: 'Vaste prijs offerte',
							text: 'Gedetailleerde offerte per kamer en per vakgebied. U ziet precies wat elk onderdeel kost.'
						},
						{
							name: 'Planning goedkeuring',
							text: 'Wij komen de startdatum overeen en delen een week-voor-week planning. U ontvangt een projectportaal-link.'
						},
						{
							name: 'Gefaseerd werk',
							text: 'Strip-out → structurele fixes → schrijnwerk → loodgieter/elektriciteit → tegelwerk → schilderen → keukens & vloeren → puntenlijst.'
						},
						{
							name: 'Oplevering',
							text: 'Professionele schoonmaak, rondleiding, puntenlijst binnen 7 dagen afgewerkt. Garantiedocumenten overhandigd.'
						}
					]
				},
				faq: [
					{
						question: 'Kan ik in de woning blijven tijdens de renovatie?',
						answer: 'Voor deelrenovaties (keuken, badkamer, kozijnen) ja. Voor een volledige strip-out raden wij aan om te verhuizen — wij werken veel sneller met een lege woning en het resultaat is netter.'
					},
					{
						question: 'Verzorgt u de vergunningen?',
						answer: 'Ja voor Brusselse en Belgische projecten. Voor Nederlandse projecten werken wij met een lokale vergunningsmakelaar als het werk dat vereist.'
					}
				],
				cta: {
					title: 'Vraag een vaste-prijs renovatie offerte aan',
					body: 'Boek een plaatsbezoek en u heeft binnen 10 werkdagen een offerte per kamer.',
					button: 'Boek Plaatsbezoek'
				},
				gallery: withAlts(galleryBalcony, {
					balcony1: 'Appartementrenovatie in Brussel — nieuwe balkondeur, houten kozijnen en interieurafwerking',
					balcony2: 'Gerenoveerd balkon met thermische houten kozijnen en bijpassende afwerking'
				})
			},
			fr: {
				slug: 'renovation-maison',
				metaTitle: 'Rénovation Complète de Maison — Bruxelles & Pays-Bas | TonyGroupe',
				metaDescription:
					'Rénovation complète : remplacement de châssis, portes, carrelage, peinture, cuisines, escaliers et parquets. Une équipe, un devis, un chef de projet. Bruxelles & Pays-Bas.',
				keywords:
					'rénovation maison Bruxelles, rénovation complète, entrepreneur rénovation Bruxelles, rénovation Liège, rénovation Wallonie, devis rénovation, rénovation clé en main',
				heading: 'Rénovation Complète de Maison',
				subheading: 'Une équipe, un devis, un chef de projet — du remplacement des châssis à la dernière couche de peinture.',
				intro:
					'La plupart de nos clients viennent pour un seul remplacement et nous redemandent pour toute la maison. Comme nous fabriquons notre propre menuiserie et avons des carreleurs, peintres et parqueteurs en interne, nous menons une rénovation complète de A à Z sans sous-traiter le travail critique. Vous obtenez un seul devis, un seul chef de projet et une seule équipe responsable.',
				sections: [
					{
						heading: 'Ce qu’inclut habituellement une rénovation complète',
						body: 'Remplacement de tous les châssis et portes par de la menuiserie bois HR++ ; réparations structurelles en bois ; rénovation complète du carrelage des salles de bain et cuisines ; peinture intérieure ; nouvelles cuisines ; nouveaux escaliers ou rampes ; nouveaux parquets ou planchers bois ; nettoyage final.'
					},
					{
						heading: 'Combien de temps cela prend',
						body: 'Un appartement de 100 m² prend généralement 6 à 10 semaines. Une maison de 200 m² prend 10 à 16 semaines. Nous vous remettons un planning fixe semaine par semaine et nous le tenons — la même équipe mène le projet du début à la fin.'
					},
					{
						heading: 'Comment nous maîtrisons le coût',
						body: 'Chaque devis à prix fixe est détaillé pièce par pièce et corps de métier par corps de métier. Pas de surprise sauf si vous modifiez le périmètre. Nous partageons des photos d’avancement hebdomadaires et un groupe WhatsApp pour que vous sachiez toujours où en est le chantier.'
					}
				],
				features: [
					'Prix fixe, détaillé pièce par pièce',
					'Menuiserie, carrelage, peinture et parquet en interne',
					'Photos d’avancement hebdomadaires',
					'Un seul chef de projet',
					'Démarches de prime incluses',
					'Nettoyage final professionnel',
					'Service conception-réalisation en option',
					'Garantie 10 ans sur la menuiserie'
				],
				materials: [],
				process: {
					title: 'Comment se déroule une rénovation complète',
					steps: [
						{
							name: 'Métré & conception',
							text: 'Nous mesurons le bien, discutons de vos souhaits, proposons des plans et options de menuiserie.'
						},
						{
							name: 'Devis à prix fixe',
							text: 'Devis détaillé pièce par pièce et corps de métier. Vous voyez exactement le coût de chaque poste.'
						},
						{
							name: 'Validation du planning',
							text: 'Nous fixons la date de début et partageons un planning semaine par semaine. Vous recevez un accès au portail projet.'
						},
						{
							name: 'Travaux par phases',
							text: 'Démolition → reprises structurelles → menuiserie → plomberie/électricité → carrelage → peinture → cuisines & parquets → liste de finitions.'
						},
						{
							name: 'Réception',
							text: 'Nettoyage professionnel, visite de réception, liste de finitions clôturée sous 7 jours. Remise des documents de garantie.'
						}
					]
				},
				faq: [
					{
						question: 'Puis-je vivre sur place pendant la rénovation ?',
						answer: 'Pour les rénovations partielles (cuisine, salle de bain, châssis) oui. Pour une démolition complète, nous recommandons un déménagement — nous travaillons beaucoup plus vite dans une maison vide et le résultat est plus propre.'
					},
					{
						question: 'Gérez-vous les permis ?',
						answer: 'Oui pour les projets bruxellois et belges. Pour les projets néerlandais nous travaillons avec un agent permis local si nécessaire.'
					}
				],
				cta: {
					title: 'Obtenez un devis rénovation à prix fixe',
					body: 'Réservez un métré et vous aurez un devis détaillé pièce par pièce sous 10 jours ouvrables.',
					button: 'Réserver un Métré'
				},
				gallery: withAlts(galleryBalcony, {
					balcony1: 'Rénovation d’appartement à Bruxelles — porte-fenêtre, châssis bois et aménagement intérieur',
					balcony2: 'Balcon rénové avec châssis bois thermiques et menuiseries assorties'
				})
			}
		}
	},
	{
		key: 'wooden-staircase',
		parent: 'services',
		image: '/projects/staircase/Photo1.jpeg',
		content: {
			en: {
				slug: 'wooden-staircases',
				metaTitle: 'Custom Wooden Staircases — Made to Measure | TonyGroupe Brussels',
				metaDescription:
					'Bespoke wooden staircases in oak, walnut or pine — straight, quarter-turn or helical. Made in Brussels, installed across Belgium and the Netherlands.',
				keywords:
					'wooden staircase, custom staircase, oak staircase, helical staircase, staircase Brussels, staircase manufacturer Belgium, bespoke stairs',
				heading: 'Custom Wooden Staircases',
				subheading: 'Straight, quarter-turn or helical staircases in solid hardwood — engineered to your floor plan and finished to your style.',
				intro:
					'A staircase is the spine of your home. We design and build them in solid oak, walnut, ash or pine — straight runs, quarter-turn, half-turn or full helical. Every tread is mortised, glued and bolted to the stringer; treads come oiled, lacquered or painted, with optional anti-slip inserts and integrated LED lighting under the treads.',
				sections: [
					{
						heading: 'Designed to your floor plan',
						body: 'We start from your existing or planned floor plan, optimise the going and rise for comfort (typically 18 cm rise / 28 cm tread), and produce 3D drawings so you can see exactly how the staircase will sit in the room before we cut a single piece of timber.'
					},
					{
						heading: 'Built to last generations',
						body: 'Hardwood treads, full-thickness stringers, double-mortise joinery. Our staircases meet Belgian residential structural standards and carry a 10-year warranty. With a light annual re-oil they look better at 30 years than they did on day one.'
					}
				],
				features: [
					'Solid oak, walnut, ash or pine',
					'Straight, quarter-turn, half-turn or helical',
					'3D shop drawings before manufacture',
					'Integrated LED tread lighting (optional)',
					'Anti-slip inserts (optional)',
					'Matching balustrade and handrail',
					'10-year warranty',
					'Installation in 1–2 days'
				],
				materials: [
					'European oak — most common, hardwearing',
					'European walnut — premium, dark luxury finish',
					'Ash — light, modern, very strong',
					'Pine — paint-grade, most affordable'
				],
				process: {
					title: 'How we build your staircase',
					steps: [
						{
							name: '3D design',
							text: 'We measure your void, model the staircase in 3D and walk you through the design in our showroom.'
						},
						{
							name: 'Manufacturing',
							text: 'Treads, stringers and balustrade are CNC-cut and hand-finished in our Brussels workshop over 3 weeks.'
						},
						{
							name: 'Installation',
							text: 'Old staircase out, new staircase in over 1–2 days. We protect the floor and finish all trim.'
						}
					]
				},
				faq: [
					{
						question: 'Can you fit a staircase into a tight townhouse void?',
						answer: 'Yes — Brussels and Amsterdam townhouses often have very tight stair voids. We frequently design helical or winder staircases to fit voids as small as 1.2 × 2.0 m.'
					},
					{
						question: 'Do you do balustrades only?',
						answer: 'Yes. We make matching balustrades for existing staircases — wood, glass, brushed steel cable.'
					}
				],
				cta: {
					title: 'Design your custom staircase',
					body: 'Book a 3D design session at our Brussels showroom — free, no obligation.',
					button: 'Book Design Session'
				},
				gallery: withAlts(galleryStairs, {
					stairs1: 'Custom solid oak staircase with integrated LED tread lighting — TonyGroupe project',
					stairs2: 'Quarter-turn wooden staircase with matching balustrade in a renovated Brussels home'
				})
			},
			nl: {
				slug: 'houten-trappen',
				metaTitle: 'Houten Trappen op Maat — Gemaakt in Brussel | TonyGroupe',
				metaDescription:
					'Op maat gemaakte houten trappen in eik, noten of den — recht, kwartslag of helix. Gemaakt in Brussel, geplaatst in heel België en Nederland.',
				keywords:
					'houten trap, houten trap op maat, eiken trap, helix trap, trap Brussel, trap fabrikant België, op maat trap',
				heading: 'Houten Trappen op Maat',
				subheading: 'Rechte, kwartslag of helix trappen in massief hardhout — ontworpen voor uw plattegrond, afgewerkt naar uw smaak.',
				intro:
					'Een trap is de ruggengraat van uw woning. Wij ontwerpen en maken ze in massief eik, noten, es of den — recht, kwartslag, halfslag of volledige helix. Elke trede is gemortelijnd, gelijmd en geschroefd aan de bomen; treden komen geolied, gelakt of geschilderd, met optionele antislip inzetstukken en geïntegreerde LED-verlichting onder de treden.',
				sections: [
					{
						heading: 'Ontworpen op uw plattegrond',
						body: 'Wij vertrekken van uw bestaande of geplande plattegrond, optimaliseren tred en optrede voor comfort (doorgaans 18 cm optrede / 28 cm tred), en maken 3D-tekeningen zodat u precies ziet hoe de trap in de ruimte staat voordat wij ook maar één stuk hout zagen.'
					},
					{
						heading: 'Gebouwd om generaties mee te gaan',
						body: 'Hardhouten treden, bomen op volle dikte, dubbele pen-en-gat verbindingen. Onze trappen voldoen aan de Belgische woningbouwnormen en hebben 10 jaar garantie. Met een jaarlijkse lichte heroliebehandeling zien ze er op 30 jaar beter uit dan op dag één.'
					}
				],
				features: [
					'Massief eik, noten, es of den',
					'Recht, kwartslag, halfslag of helix',
					'3D-tekeningen vóór productie',
					'Geïntegreerde LED-tredeverlichting (optioneel)',
					'Antislip inzetstukken (optioneel)',
					'Bijpassende leuning en balustrade',
					'10 jaar garantie',
					'Plaatsing in 1 à 2 dagen'
				],
				materials: [
					'Europese eik — meest gebruikt, slijtvast',
					'Europese noten — premium, donkere luxueuze afwerking',
					'Es — licht, modern, zeer sterk',
					'Den — schilderen-gereed, meest betaalbaar'
				],
				process: {
					title: 'Hoe wij uw trap maken',
					steps: [
						{
							name: '3D-ontwerp',
							text: 'Wij meten uw trapgat op, modelleren de trap in 3D en lopen het ontwerp met u door in onze showroom.'
						},
						{
							name: 'Productie',
							text: 'Treden, bomen en balustrade worden CNC-gefreesd en met de hand afgewerkt in onze Brusselse werkplaats over 3 weken.'
						},
						{
							name: 'Plaatsing',
							text: 'Oude trap uit, nieuwe trap in op 1 à 2 dagen. Wij beschermen de vloer en werken alle afwerkingen af.'
						}
					]
				},
				faq: [
					{
						question: 'Kunt u een trap in een krap trapgat plaatsen?',
						answer: 'Ja — Brusselse en Amsterdamse rijwoningen hebben vaak zeer krappe trapgaten. Wij ontwerpen regelmatig helix- of slingertrappen die passen in trapgaten van slechts 1,2 × 2,0 m.'
					},
					{
						question: 'Maakt u ook enkel balustrades?',
						answer: 'Ja. Wij maken bijpassende balustrades voor bestaande trappen — hout, glas, geborsteld staalkabel.'
					}
				],
				cta: {
					title: 'Ontwerp uw trap op maat',
					body: 'Boek een 3D-ontwerpsessie in onze Brusselse showroom — gratis, vrijblijvend.',
					button: 'Boek Ontwerpsessie'
				},
				gallery: withAlts(galleryStairs, {
					stairs1: 'Op maat gemaakte massief eiken trap met geïntegreerde LED-tredeverlichting — TonyGroupe project',
					stairs2: 'Kwartslag houten trap met bijpassende balustrade in een gerenoveerde Brusselse woning'
				})
			},
			fr: {
				slug: 'escaliers-bois',
				metaTitle: 'Escaliers en Bois sur Mesure — Fabriqués à Bruxelles | TonyGroupe',
				metaDescription:
					'Escaliers en bois sur mesure en chêne, noyer ou pin — droits, quart-tournants ou hélicoïdaux. Fabriqués à Bruxelles, posés dans toute la Belgique.',
				keywords:
					'escalier bois, escalier sur mesure, escalier chêne, escalier hélicoïdal, escalier Bruxelles, fabricant escalier Belgique, escalier design',
				heading: 'Escaliers en Bois sur Mesure',
				subheading: 'Escaliers droits, quart-tournants ou hélicoïdaux en bois massif — conçus pour votre plan, finis selon votre style.',
				intro:
					'Un escalier est la colonne vertébrale de votre maison. Nous les concevons et fabriquons en chêne massif, noyer, frêne ou pin — droits, quart-tournants, demi-tournants ou en hélice complète. Chaque marche est mortaisée, collée et boulonnée au limon ; les marches sont livrées huilées, vernies ou peintes, avec inserts antidérapants en option et éclairage LED intégré sous les marches.',
				sections: [
					{
						heading: 'Conçu sur votre plan',
						body: 'Nous partons de votre plan existant ou projeté, optimisons la marche et la contremarche pour le confort (typiquement 18 cm de contremarche / 28 cm de giron), et produisons des plans 3D pour que vous voyiez exactement comment l’escalier s’intégrera avant qu’une seule pièce de bois ne soit coupée.'
					},
					{
						heading: 'Construit pour durer des générations',
						body: 'Marches en bois dur, limons à pleine épaisseur, assemblage à double mortaise. Nos escaliers respectent les normes belges du logement et bénéficient d’une garantie 10 ans. Avec un léger huilage annuel, ils sont plus beaux à 30 ans qu’au premier jour.'
					}
				],
				features: [
					'Chêne, noyer, frêne ou pin massif',
					'Droit, quart-tournant, demi-tournant ou hélicoïdal',
					'Plans 3D avant fabrication',
					'Éclairage LED intégré sous les marches (option)',
					'Inserts antidérapants (option)',
					'Rampe et main-courante assorties',
					'Garantie 10 ans',
					'Pose en 1 à 2 jours'
				],
				materials: [
					'Chêne européen — le plus courant, très résistant',
					'Noyer européen — premium, finition foncée luxueuse',
					'Frêne — clair, moderne, très résistant',
					'Pin — à peindre, le plus abordable'
				],
				process: {
					title: 'Comment nous fabriquons votre escalier',
					steps: [
						{
							name: 'Conception 3D',
							text: 'Nous mesurons votre trémie, modélisons l’escalier en 3D et parcourons le projet avec vous à l’atelier.'
						},
						{
							name: 'Fabrication',
							text: 'Marches, limons et rampe usinés en CNC et finis à la main dans notre atelier bruxellois en 3 semaines.'
						},
						{
							name: 'Pose',
							text: 'Ancien escalier déposé, nouveau escalier posé en 1 à 2 jours. Nous protégeons le sol et terminons toutes les finitions.'
						}
					]
				},
				faq: [
					{
						question: 'Pouvez-vous intégrer un escalier dans une trémie étroite ?',
						answer: 'Oui — les maisons mitoyennes bruxelloises ont souvent des trémies très étroites. Nous concevons régulièrement des escaliers hélicoïdaux ou à pas alternés pour des trémies de seulement 1,2 × 2,0 m.'
					},
					{
						question: 'Faites-vous uniquement la rampe ?',
						answer: 'Oui. Nous fabriquons des rampes assorties pour escaliers existants — bois, verre, câble inox brossé.'
					}
				],
				cta: {
					title: 'Concevez votre escalier sur mesure',
					body: 'Réservez une session de design 3D à notre atelier bruxellois — gratuite, sans engagement.',
					button: 'Réserver une Session Design'
				},
				gallery: withAlts(galleryStairs, {
					stairs1: 'Escalier en chêne massif sur mesure avec éclairage LED intégré — projet TonyGroupe',
					stairs2: 'Escalier quart-tournant en bois avec rampe assortie dans une maison bruxelloise rénovée'
				})
			}
		}
	},
	{
		key: 'wooden-kitchens',
		parent: 'services',
		image: '/projects/staircase/Photo3.jpeg',
		content: {
			en: {
				slug: 'wooden-kitchens',
				metaTitle: 'Custom Wooden Kitchens & Cabinetry | TonyGroupe Brussels',
				metaDescription:
					'Bespoke wooden kitchens, built-in wardrobes and cabinetry. Solid wood doors, soft-close drawers, integrated appliances. Made in Brussels, installed across Belgium and the Netherlands.',
				keywords:
					'wooden kitchen, custom kitchen, kitchen cabinets Brussels, built-in wardrobe, bespoke cabinetry, kitchen joinery, wooden cabinets',
				heading: 'Custom Wooden Kitchens & Cabinetry',
				subheading: 'Solid wood doors, soft-close hardware, integrated appliances — kitchens built by joiners, not flat-pack assemblers.',
				intro:
					'Most kitchens you can buy off-the-shelf are MDF carcasses with foil-wrapped fronts. Ours are solid timber doors on a moisture-resistant carcass, with Blum or Hettich soft-close hardware and any worktop you choose — solid wood, quartz, marble or stainless steel. Designed and installed by the same team.',
				sections: [
					{
						heading: 'A kitchen that lasts as long as the house',
						body: 'Solid timber doors, moisture-resistant 18 mm birch ply carcasses, Blum/Hettich soft-close drawer runners rated for 100 kg, and any worktop in any material. Built to fit your space to the millimetre — no fillers, no compromises.'
					},
					{
						heading: 'Built-in wardrobes and storage',
						body: 'We also build floor-to-ceiling wardrobes, walk-in closets, bookshelves and library walls. Same joinery quality, same materials, integrated lighting and matching finishes.'
					}
				],
				features: [
					'Solid wood doors',
					'Moisture-resistant 18 mm birch ply carcasses',
					'Blum / Hettich soft-close hardware',
					'Stone, wood, quartz or stainless worktops',
					'Integrated Bosch / Miele / Siemens appliances',
					'Custom-fit to the millimetre',
					'10-year hardware warranty',
					'Matching pantry / island / wardrobes'
				],
				materials: [
					'Oak, walnut, ash and pine doors',
					'18 mm Finnish birch ply carcasses',
					'Solid wood, quartz, marble or stainless worktops'
				],
				process: {
					title: 'How we build your kitchen',
					steps: [
						{
							name: 'Design consultation',
							text: 'We visit, measure the space, discuss appliances and layout, and produce 3D renders before quoting.'
						},
						{
							name: 'Quote & material selection',
							text: 'Fixed-price quote per cabinet. You pick door style, worktop, handles and appliances at our showroom.'
						},
						{
							name: 'Manufacturing',
							text: '4–5 weeks in our Brussels workshop. Doors pre-finished, carcasses pre-assembled.'
						},
						{
							name: 'Installation',
							text: '2–4 days on site, including worktop fitting, appliance integration and plumbing/electrical connections.'
						}
					]
				},
				faq: [
					{
						question: 'Can you reuse my existing appliances?',
						answer: 'Yes — we design the carcasses around your existing oven, hob and fridge dimensions. Worth checking ages though, a kitchen lasts 20+ years and most appliances do not.'
					},
					{
						question: 'Do you do island worktops in single pieces?',
						answer: 'Yes for wood and stainless. For stone we use ≤ 3.2 m slabs with a hidden seam if needed.'
					}
				],
				cta: {
					title: 'Design your custom kitchen',
					body: 'Book a free design consultation at our showroom — we will produce 3D renders before quoting.',
					button: 'Book Design Consultation'
				},
				gallery: withAlts(galleryStairs, {
					stairs1: 'Custom solid oak kitchen cabinetry with Blum soft-close hardware — TonyGroupe project',
					stairs2: 'Floor-to-ceiling built-in wardrobe in solid walnut with integrated lighting'
				})
			},
			nl: {
				slug: 'houten-keukens',
				metaTitle: 'Houten Keukens & Inbouwkasten op Maat | TonyGroupe Brussel',
				metaDescription:
					'Op maat gemaakte houten keukens, inbouwkasten en kastenwanden. Massief houten fronten, soft-close lades, geïntegreerde apparatuur. Gemaakt in Brussel.',
				keywords:
					'houten keuken, keuken op maat, keukenkasten Brussel, inbouwkast op maat, schrijnwerk keuken, massief houten keuken, keuken fabrikant België',
				heading: 'Houten Keukens & Kastwerk op Maat',
				subheading: 'Massief houten fronten, soft-close beslag, geïntegreerde apparatuur — keukens gemaakt door schrijnwerkers, niet door kastenmonteurs.',
				intro:
					'De meeste kant-en-klare keukens hebben MDF-corpussen met foliedeurtjes. De onze hebben massief houten fronten op een vochtbestendig corpus, met Blum of Hettich soft-close beslag en een werkblad naar keuze — massief hout, kwarts, marmer of roestvrij staal. Ontworpen en geplaatst door hetzelfde team.',
				sections: [
					{
						heading: 'Een keuken die net zo lang meegaat als de woning',
						body: 'Massief houten fronten, vochtbestendige berken multiplex corpussen van 18 mm, Blum/Hettich soft-close ladegeleiders tot 100 kg, en elk gewenst werkblad. Op de millimeter op uw ruimte gemaakt — geen vullingen, geen compromissen.'
					},
					{
						heading: 'Inbouwkasten en opbergmeubels',
						body: 'Wij bouwen ook plafondhoge kastenwanden, walk-in dressings, boekenkasten en bibliotheekwanden. Zelfde schrijnwerkkwaliteit, zelfde materialen, geïntegreerde verlichting en bijpassende afwerking.'
					}
				],
				features: [
					'Massief houten fronten',
					'Vochtbestendige 18 mm berken multiplex corpussen',
					'Blum / Hettich soft-close beslag',
					'Werkbladen in steen, hout, kwarts of inox',
					'Geïntegreerde Bosch / Miele / Siemens apparatuur',
					'Op de millimeter op maat',
					'10 jaar garantie op beslag',
					'Bijpassende pantry / eiland / kasten'
				],
				materials: [
					'Eik, noten, es en den fronten',
					'18 mm Fins berken multiplex corpussen',
					'Massief hout, kwarts, marmer of inox werkbladen'
				],
				process: {
					title: 'Hoe wij uw keuken bouwen',
					steps: [
						{
							name: 'Ontwerpgesprek',
							text: 'Wij komen langs, meten de ruimte, bespreken apparatuur en indeling, en maken 3D-renders voor de offerte.'
						},
						{
							name: 'Offerte & materiaalkeuze',
							text: 'Vaste prijs offerte per kast. U kiest frontstijl, werkblad, grepen en apparatuur in onze showroom.'
						},
						{
							name: 'Productie',
							text: '4 à 5 weken in onze Brusselse werkplaats. Fronten vooraf afgewerkt, corpussen vooraf gemonteerd.'
						},
						{
							name: 'Plaatsing',
							text: '2 à 4 dagen ter plaatse, inclusief werkbladplaatsing, apparatuurintegratie en sanitair/elektrische aansluitingen.'
						}
					]
				},
				faq: [
					{
						question: 'Kunt u mijn bestaande apparatuur hergebruiken?',
						answer: 'Ja — wij ontwerpen de corpussen rond uw bestaande oven, kookplaat en koelkast. Houd wel rekening met de leeftijd, een keuken gaat 20+ jaar mee en de meeste apparaten niet.'
					},
					{
						question: 'Maakt u eilandwerkbladen in één stuk?',
						answer: 'Ja voor hout en inox. Voor steen gebruiken wij platen tot 3,2 m met indien nodig een verborgen naad.'
					}
				],
				cta: {
					title: 'Ontwerp uw keuken op maat',
					body: 'Boek een gratis ontwerpgesprek in onze showroom — wij maken 3D-renders vóór de offerte.',
					button: 'Boek Ontwerpgesprek'
				},
				gallery: withAlts(galleryStairs, {
					stairs1: 'Op maat gemaakte massief eiken keukenkasten met Blum soft-close beslag — TonyGroupe project',
					stairs2: 'Plafondhoge inbouwkast in massief noten met geïntegreerde verlichting'
				})
			},
			fr: {
				slug: 'cuisines-bois',
				metaTitle: 'Cuisines en Bois & Mobilier sur Mesure | TonyGroupe Bruxelles',
				metaDescription:
					'Cuisines en bois, dressings et meubles sur mesure. Façades en bois massif, tiroirs soft-close, électroménager intégré. Fabriqués à Bruxelles.',
				keywords:
					'cuisine bois, cuisine sur mesure, cuisine Bruxelles, dressing sur mesure, menuiserie cuisine, cuisine en bois massif, fabricant cuisine Belgique',
				heading: 'Cuisines en Bois & Mobilier sur Mesure',
				subheading: 'Façades en bois massif, quincaillerie soft-close, électroménager intégré — des cuisines fabriquées par des menuisiers, pas par des monteurs de kits.',
				intro:
					'La plupart des cuisines prêtes à monter sont en MDF avec des façades en plaqué film. Les nôtres ont des façades en bois massif sur un caisson hydrofuge, avec quincaillerie soft-close Blum ou Hettich et le plan de travail de votre choix — bois massif, quartz, marbre ou inox. Conçues et posées par la même équipe.',
				sections: [
					{
						heading: 'Une cuisine qui dure autant que la maison',
						body: 'Façades en bois massif, caissons en contreplaqué de bouleau hydrofuge de 18 mm, coulisses soft-close Blum/Hettich jusqu’à 100 kg, et plan de travail au choix. Sur mesure au millimètre — pas de fileurs, pas de compromis.'
					},
					{
						heading: 'Dressings et rangements intégrés',
						body: 'Nous fabriquons aussi des armoires toute hauteur, dressings, bibliothèques et bibliothèques murales. Même qualité de menuiserie, mêmes matériaux, éclairage intégré et finitions assorties.'
					}
				],
				features: [
					'Façades en bois massif',
					'Caissons en contreplaqué de bouleau hydrofuge 18 mm',
					'Quincaillerie soft-close Blum / Hettich',
					'Plans de travail bois, quartz, marbre ou inox',
					'Électroménager intégré Bosch / Miele / Siemens',
					'Sur mesure au millimètre',
					'Garantie 10 ans sur la quincaillerie',
					'Cellier / îlot / dressings assortis'
				],
				materials: [
					'Façades en chêne, noyer, frêne et pin',
					'Caissons en contreplaqué de bouleau finlandais 18 mm',
					'Plans en bois massif, quartz, marbre ou inox'
				],
				process: {
					title: 'Comment nous fabriquons votre cuisine',
					steps: [
						{
							name: 'Consultation design',
							text: 'Nous nous déplaçons, mesurons l’espace, discutons électroménager et aménagement, et produisons des rendus 3D avant de chiffrer.'
						},
						{
							name: 'Devis & matériaux',
							text: 'Devis à prix fixe par caisson. Vous choisissez le style de façade, le plan, les poignées et l’électroménager en showroom.'
						},
						{
							name: 'Fabrication',
							text: '4 à 5 semaines dans notre atelier bruxellois. Façades pré-finies, caissons pré-assemblés.'
						},
						{
							name: 'Pose',
							text: '2 à 4 jours sur place, incluant la pose du plan, l’intégration de l’électroménager et les raccordements plomberie/électricité.'
						}
					]
				},
				faq: [
					{
						question: 'Pouvez-vous réutiliser mes appareils existants ?',
						answer: 'Oui — nous concevons les caissons autour de vos dimensions actuelles de four, plaque et frigo. À vérifier toutefois l’âge : une cuisine dure 20 ans et plus, la plupart des appareils non.'
					},
					{
						question: 'Faites-vous des plans d’îlot en une seule pièce ?',
						answer: 'Oui pour le bois et l’inox. Pour la pierre, plaques jusqu’à 3,2 m avec joint masqué si nécessaire.'
					}
				],
				cta: {
					title: 'Concevez votre cuisine sur mesure',
					body: 'Réservez une consultation design gratuite à notre showroom — nous produisons des rendus 3D avant chiffrage.',
					button: 'Réserver une Consultation'
				},
				gallery: withAlts(galleryStairs, {
					stairs1: 'Cuisine en chêne massif sur mesure avec quincaillerie Blum soft-close — projet TonyGroupe',
					stairs2: 'Dressing toute hauteur en noyer massif avec éclairage intégré'
				})
			}
		}
	}
];

export function getServiceBySlug(lang: Language, slug: string): Service | undefined {
	return services.find((s) => s.content[lang].slug === slug);
}

export function getAllSlugsForLang(lang: Language): string[] {
	return services.map((s) => s.content[lang].slug);
}

export function getServiceEntries(): { lang: string; slug: string }[] {
	const entries: { lang: string; slug: string }[] = [];
	for (const service of services) {
		entries.push({ lang: '', slug: service.content.en.slug });
		entries.push({ lang: 'nl', slug: service.content.nl.slug });
		entries.push({ lang: 'fr', slug: service.content.fr.slug });
	}
	return entries;
}
