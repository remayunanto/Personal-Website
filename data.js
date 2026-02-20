// ============================================================
//  DATA FILE — Edit this file to update your portfolio
//
//  HOW TO UPDATE HOLDINGS:
//    - Change "lot" and "avgPrice" manually
//    - "currentPrice" is fetched live from Yahoo Finance
//    - Indonesian stocks: ticker must end in .JK (e.g. "BBCA.JK")
//    - All prices in IDR (Rupiah), 1 lot = 100 shares
//
//  FORMULAS (calculated automatically):
//    Invested     = lot × 100 × avgPrice
//    Market Value = lot × 100 × currentPrice
//    P/L          = Market Value − Invested
//    Percentage   = (Market Value / Invested) − 1
// ============================================================

const PORTFOLIO_DATA = {

  // --- SITE IDENTITY ---
  siteName: "Portofolio",
  tagline: "Long-term value, documented with discipline.",
  description: "A transparent record of investment theses, research notes, and portfolio updates. Positions are held with conviction.",

  // --- AUM MILESTONES ---
  // reached: true = checkmark + full bar, false = empty bar
  milestones: [
    { label: "Rp 30jt",  reached: true  },
    { label: "Rp 50jt",  reached: false },
    { label: "Rp 100jt", reached: false },
    { label: "Rp 500jt", reached: false },
  ],

  // --- HOLDINGS ---
  // lot      = number of lots you own
  // avgPrice = your average buy price per share (IDR)
  // yahoo    = Yahoo Finance ticker (IDX stocks always need .JK suffix)
  // name     = company display name
  holdings: [
    { ticker: "ZATA",  name: "Bersama Zatta Jaya",             lot: 74,  avgPrice: 160.24,  yahoo: "ZATA.JK"  },
    { ticker: "BBCA",  name: "Bank Central Asia",               lot: 2,   avgPrice: 7110.65, yahoo: "BBCA.JK"  },
    { ticker: "INET",  name: "Indoritel Makmur Internasional",  lot: 177, avgPrice: 406.6,   yahoo: "INET.JK"  },
    { ticker: "TFAS",  name: "Telefast Indonesia",              lot: 89,  avgPrice: 228.34,  yahoo: "TFAS.JK"  },
    { ticker: "MIDI",  name: "Midi Utama Indonesia",            lot: 21,  avgPrice: 324.48,  yahoo: "MIDI.JK"  },
    { ticker: "BUVA",  name: "Bukit Uluwatu Villa",             lot: 8,   avgPrice: 1432.14, yahoo: "BUVA.JK"  },
    { ticker: "TAPG",  name: "Trimitra Propertindo",            lot: 2,   avgPrice: 1507.25, yahoo: "TAPG.JK"  },
    { ticker: "UDNG",  name: "Surya Pertiwi",                   lot: 27,  avgPrice: 3908.44, yahoo: "UDNG.JK"  },
    { ticker: "BUAH",  name: "Segar Kumala Agriculture",        lot: 23,  avgPrice: 635.95,  yahoo: "BUAH.JK"  },
    { ticker: "NIRO",  name: "Nirvana Development",             lot: 44,  avgPrice: 322.48,  yahoo: "NIRO.JK"  },
    { ticker: "WIFI",  name: "Solusi Sinergi Digital",          lot: 8,   avgPrice: 3525.28, yahoo: "WIFI.JK"  },
    { ticker: "CDIA",  name: "Citra Duta Intermedia",           lot: 10,  avgPrice: 1987.97, yahoo: "CDIA.JK"  },
    { ticker: "BEEF",  name: "Berdikari",                       lot: 10,  avgPrice: 650.97,  yahoo: "BEEF.JK"  },
  ],

  // --- POSTS INDEX ---
  // type: "thesis" | "update" | "research"
  posts: [
    {
      id: "bbca-thesis",
      type: "thesis",
      ticker: "BBCA",
      date: "2025-11-10",
      title: "BBCA: The Compounding Machine at the Heart of Indonesian Banking",
      excerpt: "Why BCA's unmatched CASA franchise and deposit moat justify a long-term position at current valuations.",
      file: "posts/bbca-thesis.html"
    },
    {
      id: "inet-thesis",
      type: "thesis",
      ticker: "INET",
      date: "2025-12-01",
      title: "INET: Riding Indonesia's Digital Infrastructure Wave",
      excerpt: "Indoritel's unique positioning as a tower and fiber play in an underpenetrated market.",
      file: "posts/inet-thesis.html"
    },
    {
      id: "udng-update",
      type: "update",
      ticker: "UDNG",
      date: "2026-01-10",
      title: "UDNG Q3 2025 Update — Reassessing the Thesis",
      excerpt: "After a significant drawdown, we revisit whether the original thesis remains intact.",
      file: "posts/udng-update.html"
    },
  ]
};
