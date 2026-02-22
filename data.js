// ============================================================
//  DATA FILE — Edit this to update your portfolio
//
//  HOW TO UPDATE:
//    1. Open this file on GitHub (click data.js → pencil icon)
//    2. Change the numbers you want to update
//    3. Click "Commit changes" — site updates instantly
//
//  HOLDINGS FIELDS:
//    ticker       = stock code (e.g. "BBCA")
//    name         = company display name
//    lot          = number of lots you own (1 lot = 100 shares)
//    avgPrice     = your average buy price per share (IDR)
//    currentPrice = latest price — UPDATE THIS MANUALLY when you check
//
//  CALCULATED AUTOMATICALLY (no need to touch):
//    Invested     = lot × 100 × avgPrice
//    Market Value = lot × 100 × currentPrice
//    P/L          = Market Value − Invested
//    Percentage   = (Market Value / Invested) − 1
//
//  LAST UPDATED: 2026-02-22
// ============================================================

const PORTFOLIO_DATA = {

  // --- SITE IDENTITY ---
  siteName: "Project: Aegis",
  tagline: "Fine-tuning the strategy.",
  description: "Personal investment strategy tracker.",

  // --- AUM MILESTONES ---
  // reached: true = full bar + checkmark, false = empty bar
  milestones: [
    { label: "Rp 30jt",  reached: false  },
    { label: "Rp 50jt",  reached: false },
    { label: "Rp 100jt", reached: false },
    { label: "Rp 500jt", reached: false },
  ],

  // --- HOLDINGS ---
  // ↓ Update currentPrice each time you check your portfolio
  holdings: [
    { ticker: "ZATA",  name: "Bersama Zatta Jaya",            lot: 74,  avgPrice: 160.24,  currentPrice: 163   },
    { ticker: "BBCA",  name: "Bank Central Asia",              lot: 2,   avgPrice: 7110.65, currentPrice: 7225  },
    { ticker: "INET",  name: "Indoritel Makmur Internasional", lot: 177, avgPrice: 406.6,   currentPrice: 412   },
    { ticker: "TFAS",  name: "Telefast Indonesia",             lot: 89,  avgPrice: 228.34,  currentPrice: 230   },
    { ticker: "MIDI",  name: "Midi Utama Indonesia",           lot: 21,  avgPrice: 324.48,  currentPrice: 324   },
    { ticker: "BUVA",  name: "Bukit Uluwatu Villa",            lot: 8,   avgPrice: 1432.14, currentPrice: 1390  },
    { ticker: "TAPG",  name: "Trimitra Propertindo",           lot: 2,   avgPrice: 1507.25, currentPrice: 1460  },
    { ticker: "UDNG",  name: "Surya Pertiwi",                  lot: 27,  avgPrice: 3908.44, currentPrice: 3420  },
    { ticker: "BUAH",  name: "Segar Kumala Agriculture",       lot: 23,  avgPrice: 635.95,  currentPrice: 535   },
    { ticker: "NIRO",  name: "Nirvana Development",            lot: 44,  avgPrice: 322.48,  currentPrice: 238   },
    { ticker: "WIFI",  name: "Solusi Sinergi Digital",         lot: 8,   avgPrice: 3525.28, currentPrice: 2500  },
    { ticker: "CDIA",  name: "Citra Duta Intermedia",          lot: 10,  avgPrice: 1987.97, currentPrice: 1140  },
    { ticker: "BEEF",  name: "Berdikari",                      lot: 10,  avgPrice: 650.97,  currentPrice: 344   },
  ],

  // --- POSTS INDEX ---
  posts: [
    {
      id: "update-20261",
      type: "update",
      ticker: "WIFI", "CDIA", "BUAH", "BEEF", "UDNG",
      date: "2026-02-22",
      title: "Recovery Plan: Exit on WIFI, CDIA, BUAH, BEEF, and Reducing Exposure on UDNG",
      excerpt: "Announcement on recovery initiative plan by exitting from WIFI, CDIA, BUAH, and BEEF as well as reducing exposure on UDNG.",
      file: "posts/holding-update-20260222.html"
    },
  ]
};
