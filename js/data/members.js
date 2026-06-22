export const members = [
    // --- BUREAU ---
    { id: 1,  firstName: 'Paolo',    lastName: 'PERCHE',            promo: 'BUT3', promoText: '3ème année', role: 'Président',          roleClass: 'role-president',   photo: 'assets/membres/Paolo.jpg',       isBureau: true,  group: 'bureau' },
    { id: 2,  firstName: 'Romain',   lastName: 'LEFRANC',           promo: 'BUT3', promoText: '3ème année', role: 'Vice-Président',     roleClass: 'role-vice',        photo: 'assets/membres/Romain.jpg',      isBureau: true,  group: 'bureau' },
    { id: 3,  firstName: 'Gabin',    lastName: 'CHEVALIER',         promo: 'BUT3', promoText: '3ème année', role: 'Vice-Président',     roleClass: 'role-vice',        photo: 'assets/membres/Gabin.jpg',       isBureau: true,  group: 'bureau' },
    { id: 4,  firstName: 'Nathan',   lastName: 'LE HEBEL',          promo: 'BUT3', promoText: '3ème année', role: 'Vice-Président',     roleClass: 'role-vice',        photo: 'assets/membres/Nathan.jpg',      isBureau: true,  group: 'bureau' },
    { id: 7,  firstName: 'Gaëtan',   lastName: 'LOLLIERIC',         promo: 'BUT3', promoText: '3ème année', role: 'Secrétaire',         roleClass: 'role-secretaire',  photo: 'assets/membres/Gaëtan.jpg',      isBureau: true,  group: 'bureau' },

    // --- TRÉSORERIE ---
    { id: 6,  firstName: 'Johan',    lastName: 'KERAUDREN',         promo: 'BUT3', promoText: '3ème année', role: 'Resp. Trésorerie',   roleClass: 'role-treso',       photo: 'assets/membres/Johan.jpg',       isBureau: true,  group: 'treso',  isResp: true  },
    { id: 15, firstName: 'Titouan',  lastName: 'LOUIS--RENAULT',    promo: 'BUT2', promoText: '3ème année',  role: 'Trésorier',          roleClass: 'role-treso',       photo: 'assets/membres/Titouan_L.jpg',   isBureau: false, group: 'treso',  isResp: false },
    { id: 21, firstName: 'Thuân',    lastName: 'DANG',              promo: 'BUT2', promoText: '2ème année', role: 'Trésorier',           roleClass: 'role-treso',       photo: 'assets/membres/Thuan.jpg',       isBureau: false, group: 'treso',  isResp: false },

    // --- COMMUNICATION ---
    { id: 5,  firstName: 'Thélio',   lastName: 'BLEUZEN',           promo: 'BUT3', promoText: '3ème année', role: 'Resp. Communication', roleClass: 'role-comm',        photo: 'assets/membres/Thélio.jpg',      isBureau: true,  group: 'comm', isResp: true  },
    { id: 12, firstName: 'Ewen',     lastName: 'SEVEN',             promo: 'BUT3', promoText: '3ème année', role: 'Communication',       roleClass: 'role-comm',        photo: 'assets/membres/Ewen.jpg',        isBureau: false, group: 'comm', isResp: false },
    { id: 22, firstName: 'Louennig', lastName: 'CORREC',            promo: 'BUT3', promoText: '3ème année', role: 'Communication',       roleClass: 'role-comm',        photo: 'assets/membres/Louennig.jpg',    isBureau: false, group: 'comm', isResp: false },
    { id: 19, firstName: 'Mathis',   lastName: 'LOQUAIS',           promo: 'BUT3', promoText: '3ème année', role: 'Communication',       roleClass: 'role-comm',        photo: 'assets/membres/Mathis.jpg',      isBureau: false, group: 'comm', isResp: false },
    { id: 24, firstName: 'Yanis',    lastName: 'GUERIF',            promo: 'BUT2', promoText: '2ème année',  role: 'Communication',       roleClass: 'role-comm',        photo: 'assets/membres/Yanis.jpg',       isBureau: false, group: 'comm', isResp: false },

    // --- ÉVÈNEMENTIEL ---
    { id: 8,  firstName: 'Titouan',  lastName: 'QUILLEVERE',        promo: 'BUT3', promoText: '3ème année', role: 'Resp. Events',        roleClass: 'role-events',     photo: 'assets/membres/Titouan_Q.jpg',   isBureau: true,  group: 'events', isResp: true  },
    { id: 9,  firstName: 'Yiwen',    lastName: 'KADRI',             promo: 'BUT3', promoText: '3ème année', role: 'Resp. Events',        roleClass: 'role-events',     photo: 'assets/membres/Yiwen.jpg',       isBureau: true,  group: 'events', isResp: true  },

    // --- MEMBRES ---
    { id: 10, firstName: 'Clément',  lastName: 'BIGOUIN',           promo: 'BUT2', promoText: '2ème année',  role: 'Membre',              roleClass: 'role',            photo: 'assets/membres/Clément.jpg',     isBureau: false, group: 'membres' },
    { id: 11, firstName: 'Lucien',   lastName: 'LE GOC',            promo: 'BUT2', promoText: '2ème année',  role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
    { id: 13, firstName: 'Baptiste', lastName: 'GAULTIER',          promo: 'BUT2', promoText: '2ème année',  role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
    { id: 14, firstName: 'Liam',     lastName: 'CHARPENTIER',       promo: 'BUT2', promoText: '2ème année',  role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
    { id: 16, firstName: 'Mael',     lastName: 'FOURRE',            promo: 'BUT3', promoText: '3ème année', role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
    { id: 17, firstName: 'Léo',      lastName: 'TESSIER',           promo: 'BUT3', promoText: '3ème année', role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
    { id: 18, firstName: 'Clément',  lastName: 'PHILIPPO',          promo: 'BUT3', promoText: '3ème année', role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
    { id: 20, firstName: 'Guéwen',   lastName: 'MARÉCHAL',          promo: 'BUT3', promoText: '3ème année', role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
    { id: 23, firstName: 'Edgar',    lastName: 'RODRIGUES MOREIRA', promo: 'BUT3', promoText: '3ème année', role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
    { id: 25, firstName: 'Edouard',  lastName: 'LE LAY',            promo: 'BUT3', promoText: '3ème année', role: 'Membre',              roleClass: 'role',            photo: '',                              isBureau: false, group: 'membres' },
];
