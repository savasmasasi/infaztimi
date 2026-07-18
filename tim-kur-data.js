const FACTIONS = {
  "uzay-komandosu": {
    "label": "Uzay Komandosu İzcileri (Kül Pençesi)",
    "leaderTitle": "Takım Lideri",
    "fighters": [
      {
        "role": "leader",
        "name": "İzci Çavuş",
        "cost": 200,
        "stats": {
          "M": "5\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Dövüş bıçağı, izci zırhı"
      },
      {
        "role": "trooper",
        "name": "İzci",
        "cost": 100,
        "stats": {
          "M": "5\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, izci zırhı"
      },
      {
        "role": "recruit",
        "name": "Acemi İzci",
        "cost": 75,
        "stats": {
          "M": "5\"",
          "WS": 3,
          "BS": 3,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, izci zırhı"
      },
      {
        "role": "specialist",
        "name": "İzci Avcı",
        "cost": 110,
        "stats": {
          "M": "5\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, izci zırhı"
      }
    ],
    "weapons": {
      "Mühimmat": [
        [
          "Azap temiri",
          20
        ],
        [
          "Toksik mermi",
          20
        ]
      ],
      "El Bombaları": [
        [
          "Parça tesirli bomba",
          25
        ],
        [
          "Isıl bomba",
          30
        ],
        [
          "Zırh delici bomba",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Kamuflaj takımı",
          5
        ],
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Foto-vizör",
          15
        ],
        [
          "Kırmızı nokta lazer nişangâh",
          20
        ],
        [
          "Tüfek dürbünü",
          20
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Dövüş bıçağı",
          5
        ],
        [
          "Hücum bıçağı",
          15
        ],
        [
          "Hızar",
          25
        ],
        [
          "Erk kılıcı",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Temir tabancası",
          25
        ],
        [
          "Plazma tabancası",
          50
        ]
      ],
      "Temel Silahlar": [
        [
          "Pompalı tüfek",
          20
        ],
        [
          "Temren tüfeği",
          35
        ],
        [
          "Nişancı tüfeği",
          40
        ]
      ],
      "Ağır Silahlar": [
        [
          "Ağır temren",
          180
        ],
        [
          "Roketatar (parça tesirli)",
          175
        ],
        [
          "Roketatar (zırh delici)",
          190
        ],
        [
          "Roketatar (her ikisi)",
          225
        ]
      ]
    }
  },
  "imparatorluk-muhafizlari": {
    "label": "İmparatorluk Muhafızları (Mahşer Piyadeleri)",
    "fighters": [
      {
        "role": "leader",
        "name": "Muhafız Çavuş",
        "cost": 120,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, flak zırh"
      },
      {
        "role": "trooper",
        "name": "Kıdemli Muhafız",
        "cost": 60,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, flak zırh"
      },
      {
        "role": "recruit",
        "name": "Muhafız",
        "cost": 50,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, flak zırh"
      },
      {
        "role": "specialist",
        "name": "Özel Silah Nişancısı",
        "cost": 70,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, flak zırh"
      }
    ],
    "weapons": {
      "Çeşitli Ekipman": [
        [
          "Kamuflaj takımı",
          5
        ],
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Foto-vizör",
          15
        ],
        [
          "Kırmızı nokta lazer nişangâh",
          20
        ],
        [
          "Tüfek dürbünü",
          20
        ]
      ],
      "El Bombaları": [
        [
          "Parça tesirli bomba",
          25
        ],
        [
          "Isıl bomba",
          30
        ],
        [
          "Zırh delici bomba",
          40
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Dövüş bıçağı",
          5
        ],
        [
          "Hücum bıçağı",
          15
        ],
        [
          "Hızar",
          25
        ],
        [
          "Erk kılıcı",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Lazer tabancası",
          15
        ],
        [
          "Temir tabancası",
          25
        ],
        [
          "Plazma tabancası",
          50
        ]
      ],
      "Temel Silahlar": [
        [
          "Pompalı tüfek",
          20
        ],
        [
          "Lazer tüfeği",
          25
        ],
        [
          "Temren tüfeği",
          35
        ],
        [
          "Nişancı tüfeği",
          40
        ]
      ],
      "Özel Silahlar": [
        [
          "Alev makinesi",
          40
        ],
        [
          "Bomba atar (parça)",
          85
        ],
        [
          "Bomba atar (zırh delici)",
          100
        ],
        [
          "Bomba atar (her ikisi)",
          125
        ],
        [
          "Plazma tüfeği",
          80
        ],
        [
          "Isıl agitör (buharlaştırıcı)",
          95
        ]
      ],
      "Ağır Silahlar": [
        [
          "Ağır domatar",
          120
        ],
        [
          "Mortar",
          100
        ],
        [
          "Ağır temren",
          180
        ],
        [
          "Makineli top",
          150
        ]
      ]
    }
  },
  "ork-veletleri": {
    "label": "Ork Veletleri (Nemrutdiş'in Haydutları)",
    "fighters": [
      {
        "role": "leader",
        "name": "Kodaman",
        "cost": 160,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 2,
          "S": 4,
          "T": 4,
          "W": 2,
          "I": 3,
          "A": 3,
          "Ld": 7
        },
        "wargear": "Şiş, deri zırh"
      },
      {
        "role": "trooper",
        "name": "Velet",
        "cost": 60,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 2,
          "S": 3,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 2,
          "Ld": 7
        },
        "wargear": "Şiş, deri zırh"
      },
      {
        "role": "recruit",
        "name": "Çömez",
        "cost": 30,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 2,
          "S": 3,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Şiş, deri zırh"
      },
      {
        "role": "specialist",
        "name": "Tamirci Velet",
        "cost": 70,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 2,
          "S": 3,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 2,
          "Ld": 7
        },
        "wargear": "Şiş, deri zırh"
      }
    ],
    "weapons": {
      "El Bombaları": [
        [
          "Tutkaçlı bomba",
          25
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Kırmızı nokta lazer nişangâh",
          15
        ],
        [
          "Aar zırh",
          25
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Şiş",
          5
        ],
        [
          "Keser",
          10
        ],
        [
          "Vızkeser",
          15
        ],
        [
          "Kocakeser",
          15
        ],
        [
          "Erk pençesi",
          85
        ]
      ],
      "Tabancalar": [
        [
          "Patlangaç",
          10
        ]
      ],
      "Temel Silahlar": [
        [
          "Atgaç",
          25
        ],
        [
          "Kombo-atgaç",
          40
        ],
        [
          "Kombo-silah",
          50
        ]
      ],
      "Özel Silahlar": [
        [
          "Füze fırıltgacı",
          130
        ],
        [
          "Koca atgaç",
          150
        ]
      ]
    }
  },
  "muharip-rahibeler": {
    "label": "Muharip Rahibeler (Kızıl Damla Tarikatı)",
    "fighters": [
      {
        "role": "leader",
        "name": "Başrahibe",
        "cost": 175,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 4,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Dövüş bıçağı, erk zırhı"
      },
      {
        "role": "trooper",
        "name": "Rahibe",
        "cost": 90,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, erk zırhı"
      },
      {
        "role": "recruit",
        "name": "Müptedi",
        "cost": 80,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, erk zırhı"
      },
      {
        "role": "specialist",
        "name": "Nişancı",
        "cost": 100,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, erk zırhı"
      }
    ],
    "weapons": {
      "El Bombaları": [
        [
          "Parça tesirli bomba",
          25
        ],
        [
          "Isıl bomba",
          30
        ],
        [
          "Zırh delici bomba",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Kırmızı nokta lazer nişangâh",
          20
        ],
        [
          "Tüfek dürbünü",
          20
        ],
        [
          "Kutsal emanet",
          50
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Dövüş bıçağı",
          5
        ],
        [
          "Hızar",
          25
        ],
        [
          "Erk gürzü / erk kılıcı",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Temir tabancası",
          25
        ],
        [
          "Plazma tabancası",
          50
        ]
      ],
      "Temel Silahlar": [
        [
          "Temren tüfeği",
          35
        ]
      ],
      "Özel Silahlar": [
        [
          "Alev makinesi",
          40
        ],
        [
          "Çifte temren",
          55
        ],
        [
          "Kombo alev makinesi",
          55
        ],
        [
          "Hükümran temren",
          55
        ],
        [
          "Kombo buharlaştırıcı",
          65
        ],
        [
          "Isıl agitör (buharlaştırıcı)",
          95
        ],
        [
          "Ağır alev makinesi",
          100
        ]
      ],
      "Ağır Silahlar": [
        [
          "Ağır temren",
          180
        ],
        [
          "Çoklu buharlaştırıcı",
          190
        ]
      ]
    }
  },
  "kaos-komandolari": {
    "label": "Kaos Komandoları (Düşkün Hükümran)",
    "fighters": [
      {
        "role": "leader",
        "name": "Aspiring Champion",
        "cost": 225,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Dövüş bıçağı, erk zırhı"
      },
      {
        "role": "trooper",
        "name": "Kaos Komandosu",
        "cost": 120,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, erk zırhı"
      },
      {
        "role": "recruit",
        "name": "Tarikatçı",
        "cost": 40,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, basit zırh"
      },
      {
        "role": "specialist",
        "name": "Kaos Nişancısı",
        "cost": 130,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, erk zırhı"
      }
    ],
    "weapons": {
      "Mühimmat": [
        [
          "Cehennem temiri",
          25
        ]
      ],
      "El Bombaları": [
        [
          "Parça tesirli bomba",
          25
        ],
        [
          "Isıl bomba",
          30
        ],
        [
          "Cerahat bombası",
          35
        ],
        [
          "Zırh delici bomba",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Kamuflaj takımı",
          5
        ],
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Foto-vizör",
          15
        ],
        [
          "Kırmızı nokta lazer nişangâh",
          20
        ],
        [
          "Tüfek dürbünü",
          20
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Dövüş bıçağı",
          5
        ],
        [
          "Hücum bıçağı",
          15
        ],
        [
          "Topuz",
          10
        ],
        [
          "Balta",
          15
        ],
        [
          "Sopa",
          15
        ],
        [
          "Hızar",
          25
        ],
        [
          "Erk kılıcı",
          50
        ],
        [
          "Erk yumruğu",
          85
        ]
      ],
      "Tabancalar": [
        [
          "Otomatik tabanca",
          15
        ],
        [
          "Temir tabancası",
          25
        ],
        [
          "Plazma tabancası",
          50
        ]
      ],
      "Temel Silahlar": [
        [
          "Otomatik tüfek",
          20
        ],
        [
          "Pompalı tüfek",
          20
        ],
        [
          "Temren tüfeği",
          35
        ]
      ],
      "Özel Silahlar": [
        [
          "Alev makinesi",
          40
        ],
        [
          "Plazma tüfeği",
          80
        ],
        [
          "Isıl agitör (buharlaştırıcı)",
          95
        ]
      ],
      "Ağır Silahlar": [
        [
          "Makineli top",
          150
        ],
        [
          "Ağır temren",
          180
        ],
        [
          "Roketatar (parça tesirli)",
          175
        ],
        [
          "Roketatar (zırh delici)",
          190
        ],
        [
          "Roketatar (her ikisi)",
          225
        ],
        [
          "Makineli lazer",
          250
        ]
      ]
    }
  },
  "kara-aelfler": {
    "label": "Kara Ælfler (Yarılan Ay Kabalı)",
    "fighters": [
      {
        "role": "leader",
        "name": "Siren",
        "cost": 150,
        "stats": {
          "M": "6\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 6,
          "A": 3,
          "Ld": 9
        },
        "wargear": "Cadı bıçağı, cadı tulumu"
      },
      {
        "role": "trooper",
        "name": "Cadı",
        "cost": 80,
        "stats": {
          "M": "6\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 6,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Cadı bıçağı, cadı tulumu"
      },
      {
        "role": "recruit",
        "name": "Tazekız",
        "cost": 70,
        "stats": {
          "M": "6\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 6,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Cadı bıçağı, cadı tulumu"
      },
      {
        "role": "specialist",
        "name": "Kankadın",
        "cost": 100,
        "stats": {
          "M": "6\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 6,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Cadı bıçağı, cadı tulumu"
      }
    ],
    "weapons": {
      "Mühimmat": [
        [
          "Ruhbulan mermisi",
          15
        ]
      ],
      "El Bombaları": [
        [
          "Plazma bombası",
          25
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Biçen zehri",
          10
        ],
        [
          "Aynalı miğfer",
          20
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Cadı bıçağı",
          5
        ],
        [
          "Çengel",
          10
        ],
        [
          "Istırapçı",
          45
        ],
        [
          "Erk kılıcı",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Kıymık tabancası",
          20
        ],
        [
          "İnfilak tabancası",
          50
        ]
      ],
      "Arena Silahları": [
        [
          "Ejder Pençesi",
          30
        ],
        [
          "Ustura Gürz",
          30
        ],
        [
          "Kıymıkağı & Kazık",
          35
        ]
      ]
    }
  },
  "hunerdiyar-aelfleri": {
    "label": "Hünerdiyar Ælfleri (Ael-Daris)",
    "fighters": [
      {
        "role": "leader",
        "name": "Kingüden Eksarh",
        "cost": 240,
        "stats": {
          "M": "5\"",
          "WS": 5,
          "BS": 5,
          "S": 3,
          "T": 3,
          "W": 2,
          "I": 6,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Dövüş bıçağı, cephe zırhı"
      },
      {
        "role": "trooper",
        "name": "Kingüden",
        "cost": 100,
        "stats": {
          "M": "5\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 5,
          "A": 1,
          "Ld": 9
        },
        "wargear": "Dövüş bıçağı, cephe zırhı"
      },
      {
        "role": "recruit",
        "name": "Milis",
        "cost": 80,
        "stats": {
          "M": "5\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 5,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, örgü zırh"
      },
      {
        "role": "specialist",
        "name": "Milis Nişancı",
        "cost": 90,
        "stats": {
          "M": "5\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 5,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, örgü zırh"
      }
    ],
    "weapons": {
      "El Bombaları": [
        [
          "Plazma bombası",
          25
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Foto-vizör",
          15
        ],
        [
          "Pırılkalkan",
          30
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Dövüş bıçağı",
          5
        ],
        [
          "Karakılıç",
          60
        ],
        [
          "Erk palası",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Disk tabancası",
          35
        ]
      ],
      "Temel Silahlar": [
        [
          "Disk sapanı",
          40
        ],
        [
          "Kingüden disk sapanı",
          45
        ],
        [
          "İkili kingüden disk sapanı",
          70
        ]
      ],
      "Ağır Silah Platformu": [
        [
          "Platform: berrak mızrak",
          250
        ],
        [
          "Platform: Ælf roketatarı",
          200
        ],
        [
          "Platform: saçma lazer",
          160
        ],
        [
          "Platform: disk topu",
          180
        ],
        [
          "Platform: yıldıztopu",
          200
        ]
      ]
    }
  },
  "genugru-tarikati": {
    "label": "Genuğru Tarikatı (Sonsuz Kurt)",
    "fighters": [
      {
        "role": "leader",
        "name": "Müptedi Lider",
        "cost": 120,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 4,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Dövüş bıçağı, madenci tulumu"
      },
      {
        "role": "trooper",
        "name": "Müptedi Melez",
        "cost": 60,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, madenci tulumu"
      },
      {
        "role": "recruit",
        "name": "Müptedi Çömez",
        "cost": 50,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, madenci tulumu"
      },
      {
        "role": "specialist",
        "name": "Müptedi Muharip",
        "cost": 100,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, madenci tulumu"
      }
    ],
    "weapons": {
      "Mühimmat": [
        [
          "Yoğunlaştırılmış lazer güç ünitesi",
          15
        ]
      ],
      "El Bombaları": [
        [
          "İnfilak kalıbı",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Foto-vizör",
          15
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Dövüş bıçağı",
          5
        ],
        [
          "Hızar",
          25
        ],
        [
          "Erk gürzü",
          50
        ],
        [
          "Erk kazması",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Otomatik tabanca",
          15
        ],
        [
          "Lazer tabancası",
          15
        ],
        [
          "Temir tabancası",
          25
        ],
        [
          "Web pistol",
          75
        ]
      ],
      "Temel Silahlar": [
        [
          "Otomatik tüfek",
          20
        ],
        [
          "Pompalı tüfek",
          20
        ],
        [
          "Lazer tüfeği",
          35
        ]
      ],
      "Özel Silahlar": [
        [
          "Alev makinesi",
          40
        ],
        [
          "Bomba atar (parça)",
          85
        ],
        [
          "Bomba atar (zırh delici)",
          100
        ],
        [
          "Bomba atar (her ikisi)",
          125
        ],
        [
          "Ağatan",
          100
        ]
      ],
      "Ağır Silahlar": [
        [
          "Ağır domatar",
          120
        ],
        [
          "Madenci lazeri",
          200
        ],
        [
          "Sismik top",
          250
        ]
      ]
    }
  },
  "bozfarisler": {
    "label": "Bozfarisler",
    "fighters": [
      {
        "role": "leader",
        "name": "Hakim",
        "cost": 250,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Çifte temren, erk zırhı"
      },
      {
        "role": "trooper",
        "name": "Bozfaris",
        "cost": 175,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Çifte temren, erk zırhı"
      },
      {
        "role": "specialist",
        "name": "Bozfaris Nişancısı",
        "cost": 200,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 4,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Çifte temren, erk zırhı"
      }
    ],
    "weapons": {
      "Mühimmat": [
        [
          "Psişik temir",
          30
        ]
      ],
      "El Bombaları": [
        [
          "Parça tesirli bomba",
          25
        ],
        [
          "Isıl bomba",
          30
        ],
        [
          "Zırh delici bomba",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Foto-vizör",
          15
        ],
        [
          "Kırmızı nokta lazer nişangâh",
          20
        ],
        [
          "Tüfek dürbünü",
          20
        ],
        [
          "Yedek mühimmat (çifte temren)",
          25
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Bir çift gazap gadresi",
          30
        ],
        [
          "Gazap erk kılıcı",
          60
        ],
        [
          "Gazap savma asası",
          25
        ],
        [
          "Gazap erk teberi",
          80
        ],
        [
          "Gazap iblis çekici",
          100
        ]
      ],
      "Özel Silahlar": [
        [
          "Küleden",
          75
        ],
        [
          "Psişik susturucu",
          150
        ],
        [
          "Psişik top",
          175
        ]
      ]
    }
  },
  "alacalar": {
    "label": "Alacalar (Kırık Ayna Kumpanyası)",
    "fighters": [
      {
        "role": "leader",
        "name": "Kumpanya Başı",
        "cost": 300,
        "stats": {
          "M": "6\"",
          "WS": 6,
          "BS": 5,
          "S": 3,
          "T": 3,
          "W": 2,
          "I": 7,
          "A": 3,
          "Ld": 10
        },
        "wargear": "Gizli bıçak, Alaca maskesi, sıçrama kemeri, holotulum"
      },
      {
        "role": "trooper",
        "name": "Oyuncu",
        "cost": 150,
        "stats": {
          "M": "6\"",
          "WS": 5,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 6,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Gizli bıçak, Alaca maskesi, sıçrama kemeri, holotulum"
      },
      {
        "role": "recruit",
        "name": "Pandomim",
        "cost": 125,
        "stats": {
          "M": "6\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 6,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Gizli bıçak, Alaca maskesi, sıçrama kemeri, holotulum"
      },
      {
        "role": "specialist",
        "name": "Üstat",
        "cost": 175,
        "stats": {
          "M": "6\"",
          "WS": 5,
          "BS": 5,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 6,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Gizli bıçak, Alaca maskesi, sıçrama kemeri, holotulum"
      }
    ],
    "weapons": {
      "El Bombaları": [
        [
          "Prizmatik bomba",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Foto-vizör",
          15
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Gizli bıçak",
          5
        ],
        [
          "Alaca bıçağı",
          15
        ],
        [
          "Alacanın dokunuşu",
          20
        ],
        [
          "Alacanın öpücüğü",
          25
        ],
        [
          "Monobıçak",
          30
        ],
        [
          "Alacanın sarılışı",
          40
        ],
        [
          "Erk kılıcı",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Disk tabancası",
          35
        ],
        [
          "Sinirkıran",
          85
        ],
        [
          "Füzyon tabancası",
          100
        ]
      ]
    }
  },
  "engizisyon": {
    "label": "Engizisyon (Tahkikçi Vorn)",
    "fighters": [
      {
        "role": "leader",
        "name": "Zeno Ocağı Tahkikçisi",
        "cost": 225,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 3,
          "I": 4,
          "A": 3,
          "Ld": 10
        },
        "wargear": "Dövüş bıçağı, karakabuk zırh"
      },
      {
        "role": "trooper",
        "name": "Engizisyon Yardımcısı",
        "cost": 65,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, flak zırh"
      },
      {
        "role": "recruit",
        "name": "Engizisyon Müridi",
        "cost": 50,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, flak zırh"
      },
      {
        "role": "specialist",
        "name": "Mücahit",
        "cost": 85,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, karakabuk zırh"
      }
    ],
    "weapons": {
      "Mühimmat": [
        [
          "Yoğunlaştırılmış lazer güç ünitesi",
          15
        ],
        [
          "Toksik mermi",
          20
        ]
      ],
      "El Bombaları": [
        [
          "Parça tesirli bomba",
          25
        ],
        [
          "Isıl bomba",
          30
        ],
        [
          "Radyan bomba",
          35
        ],
        [
          "Zırh delici bomba",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Kamuflaj takımı",
          5
        ],
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Dijital silahlar",
          10
        ],
        [
          "Erk zırhı",
          10
        ],
        [
          "Plazma emici",
          10
        ],
        [
          "Foto-vizör",
          15
        ],
        [
          "Kırmızı nokta lazer nişangâh",
          20
        ],
        [
          "Tüfek dürbünü",
          20
        ],
        [
          "Enerji kalkanı",
          50
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Dövüş bıçağı",
          5
        ],
        [
          "İskit zehirli hançeri",
          30
        ],
        [
          "Hızar",
          25
        ],
        [
          "Erk gürzü / erk kılıcı",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Otomatik tabanca",
          15
        ],
        [
          "Lazer tabancası",
          15
        ],
        [
          "Temir tabancası",
          25
        ],
        [
          "İğne tabancası",
          30
        ],
        [
          "Plazma tabancası",
          50
        ]
      ],
      "Temel Silahlar": [
        [
          "Otomatik tüfek",
          20
        ],
        [
          "Pompalı tüfek",
          20
        ],
        [
          "Lazer tüfeği",
          25
        ],
        [
          "Temren tüfeği",
          35
        ],
        [
          "Nişancı tüfeği",
          40
        ]
      ],
      "Özel Silahlar": [
        [
          "Kombo alev makinesi",
          55
        ],
        [
          "Çifte temren",
          55
        ],
        [
          "Kombo buharlaştırıcı",
          65
        ]
      ]
    }
  },
  "duatlar": {
    "label": "Duatlar (Mahşer Hanedanı)",
    "fighters": [
      {
        "role": "leader",
        "name": "Seçkin Ölümsüz",
        "cost": 200,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 10
        },
        "wargear": "Dövüş bıçağı, ölümsüz kabuğu"
      },
      {
        "role": "trooper",
        "name": "Ölümsüz",
        "cost": 110,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 10
        },
        "wargear": "Dövüş bıçağı, ölümsüz kabuğu"
      },
      {
        "role": "recruit",
        "name": "Cengâver",
        "cost": 80,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 10
        },
        "wargear": "Dövüş bıçağı, cengâver kabuğu"
      },
      {
        "role": "specialist",
        "name": "Kefenbiçen",
        "cost": 120,
        "stats": {
          "M": "4\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 10
        },
        "wargear": "Dövüş bıçağı, ölümsüz kabuğu"
      }
    ],
    "weapons": {
      "Temel Silahlar": [
        [
          "Gauss deriyüzeni",
          50
        ],
        [
          "Gauss patlatıcısı",
          60
        ],
        [
          "Tesla karabinası",
          65
        ]
      ],
      "Özel Silahlar": [
        [
          "Sinaptik parçalayıcı",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Faz değiştirici",
          15
        ],
        [
          "Foto-vizör",
          15
        ],
        [
          "Zihinmühür muskaları",
          25
        ],
        [
          "Gölgedokuyan",
          30
        ]
      ]
    }
  },
  "teknokratlar": {
    "label": "Teknokratlar (Legio Ferrox)",
    "fighters": [
      {
        "role": "leader",
        "name": "Teknomuhafız Kolcu Alfa",
        "cost": 150,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 2,
          "I": 4,
          "A": 2,
          "Ld": 9
        },
        "wargear": "Dövüş bıçağı, teknomuhafız cenk zırhı"
      },
      {
        "role": "trooper",
        "name": "Teknomuhafız Kolcu",
        "cost": 80,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, teknomuhafız cenk zırhı"
      },
      {
        "role": "recruit",
        "name": "Teknomuhafız",
        "cost": 65,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, teknomuhafız cenk zırhı"
      },
      {
        "role": "specialist",
        "name": "Teknomuhafız Uzman",
        "cost": 90,
        "stats": {
          "M": "4\"",
          "WS": 3,
          "BS": 4,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 3,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, teknomuhafız cenk zırhı"
      }
    ],
    "weapons": {
      "El Bombaları": [
        [
          "Parça tesirli bomba",
          25
        ],
        [
          "Isıl bomba",
          30
        ],
        [
          "Zırh delici bomba",
          40
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Foto-vizör",
          15
        ],
        [
          "Kırmızı nokta lazer nişangâh",
          20
        ],
        [
          "Tüfek dürbünü",
          20
        ],
        [
          "Güçlendirilmiş veri bağı",
          35
        ],
        [
          "Tepegöz",
          40
        ]
      ],
      "Yakın Dövüş Silahları": [
        [
          "Dövüş bıçağı",
          5
        ],
        [
          "Şok üvendiresi",
          45
        ],
        [
          "Çakın gürzü",
          50
        ],
        [
          "Erk kılıcı",
          50
        ]
      ],
      "Tabancalar": [
        [
          "Radyum tabancası",
          20
        ],
        [
          "Çakın tabancası",
          30
        ],
        [
          "Fosfor tabancası",
          40
        ]
      ],
      "Temel Silahlar": [
        [
          "Galvanik tüfek",
          35
        ],
        [
          "Radyum karabinası",
          35
        ]
      ],
      "Özel Silahlar": [
        [
          "Çakın tüfeği",
          40
        ],
        [
          "Plazma tüfengi",
          75
        ],
        [
          "Transauranik arkebüz",
          180
        ]
      ]
    }
  },
  "tian-kasifleri": {
    "label": "Tiān Kaşifleri (Sa'cea)",
    "fighters": [
      {
        "role": "leader",
        "name": "Kaşif Kolbaşı",
        "cost": 140,
        "stats": {
          "M": "4\"",
          "WS": 2,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Dövüş bıçağı, keşif zırhı"
      },
      {
        "role": "trooper",
        "name": "Kaşif",
        "cost": 60,
        "stats": {
          "M": "4\"",
          "WS": 2,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, keşif zırhı"
      },
      {
        "role": "recruit",
        "name": "Kaşif Çaylağı",
        "cost": 50,
        "stats": {
          "M": "4\"",
          "WS": 2,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, keşif zırhı"
      },
      {
        "role": "specialist",
        "name": "Kaşif Uzmanı",
        "cost": 60,
        "stats": {
          "M": "4\"",
          "WS": 2,
          "BS": 3,
          "S": 3,
          "T": 3,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 7
        },
        "wargear": "Dövüş bıçağı, keşif zırhı"
      },
      {
        "role": "drone",
        "name": "MB3 Keşif Dronu",
        "cost": 110,
        "stats": {
          "M": "6\"",
          "WS": 2,
          "BS": 2,
          "S": 3,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Seri atış topu, tarama matrisi, dövüş bıçağı, dron karakabuğu"
      },
      {
        "role": "drone",
        "name": "MV33 Kütleçekim Engelleyici Dron",
        "cost": 50,
        "stats": {
          "M": "6\"",
          "WS": 2,
          "BS": 2,
          "S": 3,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Kütleçekim dalgası projektörü, dövüş bıçağı, dron karakabuğu"
      },
      {
        "role": "drone",
        "name": "MV31 Atım Hızlandırıcı Dron",
        "cost": 50,
        "stats": {
          "M": "6\"",
          "WS": 2,
          "BS": 2,
          "S": 3,
          "T": 4,
          "W": 1,
          "I": 2,
          "A": 1,
          "Ld": 8
        },
        "wargear": "Atım hızlandırıcı, dövüş bıçağı, dron karakabuğu"
      }
    ],
    "weapons": {
      "El Bombaları": [
        [
          "Foton bombası",
          10
        ]
      ],
      "Çeşitli Ekipman": [
        [
          "Tutunma koşumu",
          10
        ],
        [
          "Foto-vizör",
          15
        ],
        [
          "Nişan lazeri",
          15
        ]
      ],
      "Tabancalar": [
        [
          "Atım tabancası",
          30
        ]
      ],
      "Temel Silahlar": [
        [
          "Atım karabinası",
          30
        ]
      ],
      "Özel Silahlar": [
        [
          "İyon tüfeği",
          100
        ],
        [
          "Raylı tüfek",
          120
        ]
      ]
    }
  },
  "tiranidler": {
    "label": "Böcekler (Kopma Yığın Nagaia)",
    "fighters": [
      {
        "role": "leader",
        "name": "Alfa Böcek",
        "cost": 250,
        "stats": {
          "M": "5\"",
          "WS": 5,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 3,
          "I": 4,
          "A": 3,
          "Ld": 10
        },
        "wargear": "Bir çift tırpantırnak, kitin karakabuk"
      },
      {
        "role": "trooper",
        "name": "Böcek Asker",
        "cost": 200,
        "stats": {
          "M": "5\"",
          "WS": 5,
          "BS": 3,
          "S": 4,
          "T": 4,
          "W": 3,
          "I": 4,
          "A": 3,
          "Ld": 10
        },
        "wargear": "Bir çift tırpantırnak, kitin karakabuk"
      },
      {
        "role": "recruit",
        "name": "Böcek Yenidoğan",
        "cost": 175,
        "stats": {
          "M": "5\"",
          "WS": 4,
          "BS": 3,
          "S": 4,
          "T": 4,
          "W": 3,
          "I": 4,
          "A": 3,
          "Ld": 10
        },
        "wargear": "Bir çift tırpantırnak, kitin karakabuk"
      },
      {
        "role": "specialist",
        "name": "Böceksilah",
        "cost": 225,
        "stats": {
          "M": "5\"",
          "WS": 4,
          "BS": 4,
          "S": 4,
          "T": 4,
          "W": 3,
          "I": 4,
          "A": 3,
          "Ld": 10
        },
        "wargear": "Bir çift tırpantırnak, kitin karakabuk"
      }
    ],
    "weapons": {
      "Biomorflar": [
        [
          "Adrenalin bezleri",
          10
        ],
        [
          "Zehir keseleri",
          10
        ],
        [
          "Yoğun kitin karakabuk",
          15
        ],
        [
          "Et kancaları",
          15
        ],
        [
          "Asitkan",
          20
        ]
      ],
      "Yakın Dövüş Bio-silahları": [
        [
          "Bir çift tırpantırnak",
          10
        ],
        [
          "Bir çift yırtıcı pençe",
          25
        ],
        [
          "Kamçı dokunaç & kemikkılıç",
          100
        ],
        [
          "Bir çift kemikkılıç",
          125
        ]
      ],
      "Temel Bio-silahlar": [
        [
          "Bir çift dikenyumruk",
          25
        ],
        [
          "Ölümkusan",
          45
        ]
      ],
      "Bio-kanonlar": [
        [
          "Barbed strangler",
          150
        ],
        [
          "Venom cannon",
          165
        ]
      ]
    }
  }
};
