export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    description: string;
    requirements: string[];
}

export const jobs: Job[] = [
    {
        id: 'hvac-design-engineer',
        title: 'HVAC Design Engineer',
        department: 'Engineering',
        location: 'Pune/Mumbai',
        type: 'Full-time',
        description: 'We are looking for an experienced HVAC Design Engineer to join our core engineering team. You will be responsible for heat load calculations, equipment selection, and system design for industrial and commercial projects.',
        requirements: [
            'B.E./B.Tech in Mechanical Engineering',
            '3-5 years of experience in MEP consultancy or contracting',
            'Proficiency in Revit, AutoCAD, and HAP',
            'Knowledge of ASHRAE and NBC standards'
        ]
    },
    {
        id: 'electrical-site-supervisor',
        title: 'Electrical Site Supervisor',
        department: 'Operations',
        location: 'Site-based (Pan India)',
        type: 'Full-time',
        description: 'The Electrical Site Supervisor will oversee on-site electrification works, ensuring adherence to safety protocols and quality standards for HT/LT installations.',
        requirements: [
            'Diploma or B.E. in Electrical Engineering',
            'Strong knowledge of electrical safety codes',
            'Capable of managing large labor teams',
            'Experience with high-rise or industrial projects'
        ]
    },
    {
        id: 'fire-safety-consultant',
        title: 'Fire Safety Consultant',
        department: 'Safety & Compliance',
        location: 'Mumbai',
        type: 'Contract',
        description: 'Provide technical expertise for NBC compliance and fire suppression system design for high-occupancy buildings and industrial facilities.',
        requirements: [
            'CFPS or equivalent international certification',
            'Deep expertise in NBC and NFPA standards',
            'Minimum 8 years of experience in fire safety auditing'
        ]
    }
];
