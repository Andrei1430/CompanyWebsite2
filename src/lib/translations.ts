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

export type Language = 'en' | 'nl';

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
	}
};
