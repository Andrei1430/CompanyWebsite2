export interface Translation {
	nav: {
		home: string;
		services: string;
		advantages: string;
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
	cases: {
		title: string;
		subtitle: string;
		badge: string;
		belgian1: {
			title: string;
			location: string;
			description: string;
			results: string[];
		};
		belgian2: {
			title: string;
			location: string;
			description: string;
			results: string[];
		};
		belgian3: {
			title: string;
			location: string;
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
			cases: 'Our Work',
			contact: 'Contact',
			getQuote: 'Get Quote'
		},
		promo: {
			badge: '🎉 Limited Time Offer',
			mainDiscount: '10% OFF all orders until March 1st!',
			referralDiscount: '+10% extra when your referral places an order',
			validUntil: 'Valid until March 1st, 2026',
			totalSavings: 'Save over 20% when your referrals become customers!'
		},
		hero: {
			badge: 'Direct Manufacturer - No Middleman',
			manufacturerBadge: 'We Manufacture, We Install',
			title: 'Premium Wooden Joinery &',
			titleHighlight: 'Thermal Efficiency',
			description:
				'Expert craftsmen manufacturing custom wooden windows, doors, and interior joinery with thermal spacer glass. Also available in PVC and aluminum. Direct from our workshop to your home – quality guaranteed.',
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
					'Oak, pine & hardwoods',
					'Custom designs',
					'25-year warranty'
				]
			},
			interiorJoinery: {
				title: 'Interior Joinery',
				description:
					"Beautiful custom staircases, kitchen furniture, built-in wardrobes, and interior doors. Handcrafted from quality wood to match your home's character.",
				features: ['Custom staircases', 'Kitchen cabinets', 'Built-in wardrobes', 'Interior doors']
			},
			fullRenovation: {
				title: 'Full Renovations',
				description:
					'Complete home renovation services including tiling, flooring, plastering, and finishing work. One contractor for your entire project from start to finish.',
				features: ['Tiles & flooring', 'Wall finishing', 'Complete bathrooms', 'Turn-key projects']
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
			}
		},
		advantages: {
			title: 'Why Choose WoodCraft Joinery',
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
		cases: {
			title: 'Our Recent Projects',
			subtitle: 'Quality craftsmanship across Belgium and beyond',
			badge: 'Completed Project',
			belgian1: {
				title: 'Brussels Townhouse Renovation',
				location: 'Ixelles, Brussels',
				description:
					'Complete replacement of 24 wooden windows with thermal spacer glass in a classic Belgian townhouse. Preserved heritage aesthetics while achieving modern thermal performance.',
				results: [
					'24 custom windows',
					'38% energy savings',
					'Heritage approved',
					'Completed in 2 weeks'
				]
			},
			belgian2: {
				title: 'Farmhouse Kitchen & Staircase',
				location: 'Leuven, Flemish Brabant',
				description:
					'Handcrafted oak kitchen with custom island and matching spiral staircase. Traditional craftsmanship meeting contemporary Belgian country style.',
				results: [
					'Full oak kitchen',
					'Custom staircase',
					'Integrated storage',
					"Client's dream realized"
				]
			},
			belgian3: {
				title: 'Villa Complete Renovation',
				location: 'Ghent, East Flanders',
				description:
					'Full renovation including wooden windows and doors, new flooring throughout, bathroom tiling, and custom built-in wardrobes. Turn-key project from design to completion.',
				results: ['Windows & doors', 'Complete flooring', '3 bathrooms tiled', 'All-in-one service']
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
				locationText: 'Netherlands'
			}
		},
		footer: {
			description:
				'Master craftsmen manufacturing premium wooden joinery since 1995. Windows, doors, staircases, kitchens, and complete renovations. Direct manufacturer – quality guaranteed.',
			quickLinks: 'Quick Links',
			businessHours: 'Business Hours',
			schedule: {
				weekdays: 'Monday - Friday: 7:00 AM - 6:00 PM',
				saturday: 'Saturday: 8:00 AM - 2:00 PM',
				sunday: 'Sunday: Closed'
			},
			copyright: 'All rights reserved. Crafting quality since 1995.'
		}
	},
	nl: {
		nav: {
			home: 'Home',
			services: 'Diensten',
			advantages: 'Waarom Wij',
			cases: 'Ons Werk',
			contact: 'Contact',
			getQuote: 'Offerte Aanvragen'
		},
		promo: {
			badge: '🎉 Tijdelijke Aanbieding',
			mainDiscount: '10% KORTING op alle bestellingen tot 1 maart!',
			referralDiscount: '+10% extra wanneer uw doorverwijzing een bestelling plaatst',
			validUntil: 'Geldig tot 1 maart 2026',
			totalSavings: 'Bespaar meer dan 20% wanneer uw doorverwijzingen klant worden!'
		},
		hero: {
			badge: 'Directe Fabrikant - Geen Tussenpersoon',
			manufacturerBadge: 'Wij Produceren, Wij Plaatsen',
			title: 'Premium Houten Schrijnwerk &',
			titleHighlight: 'Thermische Efficiëntie',
			description:
				'Vakbekwame ambachtslieden die op maat gemaakte houten ramen, deuren en interieur schrijnwerk vervaardigen met thermisch isolerend glas. Ook verkrijgbaar in PVC en aluminium. Direct van onze werkplaats naar uw woning – kwaliteit gegarandeerd.',
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
					'Eik, grenen & hardhout',
					'Op maat ontwerp',
					'25 jaar garantie'
				]
			},
			interiorJoinery: {
				title: 'Interieur Schrijnwerk',
				description:
					'Prachtige op maat gemaakte trappen, keukenmeubilair, inbouwkasten en binnendeuren. Handgemaakt van kwaliteitshout, passend bij het karakter van uw woning.',
				features: ['Op maat gemaakte trappen', 'Keukenkasten', 'Inbouwkasten', 'Binnendeuren']
			},
			fullRenovation: {
				title: 'Volledige Renovaties',
				description:
					'Complete woningrenovatiediensten inclusief tegelwerk, vloeren, pleisterwerk en afwerking. Eén aannemer voor uw volledige project van begin tot eind.',
				features: [
					'Tegels & vloeren',
					'Wandafwerking',
					'Complete badkamers',
					'Sleutel-op-de-deur projecten'
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
			}
		},
		advantages: {
			title: 'Waarom Kiezen voor WoodCraft Schrijnwerkerij',
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
		cases: {
			title: 'Onze Recente Projecten',
			subtitle: 'Kwaliteitsambacht door heel België en daarbuiten',
			badge: 'Afgerond Project',
			belgian1: {
				title: 'Brusselse Herenhuis Renovatie',
				location: 'Elsene, Brussel',
				description:
					'Volledige vervanging van 24 houten ramen met thermisch isolerend glas in een klassiek Belgisch herenhuis. Behoud van erfgoedesthetiek met moderne thermische prestaties.',
				results: [
					'24 op maat ramen',
					'38% energiebesparing',
					'Erfgoed goedgekeurd',
					'Voltooid in 2 weken'
				]
			},
			belgian2: {
				title: 'Boerderij Keuken & Trap',
				location: 'Leuven, Vlaams-Brabant',
				description:
					'Handgemaakte eiken keuken met op maat eiland en bijpassende spiltrap. Traditioneel vakmanschap ontmoet hedendaagse Belgische landelijke stijl.',
				results: [
					'Volledige eiken keuken',
					'Op maat trap',
					'Geïntegreerde opslag',
					'Droom van klant gerealiseerd'
				]
			},
			belgian3: {
				title: 'Villa Volledige Renovatie',
				location: 'Gent, Oost-Vlaanderen',
				description:
					'Volledige renovatie inclusief houten ramen en deuren, nieuwe vloeren, badkamertegels en op maat inbouwkasten. Sleutel-op-de-deur project van ontwerp tot oplevering.',
				results: [
					'Ramen & deuren',
					'Complete vloeren',
					'3 badkamers betegeld',
					'Alles-in-één service'
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
				locationText: 'Nederland'
			}
		},
		footer: {
			description:
				'Meester-ambachtslieden die premium houten schrijnwerk produceren sinds 1995. Ramen, deuren, trappen, keukens en complete renovaties. Directe fabrikant – kwaliteit gegarandeerd.',
			quickLinks: 'Snelle Links',
			businessHours: 'Openingstijden',
			schedule: {
				weekdays: 'Maandag - Vrijdag: 7:00 - 18:00',
				saturday: 'Zaterdag: 8:00 - 14:00',
				sunday: 'Zondag: Gesloten'
			},
			copyright: 'Alle rechten voorbehouden. Vakmanschap sinds 1995.'
		}
	}
};
