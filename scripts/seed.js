let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hearthdb"
);

const seeds = [
    {
        title: "The Catcher in the Rye", 
        label: "the catcher in the rye",
        value: "the catcher in the rye",
        type: "Books",
        category: ["Drama"],
        ageRange: ["Young Adult"],
        Image: "/images/topEntertainment/catcher-rye.jpg",
        local_ext: "the-catcher-in-the-rye",
        description: "The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world."
     },{
        title: "Dune",
        label: "dune",
        value: "dune",
        type: "Books",
        category: ["Action", "Adventure", "Sci-Fi"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/dune.jpg",
        local_ext: "dune",
        description: "Dune is a science fiction novel written by Frank Herbert and published in 1965. ... The novel tells the story of young Paul Atreides, heir apparent to Duke Leto Atreides and scion of House Atreides, as he and his family relocate to the planet Arrakis, the universe's only source of the spice melange."
    },{
        title: "The Haunting of Hill House",
        label: "the haunting of hill house",
        value: "the haunting of hill house",
        type: "Books",
        category: ["Drama", "Horror", "Mystery", "Thriller"],
        ageRange: "Adult",
        Image: "/images/topEntertainment/hill-house.jpg",
        local_ext: "the-haunting-of-hill-house",
        description: "The Haunting of Hill House book follows four strangers, all of whom come to Hill House, long-rumored to be haunted, under the guidance of Dr. Montague, who is hoping to scientifically prove the existence of the supernatural. Over the course of the summer, the house proves itself to be extremely haunted."
    },{
        title: "The Hobbit",
        label: "the hobbit",
        value: "the hobbit",
        type: "Books",
        category: ["Adventure", "Fantasy"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/hobbit.jpg",
        local_ext: "the-hobbit",
        description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory."
    },{
        title: "The Hunger Games",
        label: "the hunger games",
        value: "the hunger games",
        type: "Books",
        category: ["Action", "Adventure", "Sci-Fi", "Thriller"],
        ageRange: ["Young Adult"],
        Image: "/images/topEntertainment/hunger-games.jpg",
        local_ext: "the-hunger-games",
        description: "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation."
    },{
        title: "Americanah",
        label: "americanah",
        value: "americanah",
        type: "Books",
        category: ["Drama", "Romance"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/americanah.jpg",
        local_ext: "americanah",
        description: "Americanah tells the story of a young Nigerian woman, Ifemelu, who immigrates to the United States to attend university. The novel traces Ifemelu's life in both countries, threaded by her love story with high school classmate Obinze. It was Adichie's third novel, published on May 14, 2013 by Alfred A. Knopf."
    },{
        title: "Titanic",
        label: "titanic",
        value: "titanic",
        type: "Film",
        category: ["Drama", "Romance"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "PG-13",
        Image: "/images/topEntertainment/titanic.jpg",
        local_ext: "titanic",
        description: "James Cameron's 'Titanic' is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the 'ship of dreams' -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912."
    },{
        title: "Star Wars",
        label: "star wars",
        value: "star wars",
        type: "Film",
        category: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        ageRange: ["Kids", "Young Adult", "Adult"],
        age_rating: "PG",
        Image: "/images/topEntertainment/star-wars.jpg",
        local_ext: "star-wars",
        description: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy."
    },{
        title: "Gone with the Wind",
        label: "gone with the wind",
        value: "gone with the wind",
        type: "Film",
        category: ["Drama", "History", "Romance", "War", "Classic"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "G",
        Image: "/images/topEntertainment/gone-wind.jpg",
        local_ext: "gone-with-the-wind",
        description: " Epic Civil War drama focuses on the life of petulant Southern belle Scarlett O'Hara. Starting with her idyllic life on a sprawling plantation, the film traces her survival through the tragic history of the South during the Civil War and Reconstruction, and her tangled love affairs with Ashley Wilkes and Rhett Butler."
    },{
        title: "Dumb and Dumber",
        label: "dumb and dumber",
        value: "dumb and dumber",
        type: "Film",
        category: ["Comedy"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "PG-13",
        Image: "/images/topEntertainment/dumb-dumber.jpg",
        local_ext: "dumb-and-dumber",
        description: "Imbecilic best friends Lloyd Christmas (Jim Carrey) and Harry Dunne (Jeff Daniels) stumble across a suitcase full of money left behind in Harry's car by Mary Swanson (Lauren Holly), who was on her way to the airport. The pair decide to go to Aspen, Colo., to return the money, unaware that it is connected to a kidnapping. As Harry and Lloyd -- who has fallen in love with Mary -- are pursued across the country by hired killers and police, they find both their friendship and their brains tested."
    },{
        title: "Spirited Away",
        label: "spirited away",
        value: "spirited away",
        type: "Film",
        category: ["Animation", "Adventure", "Family", "Fantasy", "Mystery"],
        ageRange: ["Kids", "Young Adult", "Adult"],
        age_rating: "PG",
        Image: "/images/topEntertainment/spirited-away.jpg",
        local_ext: "spirited-away",
        description: "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents."
    },{
        title: "The Dark Knight",
        label: "the dark knight",
        value: "the dark knight",
        type: "Film",
        category: ["Action", "Crime", "Drama", "Thriller"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "PG-13",
        Image: "/images/topEntertainment/dark-knight.jpg",
        local_ext: "the-dark-knight",
        description: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
    },{
        title: "Soul",
        label: "soul",
        value: "soul",
        type: "Film",
        category: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Music"],
        ageRange: ["Kids"],
        age_rating: "PG",
        Image: "/images/topEntertainment/soul.jpg",
        local_ext: "soul",
        description: "Ever wonder where your passion, your dreams and your interests come from? What is it that makes you... YOU? In 2020, Pixar Animation Studios takes you on a journey from the streets of New York City to the cosmic realms to discover the answers to life's most important questions."
    },{
        title: "Pulp Fiction",
        label: "pulp fiction",
        value: "pulp fiction",
        type: "Film",
        category: ["Crime", "Drama"],
        ageRange: ["Adult"],
        age_rating: "R",
        Image: "/images/topEntertainment/pulp-fiction.jpg",
        local_ext: "pulp-fiction",
        description: "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, 'Pumpkin' (Tim Roth) and 'Honey Bunny'' (Amanda Plummer)."
    },{
        title: "Game of Thrones",
        label: "game of thrones",
        value: "game of thrones",
        type: "Television",
        category: ["Action", "Drama", "Fantasy", "Romance"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "16+",
        Image: "/images/topEntertainment/game-thrones.jpg",
        local_ext: "game-of-thrones",
        description: "Game of Thrones is an HBO series that tells the story of a medieval country's civil war. When the story begins, a decade-long summer is ending, and winter looms as characters battle to claim the Iron Throne, the seat of the king of the Seven Kingdoms, the regime that rules all but the northern tip of Westeros."
    },{
        title: "The Mandalorian",
        label: "the mandalorian",
        value: "the mandalorian",
        type: "Television",
        category: ["Action", "Adventure", "Sci-Fi"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "14+",
        Image: "/images/topEntertainment/mandalorian.jpg",
        local_ext: "the-mandalorian",
        description: "Plot. Five years after the fall of the Empire, a Mandalorian bounty hunter collects a bounty after a scuffle exchange in a bar on Maldo Kreis and returns to a bounty hunting guildhall on Nevarro in his ship, the Razor Crest."
    },{
        title: "The Crown",
        label: "the crown",
        value: "the crown",
        type: "Television",
        category: ["Biography", "Drama", "History"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "15+",
        Image: "/images/topEntertainment/crown.jpg",
        local_ext: "the-crown",
        description: "The Crown portrays the life of Queen Elizabeth II from her wedding in 1947 to Philip, Duke of Edinburgh, until the early 21st century. The first season depicts events up to 1955, with Winston Churchill resigning as prime minister and the Queen's sister Princess Margaret deciding not to marry Peter Townsend."
    },{
        title: "Attack on Titan",
        label: "attack on titan",
        value: "attack on titan",
        type: "Television",
        category: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Horror"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "16+",
        Image: "/images/topEntertainment/attack-titan.jpg",
        local_ext: "attack-on-titan",
        description: "It is set in a world where humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother."
    },{
        title: "Spongebob Squarepants",
        label: "spongebob squarepants",
        value: "spongebob squarepants",
        type: "Television",
        category: ["Animation", "Comedy", "Family", "Fantasy"],
        ageRange: ["Kids"],
        age_rating: "6+",
        Image: "/images/topEntertainment/spongebob.jpg",
        local_ext: "spongebob-squarepants",
        description: "In this lively animated adventure, undersea oddball SpongeBob SquarePants and his starfish friend, Patrick, embark on a quest to clear the name of Mr. Krabs, the owner of the Krusty Krab restaurant, who has been framed for stealing the crown of ocean deity King Neptune. Leaving the familiar confines of Bikini Bottom, SpongeBob and Patrick venture out towards Shell City, where they hope to find Neptune's crown, but numerous obstacles stand (or float) in their way."
    },{
        title: "Mindhunter",
        label: "mindhunter",
        value: "mindhunter",
        type: "Television",
        category: ["Crime", "Drama", "Thriller"],
        ageRange: ["Adult"],
        age_rating: "16+",
        Image: "/images/topEntertainment/mindhunter.jpg",
        local_ext: "mindhunter",
        description: "Mindhunter revolves around FBI agents Holden Ford (Jonathan Groff) and Bill Tench (Holt McCallany), along with psychologist Wendy Carr (Anna Torv), who operate the FBI's Behavioral Science Unit within the Training Division at the FBI Academy in Quantico, Virginia."
    },{
        title: "Planet Earth",
        label: "planet earth",
        value: "planet earth",
        type: "Television",
        category: ["Documentary"],
        ageRange: ["Kids", "Young Adult", "Adult"],
        age_rating: "5+",
        Image: "/images/topEntertainment/planet-earth.jpg",
        local_ext: "planet-earth",
        description: "Planet Earth is a 2006 British television series produced by the BBC Natural History Unit. Five years in the making, it was the most expensive nature documentary series ever commissioned by the BBC and also the first to be filmed in high definition. The series received multiple awards, including four Emmy Awards, a Peabody Award, and an award from the Royal Television Society."
    },{
        title: "Euphoria",
        label: "euphoria",
        value: "euphoria",
        type: "Television",
        category: ["Drama", "LGTBQ"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "14+",
        Image: "/images/topEntertainment/euphoria.jpg",
        local_ext: "euphoria",
        description: "A look at life for a group of high school students as they grapple with issues of drugs, sex and violence"
    },{
        title: "House",
        label: "house",
        value: "house",
        type: "Television",
        category: ["Drama", "Mystery"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "13+",
        Image: "/images/topEntertainment/house.jpg",
        local_ext: "house",
        description: "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits."
    },{
        title: "Rick and Morty",
        label: "rick and morty",
        value: "rick and morty",
        type: "Television",
        category: ["Animation", "Adventure", "Comedy", "Sci-Fi"],
        ageRange: ["Young Adult", "Adult"],
        age_rating: "14+",
        Image: "/images/topEntertainment/rick-morty.jpg",
        local_ext: "rick-and-morty",
        description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson."
    },{
        title: "Lady Gaga",
        label: "lady gaga",
        value: "lady gaga",
        type: "Music",
        category: ["Pop"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/lady-gaga.jpg",
        local_ext: "lady-gaga",
        description: "Stefani Joanne Angelina Germanotta, known professionally as Lady Gaga, is an American singer, songwriter, and actress. She is known for her image reinventions and musical versatility. Gaga began performing as a teenager, singing at open mic nights and acting in school plays."
    },{
        title: "Drake",
        label: "drake",
        value: "drake",
        type: "Music",
        category: ["Rap", "R&B"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/drake.jpg",
        local_ext: "drake",
        description: "Aubrey Drake Graham is a Canadian rapper, singer, songwriter, actor, and entrepreneur. A prominent figure in popular music, Drake is credited for popularizing the Toronto sound."
    },{
        title: "Tim McGraw",
        label: "tim mcgraw",
        value: "tim mcgraw",
        type: "Music",
        category: ["Country"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/tim-mcgraw.jpg",
        local_ext: "tim-mcgraw",
        description: "Samuel Timothy McGraw is an American singer, actor, and record producer. McGraw has released fifteen studio albums. 10 of those albums have reached number 1 on the Top Country Albums charts, with his 1994 breakthrough album Not a Moment Too Soon being the top country album of 1994."
    },{
        title: "Billie Eilish",
        label: "billie eilish",
        value: "billie eilish",
        type: "Music",
        category: ["Pop"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/billie-eilish.jpg",
        local_ext: "billie-eilish",
        description: "Billie Eilish Pirate Baird O'Connell is an American singer-songwriter. She first gained attention in 2015 when she uploaded the song 'Ocean Eyes' to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom."
    },{
        title: "Fleetwood Mac",
        label: "fleetwood mac",
        value: "fleetwood mac",
        type: "Music",
        category: ["Classic Rock"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/fleetwood-mac.jpg",
        local_ext: "fleetwood-mac",
        description: "Fleetwood Mac are a British-American rock band, formed in London in 1967. Fleetwood Mac were founded by guitarist Peter Green, drummer Mick Fleetwood and guitarist Jeremy Spencer, before bassist John McVie joined the lineup for their self-titled debut album. Danny Kirwan joined as a third guitarist in 1968."
    },{
        title: "The Smiths",
        label: "the smiths",
        value: "the smiths",
        type: "Music",
        category: ["Rock", "Britpop"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/the-smiths.jpg",
        local_ext: "the-smiths",
        description: "The Smiths were a British alternative rock band who released four studio albums between 1984 and 1987 and became regarded by many music critics as the most influential British guitar band of the period. Members were singer Morrissey, guitarist Johnny Marr, bassist Andy Rourke and drummer Mike Joyce."
    },{
        title: "H.E.R.",
        label: "h.e.r.",
        value: "h.e.r.",
        type: "Music",
        category: ["R&B", "Soul"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/h-e-r.jpg",
        local_ext: "h-e-r",
        description: "Gabriella Sarmiento Wilson, better known professionally as H.E.R., is an American singer and songwriter. After initial music appearances and singles under her real name, Wilson re-emerged in 2016 with the H.E.R. persona, releasing her debut EP H.E.R. Volume 1. She then released subsequent EPs H.E.R"
    },{
        title: "Zedd",
        label: "zedd",
        value: "zedd",
        type: "Music",
        category: ["Dance", "Electronic"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/zedd.jpg",
        local_ext: "zedd",
        description: "Anton Zaslavski, known professionally as Zedd, is a Russian-German DJ, record producer and songwriter. He primarily produces and performs electro house music, but has diversified his category and musical style, drawing influences from progressive house, dubstep, and classical music."
    },{
        title: "Black Sabbath",
        label: "black sabbath",
        value: "black sabbath",
        type: "Music",
        category: ["Classic Metal", "Metal"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/black-sabbath.jpg",
        local_ext: "black-sabbath",
        description: "Black Sabbath were an English rock band formed in Birmingham in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. ... After previous iterations of the group called the Polka Tulk Blues Band and Earth, the band settled on the name Black Sabbath in 1969."
    },{
        title: "Nirvana",         
        label: "nirvana",
        value: "nirvana",
        type: "Music",
        category: ["Punk Rock", "Rock"],
        ageRange: ["Young Adult", "Adult"],
        Image: "/images/topEntertainment/nirvana.jpg",
        local_ext: "nirvana",
        description: "Nirvana was an American rock band formed by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic in Aberdeen, Washington, in 1987. Nirvana went through a succession of drummers, the longest-lasting and best-known being Dave Grohl, who joined in 1990."
    },{
        title: "Jojo Siwa",
        label: "jojo siwa",
        value: "jojo siwa",
        type: "Music",
        category: ["Pop", "Family"],
        ageRange: ["Kids"],
        Image: "/images/topEntertainment/jojo-siwa.jpg",
        local_ext: "jojo-siwa",
        description: "Joelle Joanie 'JoJo' Siwa is an American dancer, singer, actress, and YouTube personality. She is known for appearing for two seasons on Dance Moms along with her mother, Jessalynn Siwa, and for her singles 'Boomerang' and 'Kid in a Candy Store'."
    },{
        title: "One Direction",
        label: "one direction",
        value: "one direction",
        type: "Music",
        category: ["Rock", "Pop"],
        ageRange: ["Kids", "Young Adult", "Adult"],
        Image: "/images/topEntertainment/one-direction.jpg",
        local_ext: "one-direction",
        description: "The band was formed in 2010 and consisted of Liam Payne, Louis Tomlinson, Niall Horan, Harry Styles and Zayn Malik. Niall Horan is the only Irish member of the band. Louis Tomlinson is the oldest member - born 24 December 1991, while the youngest is Harry Styles who was born February 1st 1994."
    }
];

db.Activity
  .remove({})
  .then(() => db.Activity.insertMany(seeds))
  .then(data => {
    console.log(data)
    console.log(data.length + " records inserted!");
    process.exit(0);
    })
.catch(err => {
    console.error(err);
    process.exit(1);
});

