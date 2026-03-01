export interface Translation {
	nav: {
		home: string;
		services: string;
		advantages: string;
		hardware: string;
		cases: string;
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
			contact: 'Contact',
			getQuote: 'Get Quote'
		},
		promo: {
			badge: '🎉 Limited Time Offer',
			mainDiscount: '10% OFF all orders until June 1st!',
			referralDiscount: '+10% extra when your referral places an order',
			validUntil: 'Valid until June 1st, 2026',
			totalSavings: 'Save over 20% when your referrals become customers!'
		},
		hero: {
			badge: 'Direct Manufacturer - No Middleman',
			manufacturerBadge: 'We Manufacture, We Install',
			title: 'Premium Wooden Joinery &',
			titleHighlight: 'Thermal Efficiency',
			description:
				'Expert craftsmen manufacturing custom wooden windows, doors, and interior joinery with thermal spacer glass. Also available in PVC and aluminum.',
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
				'From traditional wooden craftsmanship to modern renovation solutions – all manufactured in-house',
			primaryLabel: 'Primary Specialty',
			secondaryLabel: 'Also Available',
			woodenJoinery: {
				title: 'Wooden Windows & Doors',
				description:
					'Premium wooden windows and doors with thermal spacer glass for superior insulation. Custom-crafted in our workshop with traditional joinery techniques and modern thermal technology.',
				features: [
					'Thermal spacer glass',
					'Nordic pine, spruce & oak',
					'Custom designs',
					'10-year warranty'
				]
			},
			interiorJoinery: {
				title: 'Interior Joinery',
				description:
					"Beautiful custom staircases, kitchen furniture, built-in wardrobes, and interior doors. Handcrafted from quality wood to match your home's character.",
				features: ['Custom staircases', 'Kitchen cabinets', 'Built-in wardrobes', 'Interior doors']
			},
			fullRenovation: {
				title: 'Renovations',
				description:
					'Wood-related renovation services including structural wood repairs, replacements, and thermal glass spacer installation for improved energy efficiency.',
				features: [
					'Wood repairs & replacements',
					'Thermal glass spacers',
					'Window restoration',
					'Door refurbishment',
					'Full interior renovation (tiles, painting, repairs)'
				]
			},
			pvcAluminum: {
				title: 'PVC & Aluminum Options',
				description:
					'Modern PVC and aluminum windows and doors for those preferring low-maintenance alternatives. Same thermal efficiency, different material options.',
				features: [
					'Low maintenance',
					'Thermal break profiles',
					'Modern aesthetics',
					'Color options'
				]
			},
			subsidyEligible: {
				title: 'Subsidy-Eligible Products',
				description:
					'Maximize your savings with our ISDE & SVVE eligible products. We install energy-efficient windows and doors that meet Dutch government subsidy requirements, helping you reduce costs while improving your home.',
				features: [
					'HR++ glass (U ≤ 1.2 W/m²K)',
					'Triple glass (U ≤ 0.7 W/m²K)',
					'Insulating doors (Ud ≤ 1.0-1.5)',
					'Thermal break frames',
					'Approved meldcode products'
				]
			},
			flooring: {
				title: 'Wood & Parquet Flooring',
				description:
					'Professional installation of premium wood and parquet flooring. From classic herringbone patterns to modern wide planks, we deliver beautiful, durable floors crafted with precision.',
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
			subtitle: 'Direct manufacturer with decades of craftsmanship experience',
			manufacturer: {
				title: 'Direct Manufacturer',
				description:
					'We manufacture everything in our own workshop – no middleman, no markup. You deal directly with the craftsmen who build your windows, doors, and furniture.'
			},
			thermal: {
				title: 'Superior Thermal Efficiency',
				description:
					'Our thermal spacer glass and precision-fitted frames reduce heat loss by up to 40%. Lower energy bills and a more comfortable home year-round.'
			},
			quality: {
				title: 'Artisan Quality',
				description:
					'Traditional joinery techniques combined with modern technology. Every piece is crafted with attention to detail and built to last generations.'
			},
			custom: {
				title: 'Fully Custom Solutions',
				description:
					'No standard sizes here. Every window, door, and piece of furniture is made to your exact specifications and style preferences.'
			},
			uValue: 'Thermal Performance'
		},
		hardware: {
			title: 'Hardware & Security',
			subtitle: 'Premium ironmongery and certified security hardware for maximum protection and durability',
			hinges: {
				title: 'Security Disc Hinges',
				description: 'Steel security disc hinges with smooth, anti-burglary operation and extra-large load capacity with rounded corners. Suitable for exterior windows and doors. Features a built-in anti-theft device, wear-resistant and self-lubricating design — eliminating black paint stains for good. Equipped with special beveled, self-locating bearings that cannot fall out thanks to the fixing collar. Star-shaped screw holes reduce the risk of screw breakage.',
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
				description: 'Top-quality Roto hardware for entry doors, offering the highest level of security and convenience. Automatic locking without using a key, with an optional electronic actuator for fully automatic operation.',
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
				description: 'Protective strip for exterior doors providing preventive security measures. Delivers a very strong delay effect in case of a burglary attempt, giving you valuable extra time.',
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
			subtitle: 'Quality craftsmanship across Belgium and beyond',
			project1: {
				title: 'Staircases & Furniture',
				description:
					'Bespoke wooden staircases and custom furniture crafted with precision. From grand statement staircases to elegant wardrobes and cabinets, each piece showcases traditional joinery techniques combined with contemporary design.',
				results: ['Custom staircase design', 'Built-in wardrobes & cabinets', 'Made to measure']
			},
			project2: {
				title: 'Apartment Renovation',
				description:
					'Complete balcony door and window replacement with premium thermal spacer glass. Modern aesthetics with superior insulation for year-round comfort and energy efficiency.',
				results: [
					'Balcony door replacement',
					'New thermal windows',
					'Improved insulation',
					'Enhanced natural light'
				]
			},
			project3: {
				title: 'House Renovation',
				description:
					'Complete front entrance transformation with a bespoke wooden front door and matching window frames. Premium craftsmanship that elevates curb appeal while maximizing thermal performance.',
				results: [
					'Custom front door',
					'Matching window frames',
					'Enhanced curb appeal',
					'Superior thermal efficiency'
				]
			}
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
					woodenWindows: 'Wooden Windows',
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
				'Master craftsmen with more than 25 years of experience in woodworking. Specializing in premium wooden windows, doors, staircases, kitchens, and complete renovations with certified security hardware. Direct manufacturer – quality guaranteed.',
			quickLinks: 'Quick Links',
			businessHours: 'Business Hours',
			schedule: {
				weekdays: 'Mon-Fri: 8:00 - 18:00',
				saturday: 'Sat: 9:00 - 14:00',
				sunday: 'Sun: Closed'
			},
			address: 'Rue Potaerdenberg 354, B-1080 Bruxelles',
			copyright: 'All rights reserved.'
		}
	},
	nl: {
		nav: {
			home: 'Home',
			services: 'Diensten',
			advantages: 'Waarom Wij',
			hardware: 'Hang- & Sluitwerk',
			cases: 'Ons Werk',
			contact: 'Contact',
			getQuote: 'Offerte Aanvragen'
		},
		promo: {
			badge: '🎉 Tijdelijke Aanbieding',
			mainDiscount: '10% KORTING op alle bestellingen tot 1 juni!',
			referralDiscount: '+10% extra wanneer uw doorverwijzing een bestelling plaatst',
			validUntil: 'Geldig tot 1 juni 2026',
			totalSavings: 'Bespaar meer dan 20% wanneer uw doorverwijzingen klant worden!'
		},
		hero: {
			badge: 'Directe Fabrikant - Geen Tussenpersoon',
			manufacturerBadge: 'Wij Produceren, Wij Plaatsen',
			title: 'Premium Houten Schrijnwerk &',
			titleHighlight: 'Thermische Efficiëntie',
			description:
				'Vakbekwame ambachtslieden die op maat gemaakte houten ramen, deuren en interieur schrijnwerk vervaardigen met thermisch isolerend glas. Ook verkrijgbaar in PVC en aluminium.',
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
				'Van traditioneel houtambacht tot moderne renovatieoplossingen – alles in eigen beheer geproduceerd',
			primaryLabel: 'Primaire Specialiteit',
			secondaryLabel: 'Ook Beschikbaar',
			woodenJoinery: {
				title: 'Houten Ramen & Deuren',
				description:
					'Premium houten ramen en deuren met thermisch isolerend glas voor superieure isolatie. Op maat gemaakt in onze werkplaats met traditionele schrijnwerktechnieken en moderne thermische technologie.',
				features: [
					'Thermisch isolerend glas',
					'Noorse den, spar & eik',
					'Op maat ontwerp',
					'10 jaar garantie'
				]
			},
			interiorJoinery: {
				title: 'Interieur Schrijnwerk',
				description:
					'Prachtige op maat gemaakte trappen, keukenmeubilair, inbouwkasten en binnendeuren. Handgemaakt van kwaliteitshout, passend bij het karakter van uw woning.',
				features: ['Op maat gemaakte trappen', 'Keukenkasten', 'Inbouwkasten', 'Binnendeuren']
			},
			fullRenovation: {
				title: 'Renovaties',
				description:
					'Hout-gerelateerde renovatiediensten inclusief structurele houtreparaties, vervangingen en installatie van thermische glasspacers voor verbeterde energie-efficiëntie.',
				features: [
					'Houtreparaties & vervangingen',
					'Thermische glasspacers',
					'Raamrestauratie',
					'Deuropknapbeurt',
					'Volledige interieurrenovatie (tegels, schilderwerk, reparaties)'
				]
			},
			pvcAluminum: {
				title: 'PVC & Aluminium Opties',
				description:
					'Moderne PVC en aluminium ramen en deuren voor wie de voorkeur geeft aan onderhoudsarme alternatieven. Dezelfde thermische efficiëntie, verschillende materiaalopties.',
				features: [
					'Onderhoudsarm',
					'Thermisch onderbroken profielen',
					'Moderne esthetiek',
					'Kleuropties'
				]
			},
			subsidyEligible: {
				title: 'Subsidie-Geschikte Producten',
				description:
					'Maximaliseer uw besparing met onze ISDE & SVVE geschikte producten. Wij installeren energiezuinige ramen en deuren die voldoen aan de eisen voor overheidssubsidies, zodat u kosten bespaart én uw woning verbetert.',
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
					'Professionele installatie van premium houten en parketvloeren. Van klassieke visgraatpatronen tot moderne brede planken, wij leveren prachtige, duurzame vloeren met precisie gelegd.',
				features: ['Massief houten vloeren', 'Parketpatronen', 'Multiplank', 'Schuren & renoveren']
			}
		},
		advantages: {
			title: 'Waarom Ons Kiezen',
			subtitle: 'Directe fabrikant met tientallen jaren vakmanschap ervaring',
			manufacturer: {
				title: 'Directe Fabrikant',
				description:
					'Wij produceren alles in onze eigen werkplaats – geen tussenpersoon, geen opslag. U heeft direct contact met de ambachtslieden die uw ramen, deuren en meubels maken.'
			},
			thermal: {
				title: 'Superieure Thermische Efficiëntie',
				description:
					'Ons thermisch isolerend glas en precies passende kozijnen verminderen warmteverlies tot 40%. Lagere energierekeningen en een comfortabelere woning het hele jaar door.'
			},
			quality: {
				title: 'Ambachtelijke Kwaliteit',
				description:
					'Traditionele schrijnwerktechnieken gecombineerd met moderne technologie. Elk stuk is gemaakt met oog voor detail en gebouwd om generaties mee te gaan.'
			},
			custom: {
				title: 'Volledig Op Maat',
				description:
					'Geen standaardmaten hier. Elk raam, elke deur en elk meubelstuk wordt gemaakt volgens uw exacte specificaties en stijlvoorkeuren.'
			},
			uValue: 'Thermische Prestatie'
		},
		hardware: {
			title: 'Hang- & Sluitwerk',
			subtitle: 'Premium beslag en gecertificeerd veiligheidsbeslag voor maximale bescherming en duurzaamheid',
			hinges: {
				title: 'Veiligheidsschijfscharnieren',
				description: 'Stalen veiligheidsschijfscharnieren met soepele, inbraakwerende werking en extra grote draagcapaciteit met afgeronde hoeken. Geschikt voor buitenramen en -deuren. Voorzien van een ingebouwd anti-diefstalmechanisme, slijtvast en zelfsmerende werking — waardoor zwarte verfvlekken verleden tijd zijn. Uitgerust met speciale afgeschuinde, zelfzoekende lagers die dankzij de borgkraag niet uit het scharnier kunnen vallen. Stervormige schroefgaten verminderen het risico op schroefbreuk.',
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
				description: 'Hoogwaardig Roto beslag voor voordeuren, met het hoogste niveau van veiligheid en comfort. Automatische vergrendeling zonder sleutel, met optionele elektronische aandrijving voor volledig automatische bediening.',
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
				description: 'Beschermingsstrip voor buitendeuren als preventieve beveiligingsmaatregel. Levert een zeer sterk vertragend effect bij een inbraakpoging, waardoor u waardevolle extra tijd wint.',
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
			subtitle: 'Kwaliteitsambacht door heel België en daarbuiten',
			project1: {
				title: 'Trappen & Meubilair',
				description:
					'Op maat gemaakte houten trappen en custom meubilair met precisie vervaardigd. Van imposante trappen tot elegante kasten en inbouwmeubelen, elk stuk toont traditioneel vakmanschap gecombineerd met hedendaags design.',
				results: ['Op maat ontworpen trappen', 'Inbouwkasten & kasten', 'Op maat gemaakt']
			},
			project2: {
				title: 'Appartement Renovatie',
				description:
					'Complete vervanging van balkondeur en ramen met premium thermisch isolerend glas. Moderne esthetiek met superieure isolatie voor jaarrond comfort en energie-efficiëntie.',
				results: [
					'Balkondeur vervanging',
					'Nieuwe thermische ramen',
					'Verbeterde isolatie',
					'Meer natuurlijk licht'
				]
			},
			project3: {
				title: 'Woning Renovatie',
				description:
					'Complete transformatie van de voorgevel met een op maat gemaakte houten voordeur en bijpassende kozijnen. Premium vakmanschap dat de uitstraling verhoogt en thermische prestaties maximaliseert.',
				results: [
					'Op maat gemaakte voordeur',
					'Bijpassende kozijnen',
					'Verbeterde uitstraling',
					'Superieure thermische efficiëntie'
				]
			}
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
					woodenWindows: 'Houten Ramen',
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
				'Meester-ambachtslieden met meer dan 25 jaar ervaring in houtbewerking. Gespecialiseerd in premium houten ramen, deuren, trappen, keukens en complete renovaties met gecertificeerd veiligheidsbeslag. Directe fabrikant – kwaliteit gegarandeerd.',
			quickLinks: 'Snelle Links',
			businessHours: 'Openingstijden',
			schedule: {
				weekdays: 'Ma-Vr: 8:00 - 18:00',
				saturday: 'Za: 9:00 - 14:00',
				sunday: 'Zo: Gesloten'
			},
			address: 'Rue Potaerdenberg 354, B-1080 Bruxelles',
			copyright: 'Alle rechten voorbehouden.'
		}
	}
};
