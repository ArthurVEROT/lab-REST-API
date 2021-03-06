const nbaTeams = [
  {
    fullname: "Hawks d'Atlanta",
    city: "Atlanta",
  },
  {
    fullname: "Celtics de Boston",
    city: "Boston",
  },
  {
    fullname: "Nets de Brooklyn",
    city: "New York",
  },
  {
    fullname: "Hornets de Charlotte",
    city: "Charlotte",
  },
  {
    fullname: "Bulls de Chicago",
    city: "Chicago",
  },
  {
    fullname: "Cavaliers de Cleveland",
    city: "Cleveland",
  },
  {
    fullname: "Mavericks de Dallas",
    city: "Dallas",
  },
  {
    fullname: "Pistons de Détroit",
    city: "Détroit",
  },
  {
    fullname: "Warriors de Golden State",
    city: "Oakland",
  },
  {
    fullname: "Rockets de Houston",
    city: "Houston",
  },
  {
    fullname: "Pacers de l'Indiana",
    city: "Indianapolis",
  },
  {
    fullname: "Lakers de Los Angeles",
    city: "Los Angeles",
  },
  {
    fullname: "Clippers de Los Angeles",
    city: "Los Angeles",
  },
  {
    fullname: "Grizzlies de Memphis",
    city: "Memphis",
  },
  {
    fullname: "Heat de Miami",
    city: "Miami",
  },
  {
    fullname: "Bucks de Milwaukee",
    city: "Milwaukee",
  },
  {
    fullname: "Timberwolves du Minnesota",
    city: "Minneapolis",
  },
  {
    fullname: "Nets du New Jersey",
    city: "New york",
  },
  {
    fullname: "Pelicans de La Nouvelle-Orléans",
    city: "La Nouvelle-Orléans",
  },
  {
    fullname: "Knicks de New York",
    city: "New York",
  },
  {
    fullname: "Nuggets de Denver",
    city: "Denver",
  },
  {
    fullname: "Thunder d'Oklahoma City",
    city: "Oklahoma City",
  },
  {
    fullname: "Magic d'Orlando",
    city: "Orlando",
  },
  {
    fullname: "76ers de Philadelphie",
    city: "Philadelphie",
  },
  {
    fullname: "Suns de Phoenix",
    city: "Phoenix",
  },
  {
    fullname: "Trail Blazers de Portland",
    city: "Portland",
  },
  {
    fullname: "Kings de Sacramento",
    city: "Sacramento",
  },
  {
    fullname: "Spurs de San Antonio",
    city: "San Antonio",
  },
  {
    fullname: "Raptors de Toronto",
    city: "Toronto",
  },
  {
    fullname: "Jazz de l'Utah",
    city: "Salt lake city",
  },
  {
    fullname: "Wizards de Washington",
    city: "Washington DC",
  },
];

const router = require("express").Router();

// GET test
router.get("/", (req, res) => {
  res.json({ message: "Hey, cool guy!!!!!" });
});

// GET all teams
router.get("/teams", (req, res) => {
  res.json({ teams: nbaTeams });
});

// GET one team with name
router.get("/teams/:city/", (req, res) => {
  const city = req.params.city;
  const teamObject = nbaTeams.find((x) => x.city === city);
  res.json({ team: teamObject });
});

// POST a new team
router.post("/post", (req, res) => {
  const newTeam = req.body;
  console.log(newTeam);

  if (!newTeam.city || typeof newTeam.city !== "string") {
    res.status(400).json({
      message: `City is not valid.`,
    });
    return
  }
  if (!newTeam.fullname || typeof newTeam.fullname !== "string") {
    res.status(400).json({
      message: `fullname is not valid.`,
    });
    return
  }
  nbaTeams.push(newTeam)
  console.log(nbaTeams);

  res.status(201).json({
    message: "Objet créé !",
  });
});

// defining what is received
// when this file is called with "require()"
module.exports = router;
