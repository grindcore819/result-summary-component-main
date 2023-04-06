// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json( 
  [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "/images/icon-visual.svg"
    }
  ]);
}
