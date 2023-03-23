function calculateValidVotesPercent(from, votes, totalVotes) {
  const percent = ((votes / totalVotes) * 100).toFixed(2)
  return `Percentual de votos ${from}: ${percent}%`;
}

function displayElection(
  cadidateAVotes,
  cadidateBVotes,
  cadidateCVotes,
  whiteVotes,
  nullVotes
) {
  const validVotes = cadidateAVotes + cadidateBVotes + cadidateCVotes;
  const totalVotes = validVotes + whiteVotes + nullVotes;
  const validVotesPercent = validVotes / totalVotes;

  console.log(`Total de Eleitores: ${totalVotes}
Percentual de Votos Válidos: ${validVotesPercent}
${calculateValidVotesPercent('Candidato A', cadidateAVotes, totalVotes)}
${calculateValidVotesPercent('Candidato B', cadidateBVotes, totalVotes)}
${calculateValidVotesPercent('Candidato C', cadidateCVotes, totalVotes)}
${calculateValidVotesPercent('Brancos', whiteVotes, totalVotes)}
${calculateValidVotesPercent('Nulos', nullVotes, totalVotes)}
`);
}

const cadidateAVotes = 20;
const cadidateBVotes = 8;
const cadidateCVotes = 4;

const whiteVotes = 4;
const nullVotes = 2;

displayElection(
  cadidateAVotes,
  cadidateBVotes,
  cadidateCVotes,
  whiteVotes,
  nullVotes
);
