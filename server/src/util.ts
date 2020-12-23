import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Error {
    @Field()
    path: string;

    @Field()
    message: string;
}

export const Terms = ['Fall', 'Winter', 'Spring', 'Summer'];

export const Colleges = [
    'Agricultural Science',
    'Business',
    'Earth, Ocean, and Atmospheric Sciences',
    'Education',
    'Engineering',
    'Forestry',
    'Liberal Arts',
    'Pharmacy',
    'Public Health and Human Sciences',
    'Science',
    'Veterinary Medicine',
    'Graduate School',
    'Internatinoal Programs',
    'Reserve Officer Training Corps',
    'University Honors College',
];

export const Departments = [
    'AAE',
    'ACTG',
    'AEC',
    'AED',
    'AG',
    'AGRI',
    'AHE',
    'AJ',
    'ALS',
    'AMS',
    'ANS',
    'ANTH',
    'ARAB',
    'ARE',
    'ART',
    'AS',
    'ASL',
    'ASN',
    'ATS',
    'BA',
    'BB',
    'BBDS',
    'BEE',
    'BHS',
    'BI',
    'BIOE',
    'BOT',
    'BRR',
    'CBEE',
    'CCE',
    'CE',
    'CEM',
    'CH',
    'CHE',
    'CHN',
    'COMM',
    'COUN',
    'CROP',
    'CS',
    'CSS',
    'CSSA',
    'DHE',
    'DSGN',
    'EAH',
    'ECE',
    'ECON',
    'ED',
    'ENG',
    'ENGR',
    'ENCS',
    'ENT',
    'ENVE',
    'ES',
    'ESC',
    'ESE',
    'FCSJ',
    'FE',
    'FES',
    'FILM',
    'FIN',
    'FOR',
    'FR',
    'FST',
    'FW',
    'GD',
    'GEO',
    'GEOG',
    'GER',
    'GPH',
    'GRAD',
    'GS',
    'H',
    'HC',
    'HDFS',
    'HEBR',
    'HEST',
    'HHS',
    'HM',
    'HORT',
    'HST',
    'HSTS',
    'IAWS',
    'IB',
    'IE',
    'IEPA',
    'IEPG',
    'IEPH',
    'INTL',
    'IST',
    'IT',
    'JCUO',
    'JPN',
    'KIN',
    'KOR',
    'LA',
    'LAT',
    'LEAD',
    'LIB',
    'LING',
    'LS',
    'MAST',
    'MATS',
    'MB',
    'MCB',
    'ME',
    'MFGE',
    'MGMT',
    'MIME',
    'MNR',
    'MPP',
    'MRKT',
    'MRM',
    'MS',
    'MTH',
    'MUED',
    'MUP',
    'MUS',
    'NMC',
    'NR',
    'NS',
    'NSE',
    'NUR',
    'NUTR',
    'OC',
    'ODKU',
    'OEAS',
    'OFOR',
    'OP',
    'OSAR',
    'PAC',
    'PAX',
    'PBG',
    'PH',
    'PHAR',
    'PHL',
    'PPOL',
    'PS',
    'PSM',
    'PSY',
    'PT',
    'QS',
    'REL',
    'RNG',
    'ROB',
    'RS',
    'RUS',
    'SCI',
    'SE',
    'SED',
    'SNR',
    'SOC',
    'SOIL',
    'SPAN',
    'SSCI',
    'ST',
    'SUS',
    'TA',
    'TOX',
    'TRAL',
    'UEXP',
    'VMB',
    'VMC',
    'WGSS',
    'WLC',
    'WR',
    'WRE',
    'WRP',
    'WRS',
    'WSE',
    'Z',
];
