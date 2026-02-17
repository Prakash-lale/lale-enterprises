export interface ServiceFeature {
    title: string;
    description: string;
    icon: string;
}

export interface Service {
    id: string;
    title: string;
    icon: string;
    description: string;
    fullDescription: string;
    details: string[];
    features: ServiceFeature[];
    image: string;
    gallery?: string[];
}

export const services: Service[] = [
    {
        id: 'hvac',
        title: 'HVAC & Clean Room Solutions',
        icon: 'Wind',
        description:
            'Complete heating, ventilation, and air conditioning systems with clean room solutions for controlled environments.',
        fullDescription:
            'Lale Enterprises specializes in high-precision HVAC and Clean Room solutions tailored for pharmaceutical, healthcare, and industrial applications. We understand that air quality, pressure differentials, and thermal stability are critical to your operations. Our turnkey approach covers everything from initial heat load calculations to final validation and commissioning.',
        details: [
            'HVAC system design, supply, installation & commissioning',
            'GI / PI / SS ducting with insulation',
            'AHU, FCU, Split, VRF & VRV systems',
            'Air filtration & damper systems',
            'Clean room panels, flooring & coving',
        ],
        features: [
            {
                title: 'Clean Room Validation',
                description: 'Particle count testing and validation as per ISO 14644 standards.',
                icon: 'ShieldCheck'
            },
            {
                title: 'High-Efficiency Filtration',
                description: 'HEPA and ULPA filtration systems for Grade A/B/C/D clean rooms.',
                icon: 'Filter'
            },
            {
                title: 'Smart BMS Integration',
                description: 'Centralized monitoring for temperature, humidity, and pressure.',
                icon: 'Cpu'
            }
        ],
        image: '/images/services/HVAC-and-CleanRool/hvac-preview.jpg',
        gallery: [
            '/images/services/HVAC-and-CleanRool/hvac.jpg',
            '/images/services/HVAC-and-CleanRool/ahu-thumb.jpg'
        ]
    },
    {
        id: 'electrical',
        title: 'Electrical Services',
        icon: 'Zap',
        description:
            'Comprehensive electrical solutions from high-tension systems to complete building electrification.',
        fullDescription:
            'Our electrical engineering division provides robust power solutions for industrial complexes and high-rise developments. We handle high-tension (HT) and low-tension (LT) networks, ensuring safe and efficient power distribution. From substations to the final point of use, we prioritize reliability and energy efficiency.',
        details: [
            'HT & LT systems & power distribution',
            'Internal & external electrification',
            'Earthing & lightning protection',
            'DG backup solutions',
        ],
        features: [
            {
                title: 'HT/LT Power Networks',
                description: 'Design and installation of transformers, switchgear, and panels.',
                icon: 'Zap'
            },
            {
                title: 'Energy Audits',
                description: 'Professional auditing to identify energy saving opportunities.',
                icon: 'Search'
            },
            {
                title: 'Smart Power Management',
                description: 'Load balancing and automated power factor correction systems.',
                icon: 'BarChart'
            }
        ],
        image: '/images/services/Electrical Services/Electrical Services-preview.webp',
        gallery: [
            '/images/services/Electrical Services/Electrical Services-1.jpg',
            '/images/services/Electrical Services/Electrical Services-2.jpg'
        ]
    },
    {
        id: 'firefighting',
        title: 'Fire Fighting Systems',
        icon: 'Flame',
        description:
            'Advanced fire protection systems ensuring safety and compliance with all regulatory standards.',
        fullDescription:
            'Safety is non-negotiable. Lale Enterprises designs and installs NBC-compliant fire fighting systems for multi-specialty hospitals, clean rooms, and commercial hubs. Our systems are engineered to detect and suppress fires rapidly, minimizing risk to life and property.',
        details: [
            'Hydrant & sprinkler systems',
            'Fire pump rooms',
            'Detection, alarm & suppression systems',
            'Testing & compliance',
        ],
        features: [
            {
                title: 'NBC Compliance',
                description: 'Strict adherence to National Building Code of India requirements.',
                icon: 'FileCheck'
            },
            {
                title: 'Automatic Suppression',
                description: 'Gas-based (FM200) and water-based suppression systems.',
                icon: 'Droplets'
            },
            {
                title: 'Early Warning Detection',
                description: 'High-sensitivity smoke and heat detection networks.',
                icon: 'Bell'
            }
        ],
        image: '/images/services/Fire Fighting Systems/fire-fighting-preview.jpg',
        gallery: [
            '/images/services/Fire Fighting Systems/Fire Fighting Systems-1.jpg'
        ]
    },
    {
        id: 'plumbing',
        title: 'Plumbing & Public Health Engineering',
        icon: 'Droplets',
        description:
            'Complete water supply, drainage, and treatment solutions for sustainable building operations.',
        fullDescription:
            'We provide comprehensive Public Health Engineering (PHE) services focused on sustainable water management. Our solutions range from rainwater harvesting and STP/WTP installation to high-rise water distribution systems, ensuring efficiency and hygiene.',
        details: [
            'Water supply & drainage systems',
            'Rainwater harvesting',
            'STP/WTP piping works',
            'Plumbing fixtures & pumps',
        ],
        features: [
            {
                title: 'Sustainable Water Management',
                description: 'Rainwater harvesting and greywater recycling solutions.',
                icon: 'Leaf'
            },
            {
                title: 'Advanced Treatment',
                description: 'Design and commissioning of STP and WTP plants.',
                icon: 'Waves'
            },
            {
                title: 'Hydro-pneumatic Systems',
                description: 'High-pressure water distribution for multi-story buildings.',
                icon: 'Zap'
            }
        ],
        image: '/images/services/Plumbing/Plumbing-preview.jpeg',
        gallery: [
            '/images/services/Plumbing/Plumbing2.jpg'
        ]
    },
    {
        id: 'mechanical',
        title: 'Mechanical & Piping Works',
        icon: 'Cog',
        description:
            'Precision mechanical installations and piping systems for industrial and commercial applications.',
        fullDescription:
            'Our mechanical expertise covers heavy-duty industrial piping and precision mechanical installations. We work with MS, SS, and GI piping for various media including chilled water, compressed air, and process chemicals, adhering to strict industrial standards.',
        details: [
            'MS & SS piping',
            'Chilled/hot water piping',
            'Utility & process piping',
            'Riser works',
        ],
        features: [
            {
                title: 'Process Piping',
                description: 'High-purity piping for chemical and food processing.',
                icon: 'Activity'
            },
            {
                title: 'Precision Fabrication',
                description: 'On-site fabrication and welding with X-ray quality precision.',
                icon: 'Wrench'
            },
            {
                title: 'System Integration',
                description: 'Seamless integration of pumps, valves, and control systems.',
                icon: 'Settings'
            }
        ],
        image: '/images/services/Mechanical & Piping Works/Mechanical & Piping Works-preview.jpg',
        gallery: [
            '/images/services/Mechanical & Piping Works/Mechanical & Piping Works.jpg'
        ]
    },
]
