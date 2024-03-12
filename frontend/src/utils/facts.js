const ecoFacts = [
    'Recycling one aluminum can saves enough energy to run a TV for three hours.',
    'Over 1 million seabirds and 100,000 marine animals die from plastic pollution annually.',
    'The Great Barrier Reef is the largest living structure on Earth but is under threat due to climate change.',
    'Planting trees is a simple way to combat climate change as they absorb CO2.',
    "The fashion industry is responsible for 10% of the world's carbon emissions.",
    'Bees are essential pollinators for many crops, but their populations are declining.',
    'A vegetarian diet has a smaller carbon footprint compared to a meat-based diet.',
    'The amount of electronic waste (e-waste) generated globally is increasing rapidly.',
    'Fast fashion contributes to water pollution and unethical labor practices.',
    "The Amazon rainforest produces 20% of the world's oxygen.",
    'Solar energy is a clean and renewable source of power.',
    'The ozone layer is gradually recovering due to international efforts to reduce ozone-depleting substances.',
    'Electric vehicles produce fewer emissions than traditional gasoline-powered cars.',
    'Overfishing is depleting global fish populations and harming marine ecosystems.',
    "The world's largest landfill is in the Pacific Ocean, known as the Great Pacific Garbage Patch.",
    'Composting kitchen waste reduces methane emissions from landfills.',
    'The production of one ton of paper contributes to 17 trees being cut down.',
    'The average shower uses 2.5 gallons of water per minute.',
    'Bamboo is a sustainable alternative to traditional wood due to its rapid growth.',
    'The Paris Agreement aims to limit global temperature increases to well below 2 degrees Celsius.',
    'Microplastics have been found in remote areas, including the Arctic and Antarctica.',
    'Food waste contributes to methane emissions in landfills.',
    'Wetlands play a crucial role in filtering water and providing habitat for diverse species.',
    'The concept of a circular economy promotes recycling and reusing materials to reduce waste.',
    'The production of a single hamburger requires a large amount of water and contributes to deforestation.'
  ];
  
  export function getEcoFact(){
      const randomIndex = Math.floor(Math.random() * ecoFacts.length);
    return ecoFacts[randomIndex];
  }