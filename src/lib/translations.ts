export interface FaqItem {
	question: string;
	answer: string;
}

export interface Translation {
	nav: {
		home: string;
		services: string;
		advantages: string;
		hardware: string;
		cases: string;
		faq: string;
		contact: string;
		getQuote: string;
	};
	promo: {
		badge: string;
		mainDiscount: string;
		referralDiscount: string;
		validUntil: string;
		totalSavings: string;
	};
	hero: {
		badge: string;
		manufacturerBadge: string;
		title: string;
		titleHighlight: string;
		tagline: string;
		description: string;
		subsidyText: string;
		subsidyLinkISDE: string;
		subsidyLinkSVVE: string;
		ctaPrimary: string;
		ctaSecondary: string;
		stats: {
			projects: string;
			satisfaction: string;
			savings: string;
		};
	};
	services: {
		title: string;
		subtitle: string;
		primaryLabel: string;
		secondaryLabel: string;
		woodenJoinery: {
			title: string;
			description: string;
			features: string[];
		};
		interiorJoinery: {
			title: string;
			description: string;
			features: string[];
		};
		fullRenovation: {
			title: string;
			description: string;
			features: string[];
		};
		pvcAluminum: {
			title: string;
			description: string;
			features: string[];
		};
		subsidyEligible: {
			title: string;
			description: string;
			features: string[];
		};
		flooring: {
			title: string;
			description: string;
			features: string[];
		};
	};
	advantages: {
		title: string;
		subtitle: string;
		manufacturer: {
			title: string;
			description: string;
		};
		thermal: {
			title: string;
			description: string;
		};
		quality: {
			title: string;
			description: string;
		};
		custom: {
			title: string;
			description: string;
		};
		uValue: string;
	};
	hardware: {
		title: string;
		subtitle: string;
		hinges: {
			title: string;
			description: string;
			features: string[];
		};
		rotoHardware: {
			title: string;
			description: string;
			features: string[];
		};
		doorStrip: {
			title: string;
			description: string;
			features: string[];
		};
	};
	cases: {
		title: string;
		subtitle: string;
		project1: {
			title: string;
			description: string;
			results: string[];
		};
		project2: {
			title: string;
			description: string;
			results: string[];
		};
		project3: {
			title: string;
			description: string;
			results: string[];
		};
	};
	faq: {
		title: string;
		subtitle: string;
		items: FaqItem[];
	};
	contact: {
		title: string;
		subtitle: string;
		manufacturerNote: string;
		form: {
			name: string;
			email: string;
			phone: string;
			propertyType: string;
			propertyOptions: {
				select: string;
				house: string;
				apartment: string;
				commercial: string;
				other: string;
			};
			serviceInterest: string;
			serviceOptions: {
				select: string;
				woodenWindows: string;
				woodenDoors: string;
				interiorJoinery: string;
				staircase: string;
				kitchen: string;
				fullRenovation: string;
				pvcAluminum: string;
				assessment: string;
			};
			message: string;
			messagePlaceholder: string;
			submit: string;
			namePlaceholder: string;
			emailPlaceholder: string;
			phonePlaceholder: string;
		};
		info: {
			phone: string;
			email: string;
			location: string;
			locationText: string;
		};
	};
	footer: {
		description: string;
		quickLinks: string;
		businessHours: string;
		schedule: {
			weekdays: string;
			saturday: string;
			sunday: string;
		};
		address: string;
		copyright: string;
		servesTitle: string;
		servesText: string;
	};
}

export type Language = 'en' | 'nl' | 'fr';

export const translations: Record<Language, Translation> = {
	en: {
		nav: {
			home: 'Home',
			services: 'Services',
			advantages: 'Why Choose Us',
			hardware: 'Hardware & Security',
			cases: 'Our Work',
			faq: 'FAQ',
			contact: 'Contact',
			getQuote: 'Get Quote'
		},
		promo: {
			badge: 'Limited Time Offer',
			mainDiscount: '10% OFF all orders until August 15th!',
			referralDiscount: '+10% extra when your referral places an order',
			validUntil: 'Valid until August 15th, 2026',
			totalSavings: 'Save over 20% when your referrals become customers!'
		},
		hero: {
			badge: 'Direct Manufacturer - No Middleman',
			manufacturerBadge: 'We Manufacture, We Install',
			title: 'Custom Wooden Window Frames, Doors &',
			titleHighlight: 'Home Renovations',
			tagline: 'Handcrafted wooden joinery — friendly service, fair prices, real craftsmen.',
			description:
				'Family-run workshop crafting custom wooden window frames (kozijnen), doors and interior joinery with thermal HR++ insulating glass. We also handle complete home renovations, staircases, kitchens and parquet flooring. PVC and aluminum options available on request.',
			subsidyText:
				'Our products meet the requirements for Dutch government energy subsidies! Ask us about ISDE (homeowners) and SVVE (VvE associations) eligible window and door options.',
			subsidyLinkISDE: 'ISDE Program',
			subsidyLinkSVVE: 'SVVE Program',
			ctaPrimary: 'Request Free Quote',
			ctaSecondary: 'View Our Services',
			stats: {
				projects: 'Projects Completed',
				satisfaction: 'Client Satisfaction',
				savings: 'Energy Savings'
			}
		},
		services: {
			title: 'Our Services',
			subtitle:
				'Custom wooden window frames, doors, renovations and interior joinery — all crafted in our own workshop in Brussels',
			primaryLabel: 'Primary Specialty',
			secondaryLabel: 'Also Available',
			woodenJoinery: {
				title: 'Wooden Window Frames & Doors',
				description:
					'Made-to-measure wooden window frames (kozijnen) and doors with HR++ or triple thermal glass for superior insulation. Crafted in our own workshop using time-tested joinery techniques and modern thermal-break technology — perfect for replacement projects (kozijnen vervangen) or new-build homes.',
				features: [
					'HR++ & triple insulating glass',
					'Nordic pine, spruce & oak frames',
					'Made-to-measure designs',
					'10-year manufacturer warranty'
				]
			},
			interiorJoinery: {
				title: 'Interior Joinery & Custom Furniture',
				description:
					"Bespoke wooden staircases, kitchen cabinets, built-in wardrobes and interior doors. Handcrafted from solid wood to match your home's character, with finish options ranging from natural oil to lacquered colors.",
				features: ['Custom staircases', 'Kitchen cabinets', 'Built-in wardrobes', 'Interior doors']
			},
			fullRenovation: {
				title: 'Home Renovations',
				description:
					'Complete home renovation services — window frame replacement, door refurbishment, structural wood repairs, tiling, painting and full interior remodeling. One reliable team from start to finish, so you avoid juggling multiple contractors.',
				features: [
					'Window frame replacement (kozijnen vervangen)',
					'HR++ & triple-glass upgrades',
					'Wooden window restoration',
					'Door refurbishment',
					'Full interior renovation (tiles, painting, repairs)'
				]
			},
			pvcAluminum: {
				title: 'PVC & Aluminum Windows',
				description:
					'Modern PVC and aluminum window frames and doors for homeowners who prefer low-maintenance materials. Same thermal performance as our wooden range, with sleek profiles and a wide color palette.',
				features: [
					'Low maintenance',
					'Thermal-break profiles',
					'Modern aesthetics',
					'Wide color palette'
				]
			},
			subsidyEligible: {
				title: 'Subsidy-Eligible Energy-Saving Products',
				description:
					'Maximize your savings with our ISDE & SVVE eligible window frames and doors. Every product we install meets the Dutch government subsidy requirements for energy-efficient renovations — lowering your bills and your environmental footprint.',
				features: [
					'HR++ glass (U ≤ 1.2 W/m²K)',
					'Triple glass (U ≤ 0.7 W/m²K)',
					'Insulating doors (Ud ≤ 1.0-1.5)',
					'Thermal-break frames',
					'Approved meldcode products'
				]
			},
			flooring: {
				title: 'Wood & Parquet Flooring',
				description:
					'Professional installation of premium wood and parquet flooring. From classic herringbone patterns to wide oak planks — sanding, oiling and refinishing services for existing floors included.',
				features: [
					'Solid wood flooring',
					'Parquet patterns',
					'Engineered wood',
					'Sanding & refinishing'
				]
			}
		},
		advantages: {
			title: 'Why Choose Us',
			subtitle: 'A friendly, family-run manufacturer with decades of joinery experience',
			manufacturer: {
				title: 'Direct from the Workshop',
				description:
					'We manufacture everything in our own workshop in Brussels — no middleman, no resellers, no surprise markups. You talk directly with the craftsmen who build your window frames, doors and furniture.'
			},
			thermal: {
				title: 'Superior Thermal Performance',
				description:
					'Our HR++ and triple thermal glass, combined with precision-fitted frames, reduce heat loss by up to 40%. Lower energy bills, a quieter home and warmer rooms all year round.'
			},
			quality: {
				title: 'Honest, Artisan Quality',
				description:
					'Traditional joinery techniques meet modern technology. Every frame, door and stair is built to last generations — and we are happy to show you the workshop where it is made.'
			},
			custom: {
				title: 'Fully Made-to-Measure',
				description:
					'No standard sizes here. Every window frame, door and piece of furniture is built to your exact dimensions, profile and style — old town heritage homes welcome.'
			},
			uValue: 'Thermal Performance'
		},
		hardware: {
			title: 'Hardware & Security',
			subtitle:
				'Premium ironmongery and certified security hardware for maximum protection and durability',
			hinges: {
				title: 'Security Disc Hinges',
				description:
					'Steel security disc hinges with smooth, anti-burglary operation and extra-large load capacity with rounded corners. Suitable for exterior windows and doors. Features a built-in anti-theft device, wear-resistant and self-lubricating design — eliminating black paint stains for good. Equipped with special beveled, self-locating bearings that cannot fall out thanks to the fixing collar. Star-shaped screw holes reduce the risk of screw breakage.',
				features: [
					'Police Safe Living quality mark',
					'SKG3 certified',
					'Built-in anti-theft device',
					'Self-lubricating & wear-resistant',
					'Extra-large load capacity',
					'Rounded corners for safety'
				]
			},
			rotoHardware: {
				title: 'Roto Entry Door Hardware',
				description:
					'Top-quality Roto hardware for entry doors, offering the highest level of security and convenience. Automatic locking without using a key, with an optional electronic actuator for fully automatic operation.',
				features: [
					'Automatic locking without a key',
					'Day-opening function for easy keyless access',
					'Optional electronic actuator for automatic opening',
					'Three automatic safety locking points (RC 2 / RC 3)',
					'Auto-triggering deadbolt in main lock',
					'VdS tested anti-burglary protection',
					'Auto hook & bolt provide counter-pressure without key',
					'10-year operational warranty'
				]
			},
			doorStrip: {
				title: 'Protective Door Strip',
				description:
					'Protective strip for exterior doors providing preventive security measures. Delivers a very strong delay effect in case of a burglary attempt, giving you valuable extra time.',
				features: [
					'Strong delay effect against break-in attempts',
					'Tested and SKG certified',
					'5-year warranty',
					'Suitable for all exterior doors'
				]
			}
		},
		cases: {
			title: 'Our Recent Projects',
			subtitle: 'Quality wooden joinery and renovations across Belgium and the Netherlands',
			project1: {
				title: 'Custom Wooden Staircase & Built-In Furniture',
				description:
					'Bespoke wooden staircases and custom furniture crafted with precision. From grand statement staircases to elegant wardrobes and cabinets, each piece showcases traditional joinery techniques combined with contemporary design.',
				results: ['Custom staircase design', 'Built-in wardrobes & cabinets', 'Made to measure']
			},
			project2: {
				title: 'Apartment Renovation — Balcony Door & Windows',
				description:
					'Complete balcony door and window frame replacement with premium HR++ thermal insulating glass. Modern aesthetics with superior insulation for year-round comfort and energy efficiency.',
				results: [
					'Balcony door replacement',
					'New thermal window frames',
					'Improved insulation',
					'Enhanced natural light'
				]
			},
			project3: {
				title: 'House Renovation — Wooden Front Door & Window Frames',
				description:
					'Complete front entrance transformation with a bespoke wooden front door and matching wooden window frames (kozijnen). Premium craftsmanship that elevates curb appeal while maximizing thermal performance.',
				results: [
					'Custom wooden front door',
					'Matching wooden window frames',
					'Enhanced curb appeal',
					'Superior thermal efficiency'
				]
			}
		},
		faq: {
			title: 'Frequently Asked Questions',
			subtitle: 'Everything you want to know about wooden window frames, renovations and our process',
			items: [
				{
					question: 'How long do custom wooden window frames last?',
					answer:
						'A well-built wooden window frame from quality timber (we use Nordic pine, spruce and oak) lasts 50+ years with basic maintenance — repainting roughly every 8–10 years. Wooden frames also age beautifully, which is why we recommend them for heritage and characterful homes.'
				},
				{
					question: 'Can you replace existing window frames (kozijnen vervangen) without damaging the wall?',
					answer:
						'Yes. We carefully remove existing frames, prep the opening, and fit the new wooden frame with precision sealing. Most replacements take a single day per opening with minimal disruption. We clean up everything and finish the interior trim so the room looks better than before.'
				},
				{
					question: 'Are your wooden windows eligible for ISDE or SVVE subsidies?',
					answer:
						'Yes — our HR++ and triple-glazed wooden window frames meet the U-value requirements for both the ISDE subsidy (for private homeowners in the Netherlands) and the SVVE subsidy (for VvE / homeowners associations). We provide all the documentation you need for your application.'
				},
				{
					question: 'How much does a wooden window frame cost?',
					answer:
						'Pricing depends on size, glass type (HR++ or triple), hardware spec, and finish. Because we manufacture in-house, we typically save customers 15–30% compared to going through a retailer. Request a free, no-obligation quote and we will give you a clear breakdown per opening.'
				},
				{
					question: 'Do you handle full home renovations, or only windows?',
					answer:
						'Both. Many of our customers start with a window frame replacement and then ask us to take on the rest — tiling, painting, doors, kitchens, staircases, flooring. We have a small in-house team that can handle a complete renovation end-to-end, so you do not need to coordinate multiple contractors.'
				},
				{
					question: 'Do you work in the Netherlands as well as Belgium?',
					answer:
						'Yes. Our workshop is in Brussels but we serve clients across Belgium and the Netherlands — including Amsterdam, Rotterdam, The Hague, Antwerp and Ghent. Subsidy paperwork for Dutch customers is included.'
				},
				{
					question: 'Wood, PVC or aluminum — which should I choose?',
					answer:
						'Wood looks warm, ages beautifully and suits heritage homes. PVC is the lowest-maintenance and most budget-friendly. Aluminum gives you the slimmest sightlines for big modern glazing. All three deliver the same thermal performance with the right glass and hardware — we can walk you through the trade-offs in a free consultation.'
				},
				{
					question: 'What hardware and security do you fit as standard?',
					answer:
						'All exterior wooden doors come with Roto hardware (RC 2 / RC 3 anti-burglary, VdS tested), SKG3-certified security disc hinges, and a protective strip. Our hinge spec carries the Police Safe Living quality mark. Higher security upgrades are available on request.'
				},
				{
					question: 'How long does a typical project take from quote to installation?',
					answer:
						'A standard wooden window frame replacement takes 4–6 weeks: 1–2 weeks for measuring and design sign-off, 2–3 weeks of in-workshop manufacturing, and installation in 1–2 days per opening. Larger renovation projects are scheduled with a clear week-by-week plan.'
				}
			]
		},
		contact: {
			title: 'Get Your Free Quote',
			subtitle: 'Tell us about your project and receive a no-obligation quote',
			manufacturerNote: 'Direct from our workshop – no middleman pricing',
			form: {
				name: 'Full Name',
				email: 'Email Address',
				phone: 'Phone Number',
				propertyType: 'Property Type',
				propertyOptions: {
					select: 'Select type',
					house: 'House',
					apartment: 'Apartment',
					commercial: 'Commercial',
					other: 'Other'
				},
				serviceInterest: 'Service Interest',
				serviceOptions: {
					select: 'Select service',
					woodenWindows: 'Wooden Window Frames',
					woodenDoors: 'Wooden Doors',
					interiorJoinery: 'Interior Joinery',
					staircase: 'Custom Staircase',
					kitchen: 'Kitchen Furniture',
					fullRenovation: 'Full Renovation',
					pvcAluminum: 'PVC/Aluminum Joinery',
					assessment: 'Free Assessment Visit'
				},
				message: 'Project Details',
				messagePlaceholder:
					'Describe your project: number of windows/doors, type of work, preferred materials, timeline...',
				submit: 'Request Free Quote',
				namePlaceholder: 'Your name',
				emailPlaceholder: 'your.email@example.com',
				phonePlaceholder: '+32 XXX XX XX XX'
			},
			info: {
				phone: 'Phone',
				email: 'Email',
				location: 'Location',
				locationText: 'Brussels, Belgium'
			}
		},
		footer: {
			description:
				'Family-run workshop with more than 25 years of experience in wooden window frames, doors, staircases and complete home renovations. Direct manufacturer — honest pricing, certified security hardware, and craftsmanship that lasts.',
			quickLinks: 'Quick Links',
			businessHours: 'Business Hours',
			schedule: {
				weekdays: 'Mon-Fri: 8:00 - 18:00',
				saturday: 'Sat: 9:00 - 14:00',
				sunday: 'Sun: Closed'
			},
			address: 'Rue Potaerdenberg 354, B-1080 Bruxelles',
			copyright: 'All rights reserved.',
			servesTitle: 'Areas We Serve',
			servesText:
				'Wooden window frames, doors and home renovations across Belgium and the Netherlands — including Brussels, Antwerp, Ghent, Liège, Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven.'
		}
	},
	nl: {
		nav: {
			home: 'Home',
			services: 'Diensten',
			advantages: 'Waarom Wij',
			hardware: 'Hang- & Sluitwerk',
			cases: 'Ons Werk',
			faq: 'Veelgestelde Vragen',
			contact: 'Contact',
			getQuote: 'Offerte Aanvragen'
		},
		promo: {
			badge: 'Tijdelijke Aanbieding',
			mainDiscount: '10% KORTING op alle bestellingen tot 15 augustus!',
			referralDiscount: '+10% extra wanneer uw doorverwijzing een bestelling plaatst',
			validUntil: 'Geldig tot 15 augustus 2026',
			totalSavings: 'Bespaar meer dan 20% wanneer uw doorverwijzingen klant worden!'
		},
		hero: {
			badge: 'Directe Fabrikant - Geen Tussenpersoon',
			manufacturerBadge: 'Wij Produceren, Wij Plaatsen',
			title: 'Houten Kozijnen, Ramen, Deuren &',
			titleHighlight: 'Woningrenovaties op Maat',
			tagline:
				'Handgemaakt schrijnwerk — vriendelijke service, eerlijke prijzen, échte ambachtslieden.',
			description:
				'Familiebedrijf dat houten kozijnen, ramen en deuren op maat maakt met HR++ thermisch isolerend glas. Wij verzorgen ook complete woningrenovaties, trappen, keukens en parketvloeren. PVC en aluminium kozijnen zijn op aanvraag beschikbaar.',
			subsidyText:
				'Onze producten voldoen aan de eisen voor overheidssubsidies! Vraag ons naar ISDE (woningeigenaren) en SVVE (VvE) geschikte raam- en deuropties.',
			subsidyLinkISDE: 'ISDE Regeling',
			subsidyLinkSVVE: 'SVVE Regeling',
			ctaPrimary: 'Gratis Offerte Aanvragen',
			ctaSecondary: 'Bekijk Onze Diensten',
			stats: {
				projects: 'Voltooide Projecten',
				satisfaction: 'Klanttevredenheid',
				savings: 'Energiebesparing'
			}
		},
		services: {
			title: 'Onze Diensten',
			subtitle:
				'Houten kozijnen, ramen, deuren, renovaties en interieur schrijnwerk op maat — alles in eigen werkplaats in Brussel gemaakt',
			primaryLabel: 'Primaire Specialiteit',
			secondaryLabel: 'Ook Beschikbaar',
			woodenJoinery: {
				title: 'Houten Kozijnen, Ramen & Deuren',
				description:
					'Houten kozijnen, ramen en deuren op maat met HR++ of triple glas voor superieure isolatie. In eigen werkplaats gemaakt met traditionele schrijnwerktechnieken en moderne thermisch onderbroken profielen — perfect voor het vervangen van bestaande kozijnen of nieuwbouw.',
				features: [
					'HR++ & triple isolerend glas',
					'Noorse den, spar & eik',
					'Op maat ontwerp',
					'10 jaar fabrieksgarantie'
				]
			},
			interiorJoinery: {
				title: 'Interieur Schrijnwerk & Meubilair',
				description:
					'Prachtige op maat gemaakte trappen, keukenmeubilair, inbouwkasten en binnendeuren. Handgemaakt van massief hout, passend bij het karakter van uw woning — met afwerking van natuurlijke olie tot gelakte kleuren.',
				features: ['Op maat gemaakte trappen', 'Keukenkasten', 'Inbouwkasten', 'Binnendeuren']
			},
			fullRenovation: {
				title: 'Woningrenovaties',
				description:
					'Complete renovatiediensten voor uw woning — kozijnen vervangen, deuren opknappen, structurele houtreparaties, tegelwerk, schilderwerk en volledige interieurrenovatie. Eén betrouwbaar team van begin tot eind, zodat u niet met meerdere aannemers hoeft te jongleren.',
				features: [
					'Kozijnen vervangen',
					'HR++ & triple glas upgrades',
					'Houten ramen restauratie',
					'Deuren opknappen',
					'Volledige interieurrenovatie (tegels, schilderwerk, reparaties)'
				]
			},
			pvcAluminum: {
				title: 'PVC & Aluminium Kozijnen',
				description:
					'Moderne PVC en aluminium kozijnen en deuren voor wie de voorkeur geeft aan onderhoudsarme materialen. Dezelfde thermische prestaties als onze houten lijn, met slanke profielen en een breed kleurenpalet.',
				features: [
					'Onderhoudsarm',
					'Thermisch onderbroken profielen',
					'Moderne esthetiek',
					'Breed kleurenpalet'
				]
			},
			subsidyEligible: {
				title: 'Subsidie-Geschikte Energiezuinige Producten',
				description:
					'Maximaliseer uw besparing met onze ISDE & SVVE geschikte kozijnen en deuren. Elk product dat wij installeren voldoet aan de eisen voor overheidssubsidies voor energiezuinige renovaties — lagere energierekening én een kleinere CO₂-voetafdruk.',
				features: [
					'HR++ glas (U ≤ 1,2 W/m²K)',
					'Triple glas (U ≤ 0,7 W/m²K)',
					'Isolerende deuren (Ud ≤ 1,0-1,5)',
					'Thermisch onderbroken kozijnen',
					'Goedgekeurde meldcode producten'
				]
			},
			flooring: {
				title: 'Houten & Parketvloeren',
				description:
					'Professionele installatie van premium houten en parketvloeren. Van klassieke visgraatpatronen tot brede eiken planken — schuren, oliën en renoveren van bestaande vloeren inbegrepen.',
				features: ['Massief houten vloeren', 'Parketpatronen', 'Multiplank', 'Schuren & renoveren']
			}
		},
		advantages: {
			title: 'Waarom Voor Ons Kiezen',
			subtitle: 'Een vriendelijk, familiebedrijf met tientallen jaren schrijnwerk ervaring',
			manufacturer: {
				title: 'Direct uit de Werkplaats',
				description:
					'Wij maken alles in onze eigen werkplaats in Brussel — geen tussenpersoon, geen wederverkopers, geen verrassingstoeslagen. U heeft direct contact met de ambachtslieden die uw kozijnen, deuren en meubels maken.'
			},
			thermal: {
				title: 'Superieure Thermische Prestatie',
				description:
					'Ons HR++ en triple thermisch glas, in combinatie met precies passende kozijnen, vermindert warmteverlies tot 40%. Lagere energierekening, rustiger huis en warmere kamers het hele jaar door.'
			},
			quality: {
				title: 'Eerlijke, Ambachtelijke Kwaliteit',
				description:
					'Traditionele schrijnwerktechnieken in combinatie met moderne technologie. Elk kozijn, elke deur en elke trap is gemaakt om generaties mee te gaan — en u bent altijd welkom om de werkplaats te bezoeken.'
			},
			custom: {
				title: 'Volledig Op Maat',
				description:
					'Geen standaardmaten hier. Elk kozijn, elke deur en elk meubelstuk wordt gemaakt volgens uw exacte afmetingen, profiel en stijl — ook karakteristieke en monumentale woningen zijn welkom.'
			},
			uValue: 'Thermische Prestatie'
		},
		hardware: {
			title: 'Hang- & Sluitwerk',
			subtitle:
				'Premium beslag en gecertificeerd veiligheidsbeslag voor maximale bescherming en duurzaamheid',
			hinges: {
				title: 'Veiligheidsschijfscharnieren',
				description:
					'Stalen veiligheidsschijfscharnieren met soepele, inbraakwerende werking en extra grote draagcapaciteit met afgeronde hoeken. Geschikt voor buitenramen en -deuren. Voorzien van een ingebouwd anti-diefstalmechanisme, slijtvast en zelfsmerende werking — waardoor zwarte verfvlekken verleden tijd zijn. Uitgerust met speciale afgeschuinde, zelfzoekende lagers die dankzij de borgkraag niet uit het scharnier kunnen vallen. Stervormige schroefgaten verminderen het risico op schroefbreuk.',
				features: [
					'Politiekeurmerk Veilig Wonen',
					'SKG3 gecertificeerd',
					'Ingebouwd anti-diefstalmechanisme',
					'Zelfsmerend & slijtvast',
					'Extra grote draagcapaciteit',
					'Afgeronde hoeken voor veiligheid'
				]
			},
			rotoHardware: {
				title: 'Roto Voordeurbeslag',
				description:
					'Hoogwaardig Roto beslag voor voordeuren, met het hoogste niveau van veiligheid en comfort. Automatische vergrendeling zonder sleutel, met optionele elektronische aandrijving voor volledig automatische bediening.',
				features: [
					'Automatische vergrendeling zonder sleutel',
					'Dagopening-functie voor eenvoudige toegang zonder sleutel',
					'Optionele elektronische aandrijving voor automatisch openen',
					'Drie automatische veiligheidsvergrendelpunten (RC 2 / RC 3)',
					'Automatisch uitschietende dagschoot in het hoofdslot',
					'VdS geteste inbraakbeveiliging',
					'Automatische haak & schoot zorgen voor tegendruk zonder sleutel',
					'10 jaar fabrieksgarantie'
				]
			},
			doorStrip: {
				title: 'Beschermstrip voor Buitendeuren',
				description:
					'Beschermingsstrip voor buitendeuren als preventieve beveiligingsmaatregel. Levert een zeer sterk vertragend effect bij een inbraakpoging, waardoor u waardevolle extra tijd wint.',
				features: [
					'Sterk vertragend effect tegen inbraakpogingen',
					'Getest en SKG gecertificeerd',
					'5 jaar garantie',
					'Geschikt voor alle buitendeuren'
				]
			}
		},
		cases: {
			title: 'Onze Recente Projecten',
			subtitle: 'Kwaliteits schrijnwerk en renovaties door heel België en Nederland',
			project1: {
				title: 'Houten Trap & Inbouwmeubilair op Maat',
				description:
					'Op maat gemaakte houten trappen en custom meubilair met precisie vervaardigd. Van imposante trappen tot elegante kasten en inbouwmeubelen, elk stuk toont traditioneel vakmanschap gecombineerd met hedendaags design.',
				results: ['Op maat ontworpen trappen', 'Inbouwkasten & kasten', 'Op maat gemaakt']
			},
			project2: {
				title: 'Appartementrenovatie — Balkondeur & Kozijnen',
				description:
					'Complete vervanging van balkondeur en kozijnen met premium HR++ thermisch isolerend glas. Moderne esthetiek met superieure isolatie voor jaarrond comfort en energie-efficiëntie.',
				results: [
					'Balkondeur vervanging',
					'Nieuwe thermische kozijnen',
					'Verbeterde isolatie',
					'Meer natuurlijk licht'
				]
			},
			project3: {
				title: 'Woningrenovatie — Houten Voordeur & Kozijnen',
				description:
					'Complete transformatie van de voorgevel met een op maat gemaakte houten voordeur en bijpassende houten kozijnen. Premium vakmanschap dat de uitstraling verhoogt en thermische prestaties maximaliseert.',
				results: [
					'Op maat gemaakte voordeur',
					'Bijpassende houten kozijnen',
					'Verbeterde uitstraling',
					'Superieure thermische efficiëntie'
				]
			}
		},
		faq: {
			title: 'Veelgestelde Vragen',
			subtitle: 'Alles wat u wilt weten over houten kozijnen, renovaties en onze werkwijze',
			items: [
				{
					question: 'Hoe lang gaan houten kozijnen op maat mee?',
					answer:
						'Een goed gemaakt houten kozijn van kwaliteitshout (wij gebruiken Noorse den, spar en eik) gaat 50+ jaar mee met basisonderhoud — elke 8 à 10 jaar opnieuw schilderen. Houten kozijnen verouderen daarnaast prachtig, daarom raden wij ze sterk aan voor karakteristieke en monumentale woningen.'
				},
				{
					question: 'Kunt u bestaande kozijnen vervangen zonder de muur te beschadigen?',
					answer:
						'Ja. Wij verwijderen bestaande kozijnen zorgvuldig, prepareren de opening en plaatsen het nieuwe houten kozijn met precieze afdichting. De meeste vervangingen duren één dag per opening met minimale overlast. Wij ruimen alles op en werken het binnenwerk af, zodat de kamer er beter uitziet dan voorheen.'
				},
				{
					question: 'Komen uw houten ramen in aanmerking voor ISDE of SVVE subsidie?',
					answer:
						'Ja — onze HR++ en triple beglaasde houten kozijnen voldoen aan de U-waarde eisen voor zowel de ISDE subsidie (voor particuliere woningeigenaren in Nederland) als de SVVE subsidie (voor VvE / Verenigingen van Eigenaars). Wij leveren alle documentatie die u nodig heeft voor uw aanvraag.'
				},
				{
					question: 'Wat kost een houten kozijn?',
					answer:
						'De prijs hangt af van afmetingen, glassoort (HR++ of triple), beslag en afwerking. Omdat wij zelf produceren, besparen onze klanten gemiddeld 15–30% ten opzichte van een tussenhandel. Vraag een gratis vrijblijvende offerte aan en wij geven u een duidelijke prijs per opening.'
				},
				{
					question: 'Doet u complete woningrenovaties, of alleen kozijnen?',
					answer:
						'Beide. Veel klanten starten met het vervangen van kozijnen en vragen ons vervolgens om de rest van de renovatie — tegelwerk, schilderwerk, deuren, keukens, trappen, vloeren. Wij hebben een klein team in eigen beheer dat een complete renovatie van A tot Z kan verzorgen, zodat u niet meerdere aannemers hoeft te coördineren.'
				},
				{
					question: 'Werkt u ook in Nederland, of alleen in België?',
					answer:
						'Beide. Onze werkplaats staat in Brussel maar wij werken voor klanten door heel België én Nederland — waaronder Amsterdam, Rotterdam, Den Haag, Utrecht, Antwerpen en Gent. Subsidiepapieren voor Nederlandse klanten zijn inbegrepen in onze dienstverlening.'
				},
				{
					question: 'Hout, PVC of aluminium — wat moet ik kiezen?',
					answer:
						'Hout oogt warm, veroudert prachtig en past goed bij karakteristieke woningen. PVC is het meest onderhoudsarm en budgetvriendelijk. Aluminium geeft de slankste profielen voor grote moderne glasvlakken. Alle drie leveren dezelfde thermische prestaties met het juiste glas en beslag — wij bespreken de afwegingen graag in een gratis adviesgesprek.'
				},
				{
					question: 'Welk hang- en sluitwerk wordt standaard geplaatst?',
					answer:
						'Alle buitenwoondeuren krijgen standaard Roto beslag (RC 2 / RC 3 inbraakwerend, VdS getest), SKG3 gecertificeerde veiligheidsschijfscharnieren en een beschermstrip. Ons scharnier draagt het Politiekeurmerk Veilig Wonen. Hogere veiligheidsklasses zijn op aanvraag beschikbaar.'
				},
				{
					question: 'Hoe lang duurt een typisch project van offerte tot installatie?',
					answer:
						'Een standaard kozijnvervanging duurt 4–6 weken: 1–2 weken voor inmeten en ontwerpgoedkeuring, 2–3 weken productie in de werkplaats, en installatie in 1–2 dagen per opening. Grotere renovatieprojecten plannen wij in met een duidelijk week-voor-week schema.'
				}
			]
		},
		contact: {
			title: 'Ontvang Uw Gratis Offerte',
			subtitle: 'Vertel ons over uw project en ontvang een vrijblijvende offerte',
			manufacturerNote: 'Direct van onze werkplaats – geen tussenpersoon prijzen',
			form: {
				name: 'Volledige Naam',
				email: 'E-mailadres',
				phone: 'Telefoonnummer',
				propertyType: 'Type Woning',
				propertyOptions: {
					select: 'Selecteer type',
					house: 'Huis',
					apartment: 'Appartement',
					commercial: 'Commercieel',
					other: 'Overig'
				},
				serviceInterest: 'Interesse in Dienst',
				serviceOptions: {
					select: 'Selecteer dienst',
					woodenWindows: 'Houten Kozijnen & Ramen',
					woodenDoors: 'Houten Deuren',
					interiorJoinery: 'Interieur Schrijnwerk',
					staircase: 'Op Maat Trap',
					kitchen: 'Keukenmeubilair',
					fullRenovation: 'Volledige Renovatie',
					pvcAluminum: 'PVC/Aluminium Schrijnwerk',
					assessment: 'Gratis Beoordelingsbezoek'
				},
				message: 'Projectdetails',
				messagePlaceholder:
					'Beschrijf uw project: aantal ramen/deuren, type werk, voorkeursmaterialen, tijdlijn...',
				submit: 'Gratis Offerte Aanvragen',
				namePlaceholder: 'Uw naam',
				emailPlaceholder: 'uw.email@voorbeeld.be',
				phonePlaceholder: '+32 XXX XX XX XX'
			},
			info: {
				phone: 'Telefoon',
				email: 'E-mail',
				location: 'Locatie',
				locationText: 'Brussel, België'
			}
		},
		footer: {
			description:
				'Familiebedrijf met meer dan 25 jaar ervaring in houten kozijnen, deuren, trappen en complete woningrenovaties. Directe fabrikant — eerlijke prijzen, gecertificeerd veiligheidsbeslag en vakmanschap dat generaties meegaat.',
			quickLinks: 'Snelle Links',
			businessHours: 'Openingstijden',
			schedule: {
				weekdays: 'Ma-Vr: 8:00 - 18:00',
				saturday: 'Za: 9:00 - 14:00',
				sunday: 'Zo: Gesloten'
			},
			address: 'Rue Potaerdenberg 354, B-1080 Bruxelles',
			copyright: 'Alle rechten voorbehouden.',
			servesTitle: 'Werkgebied',
			servesText:
				'Houten kozijnen, ramen, deuren en woningrenovaties door heel België en Nederland — waaronder Brussel, Antwerpen, Gent, Luik, Amsterdam, Rotterdam, Den Haag, Utrecht en Eindhoven.'
		}
	},
	fr: {
		nav: {
			home: 'Accueil',
			services: 'Services',
			advantages: 'Pourquoi Nous',
			hardware: 'Quincaillerie & Sécurité',
			cases: 'Nos Réalisations',
			faq: 'Questions Fréquentes',
			contact: 'Contact',
			getQuote: 'Demander un Devis'
		},
		promo: {
			badge: 'Offre Limitée',
			mainDiscount: '10% DE RÉDUCTION sur toutes les commandes jusqu’au 15 août !',
			referralDiscount: '+10% supplémentaires lorsque votre filleul passe commande',
			validUntil: 'Valable jusqu’au 15 août 2026',
			totalSavings: 'Économisez plus de 20% lorsque vos filleuls deviennent clients !'
		},
		hero: {
			badge: 'Fabricant Direct - Sans Intermédiaire',
			manufacturerBadge: 'Nous Fabriquons, Nous Posons',
			title: 'Châssis Bois sur Mesure, Portes &',
			titleHighlight: 'Rénovations de Maison',
			tagline:
				'Menuiserie bois artisanale — service à l’écoute, prix justes, vrais artisans bruxellois.',
			description:
				'Atelier familial qui fabrique des châssis bois sur mesure (kozijnen), des portes et de la menuiserie intérieure avec double vitrage thermique HR++ ou triple vitrage. Nous prenons aussi en charge les rénovations complètes, les escaliers, les cuisines et les parquets. Châssis PVC et aluminium disponibles sur demande.',
			subsidyText:
				'Nos produits répondent aux exigences des primes énergie ! Renseignez-vous sur les primes Bruxelles Environnement, Wallonie Énergie et les subsides ISDE / SVVE pour nos clients aux Pays-Bas.',
			subsidyLinkISDE: 'Programme ISDE',
			subsidyLinkSVVE: 'Programme SVVE',
			ctaPrimary: 'Demander un Devis Gratuit',
			ctaSecondary: 'Voir Nos Services',
			stats: {
				projects: 'Projets Réalisés',
				satisfaction: 'Satisfaction Client',
				savings: 'Économies d’Énergie'
			}
		},
		services: {
			title: 'Nos Services',
			subtitle:
				'Châssis bois, portes, rénovations et menuiserie intérieure sur mesure — fabriqués dans notre atelier à Bruxelles',
			primaryLabel: 'Spécialité Principale',
			secondaryLabel: 'Aussi Disponible',
			woodenJoinery: {
				title: 'Châssis Bois & Portes sur Mesure',
				description:
					'Châssis bois sur mesure et portes avec double vitrage HR++ ou triple vitrage pour une isolation supérieure. Fabriqués dans notre propre atelier avec des techniques de menuiserie traditionnelles et des profilés à rupture de pont thermique — parfaits pour le remplacement de châssis ou la construction neuve.',
				features: [
					'Double vitrage HR++ & triple vitrage',
					'Pin du Nord, épicéa & chêne',
					'Sur mesure',
					'Garantie fabricant 10 ans'
				]
			},
			interiorJoinery: {
				title: 'Menuiserie Intérieure & Mobilier',
				description:
					'Escaliers en bois sur mesure, cuisines, dressings encastrés et portes intérieures. Fabriqués à la main en bois massif pour correspondre au caractère de votre habitation, avec finitions allant de l’huile naturelle aux laques colorées.',
				features: [
					'Escaliers sur mesure',
					'Cuisines en bois',
					'Dressings encastrés',
					'Portes intérieures'
				]
			},
			fullRenovation: {
				title: 'Rénovations de Maison',
				description:
					'Services de rénovation complète — remplacement de châssis, rénovation de portes, réparations structurelles en bois, carrelage, peinture et rénovation intérieure complète. Une seule équipe fiable de A à Z, vous évitant de jongler avec plusieurs entrepreneurs.',
				features: [
					'Remplacement de châssis',
					'Mise à niveau HR++ & triple vitrage',
					'Restauration de fenêtres en bois',
					'Rénovation de portes',
					'Rénovation intérieure complète (carrelage, peinture, réparations)'
				]
			},
			pvcAluminum: {
				title: 'Châssis PVC & Aluminium',
				description:
					'Châssis PVC et aluminium modernes pour ceux qui préfèrent un matériau sans entretien. Mêmes performances thermiques que notre gamme bois, avec des profilés fins et une large palette de couleurs.',
				features: [
					'Sans entretien',
					'Profilés à rupture de pont thermique',
					'Esthétique moderne',
					'Large palette de couleurs'
				]
			},
			subsidyEligible: {
				title: 'Produits Éligibles aux Primes Énergie',
				description:
					'Maximisez vos économies avec nos châssis et portes éligibles aux primes énergie. Tous nos produits respectent les exigences des programmes ISDE / SVVE (Pays-Bas) et des primes Bruxelles Environnement / Wallonie Énergie — vous réduisez vos factures et votre empreinte carbone.',
				features: [
					'Vitrage HR++ (U ≤ 1,2 W/m²K)',
					'Triple vitrage (U ≤ 0,7 W/m²K)',
					'Portes isolantes (Ud ≤ 1,0-1,5)',
					'Châssis à rupture de pont thermique',
					'Produits certifiés conformes'
				]
			},
			flooring: {
				title: 'Parquets & Planchers en Bois',
				description:
					'Pose professionnelle de parquets et planchers en bois haut de gamme. Des chevrons et bâtons rompus classiques aux grandes lames de chêne — ponçage, huilage et rénovation des parquets existants inclus.',
				features: ['Parquet massif', 'Motifs chevrons & bâtons rompus', 'Multicouche', 'Ponçage & rénovation']
			}
		},
		advantages: {
			title: 'Pourquoi Nous Choisir',
			subtitle: 'Une menuiserie familiale et conviviale avec des décennies d’expérience',
			manufacturer: {
				title: 'Direct de l’Atelier',
				description:
					'Nous fabriquons tout dans notre propre atelier à Bruxelles — pas d’intermédiaire, pas de revendeur, pas de surcoût caché. Vous discutez directement avec les artisans qui fabriquent vos châssis, portes et meubles.'
			},
			thermal: {
				title: 'Performance Thermique Supérieure',
				description:
					'Nos doubles vitrages HR++ et triples vitrages, combinés à des châssis ajustés au millimètre, réduisent les pertes de chaleur jusqu’à 40%. Factures d’énergie plus basses, maison plus calme et pièces plus chaudes toute l’année.'
			},
			quality: {
				title: 'Qualité Artisanale Honnête',
				description:
					'Techniques de menuiserie traditionnelles combinées à la technologie moderne. Chaque châssis, porte et escalier est construit pour durer des générations — et vous êtes toujours le bienvenu pour visiter l’atelier.'
			},
			custom: {
				title: 'Entièrement Sur Mesure',
				description:
					'Pas de dimensions standard. Chaque châssis, porte et meuble est fabriqué selon vos dimensions exactes, votre profilé et votre style — maisons de maître et bâtiments classés bienvenus.'
			},
			uValue: 'Performance Thermique'
		},
		hardware: {
			title: 'Quincaillerie & Sécurité',
			subtitle:
				'Quincaillerie premium et ferrures de sécurité certifiées pour une protection et une durabilité maximales',
			hinges: {
				title: 'Paumelles de Sécurité',
				description:
					'Paumelles à disque en acier avec mouvement fluide anti-effraction et capacité de charge extra-large à coins arrondis. Conçues pour les fenêtres et portes extérieures. Dispositif antivol intégré, conception auto-lubrifiante et résistante à l’usure — fini les traces noires sur la peinture. Roulements biseautés auto-positionnants qui ne peuvent pas tomber grâce au collier de fixation. Trous de vis en étoile pour réduire le risque de casse.',
				features: [
					'Label Police Safe Living',
					'Certifié SKG3',
					'Dispositif antivol intégré',
					'Auto-lubrifiant & anti-usure',
					'Capacité de charge extra-large',
					'Coins arrondis pour la sécurité'
				]
			},
			rotoHardware: {
				title: 'Ferrures de Porte d’Entrée Roto',
				description:
					'Ferrures Roto haut de gamme pour portes d’entrée, offrant le plus haut niveau de sécurité et de confort. Verrouillage automatique sans clé, avec actionneur électronique optionnel pour une utilisation entièrement automatique.',
				features: [
					'Verrouillage automatique sans clé',
					'Fonction « ouverture jour » pour entrer sans clé',
					'Actionneur électronique optionnel',
					'Trois points de verrouillage automatiques (RC 2 / RC 3)',
					'Pêne dormant à déclenchement automatique',
					'Protection anti-effraction testée VdS',
					'Crochet & pêne automatiques sans clé',
					'Garantie de fonctionnement 10 ans'
				]
			},
			doorStrip: {
				title: 'Profilé Anti-Effraction',
				description:
					'Profilé de protection pour portes extérieures, mesure de sécurité préventive. Délivre un effet de retardement très puissant en cas de tentative d’effraction, vous offrant un temps précieux supplémentaire.',
				features: [
					'Forte action retardatrice',
					'Testé et certifié SKG',
					'Garantie 5 ans',
					'Convient à toutes les portes extérieures'
				]
			}
		},
		cases: {
			title: 'Nos Projets Récents',
			subtitle: 'Menuiserie et rénovations de qualité partout en Belgique et aux Pays-Bas',
			project1: {
				title: 'Escalier Bois & Mobilier Sur Mesure',
				description:
					'Escaliers en bois et mobilier sur mesure réalisés avec précision. Des escaliers imposants aux dressings et armoires élégantes, chaque pièce illustre les techniques traditionnelles combinées au design contemporain.',
				results: ['Escalier sur mesure', 'Dressings & armoires encastrés', 'Fabrication sur mesure']
			},
			project2: {
				title: 'Rénovation Appartement — Porte-Fenêtre & Châssis',
				description:
					'Remplacement complet de la porte-fenêtre du balcon et des châssis avec double vitrage thermique HR++ premium. Esthétique moderne et isolation supérieure pour un confort toute l’année.',
				results: [
					'Remplacement porte-fenêtre',
					'Nouveaux châssis thermiques',
					'Isolation améliorée',
					'Plus de lumière naturelle'
				]
			},
			project3: {
				title: 'Rénovation Maison — Porte d’Entrée Bois & Châssis',
				description:
					'Transformation complète de la façade avec une porte d’entrée en bois sur mesure et des châssis bois assortis. Vrai savoir-faire artisanal qui valorise l’aspect extérieur tout en maximisant les performances thermiques.',
				results: [
					'Porte d’entrée sur mesure',
					'Châssis bois assortis',
					'Façade valorisée',
					'Efficacité thermique supérieure'
				]
			}
		},
		faq: {
			title: 'Questions Fréquentes',
			subtitle: 'Tout ce que vous voulez savoir sur les châssis bois, les rénovations et notre processus',
			items: [
				{
					question: 'Combien de temps durent des châssis bois sur mesure ?',
					answer:
						'Un châssis bois bien fabriqué en bois de qualité (nous utilisons du pin du Nord, de l’épicéa et du chêne) dure plus de 50 ans avec un entretien de base — repeinture tous les 8 à 10 ans environ. Le bois vieillit aussi très bien, c’est pourquoi nous le recommandons fortement pour les maisons de caractère et les bâtiments classés.'
				},
				{
					question: 'Pouvez-vous remplacer des châssis existants sans abîmer le mur ?',
					answer:
						'Oui. Nous démontons les anciens châssis avec soin, préparons l’ouverture et posons le nouveau châssis bois avec une étanchéité précise. La plupart des remplacements prennent une journée par ouverture, avec un minimum de dérangement. Nous nettoyons tout et finissons les retours intérieurs, pour que la pièce paraisse mieux qu’avant.'
				},
				{
					question: 'Vos châssis sont-ils éligibles aux primes énergie bruxelloises ou wallonnes ?',
					answer:
						'Oui — nos châssis bois avec double vitrage HR++ ou triple vitrage répondent aux exigences de coefficient U pour les primes Bruxelles Environnement (Renolution) et Wallonie Énergie. Nous fournissons tous les documents techniques et attestations nécessaires à votre dossier de prime. Pour nos clients aux Pays-Bas, nous gérons aussi les subsides ISDE et SVVE.'
				},
				{
					question: 'Combien coûte un châssis bois sur mesure ?',
					answer:
						'Le prix dépend des dimensions, du type de vitrage (HR++ ou triple), de la quincaillerie et de la finition. Comme nous fabriquons en interne, nos clients économisent en moyenne 15 à 30% par rapport à un revendeur. Demandez un devis gratuit et sans engagement, nous vous fournirons un prix détaillé par ouverture.'
				},
				{
					question: 'Faites-vous des rénovations complètes ou uniquement des châssis ?',
					answer:
						'Les deux. Beaucoup de nos clients commencent par un remplacement de châssis, puis nous confient le reste — carrelage, peinture, portes, cuisines, escaliers, parquets. Nous avons une petite équipe interne qui peut prendre en charge une rénovation complète de A à Z, vous n’avez pas besoin de coordonner plusieurs entrepreneurs.'
				},
				{
					question: 'Travaillez-vous aussi en Wallonie et aux Pays-Bas ?',
					answer:
						'Oui. Notre atelier est à Bruxelles mais nous travaillons partout en Belgique (Wallonie et Flandre) et aux Pays-Bas — y compris Liège, Namur, Charleroi, Anvers, Gand, Amsterdam, Rotterdam, La Haye et Utrecht. Les démarches de prime ou de subside sont incluses dans notre service.'
				},
				{
					question: 'Bois, PVC ou aluminium — que choisir ?',
					answer:
						'Le bois est chaleureux, vieillit magnifiquement et convient parfaitement aux maisons de caractère et bâtiments classés. Le PVC est le plus économique et sans entretien. L’aluminium offre les profilés les plus fins pour de grandes baies vitrées modernes. Avec le bon vitrage et la bonne quincaillerie, les trois offrent les mêmes performances thermiques — nous vous présentons les compromis lors d’une consultation gratuite.'
				},
				{
					question: 'Quelle quincaillerie et sécurité installez-vous en standard ?',
					answer:
						'Toutes nos portes d’entrée en bois sont équipées de ferrures Roto (RC 2 / RC 3 anti-effraction, testées VdS), de paumelles de sécurité certifiées SKG3 et d’un profilé anti-effraction. Nos paumelles portent le label Police Safe Living. Des classes de sécurité supérieures sont disponibles sur demande.'
				},
				{
					question: 'Combien de temps prend un projet, du devis à la pose ?',
					answer:
						'Un remplacement de châssis standard prend 4 à 6 semaines : 1 à 2 semaines pour le métré et la validation du design, 2 à 3 semaines de fabrication en atelier, puis pose en 1 à 2 jours par ouverture. Les projets de rénovation plus importants sont planifiés avec un calendrier clair semaine par semaine.'
				}
			]
		},
		contact: {
			title: 'Recevez Votre Devis Gratuit',
			subtitle: 'Parlez-nous de votre projet et recevez un devis sans engagement',
			manufacturerNote: 'Direct de notre atelier – sans surcoût d’intermédiaire',
			form: {
				name: 'Nom Complet',
				email: 'Adresse E-mail',
				phone: 'Numéro de Téléphone',
				propertyType: 'Type de Bien',
				propertyOptions: {
					select: 'Sélectionnez le type',
					house: 'Maison',
					apartment: 'Appartement',
					commercial: 'Commercial',
					other: 'Autre'
				},
				serviceInterest: 'Service Souhaité',
				serviceOptions: {
					select: 'Sélectionnez un service',
					woodenWindows: 'Châssis Bois',
					woodenDoors: 'Portes en Bois',
					interiorJoinery: 'Menuiserie Intérieure',
					staircase: 'Escalier Sur Mesure',
					kitchen: 'Cuisine en Bois',
					fullRenovation: 'Rénovation Complète',
					pvcAluminum: 'Châssis PVC/Aluminium',
					assessment: 'Visite d’Évaluation Gratuite'
				},
				message: 'Détails du Projet',
				messagePlaceholder:
					'Décrivez votre projet : nombre de châssis/portes, type de travaux, matériaux préférés, délais...',
				submit: 'Demander un Devis Gratuit',
				namePlaceholder: 'Votre nom',
				emailPlaceholder: 'votre.email@exemple.be',
				phonePlaceholder: '+32 XXX XX XX XX'
			},
			info: {
				phone: 'Téléphone',
				email: 'E-mail',
				location: 'Localisation',
				locationText: 'Bruxelles, Belgique'
			}
		},
		footer: {
			description:
				'Atelier familial avec plus de 25 ans d’expérience en châssis bois, portes, escaliers et rénovations complètes. Fabricant direct — prix honnêtes, ferrures de sécurité certifiées et savoir-faire qui dure des générations.',
			quickLinks: 'Liens Rapides',
			businessHours: 'Heures d’Ouverture',
			schedule: {
				weekdays: 'Lun-Ven : 8h00 - 18h00',
				saturday: 'Sam : 9h00 - 14h00',
				sunday: 'Dim : Fermé'
			},
			address: 'Rue Potaerdenberg 354, B-1080 Bruxelles',
			copyright: 'Tous droits réservés.',
			servesTitle: 'Zones Desservies',
			servesText:
				'Châssis bois, portes et rénovations dans toute la Belgique et les Pays-Bas — y compris Bruxelles, Liège, Namur, Charleroi, Anvers, Gand, Amsterdam, Rotterdam, La Haye, Utrecht et Eindhoven.'
		}
	}
};
